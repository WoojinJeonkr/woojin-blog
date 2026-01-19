---
external : false
title : "UOS String"
tag : [Baekjoon, Python]
date : 2026-01-19
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/32929)에서 확인하실 수 있습니다.

## 2. Answer

```py
# x번째 문자를 구하기 위해 정수 x 입력
x = int(input().strip())

# UOS 문자열의 기본 반복 패턴
pattern = "UOS"

# (x - 1)을 3으로 나눈 나머지를 이용해
# U, O, S 중에서 해당하는 문자를 선택하여 출력
print(pattern[(x - 1) % 3])
```
