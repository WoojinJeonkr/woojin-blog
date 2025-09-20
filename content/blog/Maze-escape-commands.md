---
external : false
title : "Maze escape commands"
tag : [Programmers, Python]
date : 2025-09-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/150365)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
# 재귀 호출 깊이 제한 증가 (기본은 1000, k가 클 경우 필요)
sys.setrecursionlimit(3000)

def solution(n, m, x, y, r, c, k):
    # 이동 방향: (문자, 행 이동, 열 이동) — 사전 순 정렬 기준으로 'd', 'l', 'r', 'u' 순
    directions = [
        ('d', 1, 0),
        ('l', 0, -1),
        ('r', 0, 1),
        ('u', -1, 0)
    ]

    # 시작점과 도착점 사이의 최소 거리 계산
    min_dist = abs(x - r) + abs(y - c)

    # 이동 불가능한 경우 (거리가 너무 짧거나, 홀짝이 맞지 않는 경우)
    if min_dist > k or (k - min_dist) % 2 != 0:
        return "impossible"

    answer = None       # 정답 문자열
    found = False       # 첫 번째 경로를 찾았는지 여부
    path_chars = []     # 현재까지의 경로를 저장할 리스트

    # 깊이 우선 탐색 (백트래킹)
    def dfs(cx, cy, depth):
        nonlocal answer, found
        if found:
            return
        # 종료 조건: k번 이동 완료
        if depth == k:
            # 현재 위치가 목적지인 경우, 경로 저장
            if cx == r and cy == c:
                answer = ''.join(path_chars)
                found = True
            return

        # 4방향 탐색 (사전 순 빠른 방향부터)
        for d, dx, dy in directions:
            nx, ny = cx + dx, cy + dy

            # 격자 범위를 벗어나면 무시
            if not (1 <= nx <= n and 1 <= ny <= m):
                continue

            # 남은 거리 계산
            rd = abs(nx - r) + abs(ny - c)
            remaining_steps = k - (depth + 1)

            # 가지치기: 남은 거리보다 이동 횟수가 부족하면 불가능
            if rd > remaining_steps:
                continue

            # 남은 거리와 남은 이동 횟수의 차가 홀수면 도착 불가능
            if (remaining_steps - rd) % 2 != 0:
                continue

            # 이동 기록
            path_chars.append(d)
            dfs(nx, ny, depth + 1)
            path_chars.pop()  # 백트래킹

            if found:
                return

    # DFS 시작
    dfs(x, y, 0)
    return answer if answer else "impossible"
```
