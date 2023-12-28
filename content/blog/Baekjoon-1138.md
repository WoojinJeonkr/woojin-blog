---
external: false
title: "Baekjoon 1138"
date: 2022-12-08
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1138)

## 2. Solution

```python
N = int(input())
s = list(map(int, input().split()))
people = [0 for i in range(N)]
for i in range(N + 1):
    count = 0
    k = s[i - 1]
    for j in range(0, N):
        if count == k and people[j] == 0:
            people[j] = i
            break
        if people[j] == 0:
            count += 1
for person in people:
    print(person, end = ' ')
```
