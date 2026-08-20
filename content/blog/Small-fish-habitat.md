---
external : false
title : "Small fish habitat"
tag : [Python]
date : 2026-08-20
---

## 1. Problem

한 수족관에는 일렬로 배치된 `N`개의 수조 구역이 있으며, 각 구역에는 소형어류가 서식하고 있다.

`Fish`는 각 수조 구역에 존재하는 소형어류의 개수를 순서대로 저장한 배열이다.

관리자는 수조를 관리하기 위해 두 가지 연산을 수행한다.

### 먹이 조절 연산

구간 `[l, r]`에 있는 모든 수조의 소형어류 개수를 `X`마리 이하로 제한한다.

즉, 해당 구간의 각 수조에서 소형어류의 수가 `X`보다 많다면 `X`마리로 줄인다.

```text
min(현재 소형어류 수, X)
```

이미 `X`마리 이하인 수조는 변경하지 않는다.

### 개체 수 조회 연산

구간 `[l, r]`에 존재하는 소형어류의 총 개수를 출력한다.

수조의 개수와 연산의 수가 매우 크기 때문에 모든 수조를 직접 확인하여 먹이 조절을 수행하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**를 이용하여 각 구간의 정보를 관리하고, 특정 구간에서 실제 변경이 필요한 값이 없거나 최댓값만 변경하면 되는 경우 불필요한 탐색을 중단하는 **가지치기(Pruning)** 기법을 사용해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Fish`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

먹이 조절 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`에 존재하는 소형어류의 개수를 `X`마리 이하로 제한한다.

개체 수 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에 존재하는 소형어류의 총 개수를 출력한다.

### 출력

각 개체 수 조회 연산에 대해 해당 구간의 소형어류 총 개수를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `1 ≤ Q ≤ 200,000`
- `0 ≤ Fish의 각 원소 ≤ 10^9`
- `0 ≤ X ≤ 10^9`
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
50
36
19
```

### 3.2. Example 2

```text
79
70
34
```

## 4. Explanation

### 4.1. Example 1

처음 각 수조에 존재하는 소형어류의 수는 다음과 같다.

```text
10 5 8 12 6 15
```

첫 번째 조회 연산에서는 전체 소형어류의 수를 구한다.

```text
10 + 5 + 8 + 12 + 6 + 15 = 56
```

따라서 첫 번째 결과는

```text
56
```

이다.

다음 연산은 다음과 같다.

```text
1 2 5 7
```

구간 `[2, 5]`의 소형어류 수를 `7`마리 이하로 제한한다.

변경 전:

```text
10 5 8 12 6 15
```

변경 후:

```text
10 5 7 7 6 15
```

따라서 전체 소형어류의 수는

```text
10 + 5 + 7 + 7 + 6 + 15 = 50
```

이다.

다음 연산은 다음과 같다.

```text
1 1 6 6
```

모든 수조의 소형어류 수를 `6`마리 이하로 제한한다.

결과는

```text
6 5 6 6 6 6
```

이므로 전체 개체 수는

```text
36
```

이다.

마지막으로 구간 `[3, 5]`를 조회하면

```text
6 6 6
```

이므로 결과는

```text
18
```

이다.

이 문제에서 매번 구간의 모든 수조를 직접 확인하면 최악의 경우 `O(NQ)`의 시간이 필요하다.

이를 개선하기 위해 Segment Tree의 각 노드에서 다음 정보를 관리한다.

```text
구간의 소형어류 총합
구간의 최댓값
구간의 두 번째로 큰 값
최댓값을 가지는 수조의 개수
```

현재 구간의 최댓값이 `X` 이하라면 변경할 필요가 없으므로 해당 구간의 탐색을 즉시 종료할 수 있다.

또한 두 번째로 큰 값이 `X`보다 작다면 `X`보다 큰 값은 해당 구간의 최댓값뿐이다.

따라서 해당 구간의 모든 자식 노드를 탐색하지 않고 최댓값을 한 번에 `X`로 변경할 수 있다.

이러한 방식으로 불필요한 탐색을 줄이는 것이 이 문제의 핵심인 **Segment Tree Beats와 가지치기**이다.

### 4.2. Example 2

처음 소형어류의 수는 다음과 같다.

```text
20 10 30 15 25
```

다음 연산을 수행한다.

```text
1 1 5 18
```

전체 구간의 소형어류 수를 `18`마리 이하로 제한하면

```text
18 10 18 15 18
```

이 된다.

따라서 전체 개체 수는

```text
18 + 10 + 18 + 15 + 18 = 79
```

이다.

다음 연산은 다음과 같다.

```text
1 2 4 12
```

구간 `[2, 4]`의 소형어류 수를 `12`마리 이하로 제한한다.

결과는

```text
18 10 12 12 18
```

이다.

따라서 전체 개체 수는

```text
18 + 10 + 12 + 12 + 18 = 70
```

이다.

마지막으로 `[2, 4]`를 조회하면

```text
10 + 12 + 12 = 34
```

이므로 결과는

```text
34
```

이다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTreeBeats:
    def __init__(self, values):
        size = len(values)

        self.size = size
        self.total = [0] * (size * 4)
        self.maximum = [0] * (size * 4)
        self.second = [-1] * (size * 4)
        self.count = [0] * (size * 4)

        self._build(1, 0, size - 1, values)

    def _build(self, node, left, right, values):
        if left == right:
            value = values[left]

            self.total[node] = value
            self.maximum[node] = value
            self.second[node] = -1
            self.count[node] = 1

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

        self._pull(node)

    def _pull(self, node):
        left_child = node * 2
        right_child = node * 2 + 1

        self.total[node] = (
            self.total[left_child]
            + self.total[right_child]
        )

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
                self.count[left_child]
                + self.count[right_child]
            )

            self.second[node] = max(
                self.second[left_child],
                self.second[right_child]
            )

    def _apply_chmin(self, node, value):
        if self.maximum[node] <= value:
            return

        difference = self.maximum[node] - value

        self.total[node] -= (
            difference * self.count[node]
        )

        self.maximum[node] = value

    def _push(self, node):
        left_child = node * 2
        right_child = node * 2 + 1

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
            return self.total[node]

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
Fish = list(map(int, input().split()))

tree = SegmentTreeBeats(Fish)

answer = []

for _ in range(Q):
    operation = list(map(int, input().split()))

    if operation[0] == 1:
        _, left, right, value = operation

        tree.chmin(
            left - 1,
            right - 1,
            value
        )

    else:
        _, left, right = operation

        result = tree.query_sum(
            left - 1,
            right - 1
        )

        answer.append(str(result))

print("\n".join(answer))
```
