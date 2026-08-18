---
external : false
title : "Branch pruning"
tag : [Python]
date : 2026-08-18
---

## 1. Problem

한 정원에는 일렬로 배치된 `N`개의 나무가 있으며, 각 나무에는 현재 높이가 기록되어 있다.

`Height`는 각 나무의 높이를 순서대로 저장한 배열이다.

관리자는 정원의 나무를 관리하기 위해 두 가지 연산을 수행한다.

### 가지치기 연산

구간 `[l, r]`의 모든 나무에 대해 높이가 `X`보다 크다면 해당 나무의 높이를 `X`로 줄인다.

즉, 가지치기 이후 각 나무의 높이는 다음과 같이 변경된다.

```text
min(현재 높이, X)
```

이미 높이가 `X` 이하인 나무는 변경하지 않는다.

### 높이 합 조회 연산

구간 `[l, r]`에 존재하는 모든 나무의 현재 높이 합을 출력한다.

연산이 많기 때문에 모든 나무를 직접 확인하여 가지치기를 수행하면 시간 초과가 발생할 수 있다.

따라서 구간의 최댓값과 두 번째로 큰 값 등의 정보를 관리하는 **Segment Tree**를 사용하고, 가지치기가 필요하지 않은 구간은 더 이상 탐색하지 않는 **가지치기(Pruning)** 기법을 적용해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Height`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

가지치기 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`의 모든 나무에 대해 높이가 `X`보다 큰 나무를 `X`로 줄인다.

높이 합 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에 존재하는 모든 나무의 현재 높이 합을 출력한다.

### 출력

각 높이 합 조회 연산에 대해 해당 구간의 현재 나무 높이 합을 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `1 ≤ Q ≤ 200,000`
- `1 ≤ Height의 각 원소 ≤ 10^9`
- `1 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
6 6
10 5 8 12 6 15
2 1 6
1 2 5 7
2 1 6
1 1 6 6
2 1 6
2 3 5
```

### Example 2

```text
5 5
20 10 30 15 25
1 1 5 18
2 1 5
1 2 4 12
2 1 5
2 2 4
```

## 3. Output Example

### 3.1. Example 1

```text
56
47
36
19
```

### 3.2. Example 2

```text
100
79
36
```

## 4. Explanation

### 4.1. Example 1

처음 나무의 높이는 다음과 같다.

```text
10 5 8 12 6 15
```

첫 번째 조회 연산에서 전체 구간의 높이 합은

```text
10 + 5 + 8 + 12 + 6 + 15 = 56
```

이다.

다음 가지치기 연산은 다음과 같다.

```text
1 2 5 7
```

구간 `[2, 5]`의 나무 높이를 `7` 이하로 줄인다.

가지치기 이후 높이는

```text
10 5 7 7 6 15
```

가 된다.

따라서 전체 높이 합은

```text
10 + 5 + 7 + 7 + 6 + 15 = 50
```

이지만 이후 연산에서 다시 가지치기가 수행된다.

```text
1 1 6 6
```

모든 나무의 높이를 `6` 이하로 줄이면

```text
6 5 6 6 6 6
```

이 된다.

따라서 전체 높이 합은

```text
36
```

이다.

이 문제에서는 각 가지치기 연산마다 모든 나무를 직접 확인하지 않는다.

Segment Tree의 각 구간에 대해 다음 정보를 관리한다.

```text
최댓값
두 번째로 큰 값
최댓값의 개수
구간의 높이 합
```

현재 구간의 최댓값이 `X` 이하라면 해당 구간은 이미 가지치기가 필요 없으므로 탐색을 중단한다.

또한 두 번째로 큰 값이 `X`보다 작다면 해당 구간에서 `X`보다 큰 값은 최댓값 하나의 종류뿐이므로 해당 구간 전체를 내려가지 않고 최댓값만 `X`로 변경할 수 있다.

이러한 방식으로 불필요한 구간 탐색을 제거하는 것이 이 문제에서의 **가지치기**이다.

### 4.2. Example 2

처음 높이는 다음과 같다.

```text
20 10 30 15 25
```

