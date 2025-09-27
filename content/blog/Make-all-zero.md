---
external : false
title : "Make all zero"
tag : [Programmers, Python]
date : 2025-09-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/76503)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 파이썬 기본 재귀 깊이 제한을 늘려 깊은 트리도 처리할 수 있게 설정
sys.setrecursionlimit(10**6)

def solution(a, edges):
    from collections import defaultdict
    
    n = len(a)
    
    # 모든 노드의 가중치 합이 0이 아니면 절대로 0으로 만들 수 없음
    if sum(a) != 0:
        return -1

    # 인접 리스트 방식으로 트리 구성
    tree = defaultdict(list)
    for u, v in edges:
        tree[u].append(v)
        tree[v].append(u)
    
    # 노드 방문 여부 기록
    visited = [False] * n

    # 정답(최소 연산 횟수)을 저장할 변수
    answer = 0

    # DFS 함수 정의 (후위 순회 방식)
    def dfs(node, parent):
        nonlocal answer

        # 현재 노드를 방문 처리
        visited[node] = True

        # 연결된 이웃 노드들을 순회
        for neighbor in tree[node]:
            # 아직 방문하지 않은 자식 노드에 대해 DFS 수행
            if not visited[neighbor]:
                # 자식 노드가 가지고 있는 가중치를 현재 노드로 이동시킴
                a[node] += dfs(neighbor, node)

        # 현재 노드의 가중치를 0으로 만들기 위한 연산 횟수 누적
        answer += abs(a[node])

        # 부모 노드로 현재 노드의 잔여 가중치를 반환
        return a[node]

    # 루트 노드(0번)부터 DFS 시작
    dfs(0, -1)

    # 최종 연산 횟수 반환
    return answer
```
