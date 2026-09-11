---
external : false
title : "Radar signal strength"
tag : [Python]
date : 2026-09-11
---

## 1. Problem

자율주행 차량은 Radar 센서를 이용하여 주변의 물체를 감지할 수 있습니다.

Radar는 물체의 거리뿐만 아니라 물체에서 반사되어 돌아오는 **Radar 신호의 강도**도 측정할 수 있습니다.

일반적으로 물체에서 강한 신호가 반사될수록 Radar가 해당 물체를 더 명확하게 감지할 수 있습니다.

차량은 여러 개의 물체를 감지했고, 각 물체에 대한 Radar 반사 신호의 강도가 측정되었습니다.

Radar 신호의 강도가 `MinimumSignal` 이상이면 해당 물체를 **신뢰할 수 있는 장애물**로 판단한다고 가정합니다.

각 물체의 Radar 신호 강도가 주어졌을 때, 신뢰할 수 있는 장애물의 개수를 계산하는 프로그램을 작성하세요.

단, 신호 강도가 `MinimumSignal`과 같아도 신뢰할 수 있는 장애물로 판단합니다.

### 입력

첫 번째 줄에 Radar가 감지한 물체의 수 `ObjectCount`와 최소 신호 강도 `MinimumSignal`이 주어집니다.

두 번째 줄에 각 물체에서 측정된 Radar 신호 강도 `SignalStrength`가 `ObjectCount`개 주어집니다.

신호 강도는 정수로 주어집니다.

### 출력

`MinimumSignal` 이상인 Radar 신호를 가진 물체의 개수를 출력합니다.

### 제한사항

- `1 ≤ ObjectCount ≤ 100,000`
- `1 ≤ MinimumSignal ≤ 1,000,000`
- `1 ≤ SignalStrength ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
7 50
35 72 48 91 50 23 65
```

### Example 2

```text
8 70
85 42 70 95 63 78 30 70
```

## 3. Output example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
5
```

## 4. Explanation

### 4.1. Example 1

최소 신호 강도는 `50`입니다.

Radar가 측정한 각 물체의 신호 강도는 다음과 같습니다.

```text
35 72 48 91 50 23 65
```

각 신호 강도를 확인하면:

```text
35 → 신뢰할 수 없음
72 → 신뢰할 수 있음
48 → 신뢰할 수 없음
91 → 신뢰할 수 있음
50 → 신뢰할 수 있음
23 → 신뢰할 수 없음
65 → 신뢰할 수 있음
```

따라서 신뢰할 수 있는 장애물은 총 `4`개입니다.

### 4.2. Example 2

최소 신호 강도는 `70`입니다.

각 물체에서 측정된 신호 강도는 다음과 같습니다.

```text
85 42 70 95 63 78 30 70
```

70 이상인 신호는:

```text
85
70
95
78
70
```

따라서 신뢰할 수 있는 장애물은 총 `5`개입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

object_count, minimum_signal = map(int, input().split())
signal_strengths = map(int, input().split())

reliable_object_count = 0

for signal_strength in signal_strengths:
    if signal_strength >= minimum_signal:
        reliable_object_count += 1

print(reliable_object_count)
```
