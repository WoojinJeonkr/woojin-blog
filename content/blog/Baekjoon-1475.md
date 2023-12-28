---
external: false
title: "Baekjoon 1475"
date: 2022-12-06
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1475)

## 2. Solution

```python
n = input()
room = {'0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0}
for i in range(len(n)):
    if n[i] in ['6', '9']:
        room['6'] += 1
    else:
        room[n[i]] += 1
if room['6'] % 2 == 0:
    room['6'] = room['6'] // 2
else:
    room['6'] = room['6'] // 2 + 1
print(max(room.values()))
```
