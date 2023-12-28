---
external: false
title: "Baekjoon 1453"
date: 2023-03-25
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1453)

## 2. Solution

```python
N = input()
people = input()
people = people.split()
print(len(people) - len(set(people)))
```
