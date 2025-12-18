---
external : false
title : "Bonus problem"
tag : [Baekjoon, Python]
date : 2025-12-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17389)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력 받기
N = int(input().strip())
S = input().strip()

total_score = 0      # 총 점수
bonus = 0            # 보너스 점수

# OX표를 앞에서부터 하나씩 확인
for i in range(N):
    if S[i] == 'O':
        # 기본 점수(i+1) + 현재 보너스 점수 획득
        total_score += (i + 1) + bonus
        # 보너스 점수 증가
        bonus += 1
    else:
        # 틀리면 보너스 점수 초기화
        bonus = 0

# 결과 출력
print(total_score)
```
