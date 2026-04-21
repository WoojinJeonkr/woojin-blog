---
external : false
title : "Chef and Dolls"
tag : [Codechef, Python]
date : 2026-04-21
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/arrays-strings-sorting/INTARR01/problems/MISSP)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 빠른 입력을 위해 sys.stdin.readline 사용
import sys
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

# 각 테스트 케이스 반복
for _ in range(T):
    # 인형 개수 입력
    N = int(input())

    # XOR 결과를 저장할 변수 (초기값 0)
    result = 0

    # 인형 타입을 하나씩 입력받아 XOR 연산 수행
    for _ in range(N):
        doll = int(input())
        result ^= doll  # 같은 값은 XOR 시 0이 되어 사라짐

    # 짝이 없는 인형 타입 출력
    print(result)
```
