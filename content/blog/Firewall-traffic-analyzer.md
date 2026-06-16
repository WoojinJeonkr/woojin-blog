---
external : false
title : "Firewall traffic analyzer"
tag : [Python]
date : 2026-06-16
---

## 1. Problem

한 기업의 방화벽은 네트워크 패킷을 실시간으로 검사한다.

각 패킷에는 위험도를 나타내는 정수 점수가 부여된다.

보안팀은 특정 시간 구간을 선택하여 공격 가능성을 분석하려고 한다.

연속된 패킷 구간의 위험도는 해당 구간에 포함된 패킷 위험도의 합으로 정의된다.

단, 너무 짧은 구간은 의미가 없으므로 선택한 구간에는 반드시 `K`개 이상의 패킷이 포함되어야 한다.

또한 분석 비용 때문에 선택 가능한 구간 길이는 최대 `M`개를 초과할 수 없다.

보안팀은 가능한 모든 연속 구간 중 위험도 합의 최댓값을 구하려고 한다.

위험도 합의 최댓값을 출력하여라.

### 입력

첫째 줄에 패킷 수 `N`, 최소 길이 `K`, 최대 길이 `M`이 주어진다.

둘째 줄에 각 패킷의 위험도를 의미하는 정수 `N`개가 공백으로 구분되어 주어진다.

### 출력

길이가 `K` 이상 `M` 이하인 연속 구간의 위험도 합 중 최댓값을 출력한다.

### 제한사항

- 1 ≤ K ≤ M ≤ N ≤ 300,000
- -10^9 ≤ Ai ≤ 10^9

---

## 2. Input Example

### Example 1

```text
10 3 5
4 -2 7 -3 5 -1 2 -6 8 1
```

### Example 2

```text
6 2 3
-8 -4 -2 -7 -5 -3
```

---

## 3. Output Example

### 3.1. Example 1

```text
11
```

### 3.2. Example 2

```text
-6
```

---

## 4. Explanation

### 4.1. Example 1

길이가 3 이상 5 이하인 구간 중

```text
[4, -2, 7, -3, 5] = 11
```

의 위험도 합이 가장 크다.

따라서 정답은

```text
11
```

이다.

### 4.2. Example 2

가능한 구간들을 살펴보면

```text
[-4, -2] = -6
[-2, -7] = -9
[-5, -3] = -8
```

등이 존재한다.

이 중 최댓값은

```text
-6
```

이다.

---

## 5. Solution

연속 구간의 합을 빠르게 계산하기 위해 누적합 배열을 사용한다.

구간 `[l, r]`의 합은

```text
prefix[r] - prefix[l - 1]
```

로 계산할 수 있다.

현재 위치를 `i`라고 할 때 길이가 `K` 이상 `M` 이하인 구간을 만들기 위해서는

```text
i - M <= j <= i - K
```

를 만족하는 시작 직전 위치 `j`를 선택해야 한다.

그러면 구간 합은

```text
prefix[i] - prefix[j]
```

가 된다.

따라서 각 위치 `i`마다

```text
prefix[i-M ... i-K]
```

구간에서 가장 작은 누적합을 찾아야 한다.

최솟값을 빠르게 관리하기 위해 단조 증가 덱(Monotonic Queue)을 사용한다.

과정은 다음과 같다.

1. 누적합 배열 생성
2. 각 위치 i 순회
3. 새롭게 사용 가능한 prefix 인덱스를 덱에 추가
4. 범위를 벗어난 인덱스 제거
5. 덱의 맨 앞에 있는 최소 누적합으로 최댓값 계산

각 인덱스는 최대 한 번 삽입되고 한 번 제거되므로 전체 시간 복잡도는 O(N)이다.

---

## 6. Python Code

```python
import sys
from collections import deque

input = sys.stdin.readline

N, K, M = map(int, input().split())
risk = list(map(int, input().split()))

prefix = [0] * (N + 1)

for i in range(N):
    prefix[i + 1] = prefix[i] + risk[i]

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
