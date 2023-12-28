---
external: false
title: "Baekjoon 2822"
date: 2023-02-10
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2822)

## 2. Solution

```python
score = []

for i in range(8):
    score.append(int(input()))
s_score = sorted(score, reverse=True)

big = []

for i in range(5):
    big.append(s_score[i])

sum = 0
tmp = []

for i in big:
    sum += i
    tmp.append(score.index(i))
print(sum)

tmp_s = sorted(tmp)
for i in tmp_s:
    print(i + 1, end=' ')
```
