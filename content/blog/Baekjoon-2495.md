---
external: false
title: "Baekjoon 2495"
date: 2023-06-09
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2495)

## 2. Solution

### 1. Python (memory: 31256KB, time: 40ms)

```python
for _ in range(3):
    num = input()
    arr = [num[0]]
    answer = [1]
    cnt = 1
    for i in range(1, 8):
        if arr[-1] == num[i]:
            cnt += 1
        else:
            arr.append(num[i])
            answer.append(cnt)
            cnt = 1
    answer.append(cnt)
    print(max(answer))
```
