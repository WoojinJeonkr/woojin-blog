---
external: false
title: "Baekjoon 1673"
date: 2023-05-13
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1673)

## 2. Solution

### 1. Python (memory: 31256KB, time: 52ms)

```python
while 1:
    try:
        n, k = map(int, input().split())
        result = 0 
        result += n
        while n//k:
            result += n//k
            n = n//k + n%k
        print(result)
    except:
        break
```
