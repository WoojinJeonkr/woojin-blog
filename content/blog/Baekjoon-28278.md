---
external: false
title: "Baekjoon 28278"
date: 2023-11-26
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/28278)

## 2. 정답 코드 (python3, memory: 71112KB, time: 1284ms)

```python
import sys
input_function = sys.stdin.readline

num_queries = int(input_function())  # 쿼리의 개수를 입력받음
stack = []  # 스택을 초기화

for _ in range(num_queries):
    query = list(map(int, input_function().split()))  # 각 쿼리를 리스트로 변환하여 저장

    if query[0] == 1:
        stack.append(query[1])  # 1일 경우 스택에 값을 추가
    elif query[0] == 2:
        if stack:
            print(stack.pop())  # 2일 경우 스택이 비어있지 않으면 값을 출력하고 제거
        else:
            print(-1)  # 스택이 비어있으면 -1 출력
    elif query[0] == 3:
        print(len(stack))  # 3일 경우 스택의 길이를 출력
    elif query[0] == 4:
        if stack:
            print(0)  # 4일 경우 스택이 비어있지 않으면 0 출력
        else:
            print(1)  # 스택이 비어있으면 1 출력
    elif query[0] == 5:
        if stack:
            print(stack[-1])  # 5일 경우 스택이 비어있지 않으면 맨 위의 값을 출력
        else:
            print(-1)  # 스택이 비어있으면 -1 출력
```
