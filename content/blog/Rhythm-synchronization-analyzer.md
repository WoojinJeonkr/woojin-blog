---
external : false
title : "Rhythm synchronization analyzer"
tag : [Python]
date : 2026-06-29
---

## 1. Problem

한 음악 제작 프로그램에서는 여러 악기의 연주 박자를 분석하고 있다.

총 `N`개의 박자 이벤트가 시간 순서대로 기록되어 있으며, 각 이벤트의 박자 강도는 정수 `Ai`로 표현된다.

프로그램은 연속한 구간의 박자들이 얼마나 안정적으로 유지되는지 측정하기 위해 다음과 같은 규칙을 정의하였다.

어떤 연속 구간 `[l, r]`에 대해,

```text
max(A[l..r]) - min(A[l..r]) ≤ K
```

를 만족하면 이 구간을 **동기화된 박자 구간(Synchronized Rhythm Segment)** 이라고 한다.

프로듀서는 모든 동기화된 박자 구간 중 가장 긴 구간의 길이를 구하고자 한다.

---

### 입력

첫째 줄에 박자 이벤트의 개수 `N`과 기준값 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

---

### 출력

만들 수 있는 가장 긴 동기화된 박자 구간의 길이를 출력한다.

---

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
8 4
10 12 11 13 20 22 21 23
```

### Example 2

```text
10 3
5 6 8 7 9 15 16 18 17 19
```

---

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
5
```

---

## 4. Explanation

### 4.1. Example 1

구간

```text
10 12 11 13
```

에서는

```text
최댓값 = 13
최솟값 = 10
차이 = 3
```

이므로 조건을 만족한다.

하지만 `20`이 포함되면

```text
20 - 10 = 10
```

이 되어 조건을 만족하지 못한다.

따라서 가장 긴 동기화된 박자 구간의 길이는 `4`이다.

---

### 4.2. Example 2

처음 다섯 개의 박자

```text
5 6 8 7 9
```

에 대해

```text
최댓값 = 9
최솟값 = 5
차이 = 4
```

이므로 전체 구간은 조건을 만족하지 않는다.

하지만

```text
6 8 7 9
```

에서는

```text
최댓값 = 9
최솟값 = 6
차이 = 3
```

이므로 길이 `4`의 구간이 된다.

또한

```text
15 16 18 17 19
```

에서는

```text
최댓값 = 19
최솟값 = 15
차이 = 4
```

이므로 조건을 만족하지 않는다.

가장 긴 동기화된 구간은

```text
15 16 18 17
```

또는

```text
16 18 17 19
```

등이며 길이는 `5`가 된다.

---

## 5. Solution

연속 구간의 최댓값과 최솟값의 차이가 `K` 이하인 가장 긴 구간을 찾아야 한다.

슬라이딩 윈도우와 두 개의 덱(deque)을 사용한다.

- `maxDeque` : 현재 구간의 최댓값 후보를 내림차순으로 유지
- `minDeque` : 현재 구간의 최솟값 후보를 오름차순으로 유지

오른쪽 포인터를 한 칸씩 늘리면서 현재 구간의 최댓값과 최솟값을 갱신한다.

만약

```text
현재 최댓값 - 현재 최솟값 > K
```

가 되면 왼쪽 포인터를 이동시키며 조건을 다시 만족시킨다.

매 순간

```text
answer = max(answer, right - left + 1)
```

을 갱신하면 된다.

각 원소는 덱에 한 번 들어가고 한 번만 제거되므로 전체 시간 복잡도는

```text
O(N)
```

이고, 추가 공간 복잡도는

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

max_deque = deque()
min_deque = deque()

left = 0
answer = 0

for right in range(N):
    while max_deque and A[max_deque[-1]] < A[right]:
        max_deque.pop()
    max_deque.append(right)

    while min_deque and A[min_deque[-1]] > A[right]:
        min_deque.pop()
    min_deque.append(right)

    while A[max_deque[0]] - A[min_deque[0]] > K:
        if max_deque[0] == left:
            max_deque.popleft()
        if min_deque[0] == left:
            min_deque.popleft()
        left += 1

    answer = max(answer, right - left + 1)

print(answer)
```
