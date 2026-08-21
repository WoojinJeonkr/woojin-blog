---
external : false
title : "Bungee jump"
tag : [Python]
date : 2026-08-21
---

## 1. Problem

한 놀이공원에서는 번지점프 참가자들을 위한 여러 개의 점프대를 운영하고 있다.

점프대는 일렬로 배치되어 있으며, 각 점프대에는 지면으로부터의 높이가 기록되어 있다.

`Height`는 각 점프대의 높이를 순서대로 저장한 배열이다.

관리자는 번지점프 시설을 점검하기 위해 다음 두 가지 연산을 수행한다.

### 높이 조정 연산

구간 `[l, r]`에 있는 모든 점프대의 높이를 `X`만큼 변경한다.

```text
Height + X
```

`X`는 양수일 수도 있고 음수일 수도 있다.

### 최고 점프대 조회 연산

구간 `[l, r]`에 존재하는 점프대 중 가장 높은 점프대의 높이를 출력한다.

점프대의 개수와 연산의 수가 매우 크기 때문에 모든 점프대의 높이를 직접 변경하거나 조회하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하여 구간의 높이 변경을 효율적으로 처리해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Height`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

높이 조정 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`에 있는 모든 점프대의 높이를 `X`만큼 변경한다.

최고 점프대 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에 있는 점프대 중 가장 높은 점프대의 높이를 출력한다.

### 출력

각 최고 점프대 조회 연산에 대해 해당 구간의 최대 높이를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `-10^9 ≤ Height의 각 원소 ≤ 10^9`
- `-10^9 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
6 6
30 45 20 50 35 40
2 1 6
1 2 5 10
2 1 6
1 1 4 -15
2 2 5
2 3 6
```

### Example 2

```text
5 5
100 80 120 90 110
1 2 4 20
2 1 5
1 1 3 -30
2 1 4
2 2 5
```

## 3. Output Example

### 3.1. Example 1

```text
50
60
55
50
```

### 3.2. Example 2

```text
120
90
120
```

## 4. Explanation

### 4.1. Example 1

처음 점프대의 높이는 다음과 같다.

```text
30 45 20 50 35 40
```

첫 번째 연산은 전체 구간의 가장 높은 점프대를 찾는 것이다.

```text
2 1 6
```

전체 구간의 최대 높이는

```text
50
```

이다.

다음 연산은 다음과 같다.

```text
1 2 5 10
```

구간 `[2, 5]`의 모든 점프대 높이에 `10`을 더한다.

변경 전:

```text
30 45 20 50 35 40
```

변경 후:

```text
30 55 30 60 45 40
```

따라서 전체 구간의 최대 높이는

```text
60
```

이다.

다음 연산에서는 구간 `[1, 4]`의 높이를 `15`만큼 낮춘다.

```text
1 1 4 -15
```

결과는 다음과 같다.

```text
15 40 15 45 45 40
```

구간 `[2, 5]`의 최대 높이는

```text
45
```

가 된다.

이후 구간 `[3, 6]`을 조회하면

```text
15 45 45 40
```

중 가장 높은 높이는

```text
45
```

이다.

구간 전체를 직접 순회하여 높이를 변경하면 하나의 연산에 최대 `O(N)`의 시간이 필요하다.

따라서 모든 연산을 처리하는 데 `O(NQ)`의 시간이 걸릴 수 있다.

이를 해결하기 위해 Segment Tree의 각 노드에 해당 구간의 **최대 높이**를 저장한다.

구간 전체에 동일한 값을 더하거나 빼는 연산이 들어오면 모든 원소를 직접 변경하지 않고 해당 노드의 최대값에 `X`를 더한 뒤, 실제 자식 노드에는 나중에 변경 사항을 전달한다.

이때 사용되는 것이 **Lazy Propagation**이다.

### 4.2. Example 2

처음 점프대의 높이는 다음과 같다.

```text
100 80 120 90 110
```

다음 연산을 수행한다.

```text
1 2 4 20
```

구간 `[2, 4]`의 높이에 `20`을 더한다.

결과는

```text
100 100 140 110 110
```

이다.

전체 구간의 최대 높이는

```text
140
```

이다.

다음으로

```text
1 1 3 -30
```

을 수행하면 구간 `[1, 3]`의 높이가 `30`씩 낮아진다.

결과는

```text
70 70 110 110 110
```

이다.

구간 `[1, 4]`의 최대 높이는

```text
110
```

이다.

Segment Tree는 각 구간의 최대값을 저장하고, Lazy Propagation을 이용해 구간 전체에 대한 높이 변경을 한 번에 처리한다.

따라서 하나의 연산을 `O(log N)` 정도의 시간에 처리할 수 있다.

## 5. Answer

```python
import sys

input = sys.stdin.readline


class SegmentTree:
    def __init__(self, values):
        size = len(values)

        self.size = size
        self.maximum = [0] * (size * 4)
        self.lazy = [0] * (size * 4)

        self._build(1, 0, size - 1, values)

    def _build(self, node, left, right, values):
        if left == right:
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

        self.maximum[node] = max(
            self.maximum[node * 2],
            self.maximum[node * 2 + 1]
        )

    def _apply(self, node, value):
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

        self.maximum[node] = max(
            self.maximum[node * 2],
            self.maximum[node * 2 + 1]
        )

    def query(self, query_left, query_right):
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
            return -10**30

        if (
            query_left <= left
            and right <= query_right
        ):
            return self.maximum[node]

        self._push(node)

        middle = (left + right) // 2

        left_maximum = self._query(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_maximum = self._query(
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
Height = list(map(int, input().split()))

tree = SegmentTree(Height)

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
        _, left, right = operation

        result = tree.query(
            left - 1,
            right - 1
        )

        answer.append(str(result))

print("\n".join(answer))
```
