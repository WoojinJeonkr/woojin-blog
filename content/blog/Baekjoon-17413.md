---
external: false
title: "Baekjoon 17413"
date: 2022-12-09
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/17413)

## 2. Solution

```python
word = list(input().rstrip())
i = 0
start = 0

while i < len(word):
    if word[i] == "<":
        i += 1
        while word[i] != ">":
            i += 1
        i += 1
    elif word[i].isalnum():
        start = i
        while i < len(word) and word[i].isalnum():
            i += 1
        tmp = word[start:i]
        tmp.reverse()
        word[start:i] = tmp
    else:
        i += 1

print("".join(word))
```
