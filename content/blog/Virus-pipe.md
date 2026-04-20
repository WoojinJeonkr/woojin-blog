---
external : false
title : "Virus pipe"
tag : [Programmers, Python]
date : 2026-04-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/468373)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque
from itertools import product

def solution(n, infection, edges, k):
    # 인접 리스트 형태로 그래프 생성 (노드 번호는 1부터 시작)
    graph = [[] for _ in range(n + 1)]

    # edges의 각 원소는 [노드1, 노드2, 파이프 타입] 형태이므로
    # 양방향 그래프로 저장하면서 타입 정보도 함께 저장
    for a, b, t in edges:
        graph[a].append((b, t))
        graph[b].append((a, t))

    # 최대로 감염시킬 수 있는 배양체 수를 저장할 변수
    answer = 0

    # 길이가 k인 모든 파이프 타입 순서를 생성 (각 원소는 1, 2, 3 중 하나)
    for seq in product([1, 2, 3], repeat=k):
        # 각 시뮬레이션마다 방문(감염) 여부를 초기화
        visited = [0] * (n + 1)
        visited[infection] = 1  # 최초 감염 배양체

        # 현재까지 감염된 배양체 집합
        infected_set = set([infection])

        # 선택된 파이프 타입 순서대로 반복
        for pipe_type in seq:
            # 현재 감염된 배양체들을 시작점으로 BFS 수행
            q = deque(infected_set)

            while q:
                cur = q.popleft()
                # 현재 노드와 연결된 이웃 노드들을 확인
                for nxt, t in graph[cur]:
                    # 현재 열려있는 파이프 타입과 같고 아직 감염되지 않았다면 감염
                    if t == pipe_type and not visited[nxt]:
                        visited[nxt] = 1
                        infected_set.add(nxt)
                        q.append(nxt)

        # 이번 순서에서 감염된 배양체 수로 최대값 갱신
        answer = max(answer, sum(visited))

    # 최대 감염 수 반환
    return answer
```
