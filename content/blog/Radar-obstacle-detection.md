---
external : false
title : "Radar obstacle detection"
tag : [Python]
date : 2026-09-09
---

## 1. Problem

자율주행 차량은 주변의 장애물을 감지하기 위해 Radar 센서를 사용할 수 있습니다.

Radar는 차량 주변에 있는 물체까지의 거리를 측정하며, 측정된 거리가 가까울수록 차량이 장애물에 접근하고 있다는 것을 의미합니다.

자율주행 차량이 주행 중이고 Radar가 여러 개의 물체를 감지했습니다.

차량의 안전을 위해 **SafetyDistance** 이내에 있는 물체를 위험한 장애물로 판단한다고 가정합니다.

각 물체까지의 Radar 측정 거리가 주어졌을 때, 위험한 장애물이 몇 개인지 계산하는 프로그램을 작성하세요.

단, Radar가 측정한 거리가 `SafetyDistance`와 같아도 위험한 장애물로 판단합니다.

### 입력

첫 번째 줄에 Radar가 감지한 물체의 수 `ObjectCount`와 안전 거리 `SafetyDistance`가 주어집니다.

두 번째 줄에 각 물체까지의 Radar 측정 거리 `ObjectDistance`가 `ObjectCount`개 주어집니다.

모든 거리는 미터(m) 단위의 정수입니다.

### 출력

`SafetyDistance` 이내에 존재하는 위험한 장애물의 개수를 출력합니다.

### 제한사항

- `1 ≤ ObjectCount ≤ 100,000`
- `1 ≤ SafetyDistance ≤ 1,000,000`
- `1 ≤ ObjectDistance ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
7 30
15 45 28 60 30 12 50
```

### Example 2

```text
8 50
80 35 50 120 20 65 10 45
```

## 3. Output example

### 3.1. Example 1

```text
3
```

### 3.2. Example 2

```text
5
```

## 4. Explanation

### 4.1. Example 1

안전 거리는 `30m`입니다.

Radar가 측정한 각 물체까지의 거리는 다음과 같습니다.

```text
15 45 28 60 30 12 50
```

30m 이내에 있는 물체를 확인하면:

```text
15m → 위험
45m → 안전
28m → 위험
60m → 안전
30m → 위험
12m → 위험
50m → 안전
```

따라서 위험한 장애물은 총 `4`개입니다.

### 4.2. Example 2

안전 거리는 `50m`입니다.

각 물체까지의 Radar 측정 거리는 다음과 같습니다.

```text
80 35 50 120 20 65 10 45
```

50m 이내에 있는 물체는:

```text
35m
50m
20m
10m
45m
```

따라서 위험한 장애물은 총 `5`개입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

object_count, safety_distance = map(int, input().split())
object_distances = map(int, input().split())

dangerous_object_count = 0

for object_distance in object_distances:
    if object_distance <= safety_distance:
        dangerous_object_count += 1

print(dangerous_object_count)
```
