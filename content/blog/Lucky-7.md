---
external : false
title : "Lucky 7"
tag : [Baekjoon, Python]
date : 2026-02-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/30224)에서도 확인하실 수 있습니다.

## 2. Answer

```py
# 정수 입력
n = int(input().strip())

# 7 포함 여부
contains_seven = '7' in str(n)

# 7로 나누어지는지 여부
divisible_by_seven = (n % 7 == 0)

# 조건에 따라 결과 출력
if not contains_seven and not divisible_by_seven:
    print(0)
elif not contains_seven and divisible_by_seven:
    print(1)
elif contains_seven and not divisible_by_seven:
    print(2)
else:
    print(3)
```
