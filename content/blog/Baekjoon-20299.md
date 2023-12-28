---
external: false
title: "Baekjoon 20299"
date: 2023-06-16
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/20299)

## 2. Solution (memory: 157624KB, time: 1400ms)

```python
import sys

N, K, L = map(int, sys.stdin.readline().split())
teams = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

qualified_teams = [team for team in teams if all(i >= L for i in team) and sum(team) >= K]
count = len(qualified_teams)
answer = [player for team in qualified_teams for player in team]

print(count)
print(*answer)
```
