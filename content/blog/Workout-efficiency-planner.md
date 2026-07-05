---
external : false
title : "Workout efficiency planner"
tag : [Python]
date : 2026-07-05
---

## 1. Problem

한 피트니스 센터에서는 회원들의 운동 효율을 분석하고 있다.

회원은 총 `N`일 동안 운동하며, `i`번째 날의 운동 효율 점수는 `Ai`이다.

트레이너는 일정 기간 동안의 운동 성과를 평가하기 위해 연속한 날짜의 평균 운동 효율을 확인하려고 한다.

길이가 정확히 `K`인 연속 구간 중 평균 운동 효율이 가장 높은 값을 구하여라.

## 입력

첫째 줄에 운동한 날짜 수 `N`과 구간의 길이 `K`가 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

## 출력

길이가 정확히 `K`인 연속 구간 중 평균 운동 효율의 최댓값을 출력한다.

평균은 소수점 없이 계산할 수 있도록 최대 구간 합을 출력한다.

## 제한사항

- `1 ≤ K ≤ N ≤ 200,000`
- `0 ≤ Ai ≤ 10^6`

## 2. Input Example

### Example 1

```text
8 3
5 8 6 10 9 4 7 8
```

### Example 2

```text
7 2
3 5 2 8 6 4 7
```

## 3. Output Example

### 3.1. Example 1

```text
25
```

### 3.2. Example 2

```text
14
```

## 4. Explanation

### 4.1. Example 1

길이가 3인 연속 구간의 합은 다음과 같다.

```text
5+8+6 = 19
8+6+10 = 24
6+10+9 = 25
10+9+4 = 23
9+4+7 = 20
4+7+8 = 19
```

가장 큰 합은

```text
6 10 9
```

구간의 `25`이다.

### 4.2. Example 2

길이가 2인 연속 구간의 합은

```text
8
7
10
14
10
11
```

가장 큰 값은

```text
8 + 6 = 14
```

이다.

## 5. Solution

처음 `K`개의 운동 효율 합을 계산한 뒤 이를 현재 구간 합으로 사용한다.

이후 오른쪽으로 한 칸씩 이동하면서

- 새로 포함되는 값을 더하고
- 구간에서 제외되는 값을 빼면

다음 구간의 합을 `O(1)`에 계산할 수 있다.

매 이동마다 최대 구간 합을 갱신하면 된다.

```text
current += A[i]
current -= A[i-K]
answer = max(answer, current)
```

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

N, K = map(int, input().split())
A = list(map(int, input().split()))

current = sum(A[:K])
answer = current

for i in range(K, N):
    current += A[i]
    current -= A[i - K]
    answer = max(answer, current)

print(answer)
```
