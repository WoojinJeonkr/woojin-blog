---
external: false
title: "Greatest Common Divisor and Least Common Multiple"
date: 2022-09-12
---

## 1. 약수란?

n을 나누었을 때 나머지가 0인 것

## 2. 유클리드 호제법

x, y의 최대공약수는 y와 x를 y로 나눈 나머지값과 같다는 원리

## 3. 최대공약수 구하기

**수들의 각각의 약수 중 공통이며 가장 큰 수**
유클리드 호제법을 이용하여 최대공약수를 구하면

```python
def GCD(x, y):
    while(y):
        x = y
        y = x%y
    return x
```

## 4. 최소공배수 구하기

**수들의 각각의 배수 중 공통이며 가장 작은 수**
유클리드 호제법을 이용하여 최소공배수를 구하면

```python
def LCM(x, y):
    result = (x*y)//GCD(x, y)
    return result
```

## 5. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2609)

### 5-1. 풀이

```python
m, n = map(int, input().split())

def gcd(m, n):
    while n > 0:
        m, n = n, m % n
    return m

def lcm(m, n):
    return m * n // gcd(m, n)

print(gcd(m, n))
print(lcm(m, n))
```
