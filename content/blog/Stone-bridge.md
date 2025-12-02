---
external : false
title : "Stone bridge"
tag : [Baekjoon, Python]
date : 2025-12-02
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/12761)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

# A, B: 스카이콩콩 힘, N: 동규 위치, M: 주미 위치
A, B, N, M = map(int, input().split())

# 각 위치에 도달했는지와 이동 횟수를 기록하는 배열
visited = [0 for _ in range(100001)]

# 현재 위치(now)에서 i번째 방식으로 이동한 결과를 계산하는 함수
def dist(now, i):
    global A, B
    # 총 10가지 이동 가능
    arr = [
        now + 1,      # +1 이동
        now - 1,      # -1 이동
        now * A,      # A배 순간이동
        -now * A,     # -A배 (음수이므로 범위 검사에서 걸러짐)
        now * B,      # B배 순간이동
        -now * B,     # -B배
        now + A,      # +A 점프
        now - A,      # -A 점프
        now + B,      # +B 점프
        now - B       # -B 점프
    ]
    return arr[i]

# BFS로 최소 이동 횟수를 탐색
def bfs(N):
    global M
    que = deque()
    que.append(N)
    visited[N] = 1  # 시작 위치 방문 처리

    while que:
        node = que.popleft()

        # 10가지 이동 방식을 모두 시도
        for i in range(10):
            nxt = dist(node, i)

            # 범위 내이며 아직 방문하지 않았다면
            if 0 <= nxt < 100001 and not visited[nxt]:
                visited[nxt] = visited[node] + 1  # 이동 횟수 기록
                que.append(nxt)

                # 목표(M)에 도달하면 종료
                if nxt == M:
                    return

# BFS 실행
bfs(N)

# visited 배열에서 가장 큰 값이 M에 도달했을 때의 이동 횟수
print(max(visited) - 1)
```
