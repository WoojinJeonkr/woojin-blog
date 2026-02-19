---
external : false
title : "Mathematics"
tag : [Baekjoon, Python]
date : 2026-02-19
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26545)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 더할 정수의 개수 n 입력 받음
n = int(sys.stdin.readline())

# 총합을 저장할 변수 초기화
total = 0

# n번 반복하면서 정수를 입력받아 total 누적
for _ in range(n):
    total += int(sys.stdin.readline())

# 최종 합계 출력
print(total)
```
