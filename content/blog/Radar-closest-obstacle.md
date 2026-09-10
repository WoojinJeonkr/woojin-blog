---
external : false
title : "Radar distance tracking"
tag : [Python]
date : 2026-09-10
---

## 1. Problem

자율주행 차량은 Radar 센서를 이용하여 주행 중 주변 물체의 위치와 움직임을 관찰할 수 있습니다.

Radar는 일정한 시간 간격마다 차량 앞에 있는 특정 물체까지의 거리를 측정합니다.

측정된 거리가 계속해서 감소한다면 물체가 차량에 가까워지고 있는 것이고, 반대로 거리가 계속해서 증가한다면 물체가 차량에서 멀어지고 있다고 판단할 수 있습니다.

차량은 특정 물체의 움직임을 분석하기 위해 연속된 Radar 측정값을 기록했습니다.

각 측정값에서 이전 측정값보다 거리가 증가했다면 해당 시점을 **접근 해제 시점**으로 판단합니다.

단, 첫 번째 측정값은 이전 측정값이 없으므로 판단에서 제외합니다.

주어진 Radar 측정값을 이용하여 거리가 증가한 횟수를 계산하는 프로그램을 작성하세요.

### 입력

첫 번째 줄에 Radar 측정 횟수 `MeasurementCount`가 주어집니다.

두 번째 줄에 시간 순서대로 Radar가 측정한 물체까지의 거리 `RadarDistance`가 `MeasurementCount`개 주어집니다.

각 거리는 미터(m) 단위의 정수입니다.

### 출력

이전 측정값보다 Radar 거리가 증가한 횟수를 출력합니다.

### 제한사항

- `2 ≤ MeasurementCount ≤ 100,000`
- `1 ≤ RadarDistance ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
7
50 45 40 43 48 46 52
```

### Example 2

```text
8
100 95 90 85 90 88 92 95
```

## 3. Output example

### 3.1. Example 1

```text
3
```

### 3.2. Example 2

```text
4
```

## 4. Explanation

### 4.1. Example 1

Radar가 시간 순서대로 측정한 거리는 다음과 같습니다.

```text
50 45 40 43 48 46 52
```

각 측정값을 이전 측정값과 비교하면 다음과 같습니다.

```text
50 → 첫 번째 측정값이므로 비교하지 않음
45 → 50보다 감소
40 → 45보다 감소
43 → 40보다 증가
48 → 43보다 증가
46 → 48보다 감소
52 → 46보다 증가
```

거리가 증가한 경우는 다음과 같습니다.

```text
40 → 43
43 → 48
46 → 52
```

따라서 거리가 증가한 횟수는 총 `3`회입니다.

### 4.2. Example 2

Radar가 측정한 거리는 다음과 같습니다.

```text
100 95 90 85 90 88 92 95
```

각 측정값을 이전 측정값과 비교하면 다음과 같습니다.

```text
100 → 첫 번째 측정값이므로 비교하지 않음
95  → 100보다 감소
90  → 95보다 감소
85  → 90보다 감소
90  → 85보다 증가
88  → 90보다 감소
92  → 88보다 증가
95  → 92보다 증가
```

거리가 증가한 경우는 다음과 같습니다.

```text
85 → 90
88 → 92
92 → 95
```

따라서 거리가 증가한 횟수는 총 `3`회입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

measurement_count = int(input())
radar_distances = list(map(int, input().split()))

increased_distance_count = 0

for measurement_index in range(1, measurement_count):
    previous_distance = radar_distances[measurement_index - 1]
    current_distance = radar_distances[measurement_index]

    if current_distance > previous_distance:
        increased_distance_count += 1

print(increased_distance_count)
```
