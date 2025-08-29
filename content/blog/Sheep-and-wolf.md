---
external : false
title : "Sheep and wolf"
tag : [Programmers, Python]
date : 2025-08-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/92343)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(info, edges):
    from collections import defaultdict
    
    # 트리 구조 생성
    graph = defaultdict(list)
    for parent, child in edges:
        graph[parent].append(child)
    
    max_sheep = 0

    def dfs(node, sheep, wolf, candidates):
        nonlocal max_sheep
        
        # 현재 노드가 양인지 늑대인지 확인 후 카운트
        if info[node] == 0:
            sheep += 1
        else:
            wolf += 1
        
        # 늑대 수가 양 수 이상이면 경로 종료
        if wolf >= sheep:
            return
        
        # 최대 양 수 갱신
        max_sheep = max(max_sheep, sheep)
        
        # 다음 방문 가능한 후보 노드 목록 업데이트
        next_candidates = candidates + graph[node]
        if node in next_candidates:
            next_candidates.remove(node)
        
        # 후보 노드 중 하나씩 선택하여 DFS 재귀 탐색
        for next_node in next_candidates:
            dfs(next_node, sheep, wolf, next_candidates[:])
    
    # 루트 노드(0번)에서 탐색 시작
    dfs(0, 0, 0, [0])
    
    return max_sheep
```
