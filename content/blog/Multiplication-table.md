---
external : false
title : "Multiplication table"
tag : [Baekjoon, Python]
date : 2026-02-01
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/32710)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력값 받기
N = int(input())

found = False

# 2단부터 9단까지 확인
for A in range(2, 10):
    for B in range(1, 10):
        C = A * B
        # A, B, C 중 하나라도 N이면 등장한 것
        if N == A or N == B or N == C:
            found = True
            break
    if found:
        break

# 결과 출력
print(1 if found else 0)
```
