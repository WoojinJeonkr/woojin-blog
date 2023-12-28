---
external: false
title: "Baekjoon 6603"
date: 2023-01-24
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/6603)

## 2. Solution

```python
def dfs(dep):
    if dep == 6:
        print(*li)
        return;
    for i in range(n):
        if check[i]:
            continue
        li.append(nums[i])
        check[i] = 1
        dfs(dep+1)
        li.pop()
        for j in range(i+1, n):
            check[j] = 0
        
while 1:
    t = list(map(int, input().split()))
    n, nums = t[0], t[1:]
    if n == 0:
        break
    li = []
    check = [0]*n
    dfs(0)
    print()
```
