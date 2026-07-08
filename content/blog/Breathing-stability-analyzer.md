---
external : false
title : "Breathing stability analyzer"
tag : [Python]
date : 2026-07-08
---

## 1. Problem

한 호흡 훈련 센터에서는 복식호흡의 안정성을 분석하는 프로그램을 개발하고 있다.

훈련 중에는 매초마다 횡격막의 움직임을 측정하며, 각 시점의 움직임 강도를 정수 `Ai`로 기록한다.

안정적인 복식호흡은 일정 시간 동안 움직임의 변화가 크지 않은 상태를 유지하는 것으로 정의한다.

어떤 연속 구간 `[l, r]`이 안정적인 복식호흡 구간이 되기 위해서는 다음 조건을 만족해야 한다.

```text
max(A[l...r]) - min(A[l...r]) ≤ K
```

즉, 해당 구간에서 가장 큰 움직임과 가장 작은 움직임의 차이가 `K` 이하이어야 한다.

훈련 데이터를 분석하여 만들 수 있는 모든 안정적인 복식호흡 구간 중 가장 긴 구간의 길이를 구하여라.

### 입력

첫째 줄에 측정 횟수 `N`과 허용 변화량 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

조건을 만족하는 가장 긴 안정적인 복식호흡 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 3
10 11 12 13 18 17 16 15
```

### Example 2

```text
10 2
5 6 7 5 6 8 9 8 7 6
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
10 11 12 13
```

은 최댓값과 최솟값의 차이가

```text
13 - 10 = 3
```

으로 조건을 만족한다.

하지만 `18`이 포함되는 순간

```text
18 - 10 = 8
```

이 되어 조건을 만족하지 않는다.

따라서 가장 긴 안정적인 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
5 6 7 5 6
```

에서는

```text
max = 7
min = 5
```

이므로 차이는 `2`이며 조건을 만족한다.

길이는 `5`이다.

이보다 긴 구간은 모두 최댓값과 최솟값의 차이가 `2`를 초과한다.

## 5. Solution

투 포인터와 단조 덱(Monotonic Queue)을 사용한다.

현재 구간의

- 최댓값을 저장하는 감소 덱
- 최솟값을 저장하는 증가 덱

을 유지한다.

오른쪽 포인터를 한 칸씩 증가시키면서 값을 덱에 추가한다.

현재 구간에서

```text
max - min > K
```

가 되면 왼쪽 포인터를 이동시키며 조건을 다시 만족할 때까지 구간을 줄인다.

각 단계마다

```text
answer = max(answer, right - left + 1)
```

을 갱신하면 된다.

각 원소는 덱에 한 번 들어가고 한 번 나오므로 전체 시간 복잡도는

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
