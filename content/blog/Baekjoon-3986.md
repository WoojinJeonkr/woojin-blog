---
external: false
title: "Baekjoon 3986"
date: 2023-02-13
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/3986)

## 2. Solution

```python
n = int(input())
cnt = 0
for _ in range(n):
    s = input().rstrip()
    stack = []
    for i in s:
        if len(stack) == 0:
            stack.append(i)
        else:
            if stack[-1] == i:
                stack.pop()
            else:
                stack.append(i)
    if len(stack)==0:
        cnt +=1

print(cnt)
```
