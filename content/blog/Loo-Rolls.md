---
external : false
title : "Loo Rolls"
tag : [Baekjoon, Python]
date:  2026-04-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17895)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 입력: a(롤의 길이), b(1회 사용량)
a, b = map(int, sys.stdin.readline().split())

ans = 1  # 처음 시작할 때 1롤
while a % b != 0:
    # 나머지가 생기면 새 롤이 필요함
    ans += 1
    # 새로운 필요량 N은 이전의 나머지(a % b)를 고려하여 갱신
    b -= a % b

print(ans)
```
