---
external : false
title : "Adding Trouble"
tag : [Baekjoon, Python]
date : 2026-01-16
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/31654)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력으로 정수 A, B, C를 한 줄에서 받아서 각각 변수에 저장
A, B, C = map(int, input().split())

# A와 B를 더한 값이 C와 같은지 확인
if A + B == C:
    # 같으면 올바르게 더한 것이므로 "correct!" 출력
    print("correct!")
else:
    # 다르면 잘못 더한 것이므로 "wrong!" 출력
    print("wrong!")
```
