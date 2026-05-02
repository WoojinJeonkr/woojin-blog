---
external : false
title : "Existence"
tag : [Codechef, Python]
date : 2026-05-02
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/EXISTENCE)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 빠른 입력을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

# 각 테스트 케이스 반복 처리
for _ in range(T):

    # X, Y 값 입력
    X, Y = map(int, input().split())

    # X^2 = 2Y 를 만족하는지 확인
    if X * X == 2 * Y:
        # 조건을 만족하면 YES 출력
        print("YES")
    else:
        # 조건을 만족하지 않으면 NO 출력
        print("NO")
```
