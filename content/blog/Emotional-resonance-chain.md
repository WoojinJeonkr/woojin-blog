---
external : false
title : "Emotional resonance chain"
tag : [Python]
date : 2026-06-20
---

## 1. Problem

한 연구소에서는 사람들의 감정이 서로에게 전염되는 현상을 분석하고 있다.

총 `N`명의 사람이 일렬로 앉아 있으며, 각 사람은 하나의 감정 점수 `Ai`를 가진다.

연구 결과에 따르면, 연속한 사람들의 감정 점수 차이가 `D` 이하라면 서로 공감(emotional resonance)하여 하나의 감정 집단을 형성한다.

즉, 어떤 연속 구간 `[l, r]`에 대해

```text
|Ai - Ai+1| ≤ D
```

를 모든 `l ≤ i < r`에 대해 만족하면, 이 구간은 하나의 감정 공명 체인(Emotional Resonance Chain)이 된다.

연구원은 사람들의 감정 데이터를 분석하기 위해 다음 값을 구하고자 한다.

> 만들 수 있는 모든 감정 공명 체인 중 가장 긴 체인의 길이

---

### 입력

첫째 줄에 사람의 수 `N`과 기준값 `D`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

---

### 출력

가장 긴 감정 공명 체인의 길이를 출력한다.

---

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ D ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
7 3
10 12 15 30 31 29 28
```

### Example 2

```text
8 2
5 7 8 10 20 21 22 30
```

---

## 3. Output Example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
4
```

---

## 4. Explanation

### 4.1. Example 1

인접한 감정 점수 차이는 다음과 같다.

```text
|10 - 12| = 2
|12 - 15| = 3
|15 - 30| = 15
|30 - 31| = 1
|31 - 29| = 2
|29 - 28| = 1
```

`15`가 `D = 3`보다 크므로 체인이 끊어진다.

따라서 가장 긴 감정 공명 체인은

```text
30 31 29 28
```

이며 길이는 `4`이다.

---

### 4.2. Example 2

인접한 감정 점수 차이는 다음과 같다.

```text
2, 1, 2, 10, 1, 1, 8
```

가장 긴 감정 공명 체인은

```text
5 7 8 10
```

또는

```text
20 21 22
```

중 첫 번째이며 길이는 `4`이다.

---

## 5. Solution

연속한 두 사람의 감정 점수 차이가 `D` 이하이면 현재 체인을 계속 이어갈 수 있다.

반대로 차이가 `D`보다 크면 새로운 체인이 시작된다.

따라서 배열을 왼쪽부터 한 번만 순회하면서

- 현재 체인의 길이 `current`
- 지금까지의 최대 길이 `answer`

를 관리하면 된다.

```text
if |Ai - Ai-1| ≤ D:
    current += 1
else:
    current = 1
```

매 단계마다

```text
answer = max(answer, current)
```

를 갱신하면 된다.

배열을 한 번만 순회하므로 시간 복잡도는

```text
O(N)
```

이며 추가 공간은 상수 개만 사용하므로

```text
O(1)
```

이다.

---

## 6. Python Code

```python
import sys

input = sys.stdin.readline

N, D = map(int, input().split())
A = list(map(int, input().split()))

answer = 1
current = 1

for i in range(1, N):
    if abs(A[i] - A[i - 1]) <= D:
        current += 1
    else:
        current = 1

    answer = max(answer, current)

print(answer)
```
