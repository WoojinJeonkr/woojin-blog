---
external : false
title : "Midnight memory collector"
tag : [Python]
date : 2026-06-20
---

## 1. Problem

새벽이 되면 사람들은 하루 동안의 기억을 하나씩 떠올린다고 한다.

각 기억은

- 감성 점수 `Ai`
- 떠올리는 데 필요한 시간 `Ti`

를 가진다.

새벽은 총 `M`분 동안만 지속되며, 한 사람은 이 시간 안에서 원하는 기억만 떠올릴 수 있다.

각 기억은 **최대 한 번만** 떠올릴 수 있으며, 선택한 기억들의 총 시간이 `M`을 초과해서는 안 된다.

새벽이 끝났을 때 얻을 수 있는 **최대 감성 점수의 합**을 구하여라.

### 입력

첫째 줄에 기억의 개수 `N`과 새벽의 길이 `M`이 주어진다.

이후 `N`개의 줄에 걸쳐 각 기억의 감성 점수 `Ai`와 필요한 시간 `Ti`가 주어진다.

### 출력

얻을 수 있는 최대 감성 점수를 출력한다.

### 제한사항

- `1 ≤ N ≤ 2,000`
- `1 ≤ M ≤ 20,000`
- `1 ≤ Ai ≤ 10^6`
- `1 ≤ Ti ≤ M`

## 2. Input Example

### Example 1

```text
4 7
8 3
10 4
15 5
6 2
```

### Example 2

```text
5 10
7 2
9 3
12 5
5 4
8 2
```

## 3. Output Example

### 3.1. Example 1

```text
21
```

### 3.2. Example 2

```text
28
```

## 4. Explanation

### 4.1. Example 1

다음 세 기억을 선택할 수 있다.

```text
감성 점수 15, 시간 5
감성 점수 6, 시간 2
```

총 시간은

```text
5 + 2 = 7
```

이며 감성 점수의 합은

```text
15 + 6 = 21
```

이다.

이보다 더 높은 감성 점수를 얻는 선택은 존재하지 않는다.

### 4.2. Example 2

다음 네 기억을 선택한다.

```text
7(2분)
9(3분)
12(5분)
```

총 시간은

```text
2 + 3 + 5 = 10
```

이고 감성 점수의 합은

```text
7 + 9 + 12 = 28
```

으로 최댓값이다.

## 5. Solution

각 기억은 한 번만 선택할 수 있으므로 0-1 배낭 문제(Knapsack Problem)로 해결할 수 있다.

`dp[t]`를

```text
시간을 정확히 t 이하로 사용했을 때 얻을 수 있는 최대 감성 점수
```

라고 정의한다.

각 기억에 대해 시간을 큰 값부터 역순으로 순회하면서

```text
dp[t] = max(dp[t], dp[t - Ti] + Ai)
```

를 수행하면 같은 기억을 여러 번 선택하는 일이 발생하지 않는다.

최종적으로 `dp[M]`이 정답이 된다.

시간 복잡도는

```text
O(N × M)
```

이며,

공간 복잡도는

```text
O(M)
```

이다.

## 6. Answer

```python
import sys

input = sys.stdin.readline

N, M = map(int, input().split())

dp = [0] * (M + 1)

for _ in range(N):
    score, time = map(int, input().split())

    for t in range(M, time - 1, -1):
        dp[t] = max(dp[t], dp[t - time] + score)

print(dp[M])
```
