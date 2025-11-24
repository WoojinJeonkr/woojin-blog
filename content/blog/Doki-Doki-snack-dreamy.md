---
external : false
title : "Doki Doki snack dreamy"
tag : [Baekjoon, Python]
date : 2025-11-24
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/12789)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 학생 수 입력
N = int(sys.stdin.readline())

# 현재 서 있는 줄(대기열) 입력
line = list(map(int, sys.stdin.readline().split()))

# 보조 공간(스택)
stack = []

# 다음에 나가야 할 번호
target = 1

# 대기열의 학생들을 앞에서부터 확인
for student in line:
    # 스택 맨 위가 다음 번호라면 pop
    while stack and stack[-1] == target:
        stack.pop()
        target += 1
    
    # 현재 학생이 바로 나갈 번호라면 바로 통과
    if student == target:
        target += 1
    # 아니라면 스택에 대기
    else:
        stack.append(student)

# 대기열 처리가 끝난 후 스택에서도 가능한 만큼 처리
while stack and stack[-1] == target:
    stack.pop()
    target += 1

# 모든 번호가 순서대로 통과했다면 target은 N+1이어야 함
print("Nice" if target == N + 1 else "Sad")
```
