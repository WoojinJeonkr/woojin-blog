---
external : false
title : "Laser relay shortest distance"
tag : [Python]
date : 2026-05-22
---

## 1. Problem

한 연구소에서는 여러 중계 기지를 이용해 레이저 신호를 전달한다.

기지들은 2차원 좌표 평면 위에 존재하며,
레이저는 한 번에 하나의 기지로만 이동할 수 있다.

현재 시작 기지에서 목표 기지까지 이동하려고 한다.

단, 레이저는 이동 거리가 제한되어 있어
한 번 이동할 때의 거리가 K 이하인 기지로만 이동 가능하다.

각 기지는 번호로 구분된다.

시작 기지에서 목표 기지까지 이동하기 위해 필요한
최소 이동 횟수를 구하는 프로그램을 작성하시오.

이동할 수 없다면 `-1`을 출력한다.

두 기지 사이의 거리는 다음 공식으로 계산한다.

\[
distance = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
\]

## 3. Input

- 첫째 줄에 기지의 개수 N 과 최대 이동 거리 K 가 주어진다.
- 둘째 줄부터 N개의 줄에 각 기지의 좌표 `x y` 가 주어진다.
- 마지막 줄에 시작 기지 번호 S 와 목표 기지 번호 E 가 주어진다.

기지 번호는 1번부터 시작한다.

## 5. Limit

- 2 ≤ N ≤ 1000
- 1 ≤ K ≤ 10000
- -10000 ≤ x, y ≤ 10000

## 6. Output

- 시작 기지에서 목표 기지까지의 최소 이동 횟수를 출력한다.
- 이동할 수 없다면 `-1`을 출력한다.

## 7. Input Example

```text
5 5
0 0
3 4
7 1
10 1
13 5
1 4
```

## 8. Output Example

```text
3
```

## 9. Example Explanation

기지 간 이동 가능 여부를 확인하면:

- 1번 → 2번 거리 = 5
- 2번 → 3번 거리 = 5
- 3번 → 4번 거리 = 3

따라서 최소 이동 경로는:

`1 → 2 → 3 → 4`

총 이동 횟수는 3이다.

## 10. Answer

```python
from collections import deque
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

points = [tuple(map(int, input().split())) for _ in range(n)]

s, e = map(int, input().split())

s -= 1
e -= 1

visited = [-1] * n
visited[s] = 0

queue = deque([s])

while queue:
    now = queue.popleft()

    if now == e:
        break

    x1, y1 = points[now]

    for nxt in range(n):
        if visited[nxt] != -1:
            continue

        x2, y2 = points[nxt]

        dist_sq = (x1 - x2) ** 2 + (y1 - y2) ** 2

        if dist_sq <= k * k:
            visited[nxt] = visited[now] + 1
            queue.append(nxt)

print(visited[e])
```