다음 연산을 수행한다.

```text
1 1 5 18
```

모든 높이를 `18` 이하로 제한하면

```text
18 10 18 15 18
```

이 된다.

따라서 전체 합은

```text
18 + 10 + 18 + 15 + 18 = 79
```

이다.

다음 연산은 다음과 같다.

```text
1 2 4 12
```

구간 `[2, 4]`에 대해 높이를 `12` 이하로 제한하면

```text
18 10 12 12 18
```

이 된다.

따라서 전체 합은

```text
18 + 10 + 12 + 12 + 18 = 70
```

이다.

Segment Tree는 각 구간의 최댓값과 두 번째로 큰 값을 이용하여 가지치기가 가능한 구간을 빠르게 판단한다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTreeBeats:
    def __init__(self, values):
        size = len(values)
        self.size = size
        self.sum = [0] * (size * 4)
        self.maximum = [0] * (size * 4)
        self.second = [-1] * (size * 4)
        self.count = [0] * (size * 4)

        self._build(1, 0, size - 1, values)

    def _build(self, node, left, right, values):
        if left == right:
            value = values[left]
            self.sum[node] = value
            self.maximum[node] = value
            self.second[node] = -1
            self.count[node] = 1
            return

        middle = (left + right) // 2
        left_child = node * 2
        right_child = left_child + 1

        self._build(left_child, left, middle, values)
        self._build(right_child, middle + 1, right, values)
        self._pull(node)

    def _pull(self, node):
        left_child = node * 2
        right_child = left_child + 1

        self.sum[node] = self.sum[left_child] + self.sum[right_child]

        left_maximum = self.maximum[left_child]
        right_maximum = self.maximum[right_child]

        if left_maximum > right_maximum:
            self.maximum[node] = left_maximum
            self.count[node] = self.count[left_child]
            self.second[node] = max(
                self.second[left_child],
                right_maximum
            )
        elif left_maximum < right_maximum:
            self.maximum[node] = right_maximum
            self.count[node] = self.count[right_child]
            self.second[node] = max(
                left_maximum,
                self.second[right_child]
            )
        else:
            self.maximum[node] = left_maximum
            self.count[node] = (
                self.count[left_child] + self.count[right_child]
            )
            self.second[node] = max(
                self.second[left_child],
                self.second[right_child]
            )

    def _apply_chmin(self, node, value):
        if self.maximum[node] <= value:
            return

        self.sum[node] -= (
            self.maximum[node] - value
        ) * self.count[node]

        self.maximum[node] = value

    def _push(self, node):
        left_child = node * 2
        right_child = left_child + 1

        if self.maximum[left_child] > self.maximum[node]:
            self._apply_chmin(
                left_child,
                self.maximum[node]
            )

        if self.maximum[right_child] > self.maximum[node]:
            self._apply_chmin(
                right_child,
                self.maximum[node]
            )

    def chmin(self, query_left, query_right, value):
        self._chmin(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            value
        )

    def _chmin(
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
            or self.maximum[node] <= value
        ):
            return

        if (
            query_left <= left
            and right <= query_right
            and self.second[node] < value
        ):
            self._apply_chmin(node, value)
            return

        self._push(node)

        middle = (left + right) // 2

        self._chmin(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            value
        )

        self._chmin(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            value
        )

        self._pull(node)

    def query_sum(self, query_left, query_right):
        return self._query_sum(
            1,
            0,
            self.size - 1,
            query_left,
            query_right
        )

    def _query_sum(
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
            return self.sum[node]

        self._push(node)

        middle = (left + right) // 2

        left_sum = self._query_sum(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_sum = self._query_sum(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return left_sum + right_sum


N, Q = map(int, input().split())
Height = list(map(int, input().split()))

tree = SegmentTreeBeats(Height)

answer = []

for _ in range(Q):
    operation = list(map(int, input().split()))

    if operation[0] == 1:
        _, left, right, value = operation
        tree.chmin(left - 1, right - 1, value)

    else:
        _, left, right = operation
        result = tree.query_sum(left - 1, right - 1)
        answer.append(str(result))

print("\n".join(answer))
```
