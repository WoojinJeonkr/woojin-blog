---
external : false
title : "Autonomous driving route cost"
tag : [Python]
date : 2026-09-19
---

## 1. Problem

자율주행 차량은 목적지까지 이동하기 위해 여러 개의 주행 구간을 지나야 합니다.

각 주행 구간에는 교통량이나 도로 상태에 따라 서로 다른 주행 비용이 존재합니다.

차량은 하나의 경로를 선택하여 이동하며, 경로를 구성하는 모든 구간의 비용을 합산하여 해당 경로의 전체 주행 비용을 계산할 수 있습니다.

여러 개의 주행 경로가 주어졌을 때, 각 경로의 전체 주행 비용을 계산하고 가장 비용이 낮은 경로의 번호를 출력하는 프로그램을 작성하세요.

각 경로의 비용이 같다면 번호가 더 작은 경로를 선택합니다.

### 입력

첫 번째 줄에 주행 경로의 수 `RouteCount`와 각 경로를 구성하는 구간의 수 `SegmentCount`가 주어집니다.

다음 `RouteCount`개의 줄에 각 경로의 구간별 주행 비용 `RouteCost`가 `SegmentCount`개 주어집니다.

모든 주행 비용은 정수입니다.

### 출력

첫 번째 줄에 전체 주행 비용이 가장 낮은 경로의 번호를 출력합니다.

두 번째 줄에 해당 경로의 전체 주행 비용을 출력합니다.

### 제한사항

- `1 ≤ RouteCount ≤ 100,000`
- `1 ≤ SegmentCount ≤ 100`
- `1 ≤ RouteCost ≤ 1,000`
- 모든 입력값은 정수입니다.
- 경로 번호는 `1`부터 시작합니다.

## 2. Input example

### Example 1

```text
4 5
10 20 15 30 25
12 18 20 25 30
8 25 12 20 18
15 15 15 15 15
```

### Example 2

```text
3 4
20 30 15 25
18 22 20 30
25 15 18 20
```

## 3. Output example

### 3.1. Example 1

```text
4
75
```

### 3.2. Example 2

```text
3
78
```

## 4. Explanation

### 4.1. Example 1

총 `4개의 경로`가 있고 각 경로는 `5개의 구간`으로 구성되어 있습니다.

각 경로의 전체 주행 비용을 계산하면:

```text
1번 경로
10 + 20 + 15 + 30 + 25 = 100

2번 경로
12 + 18 + 20 + 25 + 30 = 105

3번 경로
8 + 25 + 12 + 20 + 18 = 83

4번 경로
15 + 15 + 15 + 15 + 15 = 75
```

가장 낮은 주행 비용은 `4번 경로`의 `75`입니다.

따라서 출력은 다음과 같습니다.

```text
4
75
```

### 4.2. Example 2

총 `3개의 경로`가 있고 각 경로는 `4개의 구간`으로 구성되어 있습니다.

각 경로의 전체 주행 비용은:

```text
1번 경로
20 + 30 + 15 + 25 = 90

2번 경로
18 + 22 + 20 + 30 = 90

3번 경로
25 + 15 + 18 + 20 = 78
```

가장 낮은 주행 비용은 `3번 경로`의 `78`입니다.

따라서 출력은 다음과 같습니다.

```text
3
78
```

## 5. Answer

```python
import sys

input = sys.stdin.readline

route_count, segment_count = map(int, input().split())

minimum_cost = float("inf")
minimum_route = 1

for route_number in range(1, route_count + 1):
    route_costs = map(int, input().split())
    total_cost = sum(route_costs)

    if total_cost < minimum_cost:
        minimum_cost = total_cost
        minimum_route = route_number

print(minimum_route)
print(minimum_cost)
```
