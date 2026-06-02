---
external : false
title : "Forest Fire Spread Prediction"
tag : [Python]
date : 2026-06-02
---

## 1. Problem

한 국립공원에서는 산불 발생 시 피해를 최소화하기 위해
불길이 얼마나 빨리 확산되는지 예측하는 시스템을 운영하고 있다.

공원은 N × M 크기의 격자로 표현된다.

각 칸은 다음 중 하나이다.

- `.` : 일반 숲
- `#` : 바위 지대 (불이 번지지 않음)
- `F` : 최초 화재 발생 지점

불은 매분 상하좌우 인접한 숲으로 번진다.

바위 지대는 통과할 수 없으며 불이 번지지 않는다.

모든 화재 발생 지점에서 동시에 불이 시작될 때,
숲 전체가 불타는 데 걸리는 최소 시간을 구하시오.

단, 바위로 막혀 있어 영원히 불이 도달할 수 없는 숲이 존재하면 `-1`을 출력한다.

## 2. Input

- 첫째 줄에 N, M이 주어진다.
- 다음 N개의 줄에 공원 지도가 주어진다.

```text
N M
```

이후

```text
지도 정보
```

가 주어진다.

## 3. Limit

- 1 ≤ N, M ≤ 1000
- 지도에는 최소 1개의 F가 존재한다.
- 입력되는 문자 종류는 `.`, `#`, `F` 뿐이다.

## 4. Output

모든 숲이 불타는 데 걸리는 최소 시간을 출력한다.

도달할 수 없는 숲이 존재하면 `-1`을 출력한다.

## 5. Input Example

```text
5 7
F...#..
..#....
....#..
.#...F.
.......
```

## 6. Output Example

```text
5
```

## 7. Example Explanation

초기 화재 지점은 두 곳이다.

```text
F...#..
..#....
....#..
.#...F.
.......
```

모든 화재 지점에서 동시에 불이 확산된다.

불은 매분 상하좌우 방향으로 인접한 칸에 번지며,
바위(`#`)는 통과할 수 없다.

멀티 소스 BFS를 수행하면 각 칸에 불이 도달하는 최소 시간을 계산할 수 있다.

가장 늦게 불이 도달하는 숲의 시간이 5분이므로 정답은

```text
5
```

이다.

이 문제는 여러 시작점에서 동시에 탐색을 수행하는
멀티 소스 BFS(Multi-Source BFS) 문제이다.

## 8. Answer

```py
from collections import deque
import sys

input = sys.stdin.readline

n, m = map(int, input().split())

forest = [list(input().strip()) for _ in range(n)]

dist = [[-1] * m for _ in range(n)]
queue = deque()

# 모든 화재 발생 지점을 시작점으로 삽입
for i in range(n):
    for j in range(m):
        if forest[i][j] == 'F':
            queue.append((i, j))
            dist[i][j] = 0

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

while queue:
    x, y = queue.popleft()

    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]

        if nx < 0 or nx >= n or ny < 0 or ny >= m:
            continue

        if forest[nx][ny] == '#':
            continue

        if dist[nx][ny] != -1:
            continue

        dist[nx][ny] = dist[x][y] + 1
        queue.append((nx, ny))

answer = 0

for i in range(n):
    for j in range(m):
        if forest[i][j] == '.':
            if dist[i][j] == -1:
                print(-1)
                sys.exit(0)

            answer = max(answer, dist[i][j])

print(answer)
```
