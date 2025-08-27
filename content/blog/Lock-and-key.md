---
external : false
title : "Lock and key"
tag : [Programmers, Python]
date : 2025-08-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/60059)에서 확인하실 수 있습니다.

## 2. Answer

```py
def rotate90(arr):
    # 2차원 배열을 시계 방향으로 90도 회전
    return list(zip(*arr[::-1]))

def check(new_lock, N):
    # 자물쇠의 중앙 N x N 부분이 모두 1인지 확인
    for i in range(N, 2*N):
        for j in range(N, 2*N):
            if new_lock[i][j] != 1:
                return False
    return True

def solution(key, lock):
    M = len(key)   # 열쇠 크기
    N = len(lock)  # 자물쇠 크기
    
    # 자물쇠를 3배 크기로 확장
    new_lock = [[0] * (N*3) for _ in range(N*3)]
    
    # 중앙에 원래 자물쇠 배치
    for i in range(N):
        for j in range(N):
            new_lock[i+N][j+N] = lock[i][j]
    
    # 열쇠를 4번 회전하면서 모든 위치에 대입 시도
    for _ in range(4):
        key = rotate90(key)
        for x in range(1, 2*N):
            for y in range(1, 2*N):
                
                # 열쇠 끼워넣기
                for i in range(M):
                    for j in range(M):
                        new_lock[x+i][y+j] += key[i][j]
                
                # 자물쇠가 열리는지 확인
                if check(new_lock, N):
                    return True
                
                # 열쇠 빼기 (원상복구)
                for i in range(M):
                    for j in range(M):
                        new_lock[x+i][y+j] -= key[i][j]
    
    return False
```
