---
external : false
title : "Parrot growth color"
tag : [Python]
date : 2026-08-23
---

## 1. Problem

한 동물원에는 일렬로 배치된 `N`마리의 앵무새가 있다.

각 앵무새는 성장할수록 몸의 색깔이 변하며, 앵무새의 현재 성장 수치는 `Growth`에 저장되어 있다.

앵무새의 성장 수치에 따라 색깔은 다음과 같이 결정된다.

| 성장 수치 | 색깔 |
| --- | --- |
| `0 이상 20 미만` | Green |
| `20 이상 40 미만` | Blue |
| `40 이상 60 미만` | Yellow |
| `60 이상 80 미만` | Orange |
| `80 이상` | Red |

관리자는 앵무새들의 성장 상태를 관리하기 위해 두 가지 연산을 수행한다.

### 성장 연산

구간 `[l, r]`에 있는 모든 앵무새의 성장 수치에 `X`를 더한다.

```text
Growth + X
```

`X`는 양수일 수도 있고 음수일 수도 있다.

성장 수치가 음수가 되는 경우에도 계산은 그대로 수행한다.

### 색깔 조회 연산

구간 `[l, r]`에서 특정 색깔에 해당하는 앵무새의 개수를 구한다.

색깔은 현재 성장 수치를 기준으로 판단한다.

색깔은 다음과 같이 번호로 표현한다.

```text
1 = Green
2 = Blue
3 = Yellow
4 = Orange
5 = Red
```

성장 연산이 매우 많기 때문에 모든 앵무새의 성장 수치를 직접 변경하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree와 Lazy Propagation**을 사용하여 구간의 성장 수치를 효율적으로 관리해야 한다.

또한 색깔 조회에서는 구간의 최솟값과 최댓값을 이용하여 해당 구간의 모든 앵무새가 조회하려는 색깔 범위에 포함되거나, 모두 범위를 벗어난 경우 더 이상 자식 구간을 탐색하지 않는 **가지치기(Pruning)**를 적용할 수 있다.

### 입력

첫째 줄에 정수 `N`, `Q`가 주어진다.

둘째 줄에 `N`개의 정수 `Growth`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

