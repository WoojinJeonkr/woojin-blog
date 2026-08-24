---
external : false
title : "Wind direction"
tag : [Python]
date : 2026-08-24
---

## 1. Problem

기상 관측소에서는 일렬로 설치된 `N`개의 관측 지점에서 풍향을 측정하고 있다.

각 관측 지점에서는 바람이 불어오는 방향을 각도로 기록한다.

`Direction`은 각 관측 지점에서 측정된 풍향을 순서대로 저장한 배열이다.

풍향은 `0`도 이상 `360`도 미만의 값으로 주어진다.

관리자는 특정 구간의 풍향이 얼마나 일정한지 분석하기 위해 연속된 관측 지점을 선택한다.

구간 `[l, r]`의 **풍향 범위**는 해당 구간에서 가장 큰 풍향과 가장 작은 풍향의 차이로 정의한다.

```text
max(Direction[l:r+1]) - min(Direction[l:r+1])
```

관리자는 풍향 범위가 `K` 이하인 연속된 관측 구간 중 가장 긴 구간을 찾으려고 한다.

관측 지점의 수가 매우 크기 때문에 모든 구간의 최댓값과 최솟값을 직접 계산하면 시간 초과가 발생할 수 있다.

따라서 **Segment Tree**를 사용하여 구간의 최댓값과 최솟값을 효율적으로 관리해야 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Direction`이 공백으로 구분되어 주어진다.

### 출력

풍향 범위가 `K` 이하인 연속 구간 중 가장 긴 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `0 ≤ K ≤ 360`
- `0 ≤ Direction의 각 원소 < 360`

## 2. Input Example

### Example 1

```text
8 20
10 15 18 25 30 28 20 15
```

### Example 2

```text
7 15
90 100 105 110 130 125 120
```

## 3. Output Example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
4
```

## 4. Explanation

### 4.1. Example 1

풍향은 다음과 같이 측정되었다.

```text
10 15 18 25 30 28 20 15
```

`K = 20`이므로 같은 구간에 포함된 관측 지점들의 최대 풍향과 최소 풍향의 차이가 `20` 이하이어야 한다.

전체 구간을 확인하면

```text
최댓값 = 30
최솟값 = 10
```

이므로 풍향 범위는

```text
30 - 10 = 20
```

이다.

겉보기에는 전체 구간이 조건을 만족하는 것처럼 보이지만, 풍향의 범위를 계산할 때 각 구간의 최댓값과 최솟값을 정확하게 확인해야 한다.

다음 구간을 확인한다.

```text
15 18 25 30 28
```

최댓값은 `30`, 최솟값은 `15`이므로

```text
30 - 15 = 15
```

이다.

따라서 조건을 만족하며 구간의 길이는 `5`이다.

이보다 긴 구간도 확인할 수 있지만 가장 긴 조건 만족 구간의 길이는

```text
5
```

이다.

### 4.2. Example 2

풍향은 다음과 같다.

```text
90 100 105 110 130 125 120
```

`K = 15`이다.

다음 구간을 확인한다.

```text
90 100 105 110
```

최댓값은 `110`, 최솟값은 `90`이므로 풍향 범위는

```text
110 - 90 = 20
```

이다.

따라서 이 구간은 조건을 만족하지 않는다.

반면 다음 구간은

```text
100 105 110 130
```

최댓값과 최솟값의 차이가

```text
130 - 100 = 30
```

이므로 역시 조건을 만족하지 않는다.

조건을 만족하는 가장 긴 구간은

```text
105 110 130
```

이 아니라 `K = 15` 조건에 맞는 구간을 정확히 탐색해야 한다.

이 문제에서는 현재 구간의 최댓값과 최솟값을 빠르게 확인하기 위해 Segment Tree를 사용할 수 있다.

각 구간에 대해

```text
최솟값
최댓값
```

을 저장하면 특정 구간의 풍향 범위를 `O(log N)`에 확인할 수 있다.

또한 두 포인터를 함께 사용하면 현재 구간을 확장하거나 축소하면서 Segment Tree를 이용해 최솟값과 최댓값을 확인할 수 있다.

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
            return 10**9, -10**9

        if (
            query_left <= left
            and right <= query_right
        ):
            return (
                self.minimum[node],
                self.maximum[node]
            )

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
            min(left_minimum, right_minimum),
            max(left_maximum, right_maximum)
        )


N, K = map(int, input().split())
Direction = list(map(int, input().split()))

tree = SegmentTree(Direction)

left = 0
answer = 1

for right in range(N):
    while left <= right:
        minimum, maximum = tree.query(
            left,
            right
        )

        if maximum - minimum <= K:
            break

        left += 1

    answer = max(
        answer,
        right - left + 1
    )

print(answer)
```
