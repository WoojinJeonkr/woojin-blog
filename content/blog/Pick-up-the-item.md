---
external : false
title : "Pick up the item"
tag : [Programmers, Python]
date : 2025-09-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/87694)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    SIZE = 102  # 좌표를 2배로 확장했기 때문에 최대 크기는 100 이상으로 설정
    board = [[0] * SIZE for _ in range(SIZE)]  # 전체 맵 초기화

    # 1단계: 직사각형의 테두리와 내부를 모두 표시
    for rect in rectangle:
        x1, y1, x2, y2 = [n * 2 for n in rect]  # 좌표 2배로 확장
        for x in range(x1, x2 + 1):
            for y in range(y1, y2 + 1):
                board[x][y] = 1  # 직사각형 영역 표시 (테두리 + 내부)

    # 2단계: 직사각형 내부를 0으로 덮어 테두리만 남기기
    for rect in rectangle:
        x1, y1, x2, y2 = [n * 2 for n in rect]
        for x in range(x1 + 1, x2):
            for y in range(y1 + 1, y2):
                board[x][y] = 0  # 내부 제거

    # 3단계: BFS를 위한 초기 설정
    visited = [[0] * SIZE for _ in range(SIZE)]
    q = deque()
    startX, startY = characterX * 2, characterY * 2  # 시작점 좌표 확장
    endX, endY = itemX * 2, itemY * 2  # 아이템 위치 좌표 확장
    q.append((startX, startY, 0))  # 시작 위치와 거리
    visited[startX][startY] = 1  # 방문 처리

    # 4방향 이동 (상, 하, 좌, 우)
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    # 4단계: BFS로 최단 거리 탐색
    while q:
        x, y, dist = q.popleft()
        if x == endX and y == endY:  # 아이템에 도착하면 거리 반환
            return dist // 2  # 좌표 2배로 늘렸으므로 거리도 2로 나눔

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < SIZE and 0 <= ny < SIZE:
                if board[nx][ny] == 1 and visited[nx][ny] == 0:
                    visited[nx][ny] = 1
                    q.append((nx, ny, dist + 1))
```
