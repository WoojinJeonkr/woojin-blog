---
external: false
title: "Baekjoon 10569"
date: 2023-05-27
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10569)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
for _ in range(int(input())): vertices, edges = map(int, input().split()); print(edges-vertices+2)
```