성장 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`에 있는 모든 앵무새의 성장 수치에 `X`를 더한다.

색깔 조회 연산은 다음과 같은 형식이다.

```text
2 l r C
```

구간 `[l, r]`에서 색깔 번호가 `C`인 앵무새의 개수를 출력한다.

### 출력

각 색깔 조회 연산에 대해 조건을 만족하는 앵무새의 개수를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `1 ≤ Q ≤ 200,000`
- `-10^9 ≤ Growth의 각 원소 ≤ 10^9`
- `-10^9 ≤ X ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`
- `1 ≤ C ≤ 5`

## 2. Input Example

### Example 1

```text
7 7
10 25 45 65 85 35 55
2 1 7 1
2 1 7 3
1 2 6 20
2 1 7 4
1 1 7 -15
2 1 7 2
2 2 5 3
```

### Example 2

```text
6 6
5 18 32 48 67 90
2 1 6 1
2 1 6 2
1 2 5 15
2 1 6 3
2 1 6 4
2 1 6 5
```

## 3. Output Example

### 3.1. Example 1

```text
1
2
2
3
2
```

### 3.2. Example 2

```text
2
1
3
1
1
```

## 4. Explanation

### 4.1. Example 1

처음 앵무새들의 성장 수치는 다음과 같다.

```text
10 25 45 65 85 35 55
```

각 성장 수치에 따른 색깔은 다음과 같다.

```text
10 → Green
25 → Blue
45 → Yellow
65 → Orange
85 → Red
35 → Blue
55 → Yellow
```

따라서 전체 구간에서 Green 앵무새는

```text
10
```

하나이므로 첫 번째 결과는

```text
1
```

이다.

다음으로 Yellow 색깔을 조회한다.

```text
2 1 7 3
```

Yellow는 성장 수치가 `40 이상 60 미만`인 경우이다.

해당하는 성장 수치는

```text
45 55
```

이므로 결과는

```text
2
```

이다.

다음 성장 연산을 수행한다.

```text
1 2 6 20
```

구간 `[2, 6]`의 성장 수치에 `20`을 더한다.

변경 전:

```text
10 25 45 65 85 35 55
```

변경 후:

```text
10 45 65 85 85 55 55
```

이제 Orange 색깔은 성장 수치가 `60 이상 80 미만`인 경우이다.

해당하는 앵무새는

```text
65 55 55
```

중 `65`만 Orange이므로 결과는

```text
1
```

이 된다.

구간에 동일한 성장량을 더하는 연산에서는 Segment Tree의 Lazy Propagation을 사용하면 모든 앵무새를 직접 변경할 필요가 없다.

각 노드에는 해당 구간의 최솟값과 최댓값을 저장한다.

색깔 조회 시 특정 색깔의 성장 범위를 `[lower, upper]`라고 하면 다음과 같이 가지치기할 수 있다.

```text
최댓값 < lower
또는
최솟값 >= upper
```

라면 해당 구간의 모든 앵무새가 색깔 범위를 벗어난다.

반대로

```text
lower <= 최솟값
그리고
최댓값 < upper
```

라면 해당 구간의 모든 앵무새가 같은 색깔에 해당하므로 구간의 크기를 바로 반환할 수 있다.

그 외의 경우에만 자식 노드로 내려가서 확인한다.

### 4.2. Example 2

처음 성장 수치는 다음과 같다.

```text
5 18 32 48 67 90
```

색깔은 다음과 같다.

```text
5  → Green
18 → Green
32 → Blue
48 → Yellow
67 → Orange
90 → Red
```

따라서 Green은 `2`마리이다.

다음 성장 연산을 수행한다.

```text
1 2 5 15
```

구간 `[2, 5]`에 `15`를 더하면 성장 수치는 다음과 같다.

```text
5 33 47 63 82 90
```

이때 Yellow는 성장 수치가 `40 이상 60 미만`이므로

```text
47
```

하나가 해당한다.

따라서 Yellow의 개수는

```text
1
```

이다.

이 문제의 핵심은 성장 수치를 직접 수정하는 것이 아니라 Segment Tree의 각 구간에 대한 최솟값과 최댓값을 유지하면서 Lazy Propagation으로 구간 증가를 처리하는 것이다.

색깔의 범위와 현재 구간의 최솟값과 최댓값을 비교하면 일부 구간은 탐색하지 않고 바로 결과를 계산할 수 있다.

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

    def count_color(
        self,
        query_left,
        query_right,
        lower,
        upper
    ):
        return self._count_color(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            lower,
            upper
        )

    def _count_color(
        self,
        node,
        left,
        right,
        query_left,
        query_right,
        lower,
        upper
    ):
        if (
            right < query_left
            or query_right < left
        ):
            return 0

        if (
            self.maximum[node] < lower
            or self.minimum[node] >= upper
        ):
            return 0

        if (
            query_left <= left
            and right <= query_right
            and lower <= self.minimum[node]
            and self.maximum[node] < upper
        ):
            return right - left + 1

        if left == right:
            return 1

        self._push(node)

        middle = (left + right) // 2

        left_count = self._count_color(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            lower,
            upper
        )

        right_count = self._count_color(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            lower,
            upper
        )

        return left_count + right_count


N, Q = map(int, input().split())
Growth = list(map(int, input().split()))

tree = SegmentTree(Growth)

ColorRange = {
    1: (0, 20),
    2: (20, 40),
    3: (40, 60),
    4: (60, 80),
    5: (80, 10**30)
}

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
        _, left, right, color = operation

        lower, upper = ColorRange[color]

        result = tree.count_color(
            left - 1,
            right - 1,
            lower,
            upper
        )

        answer.append(str(result))

print("\n".join(answer))
```
