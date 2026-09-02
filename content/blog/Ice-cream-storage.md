---
external : false
title : "Ice Cream Storage"
tag : [Python]
date : 2026-09-02
---

## 1. Problem

아이스크림 가게의 냉동고에는 여러 종류의 아이스크림이 일렬로 보관되어 있다.

냉동고에는 총 `N`개의 보관 칸이 있으며, `IceCream`은 각 보관 칸에 들어 있는 아이스크림의 개수를 의미한다.

직원은 주문과 재고 정리를 위해 냉동고의 특정 구간을 대상으로 여러 가지 작업을 수행한다.

다음과 같은 세 종류의 연산이 주어진다.

### 아이스크림 입고

구간 `[l, r]`에 있는 모든 보관 칸에 아이스크림 `X`개를 추가한다.

```text
IceCream + X
```

### 아이스크림 출고

구간 `[l, r]`에 있는 모든 보관 칸에서 아이스크림 `X`개를 출고한다.

단, 아이스크림의 개수는 `0`보다 작아질 수 없다.

```text
max(IceCream - X, 0)
```

### 재고 조회

구간 `[l, r]`에 있는 아이스크림의 총 개수를 출력한다.

냉동고의 보관 칸과 연산의 수가 매우 많기 때문에 각 연산마다 구간을 직접 확인하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하여 구간의 아이스크림 재고를 효율적으로 관리해야 한다.

Segment Tree의 각 노드는 해당 구간의 다음 정보를 관리한다.

```text
구간의 아이스크림 총 개수
구간에 아직 전달하지 않은 증가량
구간에 아직 전달하지 않은 감소량
```

구간 전체에 같은 양의 아이스크림을 추가하거나 출고하는 연산을 Lazy Propagation으로 처리하여 불필요하게 모든 보관 칸을 확인하지 않도록 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

`N`은 냉동고의 보관 칸 수이고, `Q`는 수행할 연산의 수이다.

둘째 줄에 `N`개의 정수 `IceCream`이 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

