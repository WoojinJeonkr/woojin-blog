---
external : false
title : "Shrine pilgrimage planner"
tag : [Python]
date : 2026-07-06
---

## 1. Problem

한 지역에는 일렬로 이어진 `N`개의 신사가 있다.

각 신사는 고유한 영험도(`Ai`)를 가지며, 순례자는 연속한 신사들을 방문하여 순례 구간을 만들 수 있다.

다만, 순례의 안정성을 위해 하나의 순례 구간에서

> 가장 높은 영험도와 가장 낮은 영험도의 차이가 `K` 이하

여야 한다.

즉, 연속 구간 `[l, r]`에 대해

```text
max(A[l...r]) - min(A[l...r]) ≤ K
```

를 만족해야 한다.

순례자는 가능한 모든 순례 구간 중

> 방문할 수 있는 신사의 최대 개수

를 구하고자 한다.

### 입력

첫째 줄에 신사의 개수 `N`과 기준값 `K`가 주어진다.

둘째 줄에 각 신사의 영험도 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

조건을 만족하는 가장 긴 순례 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 4
10 12 13 15 20 18 19 21
```

### Example 2

```text
7 2
5 6 8 7 9 10 11
```

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
3
```

## 4. Explanation

### 4.1. Example 1

구간

```text
10 12 13 15
```

에서는

```text
15 - 10 = 5
```

이므로 조건을 만족하지 않는다.

반면,

```text
18 19 21
```

은

```text
21 - 18 = 3
```

으로 조건을 만족한다.

또한

```text
12 13 15
```

과

```text
18 19 20 21
```

등 여러 구간이 존재하며, 가장 긴 길이는 `4`이다.

### 4.2. Example 2

구간

```text
8 7 9
```

에서는

```text
9 - 7 = 2
```

이므로 조건을 만족한다.

하지만

```text
8 7 9 10
```

에서는

```text
10 - 7 = 3
```

이 되어 조건을 만족하지 않는다.

따라서 가능한 가장 긴 순례 구간의 길이는 `3`이다.

## 5. Solution

연속 구간의 최댓값과 최솟값을 빠르게 관리해야 하므로

- 최솟값을 관리하는 단조 증가 덱
- 최댓값을 관리하는 단조 감소 덱

을 이용한 투 포인터(sliding window)를 사용한다.

오른쪽 포인터를 한 칸씩 확장하면서

- 현재 값을 두 덱에 삽입
- `max - min > K`가 되면 왼쪽 포인터를 이동하며 조건을 다시 만족시킨다.

매 단계마다 현재 구간의 길이로 정답을 갱신하면 된다.

각 원소는 덱에 한 번 들어가고 한 번만 제거되므로 시간 복잡도는

```text
O(N)
```

이며, 추가 공간 복잡도는

```text
O(N)
```

이다.

## 6. Answer

```python
import sys
from collections import deque

input = sys.stdin.readline

N, K = map(int, input().split())
A = list(map(int, input().split()))

min_dq = deque()
max_dq = deque()

left = 0
answer = 0

for right in range(N):
    while min_dq and A[min_dq[-1]] >= A[right]:
        min_dq.pop()
    min_dq.append(right)

    while max_dq and A[max_dq[-1]] <= A[right]:
        max_dq.pop()
    max_dq.append(right)

    while A[max_dq[0]] - A[min_dq[0]] > K:
        if min_dq[0] == left:
            min_dq.popleft()
        if max_dq[0] == left:
            max_dq.popleft()
        left += 1

    answer = max(answer, right - left + 1)

print(answer)
```
