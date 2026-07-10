---
external : false
title : "Autonomous driving safety corridor"
tag : [Python]
date : 2026-07-10
---

## 1. Problem

한 자율주행 차량은 주행 중 매초마다 전방 장애물까지의 안전 거리(`Ai`)를 측정한다.

차량은 일정 시간 동안 안전하게 자율주행을 유지하기 위해, 연속된 측정 구간에서 안전 거리의 변동이 너무 크지 않아야 한다.

어떤 연속 구간 `[l, r]`이 안전 주행 구간이 되기 위해서는 다음 조건을 만족해야 한다.

```text
max(A[l...r]) - min(A[l...r]) ≤ K
```

즉, 해당 구간에서 가장 큰 안전 거리와 가장 작은 안전 거리의 차이가 `K` 이하이면 안정적인 자율주행이 가능하다고 판단한다.

운영 시스템은 만들 수 있는 모든 안전 주행 구간 중 가장 긴 구간의 길이를 구하려고 한다.

### 입력

첫째 줄에 측정 횟수 `N`과 허용 가능한 안전 거리 변화량 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

조건을 만족하는 가장 긴 안전 주행 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 5
30 32 35 34 45 43 42 41
```

### Example 2

```text
10 3
20 22 23 21 20 28 29 30 31 32
```

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
5
```

## 4. Explanation

### 4.1. Example 1

앞의 구간

```text
30 32 35 34
```

에서는

```text
max = 35
min = 30
```

이므로 차이는 `5`이다.

다음 값 `45`를 포함하면

```text
45 - 30 = 15
```

가 되어 조건을 만족하지 않는다.

따라서 가장 긴 안전 주행 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
28 29 30 31 32
```

에서는

```text
max = 32
min = 28
```

이므로 차이는 `4`가 되어 조건을 만족하지 않는다.

반면

```text
20 22 23 21 20
```

에서는

```text
max = 23
min = 20
```

으로 차이가 `3`이므로 조건을 만족하며 길이는 `5`이다.

## 5. Solution

투 포인터와 단조 덱(Monotonic Queue)을 이용한다.

현재 구간의

- 최댓값을 저장하는 감소 덱
- 최솟값을 저장하는 증가 덱

을 유지하면서 오른쪽 포인터를 한 칸씩 증가시킨다.

현재 구간에서

```text
max - min > K
```

가 되면 왼쪽 포인터를 이동시키며 조건을 다시 만족할 때까지 구간을 줄인다.

각 단계마다

```text
answer = max(answer, right - left + 1)
```

을 수행하면 된다.

각 원소는 각 덱에 최대 한 번 삽입되고 한 번 제거되므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간 복잡도는

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

max_q = deque()
min_q = deque()

left = 0
answer = 0

for right in range(N):
    while max_q and A[max_q[-1]] < A[right]:
        max_q.pop()
    max_q.append(right)

    while min_q and A[min_q[-1]] > A[right]:
        min_q.pop()
    min_q.append(right)

    while A[max_q[0]] - A[min_q[0]] > K:
        if max_q[0] == left:
            max_q.popleft()
        if min_q[0] == left:
            min_q.popleft()
        left += 1

    answer = max(answer, right - left + 1)

print(answer)
```
