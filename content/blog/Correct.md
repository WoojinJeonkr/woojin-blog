---
external : false
title : "Correct"
tag : [Baekjoon, Python]
date : 2026-03-30
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26307)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력으로 시(HH)와 분(MM)을 공백으로 구분하여 받음
HH, MM = map(int, input().split())

# 대회 시작 시간인 9시를 분 단위로 변환 (9 * 60 = 540분)
start = 9 * 60

# 입력 받은 시간을 분 단위로 변환
current = HH * 60 + MM

# 시작 시간부터 현재 시간까지의 경과 시간을 출력
print(current - start)
```
