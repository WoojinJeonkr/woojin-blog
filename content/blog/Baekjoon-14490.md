---
external: false
title: "Baekjoon 14490"
date: 2023-07-18
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/14490)

## 2. 유클리드 호제법(Euclidean Algorithm)

유클리드 호제법은 두 정수의 최대공약수(GCD, Greatest Common Divisor)를 구하는 알고리즘입니다. 두 개의 정수를 입력으로 받아서, 두 정수의 최대공약수를 계산할 수 있습니다.

1. 두 수를 입력 받습니다: a와 b (a ≥ b).
2. a를 b로 나눈 나머지를 구합니다.
3. 나머지가 0이면, b는 최대공약수입니다. 알고리즘을 종료합니다.
4. 나머지가 0이 아니라면, a에는 b를 대입하고, b에는 나머지를 대입합니다.
5. 2단계로 돌아가서 나머지가 0이 될 때까지 반복합니다.

위의 5가지 과정을 반복하면, 나머지가 0이 되었을 때의 b가 최대공약수가 됩니다

## 3. 풀이 (Python, memory: 31256KB, time: 44ms)

```python
# 최대공약수를 구하는 함수
def gcd(a, b):
  while b != 0:
    a, b = b, a % b
  return a

# 두 수 n, m에 대해 최대한 약분한 값을 n:m의 형태로 출력하는 함수 
def reduce_fraction(n, m):
  return f"{n // gcd(n, m)}:{m // gcd(n, m)}"

# 사용자로부터 ':'을 기준으로 n과 m을 입력받는다.
n, m = map(int, input().split(':'))

# 수에 대해 최대한 약분한 값을 출력한다.
print(reduce_fraction(n, m))

```
