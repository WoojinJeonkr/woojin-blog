---
external : false
title : "Rock game 4"
tag : [Baekjoon, Python]
date : 2026-04-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9658)에서 확인하실 수 있습니다.

## 2. Answer

```py
n = int(input())

# 초기 상태 처리
if n == 1:
    print('CY')
elif n == 2:
    print('SK')
elif n == 3:
    print('CY')
elif n == 4:
    print('SK')
else:
    result = [''] * (n + 1)
    result[1] = 'CY'
    result[2] = 'SK'
    result[3] = 'CY'
    result[4] = 'SK'

    # 점화식을 이용해 결과 계산
    for stones in range(5, n + 1):
        if result[stones - 1] == 'CY' or result[stones - 3] == 'CY' or result[stones - 4] == 'CY':
            result[stones] = 'SK'
        else:
            result[stones] = 'CY'

    print(result[n])
```
