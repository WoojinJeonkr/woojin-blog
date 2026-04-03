---
external : false
title : "Vandrarhem"
tag : [Baekjoon, Python]
date : 2026-04-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26890)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 참가자 수 N, 침대 종류 수 M 입력
N, M = map(int, input().split())

beds = []

# 각 침대의 가격(c_i)과 개수(b_i) 입력
for _ in range(M):
    c, b = map(int, input().split())
    beds.append((c, b))

# 가격 기준으로 오름차순 정렬
beds.sort()

total_cost = 0  # 총 비용
remaining = N   # 아직 배정해야 할 인원 수

# 싼 침대부터 순서대로 확인
for price, count in beds:
    if remaining == 0:
        break  # 이미 다 배정했으면 종료

    # 현재 침대에서 구매할 수 있는 개수
    use = min(remaining, count)

    # 비용 계산
    total_cost += use * price

    # 남은 인원 감소
    remaining -= use

# 최소 비용 출력
print(total_cost)
```
