---
external: false
title: "Baekjoon 1755"
date: 2023-01-16
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1755)

## 2. Solution

```python
diction = {'1':'one', '2':'two', '3':'three', '4':'four', '5':'five', 
     '6':'six', '7':'seven', '8':'eight', '9':'nine', '0':'zero'}
M, N = map(int, input().split())
li = []
for i in range(M, N+1):
    s = ' '.join([diction[c] for c in str(i)])
    li.append([i, s])
li.sort(key=lambda x:x[1])
for i in range(len(li)):
    if i%10 == 0 and i!= 0:
        print()
    print(li[i][0], end=' ')
```
