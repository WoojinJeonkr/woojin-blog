---
external : false
title : "Return the change"
tag : [Codechef, Python]
date : 2026-04-26
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/RETURNCHANGE)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 빠른 입력을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

for _ in range(T):
    # 물건 가격 입력
    X = int(input())

    # 10의 자리로 반올림 (5 이상이면 올림)
    rounded = (X + 5) // 10 * 10

    # 100에서 반올림된 값을 빼서 거스름돈 출력
    print(100 - rounded)
```
