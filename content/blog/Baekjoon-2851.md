---
external: false
title: "Baekjoon 2851"
date: 2023-05-07
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2851)

## 2. Solution

## 1. Python (memory: 31256KB, time: 40ms)

```python
import sys
input = sys.stdin.readline

scores = 0
for _ in range(10):
    score = int(input())
    prev_scores = scores
    scores += score
    if scores >= 100:
        if abs(100 - scores) > abs(100 - prev_scores):
            scores = prev_scores
        break
print(scores)
```
