---
external : false
title : "Sacred fragments"
tag : [Python]
date : 2026-08-04
---

## 1. Problem

전설의 용사는 마왕을 물리치기 위해 성검의 조각을 모으고 있다.

성검은 총 `N`개의 조각으로 나뉘어 있으며, 각 조각의 신성한 힘은 Bisto로 주어진다.

용사는 연속된 구간의 조각들을 하나로 합쳐 임시 무기를 만들 수 있다.

하나의 무기의 힘은 해당 구간에 포함된 조각 힘의 합으로 정의된다.

용사는 정확히 `K` 이상의 힘을 가진 무기를 만들 수 있는 연속 구간의 개수를 알고 싶어 한다.

즉, 구간 `[l, r]`에 대해

```text
Bisto[l] + Bisto[l+1] + ... + Bisto[r] >= K
```

를 만족하는 연속 구간의 개수를 구하여라.

### 입력

첫째 줄에 정수 `N`, `K`가 주어진다.

둘째 줄에 `N`개의 정수 `Bisto1, Bisto2, ..., BistoN`이 공백으로 구분되어 주어진다.

### 출력

힘의 합이 `K` 이상인 연속 구간의 개수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `1 ≤ Bistoi ≤ 10^9`
- `1 ≤ K ≤ 10^18`

---

## 2. Input Example

### Example 1

```text
5 7
2 3 4 1 5
```

### Example 2

```text
4 10
1 2 3 4
```

---

## 3. Output Example

### 3.1. Example 1

```text
8
```

### 3.2. Example 2

```text
1
```

---

## 4. Explanation

### 4.1. Example 1

조건을 만족하는 구간은 다음과 같다.

```text
[1,3]
[1,4]
[1,5]
[2,3]
[2,4]
[2,5]
[3,5]
[4,5]
```

따라서 가능한 무기의 개수는

```text
8
```

개이다.

### 4.2. Example 2

전체 구간

```text
[1,4]
```

의 합만

```text
10
```

이므로 정답은

```text
1
```

이다.

---

## 5. Answer

### 정답 코드

```python
import sys

input = sys.stdin.readline

N, K = map(int, input().split())
Bisto = list(map(int, input().split()))

answer = 0
current_sum = 0
right = 0

for left in range(N):
    while right < N and current_sum < K:
        current_sum += Bisto[right]
        right += 1

    if current_sum >= K:
        answer += N - right + 1

    current_sum -= Bisto[left]

print(answer)
```
