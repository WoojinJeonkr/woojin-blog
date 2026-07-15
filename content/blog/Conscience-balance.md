---
external : false
title : "Conscience balance"
tag : [Python]
date : 2026-06-20
---

## 1. Problem

한 사람은 하루 동안 여러 번의 선택을 한다.

각 선택은 양심에 영향을 미치며, 선택마다 양심 변화량 `Ai`가 주어진다.

- 양수는 선행을 의미한다.
- 음수는 잘못된 행동을 의미한다.

하루를 되돌아보며 연속된 선택들을 하나의 구간으로 보았을 때,

가장 큰 **양심 점수의 합**을 갖는 연속 구간을 찾고자 한다.

단, 반드시 하나 이상의 선택을 포함해야 한다.

가장 높은 양심 점수의 합을 구하여라.

### 입력

첫째 줄에 선택의 개수 `N`이 주어진다.

둘째 줄에 `N`개의 정수 `A1, A2, ..., AN`이 공백으로 구분되어 주어진다.

### 출력

가장 높은 양심 점수의 합을 출력한다.

### 제한사항

- `1 ≤ N ≤ 200,000`
- `-10^9 ≤ Ai ≤ 10^9`

## 2. Input Example

### Example 1

```text
8
3 -2 5 -1 -4 6 2 -3
```

### Example 2

```text
6
-5 -1 -8 -2 -9 -3
```

## 3. Output Example

### 3.1. Example 1

```text
9
```

### 3.2. Example 2

```text
-1
```

## 4. Explanation

### 4.1. Example 1

가장 높은 양심 점수를 얻는 연속 구간은

```text
6 2
```

이며 합은

```text
6 + 2 = 8
```

이다.

하지만

```text
3 -2 5 -1 -4 6 2
```

의 합은

```text
3 - 2 + 5 - 1 - 4 + 6 + 2 = 9
```

으로 더 크므로 정답은 `9`이다.

### 4.2. Example 2

모든 값이 음수이므로 하나를 반드시 선택해야 한다.

가장 큰 값은

```text
-1
```

이므로 정답은 `-1`이다.

## 5. Solution

`dp[i]`를

```text
i번째 선택에서 끝나는 연속 구간의 최대 양심 점수
```

라고 정의한다.

현재 값을 새로운 시작으로 선택하거나,

이전 구간에 이어 붙이는 것 중 더 큰 값을 선택하면 된다.

점화식은

```text
dp[i] = max(Ai, dp[i-1] + Ai)
```

이다.

최종 정답은 모든 `dp[i]`의 최댓값이다.

배열 전체를 한 번만 순회하면 되므로, DP 배열을 만들지 않고 현재 값만 유지할 수 있다.

시간 복잡도는

```text
O(N)
```

공간 복잡도는

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

current = A[0]
answer = A[0]

for i in range(1, N):
    current = max(A[i], current + A[i])
    answer = max(answer, current)

print(answer)
```
