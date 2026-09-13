---
external : false
title : "Radar object ranking"
tag : [Python]
date : 2026-09-13
---

## 1. Problem

자율주행 차량은 Radar 센서를 이용하여 주변에 존재하는 여러 물체를 동시에 감지할 수 있습니다.

Radar는 각 물체까지의 거리를 측정하고, 차량은 측정된 거리 정보를 이용하여 주변 물체의 위치를 파악합니다.

차량의 주행 경로에 여러 물체가 존재할 경우, 차량은 가장 가까운 물체뿐만 아니라 **두 번째로 가까운 물체까지의 거리**도 확인할 수 있습니다.

여러 물체에 대한 Radar 측정 거리가 주어졌을 때, 가장 가까운 물체와 두 번째로 가까운 물체 사이의 거리 차이를 계산하는 프로그램을 작성하세요.

서로 다른 물체가 같은 거리에 있을 수도 있습니다.

### 입력

첫 번째 줄에 Radar가 감지한 물체의 수 `ObjectCount`가 주어집니다.

두 번째 줄에 각 물체까지의 Radar 측정 거리 `RadarDistance`가 `ObjectCount`개 주어집니다.

각 거리는 미터(m) 단위의 정수입니다.

### 출력

가장 가까운 물체와 두 번째로 가까운 물체의 거리 차이를 출력합니다.

### 제한사항

- `2 ≤ ObjectCount ≤ 100,000`
- `1 ≤ RadarDistance ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
6
45 20 70 35 15 50
```

### Example 2

```text
7
100 55 30 80 45 25 90
```

## 3. Output example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
5
```

## 4. Explanation

### 4.1. Example 1

Radar가 측정한 각 물체까지의 거리는 다음과 같습니다.

```text
45 20 70 35 15 50
```

거리를 가까운 순서로 정렬하면:

```text
15 20 35 45 50 70
```

가장 가까운 물체는 `15m`에 있습니다.

두 번째로 가까운 물체는 `20m`에 있습니다.

따라서 두 물체의 거리 차이는:

```text
20 - 15 = 5
```

입니다.

따라서 출력은 다음과 같습니다.

```text
5
```

### 4.2. Example 2

Radar가 측정한 각 물체까지의 거리는 다음과 같습니다.

```text
100 55 30 80 45 25 90
```

가까운 순서로 정렬하면:

```text
25 30 45 55 80 90 100
```

가장 가까운 물체는 `25m`에 있습니다.

두 번째로 가까운 물체는 `30m`에 있습니다.

따라서 두 물체의 거리 차이는:

```text
30 - 25 = 5
```

입니다.

따라서 출력은 다음과 같습니다.

```text
5
```

## 5. Answer

```python
import sys

input = sys.stdin.readline

object_count = int(input())
radar_distances = list(map(int, input().split()))

radar_distances.sort()

closest_distance = radar_distances[0]
second_closest_distance = radar_distances[1]

distance_difference = second_closest_distance - closest_distance

print(distance_difference)
```
