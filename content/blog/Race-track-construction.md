---
external : false
title : "Race track construction"
tag : [Programmers, Python]
date : 2025-08-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/67259)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def solution(board):
    N = len(board)
    
    # 상, 하, 좌, 우 네 방향으로 이동하기 위한 x, y 좌표 변화량
    # 0: 위, 1: 아래, 2: 왼쪽, 3: 오른쪽
    dx = [-1, 1, 0, 0] 
    dy = [0, 0, -1, 1]

    # min_cost[방향][x][y]: (x, y) 위치에 특정 방향으로 도달했을 때의 최소 비용
    # 초기값은 무한대로 설정하여 나중에 최소 비용을 갱신할 수 있도록 합니다.
    # 4 (방향) x N (행) x N (열) 크기의 3차원 배열을 생성합니다.
    min_cost = [[[float('inf')] * N for _ in range(N)] for _ in range(4)]

    # BFS(너비 우선 탐색)를 위한 큐
    # 큐의 각 원소는 (현재 x 좌표, 현재 y 좌표, 현재 방향, 현재까지의 비용)으로 구성됩니다.
    q = deque()

    # 출발점 (0,0)에서 시작합니다.
    # 처음에는 어떤 방향에서 온 것이 아니므로, 초기 이동 방향을 기준으로 큐에 추가합니다.
    # (0,0)에서 오른쪽 (0,1)으로 이동하는 경우와 아래 (1,0)으로 이동하는 경우를 고려합니다.
    # 두 경우 모두 첫 직선 도로 비용 100원이 발생합니다.

    # (0,0)에서 오른쪽 (0,1)으로 출발하는 경우 (방향: 3 - 오른쪽)
    if board[0][1] == 0: # 다음 칸이 벽이 아닌지 확인
        q.append((0, 1, 3, 100))
        min_cost[3][0][1] = 100
    
    # (0,0)에서 아래 (1,0)으로 출발하는 경우 (방향: 1 - 아래)
    if board[1][0] == 0: # 다음 칸이 벽이 아닌지 확인
        q.append((1, 0, 1, 100))
        min_cost[1][1][0] = 100

    # 큐가 빌 때까지 BFS 탐색을 계속합니다.
    while q:
        x, y, direction, cost = q.popleft()

        # 현재 위치가 도착점 (N-1, N-1)이면 더 이상 탐색할 필요가 없으므로 다음 큐 원소로 넘어갑니다.
        if x == N - 1 and y == N - 1:
            continue

        # 현재 위치에서 상하좌우 네 방향으로 이동을 시도합니다.
        for i in range(4): # i는 새롭게 이동할 방향을 나타냅니다.
            nx, ny = x + dx[i], y + dy[i] # 새로운 (x, y) 좌표
            ndirection = i # 새로운 이동 방향

            # 새로운 위치가 보드 범위 내에 있고 벽(1)이 아닌지 확인합니다.
            if 0 <= nx < N and 0 <= ny < N and board[nx][ny] == 0:
                new_cost = cost # 이전까지의 비용을 복사

                # 현재 이동 방향(ndirection)이 이전 이동 방향(direction)과 다르면 코너가 발생한 것입니다.
                if direction != ndirection:
                    new_cost += 500 # 코너 비용 500원 추가
                
                new_cost += 100 # 직선 도로 비용 100원 추가

                # 만약 계산된 새로운 비용(new_cost)이 min_cost에 저장된 값보다 작으면 갱신합니다.
                if new_cost < min_cost[ndirection][nx][ny]:
                    min_cost[ndirection][nx][ny] = new_cost
                    q.append((nx, ny, ndirection, new_cost)) # 갱신된 상태를 큐에 추가하여 다음 탐색에 사용

    # 모든 탐색이 완료되면, 도착점 (N-1, N-1)에 도달하는 모든 방향의 최소 비용 중에서 가장 작은 값을 찾습니다.
    answer = float('inf')
    for i in range(4): # 4가지 방향에 대해 확인
        answer = min(answer, min_cost[i][N-1][N-1])

    return answer
```
