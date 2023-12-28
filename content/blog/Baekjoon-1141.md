---
external: false
title: "Baekjoon 1141"
date: 2023-04-10
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1141)

## 2. Solution

```python
import sys

n = int(sys.stdin.readline())
words = [(sys.stdin.readline()).rstrip() for _ in range(n)]
res = 0
words.sort(key = len)

for i in range(n):
    flag = False
    for j in range(i + 1, n):
        if words[i] == words[j][0:len(words[i])]:
            flag = True
            break
    
    if not flag:
        res += 1

print(res)
```
