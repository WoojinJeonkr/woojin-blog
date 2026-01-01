---
external : false
title : "Strfry"
tag : [Baekjoon, Python]
date : 2026-01-01
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11328)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 문자열 내 각 문자의 개수를 세기 위한 Counter 모듈 import
from collections import Counter

# 테스트 케이스의 개수 입력
n = int(input().strip())

# 각 테스트 케이스에 대해 반복
for _ in range(n):
    # 공백으로 구분된 두 문자열 입력
    s1, s2 = input().split()
    
    # 두 문자열의 문자 구성(각 문자의 등장 횟수)이 동일한지 확인
    if Counter(s1) == Counter(s2):
        # 첫 번째 문자열을 섞어서 두 번째 문자열을 만들 수 있는 경우
        print("Possible")
    else:
        # 문자 종류나 개수가 달라 섞어서 만들 수 없는 경우
        print("Impossible")
```
