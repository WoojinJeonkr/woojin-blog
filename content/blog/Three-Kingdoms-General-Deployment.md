---
external : false
title : "Three Kingdoms General Deployment"
tag : [Python]
date : 2026-08-27
---

## 1. Problem

삼국지 시대의 한 장수가 여러 성을 순찰하며 각 성에 배치된 병력의 전투력을 관리하고 있다.

성은 일렬로 `N`개가 배치되어 있으며, `Power`는 각 성에 배치된 병력의 전투력을 순서대로 나타낸다.

장수는 전투 상황에 따라 연속된 성들의 병력을 이동시킬 수 있으며, 특정 구간에서 가장 강한 성과 가장 약한 성을 빠르게 확인해야 한다.

관리 시스템은 다음 세 가지 연산을 지원한다.

### 병력 증원 연산

구간 `[l, r]`에 있는 모든 성의 전투력에 `X`를 더한다.

```text
Power + X
```

`X`는 양수일 수도 있고 음수일 수도 있다.

### 최강 성 조회 연산

구간 `[l, r]`에서 전투력이 가장 높은 성의 전투력을 출력한다.

### 전투력 차이 조회 연산

구간 `[l, r]`에서 가장 강한 성과 가장 약한 성의 전투력 차이를 출력한다.

즉, 다음 값을 계산한다.

```text
최댓값 - 최솟값
```

성의 개수와 작전 횟수가 매우 많기 때문에 각각의 연산마다 구간을 직접 탐색하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하여 구간의 전투력을 효율적으로 관리해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Power`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

병력 증원 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`에 있는 모든 성의 전투력에 `X`를 더한다.

최강 성 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에서 가장 높은 전투력을 출력한다.

전투력 차이 조회 연산은 다음과 같은 형식이다.

```text
3 l r
```

구간 `[l, r]`에서 가장 높은 전투력과 가장 낮은 전투력의 차이를 출력한다.

### 출력

각 조회 연산의 결과를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `-10^9 ≤ Power의 각 원소 ≤ 10^9`
- `-10^9 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
7 7
40 70 30 90 50 60 20
2 1 7
3 1 7
1 2 6 15
2 1 7
3 2 6
1 1 4 -30
3 1 5
```

### Example 2

```text
6 6
100 60 80 40 120 70
3 1 6
1 2 5 20
2 1 6
3 2 5
1 1 6 -50
2 1 6
```

## 3. Output Example

### 3.1. Example 1

```text
90
70
105
90
65
```

### 3.2. Example 2

```text
80
140
80
90
```

## 4. Explanation

### 4.1. Example 1

처음 각 성의 전투력은 다음과 같다.

```text
40 70 30 90 50 60 20
```

첫 번째 연산은 전체 성 중 가장 강한 성의 전투력을 찾는다.

```text
2 1 7
```

가장 높은 전투력은

```text
90
```

이다.

다음으로 전체 구간의 전투력 차이를 구한다.

```text
3 1 7
```

최댓값은 `90`, 최솟값은 `20`이므로

```text
90 - 20 = 70
```

이다.

다음 연산에서는 구간 `[2, 6]`의 병력을 `15`만큼 증원한다.

```text
1 2 6 15
```

변경된 전투력은 다음과 같다.

```text
40 85 45 105 65 75 20
```

전체 구간의 최댓값은

```text
105
```

이다.

구간 `[2, 6]`의 전투력 차이는

```text
105 - 45 = 60
```

이다.

이후 다음 연산을 수행한다.

```text
1 1 4 -30
```

구간 `[1, 4]`의 전투력을 각각 `30`씩 감소시키면

```text
10 55 15 75 65 75 20
```

이 된다.

구간 `[1, 5]`에서 최댓값과 최솟값은 각각

```text
75
10
```

이므로 전투력 차이는

```text
75 - 10 = 65
```

이다.

이 문제에서는 구간 전체의 병력을 한 번에 변경해야 하므로 모든 성을 직접 순회하면 하나의 증원 연산에 `O(N)`의 시간이 필요하다.

Segment Tree의 각 노드에 다음 정보를 저장한다.

```text
구간의 최솟값
구간의 최댓값
구간에 아직 자식에게 전달하지 않은 변경량
```

구간 전체에 `X`가 더해지는 경우 최솟값과 최댓값에 동시에 `X`를 더하고, 실제 자식 노드에는 나중에 전달할 수 있도록 Lazy 값을 저장한다.

따라서 구간 변경 연산을 `O(log N)`에 처리할 수 있다.

### 4.2. Example 2

처음 전투력은 다음과 같다.

```text
100 60 80 40 120 70
```

전체 구간의 전투력 차이를 구하면

```text
120 - 40 = 80
```

이다.

다음으로

```text
1 2 5 20
```

을 수행한다.

구간 `[2, 5]`의 전투력에 `20`을 더하면

```text
100 80 100 60 140 70
```

이 된다.

전체 구간에서 가장 강한 성의 전투력은

```text
140
```

이다.

구간 `[2, 5]`에서는

```text
최댓값 = 140
최솟값 = 60
```

이므로 전투력 차이는

```text
140 - 60 = 80
```

이다.

마지막으로 전체 성의 전투력을 `50`씩 감소시키면

```text
50 30 50 10 90 20
```

이 된다.

따라서 전체 구간에서 가장 높은 전투력은

```text
90
```

이다.

이처럼 **Segment Tree + Lazy Propagation**을 이용하면 대규모 병력 변경과 구간 조회를 효율적으로 처리할 수 있다.

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
Power = list(map(int, input().split()))

tree = SegmentTree(Power)

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
