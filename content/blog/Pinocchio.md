---
external : false
title : "Pinocchio"
tag : [Baekjoon, Python]
date : 2026-04-06
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/12866)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
# 빠른 입력을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 문제에서 요구하는 나머지 값 (10^9 + 7)
MOD = 1000000007

# 문자열 길이 입력 (실제로는 길이를 따로 사용하지 않아도 됨)
L = int(input())

# 염기열 문자열 입력 (개행 문자 제거)
S = input().strip()

# 각 염기의 개수 계산
a = S.count('A')  # 'A'의 개수
c = S.count('C')  # 'C'의 개수
g = S.count('G')  # 'G'의 개수
t = S.count('T')  # 'T'의 개수

# 각각 하나씩 선택하는 경우의 수 = a * c * g * t
# 문제 조건에 따라 MOD로 나눈 나머지 계산
result = (a * c * g * t) % MOD

# 결과 출력
print(result)
```
