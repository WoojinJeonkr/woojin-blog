---
external : false
title : "Friday overtime streak"
tag : [Python]
date : 2026-07-30
---

## 1. Problem

한 회사에서는 매주 금요일마다 직원들의 야근 시간을 기록한다.

총 `N`주 동안의 기록이 있으며, `Ai`는 `i`번째 금요일의 야근 시간(분)을 의미한다.

인사팀은 특정 기간 동안 야근 패턴이 안정적이었는지 분석하려고 한다.

어떤 연속한 금요일 구간 `[l, r]`에 대해

```text
(구간 내 최대 야근 시간) - (구간 내 최소 야근 시간) ≤ K
```

를 만족하면, 해당 구간을 **안정 금요일 연속 구간(Friday Overtime Streak)** 이라고 한다.

인사팀은 만들 수 있는 모든 안정 금요일 연속 구간 중 가장 긴 구간의 길이를 구하려고 한다.

### 입력

첫째 줄에 금요일 기록 수 `N`과 기준값 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가장 긴 안정 금요일 연속 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 20
120 130 125 135 200 210 205 195
```

### Example 2

```text
10 10
80 85 82 88 120 125 130 90 92 95
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

앞의 네 주

```text
120 130 125 135
```

에서는

```text
최대값 = 135
최소값 = 120
차이 = 15
```

이므로 조건을 만족한다.

하지만 다음 값 `200`을 포함하면

```text
최대값 = 200
최소값 = 120
차이 = 80
```

이 되어 조건을 만족하지 않는다.

뒤의 네 주

```text
200 210 205 195
```

도

```text
210 - 195 = 15
```

이므로 조건을 만족한다.

따라서 가장 긴 안정 금요일 연속 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
80 85 82
```

에서는

```text
최대값 = 85
최소값 = 80
차이 = 5
```

이므로 조건을 만족한다.

길이가 `4` 이상인 모든 구간은 최대값과 최소값의 차이가 `10`을 초과하게 된다.

따라서 가장 긴 안정 금요일 연속 구간의 길이는 `3`이다.

## 5. Solution

연속 구간의 최대값과 최소값을 빠르게 관리해야 한다.

이를 위해 다음 두 개의 덱을 사용한다.

- 최대값 후보를 저장하는 단조 감소 덱
- 최소값 후보를 저장하는 단조 증가 덱

오른쪽 포인터를 한 칸씩 증가시키면서 현재 금요일 기록을 구간에 포함한다.

만약

```text
현재 최대값 - 현재 최소값 > K
```

가 되면 왼쪽 포인터를 이동시켜 조건을 다시 만족시킨다.

각 원소는 최대 한 번 삽입되고 한 번 제거되므로 전체 연산 수는 선형이다.

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
