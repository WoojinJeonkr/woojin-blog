---
external: false
title: "Baekjoon 10819"
date: 2023-03-24
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/10819)

## 2. Solution

```python
def back_tracking(x):
    if x == n:
        answer.append(sum(abs(m[temp[i + 1]] - m[temp[i]]) for i in range(n - 1)))
        return

    for i in range(n):
        if i not in temp:
            temp.append(i)
            back_tracking(x + 1)
            temp.pop()

n = int(input())
m = list(map(int, input().split()))
answer, temp = [], []
back_tracking(0)
print(max(answer))
```
