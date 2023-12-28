---
external: false
title: "Baekjoon 21756"
date: 2023-04-16
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/21756)

## 2. Solution

```python
n = int(input())
mylist = list(range(1, n+1))

while len(mylist) > 1:
    mylist = mylist[1::2]

print(mylist[0])
```
