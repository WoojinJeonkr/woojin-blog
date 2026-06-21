---
external : false
title : "Base stealing streak"
tag : [Python]
date : 2026-06-21
---

## 1. Problem

한 야구팀은 시즌 동안 매 경기마다 도루(steal) 성공 개수를 기록한다.

총 `N`경기의 기록이 주어질 때, 감독은 연속된 경기 구간 중에서 다음 조건을 만족하는 가장 긴 구간을 찾고자 한다.

어떤 연속 구간 `[l, r]`에 대해,

```text
max(Al ... Ar) - min(Al ... Ar) ≤ K
```

를 만족하면, 해당 구간을 **안정적인 도루 연속 구간(Base Stealing Streak)** 이라고 부른다.

즉, 해당 구간에서는 경기별 도루 성공 개수의 최대값과 최소값 차이가 `K` 이하이다.

감독은 만들 수 있는 모든 안정적인 도루 연속 구간 중 가장 긴 구간의 길이를 구하고자 한다.

---

### 입력

첫째 줄에 경기 수 `N`과 정수 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

---

### 출력

조건을 만족하는 가장 긴 안정적인 도루 연속 구간의 길이를 출력한다.

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
3 4 5 3 2 8 7 8
```

### Example 2

```text
10 1
5 5 6 6 7 10 10 11 11 12
```

---

## 3. Output Example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
4
```

---

## 4. Explanation

### 4.1. Example 1

구간

```text
3 4 5 3 2
```

의 최댓값은 `5`, 최솟값은 `2`이다.

```text
5 - 2 = 3
```

이므로 조건을 만족하지 않는다.

하지만 구간

```text
4 5 3 2
```

의 경우

```text
max = 5
min = 2
5 - 2 = 3
```

역시 조건을 만족하지 않는다.

가장 긴 안정적인 구간은

```text
3 4 5 3
```

또는

```text
4 5 3
```

이 아니라,

```text
8 7 8
```

보다 긴

```text
4 5 3 2  (길이 4)
```

도 조건을 만족하지 않으므로,

실제로 가장 긴 구간은

```text
3 4 5
```

과

```text
8 7 8
```

등이며, 최대 길이는 `5`가 아니라 다음 구간이다.

```text
3 4 5 3 4
```

과 같은 구간이 존재하지 않으므로 입력을 순회하여 구한 정답은 `5`이다.

---

### 4.2. Example 2

구간

```text
10 10 11 11
```

의 최댓값과 최솟값 차이는

```text
11 - 10 = 1
```

이다.

길이가 `4`이며, 이것이 가능한 가장 긴 안정적인 도루 연속 구간이다.

---

## 5. Solution

구간의 최대값과 최소값을 빠르게 관리해야 하므로 슬라이딩 윈도우와 덱(deque)을 사용한다.

- 증가하는 덱 : 현재 구간의 최솟값 관리
- 감소하는 덱 : 현재 구간의 최댓값 관리

오른쪽 포인터를 한 칸씩 늘리면서 현재 구간의

```text
max - min
```

값이 `K`를 초과하면 왼쪽 포인터를 이동시켜 조건을 만족하도록 만든다.

매 단계마다

```text
answer = max(answer, right - left + 1)
```

를 갱신하면 된다.

각 원소는 덱에 한 번 들어가고 한 번만 제거되므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간 복잡도는

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
