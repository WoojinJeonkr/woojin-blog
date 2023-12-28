---
external: false
title: "Baekjoon 10828"
date: 2023-10-10
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/10828)

## 2. 정답 코드 (Python, memory: 30840KB, time: 76ms)

```python
from sys import stdin

N = int(stdin.readline())
stack = []

# 입력된 명령어에 따라 스택을 조작하는 코드입니다.

for _ in range(N):
    command = stdin.readline().split()
    order = command[0]

    # 'push' 명령어인 경우 스택에 숫자를 추가합니다.
    if order == "push":
        result = command[1]
        stack.append(result)

    # 'pop' 명령어인 경우 스택에서 가장 위에 있는 숫자를 꺼내고 출력합니다.
    elif order == "pop":
        if len(stack) == 0:
            print(-1)  # 스택이 비어있을 때 -1을 출력합니다.
        else:
            print(stack.pop())

    # 'size' 명령어인 경우 스택에 저장된 숫자의 개수를 출력합니다.
    elif order == "size":
        print(len(stack))

    # 'empty' 명령어인 경우 스택이 비어있으면 1을, 아니면 0을 출력합니다.
    elif order == "empty":
        if len(stack) == 0:
            print(1)
        else:
            print(0)

    # 'top' 명령어인 경우 스택의 가장 위에 있는 숫자를 출력합니다.
    elif order == "top":
        if len(stack) == 0:
            print(-1)  # 스택이 비어있을 때 -1을 출력합니다.
        else:
            print(stack[-1])
```
