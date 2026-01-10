---
external : false
title : "Gas Station"
tag : [Baekjoon, Python]
date : 2026-01-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/13305)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
# 입력을 빠르게 받기 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 도시의 개수 입력
N = int(input())
# 인접한 도시 사이의 도로 길이 입력 (N-1개)
dist = list(map(int, input().split()))
# 각 도시의 주유소 리터당 가격 입력 (N개)
price = list(map(int, input().split()))
# 지금까지 만난 주유소 중 가장 싼 가격으로 초기화 (첫 도시 가격)
min_price = price[0]
# 최소 비용을 누적할 변수
total_cost = 0

# 마지막 도시는 이동할 도로가 없으므로 N-1까지만 반복
for i in range(N - 1):
    # 현재 도시의 주유소 가격이 더 싸다면 최소 가격 갱신
    if price[i] < min_price:
        min_price = price[i]
    
    # 현재까지의 최소 가격으로 다음 도시까지 필요한 기름을 구매
    # 도로 길이(dist[i]) * 최소 가격(min_price)
    total_cost += min_price * dist[i]

# 최종 최소 비용 출력
print(total_cost)
```
