---
external : false
title : "Partial string"
tag : [Baekjoon, Python]
date : 2026-01-22
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/16916)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 문자열 S 입력 (앞뒤 공백 제거)
S = input().strip()

# 문자열 P 입력 (앞뒤 공백 제거)
P = input().strip()

# P가 S의 부분 문자열이면 1, 아니면 0을 출력
# 파이썬에서는 'in' 연산자를 사용해 부분 문자열 포함 여부를 바로 확인 가능
print(1 if P in S else 0)
```
