---
external : false
title : "Traveling salesman tour 2"
tag : [Baekjoon, Python]
date : 2025-12-27
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10971)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

N = int(input())
W = [list(map(int, input().split())) for _ in range(N)]

INF = 10 ** 9
answer = INF

visited = [False] * N
visited[0] = True  # 0번 도시에서 시작한다고 가정


def dfs(now, cnt, cost):
    global answer

    # 가지치기: 이미 최소값 이상이면 더 볼 필요 없음
    if cost >= answer:
        return

    # 모든 도시 방문 완료
    if cnt == N:
        # 시작점으로 돌아가는 길이 있는 경우만 갱신
        if W[now][0] != 0:
            answer = min(answer, cost + W[now][0])
        return

    # 다음 도시로 이동
    for nxt in range(N):
        if not visited[nxt] and W[now][nxt] != 0:
            visited[nxt] = True
            dfs(nxt, cnt + 1, cost + W[now][nxt])
            visited[nxt] = False


dfs(0, 1, 0)
print(answer)
```
