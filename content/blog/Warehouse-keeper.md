---
external : false
title : "Warehouse keeper"
tag : [Baekjoon, Python]
date : 2025-12-28
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/31844)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def solve():
    # 창고 상태 입력
    s = input().strip()

    # 로봇(@), 박스(#), 목표 지점(!)의 위치 인덱스 찾기
    robot = s.index('@')
    box = s.index('#')
    target = s.index('!')

    # BFS를 위한 큐: (로봇 위치, 박스 위치, 명령 횟수)
    q = deque()
    q.append((robot, box, 0))

    # 방문한 상태를 저장 (로봇 위치, 박스 위치)
    visited = set()
    visited.add((robot, box))

    while q:
        r, b, cnt = q.popleft()

        # 박스가 목표 지점에 도달하면 종료
        if b == target:
            print(cnt)
            return

        # 왼쪽(-1), 오른쪽(+1) 이동 시도
        for d in (-1, 1):
            nr = r + d  # 이동 후 로봇 위치

            # 창고 범위를 벗어나면 무시
            if not (0 <= nr < 10):
                continue

            # 1) 인접한 빈칸으로 이동하는 경우 (박스가 아닌 칸)
            if nr != b:
                state = (nr, b)
                if state not in visited:
                    visited.add(state)
                    q.append((nr, b, cnt + 1))

            # 2) 인접한 칸에 박스가 있어 밀 수 있는 경우
            else:
                nb = b + d  # 박스가 밀려날 위치

                # 박스가 범위 안의 빈칸으로 밀려날 수 있는지 확인
                if 0 <= nb < 10 and nb != r:
                    state = (nr, nb)
                    if state not in visited:
                        visited.add(state)
                        q.append((nr, nb, cnt + 1))

    # 어떤 경우에도 목표 지점으로 옮길 수 없는 경우
    print(-1)

solve()
```
