---
external : false
title : "Odd even tree"
tag : [Programmers, Python]
date : 2025-07-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/388354)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import defaultdict, deque

def solution(nodes, edges):
    # 각 노드에 연결된 간선들을 저장하는 맵 (인접 리스트)
    node_to_edges = defaultdict(list)
    
    # 모든 노드를 순회하며 초기 인접 리스트를 빈 리스트로 설정
    # 이는 간선이 없는 고립된 노드도 처리하기 위함
    for node_val in nodes:
        node_to_edges[node_val] = []

    # 주어진 간선 정보를 바탕으로 양방향 그래프를 구축
    # node_to_edges[node].size() (Python에서는 len(node_to_edges[node]))는 해당 노드의 차수(degree)가 됨
    for u, v in edges:
        node_to_edges[u].append(v)
        node_to_edges[v].append(u)

    # 결과를 저장할 배열: [홀짝 트리가 될 수 있는 트리의 개수, 역홀짝 트리가 될 수 있는 트리의 개수]
    answer = [0, 0]

    # 이미 방문한 노드를 추적하여 같은 트리를 중복해서 처리하지 않도록 함
    visited_nodes = set()

    # 모든 노드를 순회하며 아직 방문하지 않은 노드를 시작점으로 새로운 트리를 탐색
    for node_val in nodes:
        # 이미 방문한 노드라면 건너뛰기 (이미 해당 트리는 처리됨)
        if node_val in visited_nodes:
            continue

        # 현재 트리의 'same_parity_count'와 'diff_parity_count'를 초기화
        # same_parity_count: 노드 번호의 홀짝과 노드 차수(degree)의 홀짝이 같은 노드의 수
        # diff_parity_count: 노드 번호의 홀짝과 노드 차수(degree)의 홀짝이 다른 노드의 수
        same_parity_count = 0
        diff_parity_count = 0

        # BFS(너비 우선 탐색)를 위한 큐를 초기화하고 현재 시작 노드를 추가
        q = deque()
        q.append(node_val)
        visited_nodes.add(node_val) # 시작 노드를 방문 처리

        # 큐가 빌 때까지 BFS 탐색을 계속
        while q:
            current_node = q.popleft() # 큐에서 노드를 하나 꺼냄

            # 현재 노드의 번호 홀짝과 차수(degree)의 홀짝을 비교하여 카운트를 업데이트
            # 노드 번호 % 2: 노드 번호의 홀짝 (0: 짝수, 1: 홀수)
            # len(node_to_edges[current_node]) % 2: 노드 차수의 홀짝
            if (current_node % 2) == (len(node_to_edges[current_node]) % 2):
                same_parity_count += 1
            else:
                diff_parity_count += 1

            # 현재 노드의 모든 이웃 노드를 순회
            for neighbor in node_to_edges[current_node]:
                # 이웃 노드가 아직 방문되지 않았다면
                if neighbor not in visited_nodes:
                    visited_nodes.add(neighbor) # 방문 처리
                    q.append(neighbor) # 큐에 추가하여 다음 탐색 대상으로 예약
        
        # 현재 트리가 '홀짝 트리'가 될 수 있는지 확인
        # 홀짝 트리는 'same_parity_count'가 정확히 1인 경우에만 가능
        # (이 하나의 노드가 루트가 되고, 나머지 노드들은 조건에 맞게 됨)
        if same_parity_count == 1:
            answer[0] += 1
        
        # 현재 트리가 '역홀짝 트리'가 될 수 있는지 확인
        # 역홀짝 트리는 'diff_parity_count'가 정확히 1인 경우에만 가능
        # (이 하나의 노드가 루트가 되고, 나머지 노드들은 조건에 맞게 됨)
        if diff_parity_count == 1:
            answer[1] += 1
            
    return answer
```
