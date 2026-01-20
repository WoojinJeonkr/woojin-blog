---
external : false
title : "Digital root"
tag : [Baekjoon, Python]
date : 2026-01-20
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6378)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

for line in sys.stdin:
    n = line.strip()
    if n == "0":
        break
    
    # 문자열로 받은 큰 수의 각 자릿수를 더한 뒤 디지털 루트 계산
    digit_sum = sum(int(c) for c in n)
    
    # 디지털 루트 공식 적용
    if digit_sum == 0:
        print(0)
    else:
        print((digit_sum - 1) % 9 + 1)
```
