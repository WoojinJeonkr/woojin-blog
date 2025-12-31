---
external : false
title : "Battle droid expenses"
tag : [Baekjoon, Python]
date : 2025-12-31
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5361)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 입력 속도를 빠르게 하기 위해 sys.stdin 사용
input = sys.stdin.readline

# 각 부품의 가격을 상수로 정의
PRICE_BLASTER = 350.34   # 블래스터 라이플 가격
PRICE_VISUAL = 230.90    # 시각 센서 가격
PRICE_AUDIO = 190.55     # 청각 센서 가격
PRICE_ARM = 125.30       # 팔 가격
PRICE_LEG = 180.90       # 다리 가격

# 테스트 케이스 개수 입력
t = int(input())

# 각 테스트 케이스 처리
for _ in range(t):
    # 필요한 부품 개수 입력
    A, B, C, D, E = map(int, input().split())
    
    # 총 비용 계산
    total = (
        A * PRICE_BLASTER +  # 블래스터 라이플 비용
        B * PRICE_VISUAL +   # 시각 센서 비용
        C * PRICE_AUDIO +    # 청각 센서 비용
        D * PRICE_ARM +      # 팔 비용
        E * PRICE_LEG        # 다리 비용
    )
    
    # 달러 표시와 함께 소수점 둘째 자리까지 출력
    print(f"${total:.2f}")
```
