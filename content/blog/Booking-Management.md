---
external : false
title : "Booking Management"
tag : [Python]
date : 2026-08-31
---

## 1. Problem

한 공연장의 좌석은 일렬로 `N`개가 배치되어 있다.

각 좌석에는 현재 예약 상태를 나타내는 정수 `Booking`이 저장되어 있다.

```text
0 : 예약 가능
1 : 예약 완료
```

예약 시스템에서는 많은 사용자가 동시에 좌석을 예약하거나 예약 상태를 확인한다.

관리자는 다음 세 가지 연산을 처리해야 한다.

### 좌석 예약

구간 `[l, r]`에 포함된 모든 좌석을 예약한다.

예약된 좌석은 `1`이 된다.

이미 예약된 좌석은 다시 예약하더라도 상태가 변하지 않는다.

```text
Booking = 1
```

### 예약 상태 조회

구간 `[l, r]`에 예약된 좌석의 개수를 출력한다.

### 연속 좌석 조회

구간 `[l, r]`에서 연속해서 예약 가능한 좌석의 최대 길이를 출력한다.

예를 들어 다음과 같은 예약 상태가 있다고 하자.

```text
0 0 1 0 0 0 1 0
```

가장 긴 연속 예약 가능 구간은

```text
0 0 0
```

이므로 결과는 `3`이다.

좌석의 수와 예약 요청의 수가 매우 많기 때문에 매번 구간을 직접 확인하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하여 예약 상태를 효율적으로 관리해야 한다.

Segment Tree의 각 노드에는 다음 정보를 저장한다.

```text
예약된 좌석의 개수
예약 가능한 좌석의 개수
구간의 가장 왼쪽 연속 예약 가능 좌석 수
구간의 가장 오른쪽 연속 예약 가능 좌석 수
구간에서 가장 긴 연속 예약 가능 좌석 수
```

구간 전체를 예약하는 경우 Lazy Propagation을 사용하여 해당 구간을 한 번에 예약 상태로 변경할 수 있다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Booking`이 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

좌석 예약 연산은 다음과 같은 형식이다.

```text
1 l r
```

구간 `[l, r]`의 모든 좌석을 예약한다.

예약 상태 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에 예약된 좌석의 개수를 출력한다.

연속 좌석 조회 연산은 다음과 같은 형식이다.

```text
3 l r
```

구간 `[l, r]`에서 연속해서 예약 가능한 좌석의 최대 길이를 출력한다.

### 출력

각 조회 연산의 결과를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `Booking`의 각 원소는 `0` 또는 `1`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
8 7
0 0 1 0 0 0 1 0
3 1 8
2 1 8
1 2 5
3 1 8
2 1 8
1 6 8
3 1 8
```

### Example 2

```text
10 7
0 1 0 0 1 0 0 0 1 0
3 1 10
1 3 7
2 1 10
3 1 10
1 1 4
2 1 6
3 5 10
```

## 3. Output Example

### 3.1. Example 1

```text
3
2
1
5
0
```

### 3.2. Example 2

```text
3
5
2
2
```

## 4. Explanation

### 4.1. Example 1

처음 예약 상태는 다음과 같다.

```text
0 0 1 0 0 0 1 0
```

첫 번째 연산은 전체 구간에서 가장 긴 연속 예약 가능 좌석을 찾는다.

```text
3 1 8
```

연속해서 예약 가능한 좌석은

```text
0 0
```

과

```text
0 0 0
```

등이 있으며, 가장 긴 구간의 길이는

```text
3
```

이다.

다음으로 전체 구간의 예약된 좌석 개수를 조회한다.

```text
2 1 8
```

예약된 좌석은 두 개이므로 결과는

```text
2
```

이다.

이후 다음 연산을 수행한다.

```text
1 2 5
```

구간 `[2, 5]`의 모든 좌석을 예약한다.

변경 전:

```text
0 0 1 0 0 0 1 0
```

변경 후:

```text
0 1 1 1 1 0 1 0
```

이제 가장 긴 연속 예약 가능 구간은

```text
0
```

하나뿐이므로 길이는

```text
1
```

이다.

다음으로 구간 `[6, 8]`을 예약하면

```text
1 2 6 8
```

전체 상태는

```text
0 1 1 1 1 1 1 1
```

이 된다.

더 이상 예약 가능한 좌석이 없으므로 가장 긴 연속 예약 가능 구간의 길이는

```text
0
```

이다.

이 문제의 핵심은 구간 전체를 한 번에 예약하면서 동시에 연속된 예약 가능 좌석의 길이를 관리하는 것이다.

각 Segment Tree 노드에는 다음과 같은 정보를 저장한다.

```text
전체 예약 좌석 수
전체 예약 가능 좌석 수
왼쪽 끝에서부터 이어지는 예약 가능 좌석 수
오른쪽 끝에서부터 이어지는 예약 가능 좌석 수
구간 내부의 최대 연속 예약 가능 좌석 수
```

두 자식 노드를 합칠 때 왼쪽 자식의 오른쪽 연속 구간과 오른쪽 자식의 왼쪽 연속 구간을 연결할 수 있다.

예를 들어 두 구간이 다음과 같다고 하자.

```text
왼쪽 구간 : 1 0 0
오른쪽 구간 : 0 0 1
```

두 구간을 합치면

```text
1 0 0 0 0 1
```

