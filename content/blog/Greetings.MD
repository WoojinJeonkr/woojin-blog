---
external : false
title : "Greetings"
tag : [Baekjoon, Python]
date : 2025-12-11
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17548)에서 확인하실 수 있습니다.

## 2. Answer

```py
s = input().strip()

# e의 개수 세기 (양쪽 h, y 제외)
count_e = len(s) - 2

# 결과 생성
result = 'h' + 'e' * (count_e * 2) + 'y'

print(result)
```
