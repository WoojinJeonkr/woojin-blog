---
external: false
title: "Robot delivery route"
tag: [Python]
date: 2026-10-28
---

## 1. Problem

물류 창고에서는 로봇을 이용해 물품을 운반한다. 로봇은 현재 위치에서 상하좌우 방향으로 이동하며, 이동 명령에 따라 최종 위치를 계산한다.

로봇의 시작 위치는 `(0, 0)`이며, 다음과 같은 이동 명령을 수행한다.

- `U`: 위쪽으로 1칸 이동한다.
- `D`: 아래쪽으로 1칸 이동한다.
- `L`: 왼쪽으로 1칸 이동한다.
- `R`: 오른쪽으로 1칸 이동한다.

이동 명령이 주어졌을 때 로봇의 최종 위치와 시작 위치에서 최종 위치까지의 맨해튼 거리를 출력하는 프로그램을 작성하시오.

맨해튼 거리는 가로 방향 이동 거리와 세로 방향 이동 거리의 합이다. 예를 들어 최종 위치가 `(3, -2)`라면 맨해튼 거리는 `3 + 2 = 5`이다.

### 입력

첫째 줄에 이동 명령의 개수 \(N\)이 주어진다.

둘째 줄에 길이가 \(N\)인 이동 명령 문자열이 주어진다.

### 출력

첫째 줄에 최종 위치의 x좌표와 y좌표를 공백으로 구분하여 출력한다.

둘째 줄에 맨해튼 거리를 출력한다.

### 제한사항

- \(1 \leq N \leq 1000\)
- 이동 명령은 `U`, `D`, `L`, `R`로만 구성된다.
- 시작 위치는 항상 `(0, 0)`이다.

## 2. Input example

### Example 1

```text
6
UURDDL
```

### Example 2

```text
8
RRUULLDD
```

## 3. Output example

### 3.1. Example 1

```text
1 0
1
```

### 3.2. Example 2

```text
0 0
0
```

## 4. Explanation

### 4.1. Example 1

이동 명령 `UURDDL`을 순서대로 수행한다.

1. `U`: `(0, 1)`
2. `U`: `(0, 2)`
3. `R`: `(1, 2)`
4. `D`: `(1, 1)`
5. `D`: `(1, 0)`
6. `L`: `(0, 0)`

따라서 최종 위치는 `(0, 0)`이며 맨해튼 거리는 `0`이다.

### 4.2. Example 2

이동 명령 `RRUULLDD`를 수행하면 오른쪽으로 2칸, 위쪽으로 2칸, 왼쪽으로 2칸, 아래쪽으로 2칸 이동한다.

모든 이동이 서로 상쇄되므로 최종 위치는 `(0, 0)`이고 맨해튼 거리는 `0`이다.

## 5. Answer

```python
n = int(input())
commands = input().strip()

x = 0
y = 0

for command in commands:
    if command == "U":
        y += 1
    elif command == "D":
        y -= 1
    elif command == "L":
        x -= 1
    elif command == "R":
        x += 1

distance = abs(x) + abs(y)

print(x, y)
print(distance)
```
