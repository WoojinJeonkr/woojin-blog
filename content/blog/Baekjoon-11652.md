---
external: false
title: "Baekjoon 11652"
date: 2023-05-03
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/11652)

## 2. Solution

## 1. Python (memory: 55348KB, time: 136ms)

```python
import sys
input_ = sys.stdin.readline

n = int(input_())
card_dict = {}

for i in range(n):
    card = int(input_())
    if card in card_dict:
        card_dict[card] += 1
    else:
        card_dict[card] = 1

print(sorted(card_dict.items(), key=lambda x: (-x[1], x[0]))[0][0])
```
