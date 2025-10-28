---
external : false
title : "Online sales"
tag : [Baekjoon, Python]
date : 2025-10-28
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1246)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 달걀 수 N, 고객 수 M 입력
N, M = map(int, input().split())

# 고객들이 제시한 최대 구매가를 오름차순 정렬
prices = sorted(int(input()) for _ in range(M))

# 최대 수익과 그때의 판매 가격 초기화
max_profit = 0
best_price = 0

# 가능한 모든 가격에 대해 수익 계산
for i, price in enumerate(prices):
    # 현재 가격 이상으로 살 수 있는 고객 수
    buyers = M - i
    # 실제 판매 가능한 달걀 수 (남은 달걀보다 많을 수 없음)
    sell_count = min(N, buyers)
    # 현재 가격으로 얻는 총 수익
    profit = price * sell_count

    # 더 큰 수익을 찾으면 갱신
    if profit > max_profit:
        max_profit = profit
        best_price = price

# 최적의 가격과 그때의 최대 수익 출력
print(best_price, max_profit)
```
