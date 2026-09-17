---
external : false
title : "Snail movement"
tag : [Python]
date : 2026-09-17
---

## 1. Problem

수조에 우렁이 한 마리가 살고 있습니다.

우렁이는 수조 벽면을 따라 이동하며 먹이를 찾고 있습니다.

수조 벽면에는 여러 개의 위치가 있고, 우렁이는 한 번에 하나의 위치로 이동합니다.

우렁이가 처음 발견된 위치가 주어지고, 이후 우렁이가 이동한 위치들이 시간 순서대로 주어집니다.

우렁이가 다음 위치로 이동할 때마다 현재 위치와 새로운 위치의 차이만큼 이동했다고 가정합니다.

우렁이가 이동한 모든 위치가 주어졌을 때, 우렁이가 총 몇 미터를 이동했는지 계산하는 프로그램을 작성하세요.

### 입력

첫 번째 줄에 우렁이가 이동한 횟수 `MoveCount`와 우렁이의 시작 위치 `StartPosition`이 주어집니다.

두 번째 줄에 우렁이가 이동한 위치 `Position`이 `MoveCount`개 주어집니다.

각 위치는 수조 벽면을 기준으로 한 미터 단위의 정수입니다.

우렁이는 한 번에 한 위치로 이동하며, 이동 방향은 자유롭습니다.

### 출력

우렁이가 이동한 전체 거리를 출력합니다.

### 제한사항

- `1 ≤ MoveCount ≤ 100,000`
- `0 ≤ StartPosition ≤ 1,000,000`
- `0 ≤ Position ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
6 10
15 8 20 25 18 30
```

### Example 2

```text
5 50
40 30 45 60 55
```

## 3. Output example

### 3.1. Example 1

```text
55
```

### 3.2. Example 2

```text
65
```

## 4. Explanation

### 4.1. Example 1

우렁이의 시작 위치는 `10m`입니다.

이후 우렁이가 이동한 위치는 다음과 같습니다.

```text
15 8 20 25 18 30
```

각 이동 거리를 계산하면:

```text
10 → 15 : 5m
15 → 8  : 7m
8  → 20 : 12m
20 → 25 : 5m
25 → 18 : 7m
18 → 30 : 12m
```

전체 이동 거리는:

```text
5 + 7 + 12 + 5 + 7 + 12 = 48
```

따라서 출력은 다음과 같습니다.

```text
48
```

### 4.2. Example 2

우렁이의 시작 위치는 `50m`입니다.

이후 이동한 위치는 다음과 같습니다.

```text
40 30 45 60 55
```

각 이동 거리는:

```text
50 → 40 : 10m
40 → 30 : 10m
30 → 45 : 15m
45 → 60 : 15m
60 → 55 : 5m
```

전체 이동 거리는:

```text
10 + 10 + 15 + 15 + 5 = 55
```

따라서 출력은 다음과 같습니다.

```text
55
```

## 5. Answer

```python
import sys

input = sys.stdin.readline

move_count, current_position = map(int, input().split())
positions = map(int, input().split())

total_distance = 0

for next_position in positions:
    total_distance += abs(next_position - current_position)
    current_position = next_position

print(total_distance)
```
