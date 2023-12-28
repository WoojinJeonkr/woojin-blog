---
external: false
title: "Baekjoon 1406"
date: 2022-12-10
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1406)

## 2. Solution

```python
import sys

left = list(input())
right = []

for _ in range(int(input())):
    command = list(sys.stdin.readline().split())
    if command[0] == 'L' and left:
        right.append(left.pop())
    elif command[0] == 'D' and right:
        left.append(right.pop())
    elif command[0] == 'B' and left:
        left.pop()
    elif command[0] == 'P':
        left.append(command[1])

answer = left + right[::-1]
print(''.join(answer))
```
