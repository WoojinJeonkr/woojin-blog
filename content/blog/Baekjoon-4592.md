---
external: false
title: "Baekjoon 4592"
date: 2023-06-29
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/4592)

## 2. Solution (Python, memory: 31256KB, time: 64ms)

```python
import sys

def remove_duplicates(lst):
    result = [lst[1]]
    for i in range(2, len(lst)):
        if result[-1] != lst[i]:
            result.append(lst[i])
    return result

while True:
    try:
        tmp = list(map(int, sys.stdin.readline().split()))
        ans = remove_duplicates(tmp)
        print(*ans, end=' ')
        print("$")
    except:
        exit()
```
