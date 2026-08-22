---
external : false
title : "Account search"
tag : [Python]
date : 2026-08-22
---

## 1. Problem

한 서비스에는 여러 개의 계정이 존재하며, 각 계정에는 고유한 점수가 기록되어 있다.

`Score`는 계정이 순서대로 저장되어 있는 배열이며, 각 계정의 검색 우선순위를 나타낸다.

관리자는 계정 검색 시스템을 운영하면서 다음 두 가지 연산을 수행한다.

### 점수 변경 연산

연속된 계정 구간 `[l, r]`의 모든 계정 점수에 `X`를 더한다.

```text
Score + X
```

`X`는 양수일 수도 있고 음수일 수도 있다.

### 계정 찾기 연산

구간 `[l, r]`에서 현재 점수가 `X` 이상인 계정의 개수를 찾는다.

즉, 다음 조건을 만족하는 계정의 개수를 출력한다.

```text
Score >= X
```

계정의 수와 연산의 수가 매우 크기 때문에 모든 계정을 직접 확인하여 점수를 변경하거나 조건을 만족하는 계정을 찾으면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**를 활용하여 구간별 정보를 관리하고, 구간의 값에 동일한 변화가 적용되는 경우 **Lazy Propagation**을 사용하여 효율적으로 연산을 처리해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Score`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

점수 변경 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`에 포함된 모든 계정의 점수에 `X`를 더한다.

계정 찾기 연산은 다음과 같은 형식이다.

```text
2 l r X
```

구간 `[l, r]`에서 점수가 `X` 이상인 계정의 개수를 출력한다.

### 출력

각 계정 찾기 연산에 대해 조건을 만족하는 계정의 개수를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `1 ≤ Q ≤ 200,000`
- `-10^9 ≤ Score의 각 원소 ≤ 10^9`
- `-10^9 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
6 6
30 50 20 70 40 60
2 1 6 50
1 2 5 10
2 1 6 60
1 1 4 -20
2 1 5 40
2 3 6 50
```

### Example 2

```text
5 5
10 30 20 50 40
2 1 5 30
1 1 3 15
2 1 5 40
1 2 5 -10
2 1 5 30
```

## 3. Output Example

### 3.1. Example 1

```text
3
3
3
3
```

### 3.2. Example 2

```text
3
3
3
```

## 4. Explanation

### 4.1. Example 1

처음 계정의 점수는 다음과 같다.

```text
30 50 20 70 40 60
```

첫 번째 연산은 다음과 같다.

```text
2 1 6 50
```

전체 계정 중 점수가 `50` 이상인 계정은 다음과 같다.

```text
50 70 60
```

따라서 결과는

```text
3
```

이다.

다음 연산은 다음과 같다.

```text
1 2 5 10
```

구간 `[2, 5]`에 있는 모든 계정의 점수에 `10`을 더한다.

변경 후 점수는

```text
30 60 30 80 50 60
```

이다.

다음 계정 찾기 연산은

```text
2 1 6 60
```

이다.

점수가 `60` 이상인 계정은

```text
60 80 60
```

이므로 결과는

```text
3
```

이다.

다음으로

```text
1 1 4 -20
```

을 수행하면 점수는 다음과 같이 변경된다.

```text
10 40 10 60 50 60
```

이후

```text
2 1 5 40
```

을 수행하면 조건을 만족하는 점수는

```text
40 60 50
```

이므로 결과는

```text
3
```

이다.

이 문제에서는 구간의 모든 값을 직접 변경하는 방식으로는 많은 연산을 처리하기 어렵다.

Segment Tree의 각 노드에 구간의 계정 점수에 대한 정보를 저장하고, 구간 전체에 동일한 값이 더해지는 경우 Lazy Propagation을 사용하면 실제 모든 계정을 갱신하지 않고 변경 사항을 저장할 수 있다.

또한 계정 찾기 연산에서는 구간의 최솟값과 최댓값 등의 정보를 활용하여 조건을 만족하는 계정의 개수를 빠르게 계산할 수 있다.

### 4.2. Example 2

처음 점수는 다음과 같다.

```text
10 30 20 50 40
```

다음 연산을 수행한다.

```text
2 1 5 30
```

점수가 `30` 이상인 계정은

```text
30 50 40
```

이므로 결과는

```text
3
```

이다.

다음으로

```text
1 1 3 15
```

을 수행하면 점수는

```text
25 45 35 50 40
```

이 된다.

이후

```text
2 1 5 40
```

을 수행하면

```text
45 50 40
```

이 조건을 만족하므로 결과는

```text
3
```

이다.

마지막으로

```text
1 2 5 -10
```

을 수행하면

```text
25 35 25 40 30
```

이 된다.

점수가 `30` 이상인 계정은

```text
35 40 30
```

이므로 결과는

```text
3
```

이다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, values):
        size = len(values)

        self.size = size
        self.minimum = [0] * (size * 4)
        self.maximum = [0] * (size * 4)
        self.lazy = [0] * (size * 4)

        self._build(1, 0, size - 1, values)

    def _build(self, node, left, right, values):
        if left == right:
            self.minimum[node] = values[left]
            self.maximum[node] = values[left]
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

        self.minimum[node] = min(
            self.minimum[node * 2],
            self.minimum[node * 2 + 1]
        )

        self.maximum[node] = max(
            self.maximum[node * 2],
            self.maximum[node * 2 + 1]
        )

    def _apply(self, node, value):
        self.minimum[node] += value
        self.maximum[node] += value
        self.lazy[node] += value

    def _push(self, node):
        if self.lazy[node] == 0:
            return

        value = self.lazy[node]

        self._apply(node * 2, value)
        self._apply(node * 2 + 1, value)

        self.lazy[node] = 0

    def update(self, query_left, query_right, value):
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
            self._apply(node, value)
            return

        self._push(node)

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

        self.minimum[node] = min(
            self.minimum[node * 2],
            self.minimum[node * 2 + 1]
        )

        self.maximum[node] = max(
            self.maximum[node * 2],
            self.maximum[node * 2 + 1]
        )

    def count_at_least(
        self,
        query_left,
        query_right,
        value
    ):
        return self._count_at_least(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            value
        )

    def _count_at_least(
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
            or self.maximum[node] < value
        ):
            return 0

        if (
            query_left <= left
            and right <= query_right
            and self.minimum[node] >= value
        ):
            return right - left + 1

        if left == right:
            return 1

        self._push(node)

        middle = (left + right) // 2

        left_count = self._count_at_least(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            value
        )

        right_count = self._count_at_least(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            value
        )

        return left_count + right_count


N, Q = map(int, input().split())
Score = list(map(int, input().split()))

tree = SegmentTree(Score)

answer = []

for _ in range(Q):
    operation = list(map(int, input().split()))

    if operation[0] == 1:
        _, left, right, value = operation

        tree.update(
            left - 1,
            right - 1,
            value
        )

    else:
        _, left, right, value = operation

        result = tree.count_at_least(
            left - 1,
            right - 1,
            value
        )

        answer.append(str(result))

print("\n".join(answer))
```
