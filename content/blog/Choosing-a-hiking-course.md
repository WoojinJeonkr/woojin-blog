---
external : false
title : "Choosing a hiking course"
tag : [Programmers, Python]
date : 2025-10-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/118669)에서 확인하실 수 있습니다.

## 2. Answer

```py
import heapq
from math import inf

def solution(n, paths, gates, summits):
    # 그래프 초기화 (각 노드마다 연결된 경로 리스트 생성)
    graph = [[] for _ in range(n + 1)]
    for u, v, w in paths:
        graph[u].append([v, w])  # u에서 v로 가는 경로
        graph[v].append([u, w])  # v에서 u로 가는 경로 (양방향)

    # 산봉우리 판별 배열 초기화
    is_summit = [False] * (n + 1)
    for summit in summits:
        is_summit[summit] = True  # 해당 지점이 산봉우리임을 표시

    # 각 지점까지의 최대 이동 시간 초기화 (무한대 값으로 초기화)
    distance = [inf] * (n + 1)
    pq = []  # 우선순위 큐 (최소 힙)
    
    # 출입구에서 출발하여 다익스트라 시작
    for gate in gates:
        distance[gate] = 0  # 출입구의 초기 시간은 0
        heapq.heappush(pq, [0, gate])  # 출입구 노드를 큐에 삽입

    # 다익스트라 알고리즘 (우선순위 큐 이용)
    while pq:
        dist, node = heapq.heappop(pq)  # 큐에서 가장 작은 값 (최소 거리) 추출
        # 이미 처리된 노드거나 산봉우리인 경우 건너뜀
        if distance[node] < dist or is_summit[node]:
            continue
        # 현재 노드에서 인접한 노드로 이동
        for neighbor, weight in graph[node]:
            # 현재까지의 이동 경로와 새로운 경로의 최대 시간 계산
            new_dist = max(distance[node], weight)
            # 새로운 경로가 더 좋은 경우, 업데이트
            if distance[neighbor] > new_dist:
                distance[neighbor] = new_dist
                heapq.heappush(pq, [new_dist, neighbor])  # 업데이트된 값 큐에 삽입

    # 결과 초기화 (최소 intensity 값을 저장할 변수)
    result = [-1, inf]
    # 산봉우리들을 오름차순으로 탐색하며 최소 intensity 값 계산
    for summit in sorted(summits):
        if distance[summit] < result[1]:
            result[0] = summit  # 최소 intensity를 가지는 산봉우리 번호
            result[1] = distance[summit]  # 최소 intensity 값

    return result
```
