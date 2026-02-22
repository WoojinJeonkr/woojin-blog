---
external : false
title : "An easy peasy problem"
tag : [Baekjoon, Python]
date : 2026-02-22
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/30214)에서 확인하실 수 있습니다.

## 2. Answer

```py
# s1: 전반부까지의 정답자 수
# s2: 대회 종료 시점의 전체 정답자 수
s1, s2 = map(int, input().split())

# 전반부에 절반 이상이 풀었는지 확인
if s1 * 2 >= s2:
    print("E")
else:
    print("H")
```
