---
external : false
title : "Counting bills"
tag : [Baekjoon, Python]
date : 2026-01-25
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/30031)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 지폐의 개수 입력
N = int(input().strip())

# 가로 길이에 따른 지폐 금액을 딕셔너리로 매핑
# 136mm -> 1,000원
# 142mm -> 5,000원
# 148mm -> 10,000원
# 154mm -> 50,000원
money = {
    136: 1000,
    142: 5000,
    148: 10000,
    154: 50000
}

# 총 금액을 저장할 변수
total = 0

# N장의 지폐 정보를 하나씩 입력받아 처리
for _ in range(N):
    w, h = map(int, input().split())  # w: 가로 길이, h: 세로 길이 (세로는 항상 68mm)
    
    # 가로 길이를 기준으로 지폐 종류를 판별하여 금액을 더함
    total += money[w]

# 최종 지폐 총액 출력
print(total)
```
