---
external : false
title : "Lie consistency checker"
tag : [Python]
date : 2026-07-09
---

## 1. Problem

한 조사 기관에서는 여러 사람의 진술을 분석하여 거짓말 여부를 확인하려고 한다.

총 `N`개의 진술이 시간순으로 기록되어 있으며, 각 진술에는 하나의 정수 신뢰도 `Ai`가 부여된다.

연속한 진술들이 모두 일관성을 유지하려면, 해당 구간에서 가장 높은 신뢰도와 가장 낮은 신뢰도의 차이가 `K` 이하이어야 한다.

즉, 어떤 연속 구간 `[l, r]`에 대해

```text
max(A[l...r]) - min(A[l...r]) ≤ K
```

를 만족하면, 이 구간은 하나의 **일관된 진술 구간(Lie Consistency Segment)** 이라고 한다.

조사 기관은 만들 수 있는 모든 일관된 진술 구간 중 가장 긴 구간의 길이를 구하고자 한다.

### 입력

첫째 줄에 진술의 개수 `N`과 허용 가능한 신뢰도 차이 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

조건을 만족하는 가장 긴 일관된 진술 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8 4
15 14 13 16 25 24 22 21
```

### Example 2

```text
10 2
8 9 10 8 9 13 12 11 10 9
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
15 14 13 16
```

에서는

```text
max = 16
min = 13
```

이므로 차이는 `3`으로 조건을 만족한다.

하지만 다음 값 `25`를 포함하면

```text
25 - 13 = 12
```

가 되어 조건을 만족하지 않는다.

따라서 가장 긴 일관된 진술 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
13 12 11 10 9
```

에서는

```text
max = 13
min = 9
```

가 되어 차이가 `4`이므로 조건을 만족하지 않는다.

반면

```text
12 11 10 9
```

의 차이는

```text
12 - 9 = 3
```

으로 역시 조건을 만족하지 않는다.

가장 긴 구간은

```text
8 9 10 8 9
```

이며

```text
max = 10
min = 8
```

이므로 차이는 `2`이고 길이는 `5`이다.

## 5. Solution

투 포인터와 두 개의 단조 덱을 이용한다.

현재 구간의

- 최댓값을 관리하는 감소 덱
- 최솟값을 관리하는 증가 덱

을 유지한다.

오른쪽 포인터를 증가시키면서 현재 값을 덱에 삽입한다.

만약

```text
max - min > K
```

가 되면 왼쪽 포인터를 이동시키며 조건을 다시 만족할 때까지 구간을 줄인다.

매 단계마다

```text
answer = max(answer, right - left + 1)
```

를 갱신하면 된다.

각 원소는 각 덱에 최대 한 번 들어가고 한 번 제거되므로 시간 복잡도는

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
