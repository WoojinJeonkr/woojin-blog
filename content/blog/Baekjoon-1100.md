---
external: false
title: "Baekjoon 1100"
date: 2023-03-01
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1100)

## 2. Solution

```python
board = []

for i in range(8):
    board.append(list(map(str, input())))

res = 0

for i in range(8):
    for j in range(8):
        if (i + j) % 2 == 0:
            if board[i][j] == 'F':
                res += 1

print(res)
```
