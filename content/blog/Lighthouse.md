---
external : false
title : "Lighthouse"
tag : [Programmers, Python]
date : 2025-09-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/133500)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
sys.setrecursionlimit(10**6)  # 재귀 제한 늘리기 (최대 노드 수가 많기 때문)

def solution(n, lighthouse):
    from collections import defaultdict

    # 트리 구조를 인접 리스트로 표현
    tree = defaultdict(list)
    for a, b in lighthouse:
        tree[a].append(b)
        tree[b].append(a)

    # dp[node][0]: 해당 노드를 끄는 경우 최소 켜야 할 등대 수
    # dp[node][1]: 해당 노드를 켜는 경우 최소 켜야 할 등대 수
    dp = [[0, 0] for _ in range(n + 1)]

    # 방문 여부 체크 배열
    visited = [False] * (n + 1)

    def dfs(node):
        visited[node] = True
        dp[node][0] = 0      # 현재 노드를 끄는 경우
        dp[node][1] = 1      # 현재 노드를 켜는 경우 (자기 자신 포함)

        for child in tree[node]:
            if not visited[child]:
                dfs(child)
                # 현재 노드를 끄는 경우, 자식은 반드시 켜져야 함
                dp[node][0] += dp[child][1]
                # 현재 노드를 켜는 경우, 자식은 켜도 되고 꺼도 됨 → 최소값 선택
                dp[node][1] += min(dp[child][0], dp[child][1])

    dfs(1)  # 루트 노드를 1번으로 가정하고 DFS 시작
    return min(dp[1][0], dp[1][1])  # 루트를 켜는 경우와 끄는 경우 중 최소값 반환
```
