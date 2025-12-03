---
external : false
title : "Deque 2"
tag : [Baekjoon, Python]
date : 2025-12-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/28279)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
from collections import deque

input = sys.stdin.readline
n = int(input())
dq = deque()
out = []

for _ in range(n):
    cmd = input().split()

    if cmd[0] == '1':              # 덱 앞에 값 추가
        dq.appendleft(cmd[1])
    elif cmd[0] == '2':            # 덱 뒤에 값 추가
        dq.append(cmd[1])
    elif cmd[0] == '3':            # 앞에서 값 제거 후 출력
        out.append(dq.popleft() if dq else "-1")
    elif cmd[0] == '4':            # 뒤에서 값 제거 후 출력
        out.append(dq.pop() if dq else "-1")
    elif cmd[0] == '5':            # 덱의 크기 출력
        out.append(str(len(dq)))
    elif cmd[0] == '6':            # 덱이 비었는지 출력
        out.append("1" if not dq else "0")
    elif cmd[0] == '7':            # 덱의 첫 번째 값 출력
        out.append(dq[0] if dq else "-1")
    elif cmd[0] == '8':            # 덱의 마지막 값 출력
        out.append(dq[-1] if dq else "-1")

print("\n".join(out))
```
