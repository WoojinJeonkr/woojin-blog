---
external : false
title : "A plus B minus C"
tag : [Baekjoon, Python]
date : 2025-11-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/31403)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 세 개의 입력값 A, B, C를 문자열로 입력받음
A = input()
B = input()
C = input()

# 문자열로 입력받았기 때문에, 정수형으로 변환하여 더하고 빼기 수행
result1 = int(A) + int(B) - int(C)

# 두 수 A, B를 문자열 그대로 이어붙인 뒤 정수형으로 변환 후 C를 뺌
result2 = int(A + B) - int(C)

# 두 결과를 각각 한 줄씩 출력
print(result1)
print(result2)
```
