---
external : false
title : "Remove rust"
tag : [Python]
date : 2026-08-25
---

## 1. Problem

오래된 철제 구조물에는 일렬로 배치된 `N`개의 금속 구간이 있으며, 각 구간에는 현재 녹의 두께가 기록되어 있다.

`Rust`는 각 금속 구간의 녹 두께를 순서대로 저장한 배열이다.

관리자는 녹 제거 작업을 수행하면서 특정 구간의 녹 상태를 확인하려고 한다.

### 녹 제거 연산

구간 `[l, r]`에 있는 모든 금속 구간의 녹 두께를 `X`만큼 감소시킨다.

```text
Rust - X
```

녹의 두께는 `0`보다 작아질 수 없으므로 실제 녹 두께는 다음과 같이 처리한다.

```text
max(현재 녹 두께 - X, 0)
```

### 녹 두께 조회 연산

구간 `[l, r]`에 존재하는 금속 구간 중 가장 두꺼운 녹의 두께를 출력한다.

녹 제거 작업과 조회 작업의 횟수가 많기 때문에 모든 금속 구간을 직접 확인하여 녹을 제거하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하고, 특정 구간의 녹 두께가 모두 `0`이 된 경우 더 이상 해당 구간을 탐색하지 않는 **가지치기(Pruning)**를 적용해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Rust`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

녹 제거 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`의 모든 녹 두께를 `X`만큼 감소시킨다.

녹 두께 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`의 가장 두꺼운 녹의 두께를 출력한다.

### 출력

각 녹 두께 조회 연산에 대해 해당 구간의 최대 녹 두께를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `0 ≤ Rust의 각 원소 ≤ 10^9`
- `0 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
7 7
20 35 10 50 40 25 60
2 1 7
1 2 6 15
2 1 7
1 1 7 30
2 1 7
1 3 5 10
2 2 6
```

### Example 2

```text
6 6
50 20 80 40 70 30
1 1 4 25
2 1 6
1 2 6 30
2 1 6
1 1 6 50
2 1 6
```

## 3. Output Example

### 3.1. Example 1

```text
60
45
30
15
```

### 3.2. Example 2

```text
70
50
0
```

## 4. Explanation

### 4.1. Example 1

처음 녹의 두께는 다음과 같다.

```text
20 35 10 50 40 25 60
```

첫 번째 조회 연산에서 전체 구간의 가장 두꺼운 녹은

```text
60
```

이다.

다음 연산을 수행한다.

```text
1 2 6 15
```

구간 `[2, 6]`의 녹을 `15`만큼 제거한다.

변경 전:

```text
20 35 10 50 40 25 60
```

변경 후:

```text
20 20 0 35 25 10 60
```

따라서 전체 구간의 최대 녹 두께는

```text
60
```

이다.

다음으로 전체 구간에 대해 `30`만큼 녹을 제거한다.

```text
1 1 7 30
```

각 구간의 녹 두께는 음수가 될 수 없으므로 결과는

```text
0 0 0 5 0 0 30
```

이 된다.

따라서 최대 녹 두께는

```text
30
```

이다.

이후 다음 연산을 수행한다.

```text
1 3 5 10
```

현재 상태에서 구간 `[3, 5]`의 녹을 `10`만큼 제거하면

```text
0 0 0 0 0 0 30
```

이 된다.

구간 `[2, 6]`에서 가장 두꺼운 녹은

```text
0
```

이다.

이 문제의 핵심은 녹 두께가 `0`에 도달한 구간을 효율적으로 처리하는 것이다.

단순히 모든 금속 구간을 순회하면 하나의 연산마다 `O(N)`의 시간이 필요하다.

Segment Tree의 각 노드에는 다음 정보를 저장한다.

```text
구간의 최댓값
구간의 최솟값
구간에 적용되지 않은 녹 제거량
```

현재 구간의 최댓값이 `0`이라면 해당 구간의 모든 녹이 이미 제거된 상태이므로 더 이상 탐색할 필요가 없다.

또한 구간 전체에 녹 제거량을 적용하더라도 모든 값이 `0`보다 크게 유지된다면 Lazy Propagation을 이용하여 해당 구간을 한 번에 갱신할 수 있다.

반대로 일부 값만 `0`이 되는 경우에는 자식 구간으로 내려가 정확한 값을 계산한다.

이러한 방식으로 불필요한 탐색을 줄이는 것이 이 문제의 핵심이다.

### 4.2. Example 2

처음 녹의 두께는 다음과 같다.

```text
50 20 80 40 70 30
```

다음 연산을 수행한다.

```text
1 1 4 25
```

구간 `[1, 4]`의 녹을 `25`만큼 제거하면

```text
25 0 55 15 70 30
```

이 된다.

전체 구간에서 가장 두꺼운 녹은

```text
70
```

이다.

다음으로

```text
1 2 6 30
```

을 수행한다.

현재 상태에서 구간 `[2, 6]`의 녹을 `30`만큼 제거하면

```text
25 0 25 0 40 0
```

이 된다.

따라서 전체 구간의 최대 녹 두께는

```text
40
```

이다.

마지막으로 전체 구간에 `50`만큼 녹 제거 작업을 수행한다.

```text
1 1 6 50
```

모든 녹 두께가 `0`이 되므로 마지막 조회 결과는

```text
0
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
        self.minimum[node] = max(
            0,
            self.minimum[node] - value
        )

        self.maximum[node] = max(
            0,
            self.maximum[node] - value
        )

        self.lazy[node] += value

    def _push(self, node):
        if self.lazy[node] == 0:
            return

        value = self.lazy[node]

        self._apply(node * 2, value)
        self._apply(node * 2 + 1, value)

        self.lazy[node] = 0

    def remove_rust(self, query_left, query_right, value):
        self._remove_rust(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            value
        )

    def _remove_rust(
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
            or self.maximum[node] == 0
        ):
            return

        if query_left <= left and right <= query_right:
            if self.minimum[node] >= value:
                self._apply(node, value)
                return

            if self.maximum[node] <= value:
                self._apply(node, self.maximum[node])
                return

        if left == right:
            self._apply(node, value)
            return

        self._push(node)

        middle = (left + right) // 2

        self._remove_rust(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            value
        )

        self._remove_rust(
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

    def query_maximum(self, query_left, query_right):
        return self._query_maximum(
            1,
            0,
            self.size - 1,
            query_left,
            query_right
        )

    def _query_maximum(
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
            return self.maximum[node]

        self._push(node)

        middle = (left + right) // 2

        left_maximum = self._query_maximum(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_maximum = self._query_maximum(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return max(
            left_maximum,
            right_maximum
        )


N, Q = map(int, input().split())
Rust = list(map(int, input().split()))

tree = SegmentTree(Rust)

answer = []

for _ in range(Q):
    operation = list(map(int, input().split()))

    if operation[0] == 1:
        _, left, right, value = operation

        tree.remove_rust(
            left - 1,
            right - 1,
            value
        )

    else:
        _, left, right = operation

        result = tree.query_maximum(
            left - 1,
            right - 1
        )

        answer.append(str(result))

print("\n".join(answer))
```
