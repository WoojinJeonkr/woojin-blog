---
external : false
title : "Dark Adaptation"
tag : [Python]
date : 2026-08-30
---

## 1. Problem

어두운 공간에 들어간 사람의 눈은 시간이 지나면서 점점 어둠에 적응한다.

이를 **암순응**이라고 하며, 주변 밝기가 낮아질수록 눈이 어두운 환경에 적응하는 데 필요한 시간이 달라진다.

한 실험실에서는 일렬로 배치된 `N`개의 구간에서 밝기를 측정하고 있다.

`Brightness`는 각 구간의 현재 밝기 정도를 순서대로 나타낸다.

실험자는 일정한 구간을 선택하여 해당 구간의 밝기를 감소시키는 실험을 반복한다.

### 밝기 감소 연산

구간 `[l, r]`에 포함된 모든 구간의 밝기를 `X`만큼 감소시킨다.

```text
Brightness - X
```

밝기는 `0`보다 작아질 수 없으므로 실제 밝기는 다음과 같이 처리한다.

```text
max(Brightness - X, 0)
```

### 암순응 단계 조회

각 구간의 암순응 단계는 현재 밝기에 따라 결정된다.

```text
Adaptation = Limit - Brightness
```

단, 결과가 `0`보다 작아지는 경우에는 `0`으로 처리한다.

```text
max(Limit - Brightness, 0)
```

관리자는 구간 `[l, r]`에 존재하는 암순응 단계 중 가장 큰 값을 구하려고 한다.

또한 특정 암순응 단계 `K` 이상인 구간의 개수를 구하는 조회도 수행한다.

실험 구간의 크기와 연산 횟수가 매우 크기 때문에 매번 모든 구간을 직접 확인하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**와 **Lazy Propagation**을 사용하여 구간의 밝기를 효율적으로 변경하고 조회해야 한다.

### 입력

첫째 줄에 정수 `N`, `Q`, `Limit`이 주어진다.

둘째 줄에 `N`개의 정수 `Brightness`가 공백으로 구분되어 주어진다.

다음 `Q`개의 줄에 연산이 주어진다.

밝기 감소 연산은 다음과 같은 형식이다.

```text
1 l r X
```

구간 `[l, r]`의 밝기를 `X`만큼 감소시킨다.

암순응 단계 최댓값 조회 연산은 다음과 같은 형식이다.

```text
2 l r
```

구간 `[l, r]`에서 가장 큰 암순응 단계를 출력한다.

암순응 단계 개수 조회 연산은 다음과 같은 형식이다.

```text
3 l r K
```

구간 `[l, r]`에서 암순응 단계가 `K` 이상인 구간의 개수를 출력한다.

### 출력

