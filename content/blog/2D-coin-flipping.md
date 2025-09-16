---
external : false
title : "2D coin flipping"
tag : [Programmers, Python]
date : 2025-09-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131703)에서 확인하실 수 있습니다.

## 2. Answer

```py
import copy
from itertools import product

def solution(beginning, target):
    n = len(beginning)      # 행의 개수
    m = len(beginning[0])   # 열의 개수
    min_flip = float('inf') # 최소 뒤집기 횟수 (초기값은 무한대)

    # 모든 행의 뒤집기 조합을 순회 (0: 안 뒤집음, 1: 뒤집음)
    for row_bits in product([0, 1], repeat=n):
        board = copy.deepcopy(beginning)  # 원본을 복사해서 작업할 배열
        flip_count = 0                    # 현재 조합에서의 뒤집기 횟수

        # 선택된 행(row_bits)에 따라 행을 뒤집기
        for i in range(n):
            if row_bits[i]:  # i번째 행을 뒤집는 경우
                flip_count += 1
                for j in range(m):
                    board[i][j] ^= 1  # 0 -> 1, 1 -> 0

        col_bits = [0] * m  # 각 열의 뒤집기 여부 저장
        # 첫 번째 행을 기준으로 열을 뒤집을지 결정
        for j in range(m):
            if board[0][j] != target[0][j]:
                col_bits[j] = 1
                flip_count += 1
                for i in range(n):
                    board[i][j] ^= 1  # 해당 열 전체 뒤집기

        # 현재 board가 target과 같다면 최소 뒤집기 횟수 갱신
        if board == target:
            min_flip = min(min_flip, flip_count)

    # 결과 반환: 가능한 경우 최소 횟수, 불가능한 경우 -1
    if min_flip != float('inf'):
        return min_flip
    else:
        return -1
```
