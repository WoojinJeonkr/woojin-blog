---
external : false
title : "Neglected trainee recovery"
tag : [Python]
date : 2026-07-28
---

## 1. Problem

한 개발팀에는 `N`명의 신입사원이 입사 순서대로 배치되어 있다.

각 신입사원은 지금까지 받은 피드백 횟수 `Ai`를 가진다.

팀장은 **피드백을 너무 오래 받지 못한 신입사원들이 연속해서 나타나는 구간**을 확인하여 집중 관리하려고 한다.

어떤 연속 구간에서

```text
(구간 내 최대 피드백 횟수) - (구간 내 최소 피드백 횟수) ≤ K
```

를 만족하면, 해당 구간은 **회복 가능한 방치 구간**이라고 한다.

팀장은 회복 가능한 방치 구간 중 가장 많은 신입사원을 포함하는 구간의 크기를 알고 싶다.

---

### 입력

첫째 줄에 신입사원의 수 `N`과 기준값 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

---

### 출력

회복 가능한 방치 구간에 포함될 수 있는 신입사원의 최대 수를 출력한다.

---

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
8 2
3 4 5 3 10 11 12 10
```

### Example 2

```text
10 1
7 8 8 7 9 10 10 9 8 8
```

---

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
3
```

---

## 4. Explanation

### 4.1. Example 1

구간

```text
3 4 5 3
```

에서는

```text
최대값 = 5
최소값 = 3
차이 = 2
```

이므로 조건을 만족한다.

하지만 다음 원소 `10`을 포함하면

```text
최대값 = 10
최소값 = 3
차이 = 7
```

이 되어 조건을 만족하지 않는다.

따라서 가능한 가장 긴 회복 가능한 방치 구간의 길이는 `4`이다.

---

### 4.2. Example 2

구간

```text
7 8 8
```

은 최대값과 최소값의 차이가 `1`이므로 조건을 만족한다.

길이가 `4` 이상인 모든 연속 구간은 최대값과 최소값의 차이가 `1`을 초과하므로 조건을 만족하지 않는다.

따라서 정답은 `3`이다.

---

## 5. Solution

연속 구간의 최대값과 최소값을 빠르게 관리하기 위해 두 개의 덱을 사용한다.

- 최대값 후보를 저장하는 내림차순 덱
- 최소값 후보를 저장하는 오름차순 덱

오른쪽 포인터를 한 칸씩 증가시키며 새로운 값을 덱에 추가한다.

현재 구간에서

```text
최대값 - 최소값 > K
```

가 되면 왼쪽 포인터를 이동시키며 조건을 만족할 때까지 구간을 줄인다.

매 단계마다 현재 구간의 길이를 계산하여 최댓값을 갱신한다.

각 원소는 덱에 한 번 들어가고 한 번만 제거되므로 전체 시간 복잡도는

```text
O(N)
```

이며,

덱을 저장하기 위한 공간 복잡도는

```text
O(N)
```

이다.

---

## 6. Python Code

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
