---
external : false
title : "Music playlist harmony"
tag : [Python]
date : 2026-06-15
---

## 1. Problem

한 음원 스트리밍 서비스는 플레이리스트의 몰입도를 측정하기 위해 "조화 점수"를 계산한다.

각 곡에는 정수 형태의 만족도 점수가 부여되어 있다.

서비스는 연속된 곡 구간 하나를 선택하여 플레이리스트의 조화 점수를 측정한다.

조화 점수 계산 규칙은 다음과 같다.

- 플레이리스트에서 연속된 곡 구간을 하나 선택한다.
- 선택한 구간의 조화 점수는 구간 내 만족도 점수의 합이다.
- 단, 광고 정책 때문에 선택한 구간에는 반드시 `K`곡 이상이 포함되어야 한다.
- 또한 구간 내에는 최대 `M`곡까지만 포함될 수 있다.

서비스는 가능한 모든 연속 구간 중 조화 점수의 최댓값을 구하려고 한다.

조화 점수의 최댓값을 출력하여라.

### 입력

첫째 줄에 곡 수 `N`, 최소 길이 `K`, 최대 길이 `M`이 주어진다.

둘째 줄에 각 곡의 만족도를 의미하는 정수 `N`개가 공백으로 구분되어 주어진다.

### 출력

길이가 `K` 이상 `M` 이하인 연속 구간의 만족도 합 중 최댓값을 출력한다.

### 제한사항

- 1 ≤ K ≤ M ≤ N ≤ 200,000
- -10^9 ≤ Ai ≤ 10^9

---

## 2. Input Example

### Example 1

```text
8 2 4
3 -2 5 -1 4 -3 2 1
```

### Example 2

```text
5 1 2
-4 -2 -7 -1 -5
```

---

## 3. Output Example

### 3.1. Example 1

```text
8
```

### 3.2. Example 2

```text
-1
```

---

## 4. Explanation

### 4.1. Example 1

길이가 2 이상 4 이하인 구간을 살펴보면

- [3, -2] = 1
- [3, -2, 5] = 6
- [5, -1, 4] = 8
- [-1, 4, -3, 2] = 2

등이 존재한다.

이 중 최댓값은

```text
[5, -1, 4] = 8
```

이다.

### 4.2. Example 2

길이가 1 이상 2 이하인 구간 중

```text
[-1]
```

의 합이 가장 크다.

따라서 정답은

```text
-1
```

이다.

---

## 5. Solution

구간 합 문제이므로 누적합을 사용한다.

구간 [l, r]의 합은

```text
prefix[r] - prefix[l - 1]
```

로 계산할 수 있다.

현재 위치를 `i`라고 할 때

길이가 `K` 이상 `M` 이하인 구간을 만들기 위해서는

```text
i - M <= j <= i - K
```

를 만족하는 시작 직전 누적합 `prefix[j]`를 선택해야 한다.

그러면 구간 합은

```text
prefix[i] - prefix[j]
```

가 된다.

따라서 각 위치 `i`마다

구간

```text
prefix[i-M ... i-K]
```

중 최소 누적합을 빠르게 찾아야 한다.

이를 위해 단조 증가 덱(Monotonic Queue)을 사용한다.

과정은 다음과 같다.

1. 누적합 배열 생성
2. 각 위치 i 순회
3. 사용 가능한 prefix 인덱스를 덱에 추가
4. 범위를 벗어난 인덱스 제거
5. 덱의 맨 앞(최소 누적합)을 이용해 최댓값 계산

각 인덱스는 한 번만 삽입되고 한 번만 제거되므로 전체 시간 복잡도는 O(N)이다.

---

## 6. Python Code

```python
import sys
from collections import deque

input = sys.stdin.readline

N, K, M = map(int, input().split())
arr = list(map(int, input().split()))

prefix = [0] * (N + 1)

for i in range(N):
    prefix[i + 1] = prefix[i] + arr[i]

dq = deque()
answer = -10**30

for i in range(K, N + 1):
    idx = i - K

    while dq and prefix[dq[-1]] >= prefix[idx]:
        dq.pop()

    dq.append(idx)

    while dq and dq[0] < i - M:
        dq.popleft()

    answer = max(answer, prefix[i] - prefix[dq[0]])

print(answer)
```

---

## 7. Complexity Analysis

- 누적합 계산: O(N)
- 덱 유지 및 최댓값 탐색: O(N)

총 시간 복잡도

```text
O(N)
```

공간 복잡도

```text
O(N)
```
