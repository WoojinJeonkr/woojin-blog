---
external : false
title : "Cross Number Puzzle"
tag : [Baekjoon, Python]
date : 2025-12-15
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6966)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 1000부터 9999까지의 완전수를 저장할 리스트
perfect_numbers = []

# 1000 이상 9999 이하의 수에 대해 완전수 판별
for n in range(1000, 10000):
    divisor_sum = 0

    # 자기 자신을 제외한 약수들의 합 계산
    for d in range(1, n // 2 + 1):
        if n % d == 0:
            divisor_sum += d

    # 약수의 합이 자기 자신과 같으면 완전수
    if divisor_sum == n:
        perfect_numbers.append(str(n))

# 100부터 999까지의 암스트롱 수(각 자리 수의 세제곱 합) 저장
armstrong_numbers = []

# 세 자리 수에 대해 조건 검사
for n in range(100, 1000):
    # 각 자리 숫자를 정수로 변환
    digits = map(int, str(n))

    # 각 자리 숫자의 세제곱 합이 자기 자신과 같은지 확인
    if sum(d ** 3 for d in digits) == n:
        armstrong_numbers.append(str(n))

# 결과 출력
print(" ".join(perfect_numbers))
print(" ".join(armstrong_numbers))
```
