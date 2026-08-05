---
external : false
title : "Weekend planner"
tag : [Python]
date : 2026-08-04
---

## 1. Problem

민수는 주말마다 다양한 활동을 계획한다.

앞으로 `N`개의 주말이 예정되어 있으며, 각 주말의 만족도는 `Ai`로 주어진다.

민수는 연속된 주말 구간을 하나 선택하여 여행을 떠나려고 한다.

선택한 구간의 총 만족도는 해당 구간에 포함된 만족도의 합으로 정의된다.

민수는 가능한 모든 연속 구간 중 가장 높은 만족도를 얻고 싶다.

주말 만족도 정보가 주어질 때, 얻을 수 있는 최대 만족도를 구하여라.

### 입력

첫째 줄에 정수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가능한 연속 구간 중 만족도 합의 최댓값을 출력한다.

### 제한사항

- `1 ≤ N ≤ 300,000`
- `-10^9 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8
-2 3 5 -1 4 -7 6 2
```

### Example 2

```text
5
-4 -2 -7 -1 -5
```

## 3. Output Example

### 3.1. Example 1

```text
11
```

### 3.2. Example 2

```text
-1
```

## 4. Explanation

### 4.1. Example 1

최적의 연속 구간은

```text
3 5 -1 4
```

이다.

구간 합은

```text
3 + 5 - 1 + 4 = 11
```

이므로 최대 만족도는 `11`이다.

### 4.2. Example 2

모든 값이 음수인 경우에도 반드시 하나 이상의 주말을 선택해야 한다.

가장 큰 값은

```text
-1
```

이므로 정답은 `-1`이다.

## 5. Answer

### 풀이

연속 구간의 최대 합을 구하는 전형적인 문제이다.

현재 위치에서 끝나는 최대 구간 합을 `current`라고 하자.

새로운 값을 추가할 때

```text
현재 값만 선택
또는
이전 구간에 현재 값을 이어 붙임
```

중 더 큰 값을 선택하면 된다.

이를 모든 위치에 대해 반복하면 최대 연속 부분합을 구할 수 있다.

이 방법은 카데인 알고리즘(Kadane's Algorithm)이라고 하며 `O(N)`에 해결할 수 있다.

### 정답 코드

```python
import sys

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))

current = A[0]
answer = A[0]

for i in range(1, N):
    current = max(A[i], current + A[i])
    answer = max(answer, current)

print(answer)
```
