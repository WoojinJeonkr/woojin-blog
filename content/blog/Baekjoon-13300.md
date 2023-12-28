---
external: false
title: "Baekjoon 13300"
date: 2023-04-08
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/13300)

## 2. Solution

```python
n, k = map(int, input().split())
student = [[0]*2 for _ in range(6)]

for _ in range(n):
    s, y = map(int, input().split())
    student[y-1][s-1] += 1

ans = 0
for a in range(6):
    for b in range(2):
        if(student[a][b]%k == 0):
            ans += student[a][b]/k
        else:
            ans += student[a][b]//k + 1
print(int(ans))
```
