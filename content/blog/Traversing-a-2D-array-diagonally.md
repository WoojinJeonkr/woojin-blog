---
external : false
title : "Traversing a 2D array diagonally"
tag : [Programmers, Python]
date : 2025-07-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181829)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(board, k):
    answer = 0
    # 보드의 행(세로) 길이
    rows = len(board)
    # 보드의 열(가로) 길이 (모든 행의 길이가 같으므로 board[0] 사용)
    cols = len(board[0])

    # 모든 행을 순회합니다. (i는 현재 행의 인덱스)
    for i in range(rows):
        # 현재 행의 모든 열을 순회합니다. (j는 현재 열의 인덱스)
        for j in range(cols):
            # i와 j의 합이 k보다 작거나 같은지 확인합니다.
            if i + j <= k:
                # 조건을 만족하면 해당 board[i][j] 값을 answer에 더합니다.
                answer += board[i][j]
    
    # 계산된 최종 합계를 반환합니다.
    return answer
```
