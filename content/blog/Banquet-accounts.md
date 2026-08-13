---
external : false
title : "Banquet accounts"
tag : [Python]
date : 2026-08-13
---

## 1. Problem

한 고대 왕국의 궁전에서는 수많은 귀족들이 매일 연회를 열고 있었다.

기록관은 연회에 참석한 인원의 수를 순서대로 기록하였으며, `Guestsi`는 `i`번째 날의 참석 인원을 의미한다.

왕궁 재무관은 특정 기간 동안 소비된 식량 규모를 분석하기 위해 연속된 날짜 구간을 조사한다.

어떤 연속 구간 `[l, r]`의 연회 규모는 해당 구간 참석 인원의 합으로 정의된다.

```text
Guests[l] + Guests[l+1] + ... + Guests[r]
```

재무관은 연회 규모가 `K` 이상인 연속 구간의 개수를 계산하려고 한다.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Guests1, Guests2, ..., GuestsN`이 공백으로 구분되어 주어진다.

### 출력

연회 규모가 `K` 이상인 연속 구간의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Guestsi ≤ 10^9`
- `1 ≤ K ≤ 10^18`

---

## 2. Input Example

### Example 1

```text
5 10
2 3 5 4 6
```

### Example 2

```text
4 15
3 2 4 1
```

---

## 3. Output Example

### 3.1. Example 1

```text
8
```

### 3.2. Example 2

```text
0
```

---

## 4. Explanation

### 4.1. Example 1

조건을 만족하는 구간은 다음과 같다.

```text
[1,3]
[1,4]
[1,5]
[2,4]
[2,5]
[3,4]
[3,5]
[4,5]
```

총 개수는

```text
8
```

개이다.

### 4.2. Example 2

어떤 연속 구간도 참석 인원 합이

```text
15
```

이상이 되지 않는다.

따라서 정답은

```text
0
```

이다.

---

## 5. Answer

```python
import sys

input = sys.stdin.readline

N, K = map(int, input().split())
Guests = list(map(int, input().split()))

answer = 0
current_sum = 0
right = 0

for left in range(N):
    while right < N and current_sum < K:
        current_sum += Guests[right]
        right += 1

    if current_sum >= K:
        answer += N - right + 1

    current_sum -= Guests[left]

print(answer)
```
