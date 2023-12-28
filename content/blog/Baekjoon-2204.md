---
external: false
title: "Baekjoon 2204"
date: 2023-04-09
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2204)

## 2. Solution

```python
while True:
    N = int(input())
    if N == 0:
        break
    ans, lst = [], []
    for i in range(N):
        text = input()
        ans.append(text)
        low_text = text.lower()
        lst.append(low_text)
    sort_lst = sorted(lst)
    lst_idx = lst.index(sort_lst[0])
    print(ans[lst_idx])
```
