---
external : false
title : "Safe area"
tag : [Baekjoon, Java]
date : 2025-10-30
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2468)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
sys.setrecursionlimit(100000)  # 재귀 제한을 크게 늘려 DFS 중 재귀 깊이 초과 방지

n = int(input())  # 지도의 크기 입력 (n x n)
graph = []        # 높이 정보를 저장할 2차원 리스트
max_num = 0       # 지도 내 가장 높은 높이 저장
result = 1        # 결과(안전 영역의 최대 개수), 최소 1로 초기화

# 상하좌우 이동을 위한 방향 벡터
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

# 지도 입력 받기
for i in range(n):
    low = list(map(int, input().split()))  # 한 줄 입력받아 리스트로 변환
    graph.append(low)

    # 최대 높이 갱신
    for j in low:
        if j > max_num:
            max_num = j

# DFS 함수 정의
# x, y: 현재 좌표 / num: 현재 물에 잠긴 높이
def dfs(x, y, num):
    for i in range(4):  # 상하좌우 탐색
        nx = x + dx[i]
        ny = y + dy[i]

        # 지도의 범위 안에 있고 아직 방문하지 않았다면
        if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == 0:
            # 현재 높이가 잠긴 높이(num)보다 높다면 (즉, 잠기지 않은 지역)
            if graph[nx][ny] > num:
                visited[nx][ny] = 1  # 방문 표시
                dfs(nx, ny, num)     # 인접한 안전 영역 재귀 탐색

# 높이 i를 기준으로 빗물에 잠기는 경우를 0부터 최대 높이까지 시뮬레이션
for i in range(max_num):
    visited = [[0]*n for _ in range(n)]  # 방문 여부를 저장하는 2차원 리스트 초기화
    cnt = 0  # 현재 높이(i)에서의 안전 영역 개수

    for j in range(n):
        for k in range(n):
            # 아직 방문하지 않았고, 높이가 i보다 높으면 (즉, 물에 잠기지 않은 지역이면)
            if graph[j][k] > i and visited[j][k] == 0:
                cnt += 1              # 새로운 안전 영역 발견
                visited[j][k] = 1     # 방문 표시
                dfs(j, k, i)          # DFS로 연결된 안전 지역 탐색

    result = max(result, cnt)  # 지금까지의 최대 안전 영역 수 갱신

# 결과 출력
print(result)
```
