---
external : false
title : "Adaptive learning schedule"
tag : [Python]
date : 2026-07-04
---

## 1. Problem

한 특수교육센터에서는 지적장애 학생의 학습 집중도를 고려하여 하루 학습 일정을 분석한다.

각 학습 활동에는 난이도 점수 `Ai`가 부여되어 있으며, 학생은 **난이도가 너무 크게 변하지 않는 연속된 활동**을 수행할 때 가장 안정적으로 학습할 수 있다고 알려져 있다.

연속한 두 활동의 난이도 차이가 `D` 이하이면 해당 활동들은 하나의 **적응 학습 구간(Adaptive Learning Schedule)** 에 포함될 수 있다.

즉, 어떤 연속 구간 `[l, r]`에 대해

```text
|Ai - Ai+1| ≤ D
```

를 모든 `l ≤ i < r`에 대해 만족하면, 이 구간은 하나의 적응 학습 구간이 된다.

센터에서는 하루 일정 중 가장 긴 적응 학습 구간의 길이를 구하려고 한다.

---

### 입력

첫째 줄에 활동의 개수 `N`과 기준값 `D`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

---

### 출력

가장 긴 적응 학습 구간의 길이를 출력한다.

---

### 제한사항

- `1 ≤ N ≤ 200,000`
- `0 ≤ D ≤ 10^9`
- `0 ≤ Ai ≤ 10^9`

---

## 2. Input Example

### Example 1

```text
8 2
3 4 6 7 15 16 17 19
```

### Example 2

```text
7 1
5 6 8 9 10 20 21
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

인접한 활동의 난이도 차이는 다음과 같다.

```text
1, 2, 1, 8, 1, 1, 2
```

`8`이 `D = 2`보다 크므로 적응 학습 구간이 끊어진다.

가장 긴 적응 학습 구간은

```text
15 16 17 19
```

이며 길이는 `4`이다.

---

### 4.2. Example 2

인접한 활동의 난이도 차이는 다음과 같다.

```text
1, 2, 1, 1, 10, 1
```

가장 긴 적응 학습 구간은

```text
8 9 10
```

이며 길이는 `3`이다.

---

## 5. Solution

연속한 두 활동의 난이도 차이가 `D` 이하이면 현재 적응 학습 구간을 계속 이어갈 수 있다.

반대로 차이가 `D`보다 크면 새로운 적응 학습 구간이 시작된다.

따라서 배열을 왼쪽부터 한 번만 순회하면서

- 현재 구간의 길이 `current`
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
