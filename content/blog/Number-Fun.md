---
external : false
title : "Number Fun"
tag : [Baekjoon, Python]
date : 2025-12-17
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/24783)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# 테스트 케이스 개수 입력
N = int(input())

for _ in range(N):
    # 세 정수 a, b, c 입력
    a, b, c = map(int, input().split())
    possible = False

    # 덧셈으로 c를 만들 수 있는지 확인
    if a + b == c:
        possible = True

    # 뺄셈 (순서 고려)
    elif a - b == c or b - a == c:
        possible = True

    # 곱셈으로 c를 만들 수 있는지 확인
    elif a * b == c:
        possible = True

    # 나눗셈 (정수로 나누어떨어지는 경우만 허용)
    elif b != 0 and a % b == 0 and a // b == c:
        possible = True
    elif a != 0 and b % a == 0 and b // a == c:
        possible = True

    # 결과 출력
    print("Possible" if possible else "Impossible")
```