아이스크림 입고 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`의 모든 보관 칸에 아이스크림 `X`개를 추가한다.

아이스크림 출고 연산은 다음과 같은 형식이다.

```text
2 l r X
```

구간 `[l, r]`의 모든 보관 칸에서 아이스크림 `X`개를 출고한다.

각 보관 칸의 재고가 `X`보다 적다면 해당 보관 칸의 재고는 `0`이 된다.

재고 조회 연산은 다음과 같은 형식이다.

```text
3 l r
```

구간 `[l, r]`에 존재하는 아이스크림의 총 개수를 출력한다.

### 출력

각 재고 조회 연산의 결과를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `0 ≤ IceCream의 각 원소 ≤ 10^9`
- `1 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
7 7
10 20 30 40 50 60 70
3 1 7
1 2 5 10
3 1 7
2 3 6 25
3 1 7
1 1 7 20
3 2 6
```

### Example 2

```text
6 6
5 15 25 35 45 55
3 1 6
2 1 4 20
3 1 6
1 2 5 30
3 2 5
3 1 6
```

## 3. Output Example

### 3.1. Example 1

```text
280
320
235
315
```

### 3.2. Example 2

```text
180
120
220
260
```

## 4. Explanation

### 4.1. Example 1

처음 냉동고의 아이스크림 개수는 다음과 같다.

```text
10 20 30 40 50 60 70
```

전체 아이스크림의 개수를 조회하면

```text
10 + 20 + 30 + 40 + 50 + 60 + 70 = 280
```

이므로 첫 번째 결과는

```text
280
```

이다.

다음으로 구간 `[2, 5]`에 아이스크림 `10`개를 추가한다.

```text
1 2 5 10
```

변경된 상태는 다음과 같다.

```text
10 30 40 50 60 60 70
```

전체 아이스크림의 개수는

```text
320
```

이다.

다음으로 구간 `[3, 6]`에서 아이스크림 `25`개를 출고한다.

```text
2 3 6 25
```

변경 결과는

```text
10 30 15 25 35 35 70
```

이다.

따라서 전체 아이스크림의 개수는

```text
220
```

이 된다.

구간 전체에 같은 값을 더하거나 빼는 작업을 모든 보관 칸에 직접 수행하면 하나의 연산마다 `O(N)`의 시간이 필요하다.

이를 해결하기 위해 Segment Tree의 각 노드에 해당 구간의 아이스크림 총 개수를 저장한다.

구간 전체에 `X`개의 아이스크림을 추가할 경우 해당 구간의 총 개수는 구간의 길이에 `X`를 곱한 만큼 증가한다.

```text
총 개수 += 구간 길이 × X
```

마찬가지로 출고 연산도 구간의 재고를 효율적으로 변경할 수 있다.

구간 전체에 대한 변경 내용을 자식 노드에 즉시 전달하지 않고 Lazy 값으로 저장한 뒤, 자식 노드가 필요할 때 변경 내용을 전달한다.

이를 **Lazy Propagation**이라고 한다.

### 4.2. Example 2

처음 아이스크림 개수는 다음과 같다.

```text
5 15 25 35 45 55
```

전체 재고는

```text
180
```

이다.

다음으로 구간 `[1, 4]`에서 아이스크림 `20`개를 출고한다.

```text
2 1 4 20
```

변경 결과는

```text
0 0 5 15 45 55
```

이다.

전체 재고는

```text
120
```

이다.

이후 구간 `[2, 5]`에 아이스크림 `30`개를 추가한다.

```text
1 2 5 30
```

변경 결과는

```text
0 30 35 45 75 55
```

가 된다.

구간 `[2, 5]`의 총 재고는

```text
30 + 35 + 45 + 75 = 185
```

이다.

이처럼 구간 단위의 입고와 출고가 반복되더라도 Segment Tree와 Lazy Propagation을 사용하면 각각의 연산을 빠르게 처리할 수 있다.

각 연산의 시간 복잡도는 `O(log N)`이며, 전체 시간 복잡도는 `O((N + Q) log N)`이다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, values):
        size = len(values)

        self.size = size
        self.total = [0] * (size * 4)
        self.lazy = [0] * (size * 4)

        self._build(
            1,
            0,
            size - 1,
            values
        )

    def _build(
        self,
        node,
        left,
        right,
        values
    ):
        if left == right:
            self.total[node] = values[left]
            return

        middle = (left + right) // 2

        self._build(
            node * 2,
            left,
            middle,
            values
        )

        self._build(
            node * 2 + 1,
            middle + 1,
            right,
            values
        )

        self.total[node] = (
            self.total[node * 2]
            + self.total[node * 2 + 1]
        )

    def _apply(
        self,
        node,
        left,
        right,
        value
    ):
        length = right - left + 1

        self.total[node] += (
            length * value
        )

        self.lazy[node] += value

    def _push(
        self,
        node,
        left,
        right
    ):
        if self.lazy[node] == 0:
            return

        if left != right:
            middle = (left + right) // 2
            value = self.lazy[node]

            self._apply(
                node * 2,
                left,
                middle,
                value
            )

            self._apply(
                node * 2 + 1,
                middle + 1,
                right,
                value
            )

        self.lazy[node] = 0

    def update(
        self,
        query_left,
        query_right,
        value
    ):
        self._update(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            value
        )

    def _update(
        self,
        node,
        left,
        right,
        query_left,
        query_right,
        value
    ):
        if (
            right < query_left
            or query_right < left
        ):
            return

        if (
            query_left <= left
            and right <= query_right
        ):
            self._apply(
                node,
                left,
                right,
                value
            )
            return

        self._push(
            node,
            left,
            right
        )

        middle = (left + right) // 2

        self._update(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            value
        )

        self._update(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            value
        )

        self.total[node] = (
            self.total[node * 2]
            + self.total[node * 2 + 1]
        )

    def query(
        self,
        query_left,
        query_right
    ):
        return self._query(
            1,
            0,
            self.size - 1,
            query_left,
            query_right
        )

    def _query(
        self,
        node,
        left,
        right,
        query_left,
        query_right
    ):
        if (
            right < query_left
            or query_right < left
        ):
            return 0

        if (
            query_left <= left
            and right <= query_right
        ):
            return self.total[node]

        self._push(
            node,
            left,
            right
        )

        middle = (left + right) // 2

        left_total = self._query(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_total = self._query(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return left_total + right_total


Size, QueryCount = map(
    int,
    input().split()
)

IceCream = list(
    map(int, input().split())
)

tree = SegmentTree(IceCream)

answer = []

for _ in range(QueryCount):
    operation = list(
        map(int, input().split())
    )

    if operation[0] == 1:
        _, left, right, value = operation

        tree.update(
            left - 1,
            right - 1,
            value
        )

    elif operation[0] == 2:
        _, left, right, value = operation

        tree.update(
            left - 1,
            right - 1,
            -value
        )

    else:
        _, left, right = operation

        result = tree.query(
            left - 1,
            right - 1
        )

        answer.append(
            str(result)
        )

print("\n".join(answer))
```
