---
external: false
title: "Baekjoon 2702"
date: 2023-06-07
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2702)

## 2. Solution

### 1. Python (memory: 31256KB, time: 128ms)

```python
def find_gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def find_lcm(a, b):
    return a * b // find_gcd(a, b)

def calculate_lcm_gcd():
    num_tests = int(input())
    for _ in range(num_tests):
        a, b = map(int, input().split())
        lcm_num, gcd_num = find_lcm(a, b), find_gcd(a, b)
        print(lcm_num, gcd_num)

calculate_lcm_gcd()
```
