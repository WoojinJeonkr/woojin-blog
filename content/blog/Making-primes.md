---
external : false
title : "Making primes"
tag : [Programmers, Python]
date : 2024-12-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12977)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제를 해결하기 위해 먼저 배열에서 숫자 3개를 선택해 그 합이 소수가 되는 경우를 찾습니다. 이를 위해 itertools 모듈의 combinations를 사용하여 숫자 3개로 이루어진 모든 조합을 생성합니다. 각 조합에 대해 숫자의 합을 구한 뒤, 해당 값이 소수인지 확인하는 과정을 거칩니다.

소수를 판별하기 위해 is_prime 함수를 작성합니다. 이 함수는 입력된 숫자가 2보다 작으면 소수가 아니라고 판단하며, 2부터 해당 숫자의 제곱근까지 나누어떨어지는 수가 있는지를 확인합니다. 이 과정을 통해 숫자가 소수인지 효율적으로 판별할 수 있습니다.

모든 조합의 합을 계산한 뒤, 소수인지 확인하여 카운트를 증가시킵니다. 최종적으로 소수가 되는 경우의 개수를 반환하여 문제를 해결합니다.

## 3. Answer

```python
from itertools import combinations
from math import isqrt

def is_prime(n):
  # 소수 판별 함수
  if n < 2:  # 2보다 작은 숫자는 소수가 아님
    return False
  for i in range(2, isqrt(n) + 1):  # 2부터 n의 제곱근까지 확인
    if n % i == 0:  # 나누어 떨어지면 소수가 아님
      return False
  return True  # 위 조건을 모두 통과하면 소수

def solution(nums):
  answer = 0
  # nums에서 숫자 3개를 뽑는 모든 조합 생성
  for comb in combinations(nums, 3):
    total = sum(comb)  # 조합의 합 계산
    if is_prime(total):  # 합이 소수인지 확인
      answer += 1  # 소수일 경우 카운트 증가
  return answer
```
