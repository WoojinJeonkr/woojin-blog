---
external: false
title: "Baekjoon 15668"
date: 2023-07-16
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/15668)

## 2. 풀이 (Python, memory: 83948KB, time: 22092ms)

```python
import sys
input = sys.stdin.readline # 구문을 추가하지 않으면 시간초과
N = int(input())
M = [int(input()) for _ in range(N)]
for i in sorted(M):
    print(i)
```
