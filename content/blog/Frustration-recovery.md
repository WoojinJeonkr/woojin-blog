---
external : false
title : "Frustration recovery"
tag : [Python]
date : 2026-06-21
---

## 1. Problem

한 심리 연구소에서는 사람들의 좌절감이 시간이 지나면서 어떻게 회복되는지 분석하고 있다.

총 `N`일 동안 한 사람의 좌절 지수 `Ai`가 기록되어 있다.

연구 결과에 따르면, 연속된 기간 동안 좌절 지수가 계속 감소하거나 유지된다면 심리적으로 회복이 이루어지고 있는 것으로 판단한다.

즉, 어떤 연속 구간 `[l, r]`에 대해

```text
Ai ≥ Ai+1
```

를 모든 `l ≤ i < r`에 대해 만족하면, 이 구간을 **좌절 회복 구간(Frustration Recovery)** 이라고 한다.

연구원은 만들 수 있는 모든 좌절 회복 구간 중 가장 긴 구간의 길이를 구하고자 한다.

### 입력

첫째 줄에 날짜 수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가장 긴 좌절 회복 구간의 길이를 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8
90 85 85 80 82 81 79 78
```

### Example 2

```text
7
100 95 90 91 88 87 86
```

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
4
```

## 4. Explanation

### 4.1. Example 1

좌절 지수의 변화는 다음과 같다.

```text
90 → 85 ↓
85 → 85 =
85 → 80 ↓
80 → 82 ↑
82 → 81 ↓
81 → 79 ↓
79 → 78 ↓
```

`80 → 82`에서 좌절 지수가 증가하므로 회복 구간이 끊어진다.

가장 긴 좌절 회복 구간은

```text
90 85 85 80
```

이며 길이는 `4`이다.

### 4.2. Example 2

좌절 지수의 변화는 다음과 같다.

```text
100 → 95 ↓
95 → 90 ↓
90 → 91 ↑
91 → 88 ↓
88 → 87 ↓
87 → 86 ↓
```

가장 긴 좌절 회복 구간은

```text
91 88 87 86
```

이며 길이는 `4`이다.

## 5. Solution

연속한 두 날짜의 좌절 지수를 비교한다.

현재 값이 이전 값보다 작거나 같으면 현재 회복 구간을 이어갈 수 있다.

반대로 좌절 지수가 증가하면 새로운 회복 구간이 시작된다.

배열을 한 번만 순회하면서

- 현재 회복 구간의 길이 `current`
- 지금까지의 최대 길이 `answer`

를 관리하면 된다.

```text
if Ai <= Ai-1:
    current += 1
else:
    current = 1
```

매 단계마다

```text
answer = max(answer, current)
```

를 갱신한다.

배열을 한 번만 순회하므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간은

```text
O(1)
```

이다.

## 6. Answer

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

answer = 1
current = 1

for i in range(1, N):
    if A[i] <= A[i - 1]:
        current += 1
    else:
        current = 1

    answer = max(answer, current)

print(answer)
```
