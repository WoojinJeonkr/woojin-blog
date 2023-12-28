---
external: false
title: "Baekjoon 10823"
date: 2023-04-02
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10823)

## 2. Solution

```python
S = ''
while 1:
    try:
        S += input()
    except:
        break
print(sum(map(int, S.split(','))))
```
