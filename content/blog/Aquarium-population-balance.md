---
external : false
title : "Aquarium population balance"
tag : [Python]
date : 2026-08-01
---

## 1. Problem

한 수족관에는 일렬로 배치된 `N`개의 어항이 있다.

각 어항에는 물고기가 `Ai`마리 들어 있다.

수족관 관리자는 특정 구간의 어항들이 적절하게 균형을 이루고 있는지 확인하려고 한다.

어떤 연속 구간 `[l, r]`에 대해

```text
(구간 내 가장 많은 물고기가 있는 어항의 수) -
(구간 내 가장 적은 물고기가 있는 어항의 수)
≤ K
```

를 만족하면 해당 구간을 **균형 어항 구간(Balanced Aquarium Segment)** 이라고 한다.

관리자는 만들 수 있는 모든 균형 어항 구간 중 가장 긴 구간의 길이를 구하려고 한다.

### 입력

첫째 줄에 어항의 개수 `N`과 기준값 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가장 긴 균형 어항 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 5
20 22 18 21 40 42 41 39
```

### Example 2

```text
10 3
15 16 17 15 14 25 26 24 27 28
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
20 22 18 21
```

에서는

```text
최대값 = 22
최소값 = 18
차이 = 4
```

이므로 조건을 만족한다.

하지만 다음 어항 `40`을 포함하면

```text
최대값 = 40
최소값 = 18
차이 = 22
```

가 되어 조건을 만족하지 않는다.

뒤의 구간

```text
40 42 41 39
```

도

```text
42 - 39 = 3
```

이므로 조건을 만족한다.

따라서 가장 긴 균형 어항 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
15 16 17 15 14
```

에서는

```text
최대값 = 17
최소값 = 14
차이 = 3
```

이므로 조건을 만족한다.

길이가 6 이상인 구간은 최대값과 최소값의 차이가 `3`을 초과하게 된다.

따라서 가장 긴 균형 어항 구간의 길이는 `5`이다.

## 5. Solution

연속 구간의 최대값과 최소값을 빠르게 관리해야 한다.

이를 위해 두 개의 단조 덱(Monotonic Queue)을 사용한다.

- 최대값 후보를 저장하는 감소 덱
- 최소값 후보를 저장하는 증가 덱

오른쪽 포인터를 증가시키면서 새로운 어항을 현재 구간에 포함한다.

현재 구간에서

```text
최대값 - 최소값 > K
```

가 되면 왼쪽 포인터를 이동시켜 조건을 다시 만족하도록 만든다.

각 원소는 덱에 한 번 들어가고 한 번 제거되므로 전체 연산은 선형 시간에 수행된다.

따라서 시간 복잡도는

```text
O(N)
```

이며,

덱을 저장하기 위한 공간 복잡도는

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
