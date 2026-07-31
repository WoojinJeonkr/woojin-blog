---
external : false
title : "Movie booking rush"
tag : [Python]
date : 2026-07-30
---

## 1. Problem

한 영화관에서는 특정 영화의 예매 현황을 분석하고 있다.

총 `N`일 동안의 예매 기록이 있으며, `Ai`는 `i`번째 날에 발생한 예매 건수를 의미한다.

마케팅팀은 일정 기간 동안 예매 수요가 안정적으로 유지된 구간을 찾고자 한다.

어떤 연속 구간 `[l, r]`에 대해

```text
(구간 내 최대 예매 건수) - (구간 내 최소 예매 건수) ≤ K
```

를 만족하면, 해당 구간을 **안정 예매 구간(Movie Booking Rush)** 이라고 한다.

마케팅팀은 만들 수 있는 모든 안정 예매 구간 중 가장 긴 구간의 길이를 구하려고 한다.

### 입력

첫째 줄에 기록 일수 `N`과 기준값 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가장 긴 안정 예매 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 30
120 140 135 150 300 310 295 305
```

### Example 2

```text
10 20
500 510 520 505 700 690 710 520 530 540
```

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
4
```

## 4. Explanation

### 4.1. Example 1

앞의 구간

```text
120 140 135 150
```

에서는

```text
최대값 = 150
최소값 = 120
차이 = 30
```

이므로 조건을 만족한다.

하지만 다음 날의 예매 건수 `300`을 포함하면

```text
최대값 = 300
최소값 = 120
차이 = 180
```

이 되어 조건을 만족하지 않는다.

뒤의 구간

```text
300 310 295 305
```

에서도

```text
310 - 295 = 15
```

이므로 조건을 만족한다.

따라서 가장 긴 안정 예매 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
500 510 520 505
```

에서는

```text
최대값 = 520
최소값 = 500
차이 = 20
```

이므로 조건을 만족한다.

길이가 5 이상인 모든 구간은 예매 건수의 변동 폭이 `20`을 초과하게 된다.

따라서 가장 긴 안정 예매 구간의 길이는 `4`이다.

## 5. Solution

연속 구간의 최대값과 최소값을 빠르게 관리해야 한다.

이를 위해 두 개의 단조 덱(Monotonic Queue)을 사용한다.

- 최대값 후보를 저장하는 감소 덱
- 최소값 후보를 저장하는 증가 덱

오른쪽 포인터를 이동시키며 새로운 값을 구간에 포함한다.

현재 구간에서

```text
최대값 - 최소값 > K
```

가 되면 왼쪽 포인터를 이동시켜 조건을 만족할 때까지 구간을 줄인다.

각 원소는 덱에 최대 한 번 삽입되고 한 번 제거되므로 전체 시간 복잡도는 선형이다.

따라서 시간 복잡도는

```text
O(N)
```

이며,

덱에 인덱스를 저장하므로 공간 복잡도는

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
