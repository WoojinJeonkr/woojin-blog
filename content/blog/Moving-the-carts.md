---
external : false
title : "Moving the carts"
tag : [Programmers, Python]
date : 2025-10-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250134)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque
from copy import deepcopy

def solution(maze):
    n = len(maze)
    m = len(maze[0])
    red_s = blue_s = None   # 빨강, 파랑 수레의 시작 위치
    red_e = blue_e = None   # 빨강, 파랑 수레의 도착 위치

    # 시작점과 도착점 좌표 찾기
    for i in range(n):
        for j in range(m):
            if maze[i][j] == 1:
                red_s = (i, j)
            elif maze[i][j] == 2:
                blue_s = (i, j)
            elif maze[i][j] == 3:
                red_e = (i, j)
            elif maze[i][j] == 4:
                blue_e = (i, j)

    # 상하좌우 이동 방향
    dirs = [(-1,0),(1,0),(0,-1),(0,1)]

    # 방문 여부를 기록하는 2차원 배열 생성 함수
    def make_visited():
        return [[False]*m for _ in range(n)]

    rv0 = make_visited()
    bv0 = make_visited()
    rv0[red_s[0]][red_s[1]] = True   # 빨강 수레 시작 위치 방문 처리
    bv0[blue_s[0]][blue_s[1]] = True # 파랑 수레 시작 위치 방문 처리

    q = deque()
    # 상태: (빨강 행, 빨강 열, 파랑 행, 파랑 열, 빨강 방문맵, 파랑 방문맵, 턴 수)
    q.append((red_s[0], red_s[1], blue_s[0], blue_s[1], rv0, bv0, 0))

    INF = 10**9
    ans = INF

    while q:
        rr, rc, br, bc, rv, bv, turns = q.popleft()

        # 두 수레 모두 도착한 경우 최소 턴 갱신
        if (rr, rc) == red_e and (br, bc) == blue_e:
            ans = min(ans, turns)
            continue

        # 빨강만 도착한 경우 → 파랑만 이동
        if (rr, rc) == red_e:
            for dr,dc in dirs:
                nbr, nbc = br + dr, bc + dc
                if 0 <= nbr < n and 0 <= nbc < m and maze[nbr][nbc] != 5 and not bv[nbr][nbc]:
                    # 빨강과 같은 칸으로 이동 불가
                    if (nbr, nbc) == (rr, rc):
                        continue
                    nrv = [row[:] for row in rv]
                    nbv = [row[:] for row in bv]
                    nbv[nbr][nbc] = True
                    q.append((rr, rc, nbr, nbc, nrv, nbv, turns+1))

        # 파랑만 도착한 경우 → 빨강만 이동
        elif (br, bc) == blue_e:
            for dr,dc in dirs:
                nrr, nrc = rr + dr, rc + dc
                if 0 <= nrr < n and 0 <= nrc < m and maze[nrr][nrc] != 5 and not rv[nrr][nrc]:
                    # 파랑과 같은 칸으로 이동 불가
                    if (nrr, nrc) == (br, bc):
                        continue
                    nrv = [row[:] for row in rv]
                    nbv = [row[:] for row in bv]
                    nrv[nrr][nrc] = True
                    q.append((nrr, nrc, br, bc, nrv, nbv, turns+1))

        # 두 수레 모두 도착하지 않은 경우 → 동시에 이동
        else:
            for dr1,dc1 in dirs:
                nrr, nrc = rr + dr1, rc + dc1
                # 빨강 이동 가능 여부 확인
                if not (0 <= nrr < n and 0 <= nrc < m):
                    continue
                if maze[nrr][nrc] == 5:
                    continue
                if rv[nrr][nrc]:
                    continue

                for dr2,dc2 in dirs:
                    nbr, nbc = br + dr2, bc + dc2
                    # 파랑 이동 가능 여부 확인
                    if not (0 <= nbr < n and 0 <= nbc < m):
                        continue
                    if maze[nbr][nbc] == 5:
                        continue
                    if bv[nbr][nbc]:
                        continue
                    # 같은 칸으로 동시에 이동 불가
                    if (nrr, nrc) == (nbr, nbc):
                        continue
                    # 서로 자리를 바꾸는 이동 불가
                    if (nrr, nrc) == (br, bc) and (nbr, nbc) == (rr, rc):
                        continue

                    nrv = [row[:] for row in rv]
                    nbv = [row[:] for row in bv]
                    nrv[nrr][nrc] = True
                    nbv[nbr][nbc] = True
                    q.append((nrr, nrc, nbr, nbc, nrv, nbv, turns+1))

    # 도달 불가능한 경우 0 반환
    return 0 if ans == INF else ans
```
