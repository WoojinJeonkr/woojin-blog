---
external: false
title: "Baekjoon 2630"
date: 2023-02-28
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2630)

## 2. Solution

```python
N = int(input())
target = [list(map(int, input().split())) for _ in range(N)]

white, blue = 0, 0

def divide(x, y, n):
    global white, blue
    color = target[x][y]
    check = True

    for i in range(x, x+n):
        if not check:
            break

        for j in range(y, y+n):
            if color != target[i][j]:
                check = False
                divide(x, y, n//2)
                divide(x, y+n//2, n//2)
                divide(x+n//2, y, n//2)
                divide(x+n//2, y+n//2, n//2)
                break
    if check:
        if color:
            blue += 1
        else:
            white += 1

divide(0, 0, N)
print(white)
print(blue)
```
