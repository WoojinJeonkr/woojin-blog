---
external: false
title: "Baekjoon 1740"
date: 2023-01-09
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1740)

## 2. Solution

```python
n = int(input())
s = []
num = 0
while n > 0:
    s.append(n % 2)
    n //= 2
for i in range(len(s)):
    if s[i] == 1:
        num += 3 ** i
print(num)
```
