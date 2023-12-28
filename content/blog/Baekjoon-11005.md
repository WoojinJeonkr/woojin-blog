---
external: false
title: "Baekjoon 11005"
date: 2023-03-02
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11005)

## 2. Solution

```python
nums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
n, b = map(int,input().split())
ans = ''

while n:
    ans = nums[n % b] + ans
    n //= b

print(ans)
```
