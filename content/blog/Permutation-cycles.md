---
external : false
title : "Permutation cycles"
tag : [Baekjoon, Python]
date : 2025-12-29
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10451)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
sys.setrecursionlimit(100000)
input = sys.stdin.readline

# 하나의 정점 x에서 시작하여, 순열을 따라가며 연결된 정점들을 모두 방문 처리하는 DFS 함수
def dfs(x, perm, visited):
    visited[x] = True              # 현재 정점 x를 방문 처리
    nxt = perm[x]                  # x에서 가리키는 다음 정점
    if not visited[nxt]:           # 다음 정점을 아직 방문하지 않았다면
        dfs(nxt, perm, visited)    # 재귀적으로 DFS 진행

T = int(input().strip())           # 테스트 케이스 개수 입력
for _ in range(T):
    N = int(input().strip())       # 순열의 크기 N 입력
    # 편의를 위해 1-based 인덱스를 사용하기 위해 맨 앞에 0 배치
    perm = [0] + list(map(int, input().split()))

    visited = [False] * (N + 1)    # 각 정점(1..N)의 방문 여부를 저장하는 배열
    count = 0                      # 순열 사이클의 개수를 셀 변수

    # 1번 정점부터 N번 정점까지 모두 확인
    for i in range(1, N + 1):
        # 아직 방문하지 않은 정점이면, 새로운 사이클의 시작점
        if not visited[i]:
            dfs(i, perm, visited)  # i에서 시작하는 사이클을 모두 방문 처리
            count += 1             # 사이클 개수 1 증가

    print(count)                   # 해당 테스트 케이스의 순열 사이클 개수 출력
```
