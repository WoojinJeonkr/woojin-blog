---
external: false
title: "Baekjoon 2028"
date: 2023-08-01
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2028)

## 2. Solution

### 1. Python (memory: 31256KB, time: 44ms)

```python
for _ in range(int(input())):
    num = int(input())
    if str(num * num).endswith(str(num)):
        print("YES")
    else:
        print("NO")
```
