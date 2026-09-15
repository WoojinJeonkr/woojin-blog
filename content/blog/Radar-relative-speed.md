---
external : false
title : "Radar relative speed"
tag : [Python]
date : 2026-09-15
---

## 1. Problem

자율주행 차량은 Radar 센서를 이용하여 주변 차량이나 장애물의 움직임을 분석할 수 있습니다.

Radar는 물체까지의 거리뿐만 아니라 **Doppler 효과**를 이용하여 차량을 기준으로 물체가 접근하고 있는지 또는 멀어지고 있는지를 판단할 수 있습니다.

여러 물체의 상대 속도가 측정되었을 때, 자율주행 차량은 차량 쪽으로 접근하고 있는 물체를 위험 가능성이 있는 대상으로 분류할 수 있습니다.

상대 속도가 음수라면 물체가 차량에 가까워지고 있고, 상대 속도가 양수라면 물체가 차량에서 멀어지고 있다고 가정합니다.

상대 속도가 `0`이라면 물체와 차량 사이의 거리가 변하지 않는 상태입니다.

각 물체의 상대 속도가 주어졌을 때, 차량에 접근하고 있는 물체의 개수와 가장 빠르게 접근하고 있는 물체의 상대 속도를 구하는 프로그램을 작성하세요.

### 입력

첫 번째 줄에 Radar가 감지한 물체의 수 `ObjectCount`가 주어집니다.

두 번째 줄에 각 물체의 상대 속도 `RelativeSpeed`가 `ObjectCount`개 주어집니다.

상대 속도의 단위는 m/s이며 정수입니다.

### 출력

첫 번째 줄에 차량에 접근하고 있는 물체의 개수를 출력합니다.

두 번째 줄에 가장 빠르게 접근하고 있는 물체의 상대 속도의 절댓값을 출력합니다.

접근하고 있는 물체가 없다면 두 번째 줄에는 `0`을 출력합니다.

### 제한사항

- `1 ≤ ObjectCount ≤ 100,000`
- `-1,000,000 ≤ RelativeSpeed ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
7
-15 8 -3 0 -20 5 -7
```

### Example 2

```text
8
10 -25 -5 0 18 -40 7 -12
```

## 3. Output example

### 3.1. Example 1

```text
4
20
```

### 3.2. Example 2

```text
4
40
```

## 4. Explanation

### 4.1. Example 1

Radar가 측정한 각 물체의 상대 속도는 다음과 같습니다.

```text
-15 8 -3 0 -20 5 -7
```

상대 속도가 음수인 물체는 차량에 접근하고 있는 물체입니다.

```text
-15 → 접근
8   → 멀어짐
-3  → 접근
0   → 거리 변화 없음
-20 → 접근
5   → 멀어짐
-7  → 접근
```

따라서 차량에 접근하고 있는 물체는 총 `4`개입니다.

접근 속도의 절댓값은 다음과 같습니다.

```text
15
3
20
7
```

이 중 가장 큰 값은 `20m/s`입니다.

따라서 출력은 다음과 같습니다.

```text
4
20
```

### 4.2. Example 2

Radar가 측정한 각 물체의 상대 속도는 다음과 같습니다.

```text
10 -25 -5 0 18 -40 7 -12
```

상대 속도가 음수인 물체를 확인하면:

```text
10  → 멀어짐
-25 → 접근
-5  → 접근
0   → 거리 변화 없음
18  → 멀어짐
-40 → 접근
7   → 멀어짐
-12 → 접근
```

따라서 차량에 접근하고 있는 물체는 총 `4`개입니다.

접근 속도의 절댓값은 다음과 같습니다.

```text
25
5
40
12
```

가장 빠르게 접근하고 있는 물체의 상대 속도는 `40m/s`입니다.

따라서 출력은 다음과 같습니다.

```text
4
40
```

## 5. Answer

```python
import sys

input = sys.stdin.readline

object_count = int(input())
relative_speeds = map(int, input().split())

approaching_object_count = 0
fastest_approach_speed = 0

for relative_speed in relative_speeds:
    if relative_speed < 0:
        approaching_object_count += 1
        fastest_approach_speed = max(
            fastest_approach_speed,
            abs(relative_speed)
        )

print(approaching_object_count)
print(fastest_approach_speed)
```
