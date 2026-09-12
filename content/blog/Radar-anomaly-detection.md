---
external : false
title : "Radar anomaly detection"
tag : [Python]
date : 2026-09-12
---

## 1. Problem

자율주행 차량은 주행 중 Radar 센서를 이용하여 주변 환경을 지속적으로 측정합니다.

Radar는 일정한 시간 간격으로 전방에 있는 물체까지의 거리를 측정합니다.

하지만 주변 환경이나 센서의 측정 상태에 따라 특정 시점에 이전 측정값과 비교했을 때 **비정상적으로 큰 거리 변화**가 발생할 수 있습니다.

차량은 Radar 측정값의 변화를 분석하기 위해 이전 측정값과 현재 측정값의 차이를 계산합니다.

두 측정값의 차이가 `ChangeLimit`보다 크면 해당 측정값을 **이상 측정값**으로 판단합니다.

각 시간대의 Radar 측정 거리가 주어졌을 때, 이상 측정값이 몇 번 발생했는지 계산하는 프로그램을 작성하세요.

거리가 증가한 경우뿐만 아니라 감소한 경우에도 변화량의 절댓값이 `ChangeLimit`보다 크면 이상 측정값으로 판단합니다.

첫 번째 측정값은 이전 측정값이 없으므로 이상 측정값 판단에서 제외합니다.

### 입력

첫 번째 줄에 Radar 측정 횟수 `MeasurementCount`와 허용 변화량 `ChangeLimit`이 주어집니다.

두 번째 줄에 시간 순서대로 Radar가 측정한 물체까지의 거리 `RadarDistance`가 `MeasurementCount`개 주어집니다.

각 거리는 미터(m) 단위의 정수입니다.

### 출력

이전 측정값과 현재 측정값의 거리 차이의 절댓값이 `ChangeLimit`보다 큰 경우의 개수를 출력합니다.

### 제한사항

- `2 ≤ MeasurementCount ≤ 100,000`
- `1 ≤ ChangeLimit ≤ 1,000,000`
- `1 ≤ RadarDistance ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
7 15
100 105 125 130 110 108 140
```

### Example 2

```text
8 20
200 190 170 175 220 215 180 178
```

## 3. Output example

### 3.1. Example 1

```text
2
```

### 3.2. Example 2

```text
2
```

## 4. Explanation

### 4.1. Example 1

허용되는 최대 변화량은 `15m`입니다.

Radar 측정값은 다음과 같습니다.

```text
100 105 125 130 110 108 140
```

각 측정값의 변화량을 계산하면:

```text
100 → 첫 번째 측정값이므로 비교하지 않음

100 → 105 : 변화량 5m
105 → 125 : 변화량 20m → 이상
125 → 130 : 변화량 5m
130 → 110 : 변화량 20m → 이상
110 → 108 : 변화량 2m
108 → 140 : 변화량 32m → 이상
```

따라서 이상 측정값은 총 `3`번 발생합니다.

### 4.2. Example 2

허용되는 최대 변화량은 `20m`입니다.

Radar 측정값은 다음과 같습니다.

```text
200 190 170 175 220 215 180 178
```

각 측정값의 변화량을 계산하면:

```text
200 → 첫 번째 측정값이므로 비교하지 않음

200 → 190 : 변화량 10m
190 → 170 : 변화량 20m
170 → 175 : 변화량 5m
175 → 220 : 변화량 45m → 이상
220 → 215 : 변화량 5m
215 → 180 : 변화량 35m → 이상
180 → 178 : 변화량 2m
```

`20m`와 같은 변화량은 허용 범위에 포함됩니다.

따라서 이상 측정값은 총 `2`번 발생합니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

measurement_count, change_limit = map(int, input().split())
radar_distances = list(map(int, input().split()))

anomaly_count = 0

for measurement_index in range(1, measurement_count):
    previous_distance = radar_distances[measurement_index - 1]
    current_distance = radar_distances[measurement_index]

    distance_change = abs(current_distance - previous_distance)

    if distance_change > change_limit:
        anomaly_count += 1

print(anomaly_count)
```
