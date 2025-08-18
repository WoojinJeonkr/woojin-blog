---
external : false
title : "Edit table"
tag : [Programmers, Python]
date : 2025-08-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/81303)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(n, k, cmd):
    # 각 행의 이전/다음 행 번호를 저장 (연결 리스트처럼 사용)
    prev = [i-1 for i in range(n)]
    next = [i+1 for i in range(n)]
    next[-1] = -1  # 마지막 행은 다음 없음
    
    cur = k               # 현재 선택된 행
    stack = []            # 삭제된 행 정보를 저장하는 스택
    
    for c in cmd:
        if c[0] == "U":   # 위로 이동
            x = int(c.split()[1])
            for _ in range(x):
                cur = prev[cur]
        elif c[0] == "D": # 아래로 이동
            x = int(c.split()[1])
            for _ in range(x):
                cur = next[cur]
        elif c[0] == "C": # 현재 행 삭제
            stack.append((cur, prev[cur], next[cur]))
            if prev[cur] != -1:
                next[prev[cur]] = next[cur]
            if next[cur] != -1:
                prev[next[cur]] = prev[cur]
            # 삭제 후 커서 이동
            if next[cur] != -1:
                cur = next[cur]
            else:
                cur = prev[cur]
        else:             # "Z": 최근 삭제 행 복구
            idx, p, n_ = stack.pop()
            if p != -1:
                next[p] = idx
            if n_ != -1:
                prev[n_] = idx
    
    # 삭제 여부를 표시할 결과 문자열 생성
    answer = ["O"] * n
    for idx, _, _ in stack:
        answer[idx] = "X"
    
    return "".join(answer)
```
