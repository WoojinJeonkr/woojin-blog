---
external: false
title: "Baekjoon 1822"
date: 2023-02-17
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1822)

## 2. Solution

```python
N = map(int, input().split())

A = set(map(int, input().split()))
B = set(map(int, input().split()))

ans = []
for n in A:
    if n not in B:
        ans.append(n)

ans.sort()
print(len(ans))

if len(ans) != 0:
    print(*ans)
```
