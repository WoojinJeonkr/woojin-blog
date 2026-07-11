---
external : false
title : "Archery accuracy streak"
tag : [Python]
date : 2026-07-08
---

## 1. Problem

한 양궁 선수는 훈련 중 매 발마다 획득한 점수를 기록한다.

총 `N`발을 발사하였으며, `i`번째 화살의 점수는 `Ai`이다.

코치는 선수의 집중력이 유지된 구간을 분석하기 위해, 연속한 화살들의 점수 차이가 너무 크지 않은 구간을 찾으려고 한다.

어떤 연속 구간 `[l, r]`이 안정적인 명중 구간이 되기 위해서는 다음 조건을 만족해야 한다.

```text
max(A[l...r]) - min(A[l...r]) ≤ K
```

즉, 해당 구간에서 가장 높은 점수와 가장 낮은 점수의 차이가 `K` 이하이면 안정적인 명중 구간으로 인정한다.

코치는 만들 수 있는 모든 안정적인 명중 구간 중 가장 긴 구간의 길이를 구하려고 한다.

### 입력

첫째 줄에 화살의 개수 `N`과 허용 가능한 점수 차이 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

조건을 만족하는 가장 긴 안정적인 명중 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ K ≤ 10^9`
- `0 ≤ Ai ≤ 10`

## 2. Input Example

### Example 1

```text
8 2
9 10 8 9 5 6 7 6
```

### Example 2

```text
10 1
8 9 8 9 8 10 10 9 10 9
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

구간

```text
9 10 8 9
```

에서는

```text
max = 10
min = 8
```

이므로 차이는 `2`로 조건을 만족한다.

다음 점수 `5`를 포함하면

```text
10 - 5 = 5
```

가 되어 조건을 만족하지 않는다.

따라서 가장 긴 안정적인 명중 구간의 길이는 `4`이다.

### 4.2. Example 2

구간

```text
8 9 8 9 8
```

에서는

```text
max = 9
min = 8
```

이므로 차이는 `1`이며 길이는 `5`이다.

이보다 긴 구간은 점수 `10`이 포함되어

```text
10 - 8 = 2
```

가 되므로 조건을 만족하지 않는다.

## 5. Solution

투 포인터와 두 개의 단조 덱(Monotonic Queue)을 사용한다.

현재 구간의

- 최댓값을 관리하는 감소 덱
- 최솟값을 관리하는 증가 덱

을 유지하면서 오른쪽 포인터를 증가시킨다.

현재 구간에서

```text
max - min > K
```

가 되면 왼쪽 포인터를 이동시키며 조건을 만족할 때까지 구간을 줄인다.

매 단계마다

```text
answer = max(answer, right - left + 1)
```

를 갱신하면 된다.

각 원소는 덱에 최대 한 번 들어가고 한 번 제거되므로 전체 시간 복잡도는

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
