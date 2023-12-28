---
external: false
title: "Baekjoon 1236"
date: 2023-05-17
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1236)

## 2. Solution(Python, memory: 31256KB, time: 48ms)

```python
rows, columns = map(int, input().split())
board = []

for _ in range(rows):
    board.append(input())

rows_without_x = 0
columns_without_x = 0

for i in range(rows):
    if "X" not in board[i]:
        rows_without_x += 1

for j in range(columns):
    if "X" not in [board[i][j] for i in range(rows)]:
        columns_without_x += 1

print(max(rows_without_x, columns_without_x))
```
