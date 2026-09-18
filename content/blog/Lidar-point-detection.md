---
external : false
title : "Lidar point detection"
tag : [Python]
date : 2026-09-19
---

## 1. Problem

자율주행 차량은 주변 환경을 인식하기 위해 LiDAR 센서를 사용할 수 있습니다.

LiDAR는 주변 물체에 레이저를 발사하고 반사되어 돌아오는 신호를 이용하여 여러 개의 측정 지점을 생성합니다.

각 측정 지점은 차량을 기준으로 한 높이 정보를 가지고 있습니다.

차량 주변의 환경을 분석하기 위해 특정 높이 이상에 존재하는 측정 지점은 **장애물 후보 지점**으로 분류한다고 가정합니다.

LiDAR가 측정한 여러 지점의 높이가 주어졌을 때, `MinimumHeight` 이상인 장애물 후보 지점이 몇 개인지 계산하는 프로그램을 작성하세요.

단, 측정 지점의 높이가 `MinimumHeight`와 같은 경우에도 장애물 후보 지점으로 판단합니다.

### 입력

첫 번째 줄에 LiDAR가 측정한 지점의 수 `PointCount`와 장애물 후보로 판단하기 위한 최소 높이 `MinimumHeight`가 주어집니다.

두 번째 줄에 각 측정 지점의 높이 `PointHeight`가 `PointCount`개 주어집니다.

높이는 cm 단위의 정수입니다.

### 출력

`MinimumHeight` 이상인 측정 지점의 개수를 출력합니다.

### 제한사항

- `1 ≤ PointCount ≤ 100,000`
- `0 ≤ MinimumHeight ≤ 1,000,000`
- `0 ≤ PointHeight ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
7 150
80 210 130 180 150 90 250
```

### Example 2

```text
8 100
50 120 90 150 100 70 200 110
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

장애물 후보로 판단하기 위한 최소 높이는 `150cm`입니다.

LiDAR가 측정한 각 지점의 높이는 다음과 같습니다.

```text
80 210 130 180 150 90 250
```

각 지점을 확인하면:

```text
80cm  → 후보 아님
210cm → 후보
130cm → 후보 아님
180cm → 후보
150cm → 후보
90cm  → 후보 아님
250cm → 후보
```

따라서 장애물 후보 지점은 총 `4개`입니다.

### 4.2. Example 2

장애물 후보로 판단하기 위한 최소 높이는 `100cm`입니다.

LiDAR가 측정한 높이는 다음과 같습니다.

```text
50 120 90 150 100 70 200 110
```

100cm 이상인 지점은:

```text
120cm
150cm
100cm
200cm
110cm
```

따라서 장애물 후보 지점은 총 `5개`입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

point_count, minimum_height = map(int, input().split())
point_heights = map(int, input().split())

obstacle_candidate_count = 0

for point_height in point_heights:
    if point_height >= minimum_height:
        obstacle_candidate_count += 1

print(obstacle_candidate_count)
```
