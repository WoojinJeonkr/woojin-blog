---
external: false
title: "Baekjoon 5533"
date: 2023-05-31
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/5533)

## 2. Solution

### 1. Python (memory: 31256KB, time: 60ms)

```python
N = int(input())
scoreCard = [list(map(int, input().split())) for _ in range(N)]

for i in range(N):
  score = sum(scoreCard[i][j] for j in range(3) if all(scoreCard[k][j] != scoreCard[i][j] for k in range(N) if k != i))
  print(score)
```
