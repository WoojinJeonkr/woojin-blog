---
external : false
title : "Roll the Dice"
tag : [Baekjoon, Python]
date : 2026-03-25
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6856)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 첫 번째 주사위의 면 개수 m 입력
m = int(input())

# 두 번째 주사위의 면 개수 n 입력
n = int(input())

# 합이 10이 되는 경우의 수를 저장할 변수
count = 0

# 첫 번째 주사위 값을 1부터 m까지 순회
for i in range(1, m + 1):
    # 두 수의 합이 10이 되어야 하므로 두 번째 주사위 값은 10 - i
    j = 10 - i

    # 두 번째 주사위 값이 1 이상 n 이하인지 확인
    if 1 <= j <= n:
        # 조건을 만족하면 경우의 수 증가
        count += 1

# 경우의 수가 1개일 때 (단수 표현)
if count == 1:
    print(f"There is {count} way to get the sum 10.")
# 경우의 수가 2개 이상일 때 (복수 표현)
else:
    print(f"There are {count} ways to get the sum 10.")
```
