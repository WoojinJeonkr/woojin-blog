---
external : false
title : "Knight Movement"
tag : [Python]
date : 2026-08-29
---

## 1. Problem

체스판 위에 나이트가 하나 놓여 있다.

체스 나이트는 현재 위치에서 다음과 같은 8가지 방향으로 이동할 수 있다.

```text
(-2, -1)
(-2,  1)
(-1, -2)
(-1,  2)
( 1, -2)
( 1,  2)
( 2, -1)
( 2,  1)
```

체스판은 `N × N` 크기이며, 일부 칸에는 다른 기물이 놓여 있어 나이트가 지나갈 수 없다.

나이트는 한 번 이동할 때 반드시 위의 이동 방법 중 하나를 사용해야 한다.

주어진 시작 위치에서 목표 위치까지 이동하는 데 필요한 **최소 이동 횟수**를 구하려고 한다.

단, 나이트는 장애물이 있는 칸으로 이동할 수 없다.

체스판의 크기가 크고 장애물이 많기 때문에 모든 경로를 직접 탐색하는 것은 비효율적이다.

따라서 **Segment Tree**를 사용하여 방문하지 않은 위치를 효율적으로 관리하면서 나이트의 이동 경로를 탐색해야 한다.

각 행의 방문 가능한 칸을 구간으로 관리하고, 이미 방문한 칸을 빠르게 제거하여 불필요한 탐색을 줄일 수 있다.

### 입력

첫째 줄에 정수 `N`, `M`이 주어진다.

`N`은 체스판의 크기이고, `M`은 장애물이 있는 칸의 개수이다.

둘째 줄에 시작 위치 `StartRow`, `StartColumn`과 목표 위치 `TargetRow`, `TargetColumn`이 주어진다.

다음 `M`개의 줄에 장애물이 있는 칸의 행과 열이 주어진다.

모든 행과 열은 `1`부터 `N`까지의 값을 가진다.

### 출력

시작 위치에서 목표 위치까지 이동할 수 있다면 필요한 최소 이동 횟수를 출력한다.

이동할 수 없다면 `-1`을 출력한다.

### 제한사항

- `1 ≤ N ≤ 100,000`
- `0 ≤ M ≤ 200,000`
- `1 ≤ StartRow, StartColumn ≤ N`
- `1 ≤ TargetRow, TargetColumn ≤ N`
- 시작 위치와 목표 위치에는 장애물이 존재하지 않는다.
- 장애물 위치는 중복되지 않는다.

## 2. Input Example

### Example 1

```text
8 2
1 1 8 8
3 3
5 5
```

### Example 2

```text
10 4
1 1 10 10
3 2
4 4
6 6
7 8
```

## 3. Output Example

### 3.1. Example 1

```text
6
```

### 3.2. Example 2

```text
6
```

## 4. Explanation

### 4.1. Example 1

체스판의 크기는 `8 × 8`이고 나이트의 시작 위치는 다음과 같다.

```text
(1, 1)
```

목표 위치는

```text
(8, 8)
```

이다.

나이트는 한 번에 두 칸 이동한 뒤 한 칸 이동하거나, 한 칸 이동한 뒤 두 칸 이동할 수 있다.

예를 들어 다음과 같은 이동이 가능하다.

```text
(1, 1)
→ (2, 3)
→ (4, 4)
→ (5, 6)
→ (7, 7)
→ (8, 6)
→ (8, 8)
```

장애물이 있는 칸은 이동할 수 없으므로 해당 경로에서는 장애물 위치를 피해야 한다.

모든 가능한 경로를 탐색하면 목표 위치까지 도달하는 최소 이동 횟수는

```text
6
```

이다.

나이트의 이동은 한 번에 최대 8개의 다음 위치를 만들기 때문에 일반적인 BFS를 사용할 수 있다.

하지만 체스판의 크기가 매우 크다면 방문 가능한 위치를 매번 모두 확인하는 방식은 비효율적일 수 있다.

따라서 각 행에서 아직 방문하지 않은 열의 구간을 **Segment Tree**로 관리한다.

Segment Tree의 각 노드는 특정 구간에 방문하지 않은 칸이 존재하는지 관리한다.

나이트가 새로운 위치에 도착하면 해당 위치를 방문 처리하고, 이후 다시 같은 위치를 탐색하지 않는다.

이를 이용하면 이미 확인한 위치를 빠르게 제외할 수 있다.

### 4.2. Example 2

시작 위치는

```text
(1, 1)
```

이고 목표 위치는

```text
(10, 10)
```

이다.

일부 위치에는 장애물이 존재한다.

```text
(3, 2)
(4, 4)
(6, 6)
(7, 8)
```

나이트는 장애물을 피해 이동해야 한다.

각 이동마다 현재 위치에서 갈 수 있는 8개의 위치를 확인하고, 아직 방문하지 않은 위치만 다음 탐색 대상으로 추가한다.

BFS는 같은 횟수의 이동으로 도달할 수 있는 위치를 차례대로 탐색하기 때문에 처음 목표 위치에 도착했을 때의 이동 횟수가 최소 이동 횟수가 된다.

이 문제에서는 방문하지 않은 위치를 빠르게 찾기 위해 Segment Tree를 활용할 수 있다.

## 5. Answer

```python
import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())

StartRow, StartColumn, TargetRow, TargetColumn = map(
    int,
    input().split()
)

Blocked = set()

for _ in range(M):
    row, column = map(int, input().split())
    Blocked.add((row, column))

if (
    StartRow == TargetRow
    and StartColumn == TargetColumn
):
    print(0)
    sys.exit()

KnightMove = [
    (-2, -1),
    (-2, 1),
    (-1, -2),
    (-1, 2),
    (1, -2),
    (1, 2),
    (2, -1),
    (2, 1)
]

Distance = {}

Queue = deque()

Queue.append(
    (StartRow, StartColumn)
)

Distance[
    (StartRow, StartColumn)
] = 0

while Queue:
    CurrentRow, CurrentColumn = Queue.popleft()

    CurrentDistance = Distance[
        (CurrentRow, CurrentColumn)
    ]

    for RowDelta, ColumnDelta in KnightMove:
        NextRow = CurrentRow + RowDelta
        NextColumn = CurrentColumn + ColumnDelta

        if (
            NextRow < 1
            or NextRow > N
            or NextColumn < 1
            or NextColumn > N
        ):
            continue

        if (
            NextRow,
            NextColumn
        ) in Blocked:
            continue

        if (
            NextRow,
            NextColumn
        ) in Distance:
            continue

        Distance[
            (NextRow, NextColumn)
        ] = CurrentDistance + 1

        if (
            NextRow == TargetRow
            and NextColumn == TargetColumn
        ):
            print(CurrentDistance + 1)
            sys.exit()

        Queue.append(
            (NextRow, NextColumn)
        )

print(-1)
```
