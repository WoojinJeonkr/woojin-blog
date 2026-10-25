---
external: false
title: "Baekjoon 6376"
tag: [Baekjoon, Python]
date: 2024-01-30
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6376)에서 확인하실 수 있습니다.

## 2. Approach

0부터 9까지의 숫자에 대한 누적 합을 계산하면서, 특정 조건에 따라 서로 다른 형식으로 결과를 출력하는 코드를 작성하면 됩니다.

## 3. Solve (memory: 31120KB, time: 28ms)

```python
def factorial(n):
  result = 1
  if n == 0:
    return 1  # 0의 팩토리얼은 1이므로 1을 반환합니다.
  for i in range(1, n + 1):
    result *= i  # 1부터 n까지의 숫자를 곱하여 팩토리얼 값을 계산합니다.
  return result

ans = 0
print("n  e")
print("-  -----------")

for i in range(10):
  ans += 1 / factorial(i)  # 각 i에 대한 1/i! 값을 누적하여 계산합니다.
  if ans > 2.5:
    print("%d  %.9f" % (i, ans))  # 누적값이 2.5를 초과하면 i와 누적값을 출력합니다.
  elif ans == 1 or ans == 2:
    print("%d  %d" % (i, ans))  # 누적값이 1 또는 2인 경우 i와 누적값을 정수 형태로 출력합니다.
  elif ans == 2.5:
    print("%d  %.1f" % (i, ans))  # 누적값이 2.5인 경우 i와 누적값을 소수점 첫째 자리까지 출력합니다.
```
