---
external: false
title: "Collections deque()"
date: 2023-09-16
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/py-collections-deque/problem?isFullScreen=true)

## 2. 정답 코드 (Python)

```python
from collections import deque

# 테스트 케이스의 개수를 입력받는다.
N = int(input())
deq = deque()

# 입력받은 테스트 케이스의 개수만큼 반복해서 입력받는다.
# 각 경우에 따라 행동을 결정한다.
for _ in range(N):
    command = list(map(str, input().split()))
    if command[0] == "append":
        deq.append(int(command[1]))
    elif command[0] == "appendleft":
        deq.appendleft(int(command[1]))
    elif command[0] == "clear":
        deq.clear()
    elif command[0] == "extend":
        deq.extend(command[1])
    elif command[0] == "extendleft":
        deq.extendleft(command[1])
    elif command[0] == "count":
        deq.count(command[1])
    elif command[0] == "pop":
        deq.pop()
    elif command[0] == "popleft":
        deq.popleft()
    elif command[0] == "remove":
        deq.remove(command[1])
    elif command[0] == "reverse":
        deq.reverse()
    elif command[0] == "rotate":
        deq.rotate(int(command[1]))

# deque 안의 요소들을 출력한다.
print(*list(deq))
```
