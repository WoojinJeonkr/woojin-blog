---
external : false
title : "Buy cards"
tag : [Baekjoon, Python]
date : 2025-11-19
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11052)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 카드 구매 개수 입력
N = int(input())

# 카드팩 가격 리스트 (1번 인덱스부터 사용)
P = [0] + list(map(int, input().split()))

# dp[i] = i개의 카드를 구매할 때 지불할 수 있는 최대 금액
dp = [0] * (N + 1)

# i개의 카드를 채우기 위한 최대 금액 계산
for i in range(1, N + 1):
    for j in range(1, i + 1):
        # j개짜리 카드팩을 하나 사용했을 때 최댓값 갱신
        dp[i] = max(dp[i], dp[i - j] + P[j])

# 결과 출력
print(dp[N])
```
