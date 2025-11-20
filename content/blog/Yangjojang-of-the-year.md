---
external : false
title : "Yangjojang of the year"
tag : [Baekjoon, Python]
date : 2025-11-20
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11557)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스 수 입력
T = int(input().strip())

for _ in range(T):
    # 학교의 수 입력
    N = int(input().strip())
    
    max_school = ""   # 가장 술 소비가 많은 학교 이름
    max_drink = -1    # 최대 소비량 저장 변수
    
    for _ in range(N):
        # 학교 이름(S)과 소비량(L) 입력
        S, L = input().split()
        L = int(L)
        
        # 현재 학교가 더 많이 소비했으면 갱신
        if L > max_drink:
            max_drink = L
            max_school = S
    
    # 해당 테스트 케이스에서 가장 많이 소비한 학교 출력
    print(max_school)
```
