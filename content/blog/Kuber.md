---
external : false
title : "Kuber"
tag : [Baekjoon, Python]
date : 2026-02-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/20833)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 정수 N 입력 (1부터 N까지의 큐브를 만들기 위함)
N = int(input())

# 1^3 + 2^3 + ... + N^3 의 합은 (N(N+1)/2)^2 공식을 사용
# N * (N + 1) // 2 : 1부터 N까지의 합
# ** 2 : 그 합을 제곱
print((N * (N + 1) // 2) ** 2)
```