각 조회 연산의 결과를 한 줄에 하나씩 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Q ≤ 300,000`
- `0 ≤ Brightness의 각 원소 ≤ 10^9`
- `1 ≤ Limit ≤ 10^9`
- `1 ≤ X ≤ 10^9`
- `0 ≤ K ≤ 10^9`
- `1 ≤ l ≤ r ≤ N`

## 2. Input Example

### Example 1

```text
7 7 100
80 60 90 40 70 50 100
2 1 7
3 1 7 40
1 2 6 20
2 1 7
3 2 6 50
1 3 5 30
2 1 7
```

### Example 2

```text
6 6 80
60 40 70 20 50 30
3 1 6 30
1 2 5 20
2 1 6
3 1 6 50
1 1 6 40
2 1 6
```

## 3. Output Example

### 3.1. Example 1

```text
60
60
60
80
80
```

### 3.2. Example 2

```text
60
60
6
80
```

## 4. Explanation

### 4.1. Example 1

암순응 기준 밝기 `Limit`은 `100`이다.

처음 밝기는 다음과 같다.

```text
80 60 90 40 70 50 100
```

암순응 단계는 다음과 같이 계산된다.

```text
20 40 10 60 30 50 0
```

따라서 전체 구간에서 가장 큰 암순응 단계는

```text
60
```

이다.

다음으로 암순응 단계가 `40` 이상인 구간의 개수를 구한다.

암순응 단계가 `40` 이상인 값은

```text
40 60 50
```

이므로 결과는

```text
3
```

이다.

이후 구간 `[2, 6]`의 밝기를 `20`만큼 감소시킨다.

```text
1 2 6 20
```

변경 전:

```text
80 60 90 40 70 50 100
```

변경 후:

```text
80 40 70 20 50 30 100
```

새로운 암순응 단계는

```text
20 60 30 80 50 70 0
```

이다.

따라서 전체 구간의 최대 암순응 단계는

```text
80
```

이다.

암순응 단계는 밝기가 낮을수록 커지므로, 밝기의 최솟값을 관리하면 최대 암순응 단계를 빠르게 구할 수 있다.

또한 암순응 단계가 `K` 이상이라는 조건은 다음과 같이 변환할 수 있다.

```text
Limit - Brightness >= K
```

따라서

```text
Brightness <= Limit - K
```

인 구간의 개수를 구하면 된다.

이 문제에서는 구간의 밝기를 감소시키는 연산이 반복되므로 단순히 모든 값을 직접 변경하면 비효율적이다.

Segment Tree의 각 노드에 다음 정보를 저장할 수 있다.

```text
구간의 최솟값
구간의 최댓값
구간에 아직 자식에게 전달하지 않은 밝기 감소량
```

구간 전체의 밝기를 `X`만큼 감소시키는 경우 해당 구간의 최솟값과 최댓값을 `X`만큼 감소시키고 Lazy 값을 저장한다.

밝기가 `0`보다 작아질 수 있기 때문에 특정 구간의 모든 값이 `0`이 되는 경우에는 이후의 감소 연산에서 해당 구간의 값을 더 이상 감소시킬 필요가 없다.

이를 활용하여 불필요한 탐색을 줄일 수 있다.

### 4.2. Example 2

처음 밝기는 다음과 같다.

```text
60 40 70 20 50 30
```

`Limit = 80`이므로 암순응 단계는

```text
20 40 10 60 30 50
```

이다.

암순응 단계가 `30` 이상인 구간은

```text
40 60 30 50
```

이므로 결과는

```text
4
```

이다.

다음 연산으로 구간 `[2, 5]`의 밝기를 `20`만큼 감소시킨다.

```text
1 2 5 20
```

변경된 밝기는

```text
60 20 70 0 30 30
```

이다.

암순응 단계는

```text
20 60 10 80 50 50
```

이므로 전체 구간의 최대 암순응 단계는

```text
80
```

이다.

암순응 단계가 `50` 이상인 구간을 찾을 경우

```text
60 80 50 50
```

에 해당하는 네 개의 구간이 조건을 만족한다.

이처럼 암순응 단계 자체를 직접 관리하는 대신 밝기의 최솟값과 필요한 조건을 이용하면 효율적인 구간 연산이 가능하다.

**Segment Tree + Lazy Propagation**을 사용하면 대규모 밝기 변화와 암순응 상태 조회를 빠르게 처리할 수 있다.

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

        self._apply(
            node * 2,
            value
        )

        self._apply(
            node * 2 + 1,
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
            or self.maximum[node] == 0
        ):
            return

        if (
            query_left <= left
            and right <= query_right
            and self.minimum[node] >= value
        ):
            self.minimum[node] -= value
            self.maximum[node] -= value
            self.lazy[node] += value
            return

        if left == right:
            self.minimum[node] = max(
                0,
                self.minimum[node] - value
            )

            self.maximum[node] = self.minimum[node]

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

    def query_minimum(
        self,
        query_left,
        query_right
    ):
        return self._query_minimum(
            1,
            0,
            self.size - 1,
            query_left,
            query_right
        )

    def _query_minimum(
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
            return 10**30

        if (
            query_left <= left
            and right <= query_right
        ):
            return self.minimum[node]

        self._push(node)

        middle = (left + right) // 2

        left_result = self._query_minimum(
            node * 2,
            left,
            middle,
            query_left,
            query_right
        )

        right_result = self._query_minimum(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right
        )

        return min(
            left_result,
            right_result
        )

    def query_count(
        self,
        query_left,
        query_right,
        limit
    ):
        return self._query_count(
            1,
            0,
            self.size - 1,
            query_left,
            query_right,
            limit
        )

    def _query_count(
        self,
        node,
        left,
        right,
        query_left,
        query_right,
        limit
    ):
        if (
            right < query_left
            or query_right < left
        ):
            return 0

        if (
            query_left <= left
            and right <= query_right
            and self.minimum[node] > limit
        ):
            return 0

        if (
            query_left <= left
            and right <= query_right
            and self.maximum[node] <= limit
        ):
            return right - left + 1

        if left == right:
            return int(
                self.minimum[node] <= limit
            )

        self._push(node)

        middle = (left + right) // 2

        left_count = self._query_count(
            node * 2,
            left,
            middle,
            query_left,
            query_right,
            limit
        )

        right_count = self._query_count(
            node * 2 + 1,
            middle + 1,
            right,
            query_left,
            query_right,
            limit
        )

        return left_count + right_count


N, Q, Limit = map(
    int,
    input().split()
)

Brightness = list(
    map(int, input().split())
)

tree = SegmentTree(Brightness)

answer = []

for _ in range(Q):
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
        _, left, right = operation

        minimum = tree.query_minimum(
            left - 1,
            right - 1
        )

        adaptation = max(
            Limit - minimum,
            0
        )

        answer.append(
            str(adaptation)
        )

    else:
        _, left, right, threshold = operation

        brightness_limit = max(
            Limit - threshold,
            0
        )

        result = tree.query_count(
            left - 1,
            right - 1,
            brightness_limit
        )

        answer.append(
            str(result)
        )

print("\n".join(answer))
```
