---
external: false
title: "Baekjoon 5217"
date: 2023-06-15
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5217)

## 2. Solution (memory: 31256KB, time: 44ms)

```python
for _ in range(int(input())):
    num = int(input())
    print(f"Pairs for {num}:", end=' ')
    for i in range(1, num // 2 + 1):
        if i != num - i:
            if i != 1:
                print(',', end=' ')
            print(i, num - i, end='')
    print()
```
