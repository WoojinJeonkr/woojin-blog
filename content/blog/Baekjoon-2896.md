---
external: false
title: "Baekjoon 2896"
date: 2023-12-12
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2896)

## 2. 문제 해석

A, B, C는 각각 구매한 오렌지, 사과, 파인애플 주스의 양이고 I, J, K는 칵테일을 만들 때 필요한 각 주스의 비율입니다.
주어진 양의 주스로 칵테일을 최대한 많이 만들 때, 각 주스가 얼마나 남는지를 계산하며 소수점 자릿수는 최대 6자리까지 허용해야 하므로 칵테일에 필요한 비율 중 최소값을 계산한 뒤 각 주스에 남는 양을 계산하고 소수점 자릿수가 6자리가 되게끔 한 뒤 결과를 출력합니다.

## 3. 정답 코드 (python3, memory: 31120KB, time: 40ms)

```python
# A, B, C에는 각각 구매한 오렌지, 사과, 파인애플 주스의 양이 저장됩니다.
# I, J, K에는 칵테일을 만들 때 필요한 각 주스의 비율이 저장됩니다.

A, B, C = map(int, input().split())
I, J, K = map(int, input().split())

# 칵테일을 최대한 많이 만들기 위해 필요한 비율 중 최소값을 계산하여 t에 저장합니다.
t = min(A / I, B / J, C / K)

# 각 주스에서 남는 양을 계산하고 소수점 자릿수를 6자리로 조절합니다.
rem_A = round(A - I * t, 6)
rem_B = round(B - J * t, 6)
rem_C = round(C - K * t, 6)

# 결과를 출력합니다.
print(f"{rem_A} {rem_B} {rem_C}")
```
