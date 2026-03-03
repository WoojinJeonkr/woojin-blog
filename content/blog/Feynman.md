---
external : false
title : "Feynman"
tag : [Baekjoon, Python]
date : 2026-03-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5724)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

for line in sys.stdin:
    n = int(line.strip())
    if n == 0:
        break

    result = n * (n + 1) * (2 * n + 1) // 6
    print(result)
```
