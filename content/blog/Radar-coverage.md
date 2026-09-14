---
external : false
title : "Radar coverage"
tag : [Python]
date : 2026-09-14
---

## 1. Problem

자율주행 차량은 Radar 센서를 이용하여 차량 주변의 장애물을 감지합니다.

Radar 센서는 일정한 거리까지 물체를 감지할 수 있으며, 차량을 기준으로 여러 방향에서 Radar가 감지할 수 있는 영역이 존재한다고 가정합니다.

각 Radar 센서는 자신의 감지 가능한 시작 거리와 종료 거리를 가지고 있습니다.

여러 개의 Radar 센서가 차량에 장착되어 있고, 각 센서의 감지 구간이 주어집니다.

차량은 Radar 센서들이 **전체적으로 몇 미터의 구간을 감지할 수 있는지** 확인하려고 합니다.

여러 Radar 센서의 감지 구간이 서로 겹칠 수 있습니다.

겹치는 구간은 여러 센서가 감지하더라도 한 번만 계산해야 합니다.

모든 Radar 센서의 감지 구간을 합쳤을 때 감지 가능한 전체 거리의 길이를 구하는 프로그램을 작성하세요.

단, 감지 구간의 시작 거리와 종료 거리는 모두 감지 가능한 거리로 포함합니다.

### 입력

첫 번째 줄에 Radar 센서의 수 `RadarCount`가 주어집니다.

다음 `RadarCount`개의 줄에 각 Radar 센서의 감지 시작 거리 `StartDistance`와 종료 거리 `EndDistance`가 주어집니다.

각 거리는 미터(m) 단위의 정수입니다.

### 출력

모든 Radar 센서가 감지할 수 있는 구간을 합쳤을 때의 전체 감지 거리의 길이를 출력합니다.

### 제한사항

- `1 ≤ RadarCount ≤ 100,000`
- `0 ≤ StartDistance < EndDistance ≤ 1,000,000`
- 모든 입력값은 정수입니다.
- Radar 센서의 감지 구간은 서로 겹칠 수 있습니다.

## 2. Input example

### Example 1

```text
4
10 30
20 40
50 70
60 80
```

### Example 2

```text
5
0 20
15 35
40 50
45 70
80 100
```

## 3. Output example

### 3.1. Example 1

```text
60
```

### 3.2. Example 2

```text
90
```

## 4. Explanation

### 4.1. Example 1

Radar 센서의 감지 구간은 다음과 같습니다.

```text
10 ~ 30
20 ~ 40
50 ~ 70
60 ~ 80
```

첫 번째와 두 번째 구간은 서로 겹칩니다.

```text
10 ~ 30
20 ~ 40
```

두 구간을 합치면:

```text
10 ~ 40
```

이 됩니다.

세 번째와 네 번째 구간도 서로 겹칩니다.

```text
50 ~ 70
60 ~ 80
```

두 구간을 합치면:

```text
50 ~ 80
```

따라서 전체 감지 구간은:

```text
10 ~ 40
50 ~ 80
```

입니다.

각 구간의 길이는:

```text
40 - 10 = 30
80 - 50 = 30
```

입니다.

따라서 전체 감지 가능한 거리의 길이는:

```text
30 + 30 = 60
```

입니다.

### 4.2. Example 2

Radar 센서의 감지 구간은 다음과 같습니다.

```text
0 ~ 20
15 ~ 35
40 ~ 50
45 ~ 70
80 ~ 100
```

첫 번째와 두 번째 구간은 겹치므로 하나의 구간으로 합칠 수 있습니다.

```text
0 ~ 35
```

세 번째와 네 번째 구간도 겹칩니다.

```text
40 ~ 70
```

마지막 구간은 다른 구간과 겹치지 않습니다.

```text
80 ~ 100
```

따라서 전체 감지 구간은:

```text
0 ~ 35
40 ~ 70
80 ~ 100
```

입니다.

각 구간의 길이는:

```text
35 - 0 = 35
70 - 40 = 30
100 - 80 = 20
```

입니다.

따라서 전체 감지 가능한 거리의 길이는:

```text
35 + 30 + 20 = 85
```

입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

radar_count = int(input())

radar_ranges = []

for _ in range(radar_count):
    start_distance, end_distance = map(int, input().split())
    radar_ranges.append((start_distance, end_distance))

radar_ranges.sort()

total_coverage = 0

current_start, current_end = radar_ranges[0]

for start_distance, end_distance in radar_ranges[1:]:
    if start_distance <= current_end:
        current_end = max(current_end, end_distance)
    else:
        total_coverage += current_end - current_start
        current_start = start_distance
        current_end = end_distance

total_coverage += current_end - current_start

print(total_coverage)
```