이 되고, 가운데에서 연속된 예약 가능 좌석은

```text
0 0 0 0
```

으로 길이가 `4`가 된다.

구간 전체를 예약하는 경우 해당 노드의 예약 가능 좌석 수와 연속 예약 가능 좌석 수를 모두 `0`으로 만들고, Lazy 값을 기록한다.

이를 이용하면 구간 예약 연산을 `O(log N)`에 처리할 수 있다.

### 4.2. Example 2

처음 예약 상태는 다음과 같다.

```text
0 1 0 0 1 0 0 0 1 0
```

전체 구간에서 가장 긴 연속 예약 가능 좌석은

```text
0 0 0
```

이므로 결과는

```text
3
```

이다.

다음으로 구간 `[3, 7]`을 예약한다.

```text
1 3 7
```

변경 결과는

```text
0 1 1 1 1 1 1 0 1 0
```

이다.

전체 예약 좌석의 개수는

```text
7
```

이다.

이제 예약 가능한 좌석은

```text
0
```

과

```text
0
```

뿐이므로 가장 긴 연속 예약 가능 좌석의 길이는

```text
1
```

이다.

이후 구간 `[1, 4]`까지 예약하면 해당 구간의 모든 좌석이 예약된다.

Segment Tree는 각 구간의 상태를 유지하고 있기 때문에 모든 좌석을 직접 확인하지 않고도 예약된 좌석의 개수와 연속 예약 가능 좌석의 최대 길이를 빠르게 계산할 수 있다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, values):
        size = len(values)

        self.size = size

        self.total = [0] * (size * 4)
        self.left_free = [0] * (size * 4)
        self.right_free = [0] * (size * 4)
        self.best_free = [0] * (size * 4)

        self.lazy = [False] * (size * 4)

        self._build(
            1,
            0,
            size - 1,
            values
        )

    def _build(self, node, left, right, values):
        if left == right:
            self.total[node] = values[left]

            if values[left] == 0:
                self.left_free[node] = 1
                self.right_free[node] = 1
                self.best_free[node] = 1

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

        self._merge(
            node,
            middle - left + 1,
            right - middle
        )

    def _merge(
        self,
        node,
        left_length,
        right_length
    ):
        left_node = node * 2
        right_node = node * 2 + 1

        self.total[node] = (
            self.total[left_node]
            + self.total[right_node]
        )

        self.left_free[node] = self.left_free[left_node]

        if self.left_free[left_node] == left_length:
            self.left_free[node] += self.left_free[right_node]

        self.right_free[node] = self.right_free[right_node]

        if self.right_free[right_node] == right_length:
            self.right_free[node] += self.right_free[left_node]

        self.best_free[node] = max(
            self.best_free[left_node],
            self.best_free[right_node],
            self.right_free[left_node]
            + self.left_free[right_node]
        )

    def _reserve(self, node):
        self.total[node] = (
            self._segment_length(node)
        )

        self.left_free[node] = 0
        self.right_free[node] = 0
        self.best_free[node] = 0
        self.lazy[node] = True

    def _segment_length(self, node):
        return self._length[node]

    def _push(self, node):
        if not self.lazy[node]:
            return

        self._reserve(node * 2)
        self._reserve(node * 2 + 1)

        self.lazy[node] = False

    def update(
        self,
        query_left,
        query_right
    ):
        self._update(
            1,
            0,
            self.size - 1,
            query_left,
            query_right
        )

    def _update(
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
            return

        if (
            query_left <= left
            and right <= query_right
        ):
            length = right - left + 1

            self.total[node] = length
            self.left_free[node] = 0
            self.right_free[node] = 0
            self.best_free[node] = 0
            self.lazy[node] = True

            return

        if left == right:
            return

        self._push(node)

        middle = (left + right) // 2

        self._update(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        self._update(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        self._merge(
            node,
            middle - left + 1,
            right - middle
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
            return (
                0,
                0,
                0,
                0,
                0
            )

        if (
            query_left <= left
            and right <= query_right
        ):
            return (
                right - left + 1,
                self.total[node],
                self.left_free[node],
                self.right_free[node],
                self.best_free[node]
            )

        self._push(node)

        middle = (left + right) // 2

        left_result = self._query(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_result = self._query(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        left_length, left_total, left_prefix, left_suffix, left_best = left_result
        right_length, right_total, right_prefix, right_suffix, right_best = right_result

        if left_length == 0:
            return right_result

        if right_length == 0:
            return left_result

        total = left_total + right_total

        prefix = left_prefix

        if left_prefix == left_length:
            prefix += right_prefix

        suffix = right_suffix

        if right_suffix == right_length:
            suffix += left_suffix

        best = max(
            left_best,
            right_best,
            left_suffix + right_prefix
        )

        return (
            left_length + right_length,
            total,
            prefix,
            suffix,
            best
        )


N, Q = map(int, input().split())

Booking = list(
    map(int, input().split())
)

tree = SegmentTree(Booking)

answer = []

for _ in range(Q):
    operation = list(
        map(int, input().split())
    )

    if operation[0] == 1:
        _, left, right = operation

        tree.update(
            left - 1,
            right - 1
        )

    else:
        _, left, right = operation

        result = tree.query(
            left - 1,
            right - 1
        )

        if operation[0] == 2:
            answer.append(
                str(result[1])
            )
        else:
            answer.append(
                str(result[4])
            )

print("\n".join(answer))
```
