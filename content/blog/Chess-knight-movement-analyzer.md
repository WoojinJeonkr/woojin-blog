---
external: false
title: "Chess knight movement analyzer"
tag: [Python]
date: 2026-11-24
---

## 1. Problem

체스판 위에서 나이트(Knight)가 이동할 수 있는 위치를 계산하는 프로그램을 작성하시오.

체스판은 가로 8칸, 세로 8칸으로 구성되어 있으며, 왼쪽 아래 칸을 `(1, 1)`, 오른쪽 위 칸을 `(8, 8)`로 표현한다.

나이트는 현재 위치에서 다음 8가지 방향으로 이동할 수 있다.

- 가로 2칸, 세로 1칸
- 가로 1칸, 세로 2칸

이동하려는 위치가 체스판 범위인 1부터 8 사이에 있을 때만 유효한 이동으로 인정한다.

현재 나이트의 위치를 입력받아 이동 가능한 위치를 모두 출력하고, 이동 가능한 위치의 개수를 계산하시오.

출력할 위치는 x좌표를 기준으로 오름차순 정렬하고, x좌표가 같으면 y좌표를 기준으로 오름차순 정렬한다.

### 입력

첫 번째 줄에 나이트의 현재 x좌표와 y좌표가 공백으로 구분되어 주어진다.

### 출력

첫 번째 줄에는 이동 가능한 위치를 좌표 형식으로 출력한다.

두 번째 줄에는 이동 가능한 위치의 개수를 출력한다.

이동 가능한 위치가 없으면 첫 번째 줄에는 `없음`을 출력한다.

### 제한사항

- 좌표는 각각 1 이상 8 이하의 정수이다.
- 나이트의 이동 방향은 총 8가지이다.
- 체스판을 벗어나는 이동은 제외한다.

## 2. Input example

### Example 1

```text
4 4
```

### Example 2

```text
1 1
```

## 3. Output example

### 3.1. Example 1

```text
(2, 3) (2, 5) (3, 2) (3, 6) (5, 2) (5, 6) (6, 3) (6, 5)
8
```

### 3.2. Example 2

```text
(2, 3) (3, 2)
2
```

## 4. Explanation

### 4.1. Example 1

나이트의 현재 위치는 `(4, 4)`이다.

8가지 방향으로 이동했을 때 모든 위치가 체스판 안에 있으므로 이동 가능한 위치는 총 8개이다.

### 4.2. Example 2

나이트의 현재 위치는 `(1, 1)`이다.

체스판의 왼쪽 아래 모서리에 있기 때문에 대부분의 이동 방향이 체스판을 벗어난다.

유효한 이동 위치는 `(2, 3)`, `(3, 2)` 두 곳이다.

## 5. Answer

```python
x, y = map(int, input().split())

moves = [
    (1, 2), (1, -2),
    (-1, 2), (-1, -2),
    (2, 1), (2, -1),
    (-2, 1), (-2, -1)
]

positions = []

for dx, dy in moves:
    nx = x + dx
    ny = y + dy

    if 1 <= nx <= 8 and 1 <= ny <= 8:
        positions.append((nx, ny))

positions.sort()

results = []

if positions:
    results.append(" ".join(f"({px}, {py})" for px, py in positions))
else:
    results.append("없음")

results.append(str(len(positions)))

print("\n".join(results))
```
