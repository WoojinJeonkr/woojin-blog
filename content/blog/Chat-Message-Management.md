---
external : false
title : "Chat Message Management"
tag : [Python]
date : 2026-08-28
---

## 1. Problem

온라인 채팅방에는 여러 명의 사용자가 순서대로 메시지를 보내고 있다.

각 메시지는 하나의 정수 `Message`로 표현되며, 값이 클수록 해당 메시지의 중요도가 높다고 가정한다.

채팅방에는 총 `N`개의 메시지가 존재하며, `Message`는 메시지의 중요도를 순서대로 저장한 배열이다.

관리자는 채팅 기록을 분석하기 위해 다음 세 가지 연산을 수행한다.

### 메시지 중요도 변경

구간 `[l, r]`에 포함된 모든 메시지의 중요도에 `X`를 더한다.

```text
Message + X
```

`X`는 양수일 수도 있고 음수일 수도 있다.

### 중요 메시지 조회

구간 `[l, r]`에서 중요도가 가장 높은 메시지의 중요도를 출력한다.

### 중요도 차이 조회

구간 `[l, r]`에서 가장 중요한 메시지와 가장 덜 중요한 메시지의 중요도 차이를 출력한다.

즉, 다음 값을 계산한다.

```text
최댓값 - 최솟값
```

채팅 메시지와 연산의 수가 매우 많기 때문에 각각의 연산마다 해당 구간의 모든 메시지를 직접 확인하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하여 메시지의 중요도를 효율적으로 관리해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Message`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

중요도 변경 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`에 포함된 모든 메시지의 중요도에 `X`를 더한다.

중요 메시지 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에서 가장 높은 중요도를 가진 메시지의 중요도를 출력한다.

중요도 차이 조회 연산은 다음과 같은 형식이다.

```text
3 l r
```

구간 `[l, r]`에서 가장 높은 중요도와 가장 낮은 중요도의 차이를 출력한다.

### 출력

각 조회 연산의 결과를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `-10^9 ≤ Message의 각 원소 ≤ 10^9`
- `-10^9 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
8 7
10 30 20 50 40 25 60 15
2 1 8
3 1 8
1 2 6 15
2 1 8
3 2 6
1 4 8 -20
3 1 8
```

### Example 2

```text
6 6
40 10 70 30 90 20
3 1 6
1 2 5 25
2 1 6
3 2 5
1 1 3 -30
2 1 6
```

## 3. Output Example

### 3.1. Example 1

```text
60
50
60
55
55
```

### 3.2. Example 2

```text
80
115
90
90
```

## 4. Explanation

### 4.1. Example 1

처음 채팅 메시지의 중요도는 다음과 같다.

```text
10 30 20 50 40 25 60 15
```

첫 번째 연산에서는 전체 채팅 기록에서 가장 중요한 메시지의 중요도를 조회한다.

```text
2 1 8
```

가장 높은 중요도는

```text
60
```

이다.

다음 연산에서는 전체 채팅 기록의 중요도 차이를 확인한다.

```text
3 1 8
```

최댓값은 `60`, 최솟값은 `10`이므로

```text
60 - 10 = 50
```

이다.

이후 구간 `[2, 6]`의 모든 메시지 중요도에 `15`를 더한다.

```text
1 2 6 15
```

변경 결과는 다음과 같다.

```text
10 45 35 65 55 40 60 15
```

따라서 전체 구간에서 가장 높은 중요도는

```text
65
```

이다.

구간 `[2, 6]`에서는

```text
최댓값 = 65
최솟값 = 35
```

이므로 중요도 차이는

```text
65 - 35 = 30
```

이다.

이후 구간 `[4, 8]`의 중요도를 `20`씩 감소시키면 다음과 같이 변경된다.

```text
10 45 35 45 35 20 40 0
```

전체 구간의 최댓값은 `45`, 최솟값은 `0`이므로 중요도 차이는

```text
45 - 0 = 45
```

이다.

구간 전체에 동일한 값을 더하거나 빼는 연산을 모든 메시지에 직접 적용하면 하나의 연산마다 `O(N)`의 시간이 필요하다.

Segment Tree의 각 노드에는 다음 정보를 저장한다.

```text
구간의 최솟값
구간의 최댓값
구간에 아직 자식에게 전달하지 않은 변경량
```

구간 전체에 `X`를 더하는 경우 해당 노드의 최솟값과 최댓값에 `X`를 더하고, 자식 노드에는 나중에 전달할 수 있도록 Lazy 값을 저장한다.

따라서 구간 변경 연산과 구간 조회 연산을 모두 효율적으로 처리할 수 있다.

### 4.2. Example 2

처음 메시지의 중요도는 다음과 같다.

```text
40 10 70 30 90 20
```

전체 구간의 중요도 차이를 계산하면

```text
90 - 10 = 80
```

이다.

다음 연산으로 구간 `[2, 5]`의 중요도에 `25`를 더한다.

```text
1 2 5 25
```

변경 결과는

```text
40 35 95 55 115 20
```

이다.

전체 채팅 기록에서 가장 높은 중요도는

```text
115
```

이다.

구간 `[2, 5]`의 중요도 차이는

```text
115 - 35 = 80
```

이다.

마지막으로 구간 `[1, 3]`의 중요도를 `30`씩 감소시키면

```text
10 5 65 55 115 20
```

이 된다.

따라서 전체 구간에서 가장 높은 중요도는

```text
115
```

이다.

이처럼 **Segment Tree + Lazy Propagation**을 이용하면 대규모 채팅 기록에 대한 구간 변경과 조회를 빠르게 처리할 수 있다.

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

        self._build(
            1,
            0,
            size - 1,
            values
        )

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
                10**30,
                -10**30
            )

        if (
            query_left <= left
            and right <= query_right
        ):
            return (
                self.minimum[node],
                self.maximum[node]
            )

        self._push(node)

        middle = (left + right) // 2

        left_minimum, left_maximum = self._query(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_minimum, right_maximum = self._query(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return (
            min(
                left_minimum,
                right_minimum
            ),
            max(
                left_maximum,
                right_maximum
            )
        )


N, Q = map(int, input().split())
Message = list(map(int, input().split()))

tree = SegmentTree(Message)

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

        minimum, maximum = tree.query(
            left - 1,
            right - 1
        )

        if operation[0] == 2:
            answer.append(str(maximum))
        else:
            answer.append(
                str(maximum - minimum)
            )

print("\n".join(answer))
```
