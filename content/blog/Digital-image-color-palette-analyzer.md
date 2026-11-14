---
external: false
title: "Digital image color palette analyzer"
tag: [Python]
date: 2026-11-14
---

## 1. Problem

디지털 이미지 편집 프로그램에서는 이미지의 색상 정보를 분석하여 주요 색상의 분포를 확인할 수 있습니다.

이미지를 구성하는 여러 픽셀의 RGB 값이 주어졌을 때 각 픽셀의 색상을 분류하고, 색상별 개수를 집계하는 프로그램을 작성하세요.

색상 분류 기준은 다음과 같습니다.

- R, G, B 값이 모두 200 이상이면 `WHITE`
- R, G, B 값이 모두 50 이하이면 `BLACK`
- R 값이 G와 B보다 크면 `RED`
- G 값이 R과 B보다 크면 `GREEN`
- B 값이 R과 G보다 크면 `BLUE`
- 위 조건에 해당하지 않으면 `MIXED`

조건은 위에서부터 순서대로 적용합니다.

### 입력

- 첫 번째 줄에 픽셀 개수 N이 주어집니다.
- 다음 N개의 줄에 각 픽셀의 R, G, B 값이 공백으로 구분되어 주어집니다.

### 출력

- 각 픽셀의 색상 분류 결과를 입력 순서대로 출력합니다.
- 마지막 줄에는 색상별 픽셀 개수를 출력합니다.
- 색상 개수는 `WHITE`, `BLACK`, `RED`, `GREEN`, `BLUE`, `MIXED` 순서로 출력합니다.

### 제한사항

- 1 ≤ N ≤ 100
- 0 ≤ R, G, B ≤ 255
- 각 RGB 값은 정수입니다.

## 2. Input example

### Example 1

```text
6
255 255 255
10 20 30
240 30 20
20 220 40
30 40 230
120 100 110
```

### Example 2

```text
5
200 200 200
50 50 50
180 100 100
100 180 100
100 100 180
```

## 3. Output example

### 3.1. Example 1

```text
Pixel 1: WHITE
Pixel 2: BLACK
Pixel 3: RED
Pixel 4: GREEN
Pixel 5: BLUE
Pixel 6: MIXED
WHITE: 1
BLACK: 1
RED: 1
GREEN: 1
BLUE: 1
MIXED: 1
```

### 3.2. Example 2

```text
Pixel 1: WHITE
Pixel 2: BLACK
Pixel 3: RED
Pixel 4: GREEN
Pixel 5: BLUE
WHITE: 1
BLACK: 1
RED: 1
GREEN: 1
BLUE: 1
MIXED: 0
```

## 4. Explanation

### 4.1. Example 1

6개의 픽셀을 입력받아 RGB 값에 따라 분류합니다.

- Pixel 1: 세 값이 모두 200 이상이므로 `WHITE`
- Pixel 2: 세 값이 모두 50 이하이므로 `BLACK`
- Pixel 3: R 값이 가장 크므로 `RED`
- Pixel 4: G 값이 가장 크므로 `GREEN`
- Pixel 5: B 값이 가장 크므로 `BLUE`
- Pixel 6: 특정 색상 분류 기준에 해당하지 않으므로 `MIXED`

모든 색상 분류의 개수는 각각 1개입니다.

### 4.2. Example 2

- Pixel 1: 세 값이 모두 200 이상이므로 `WHITE`
- Pixel 2: 세 값이 모두 50 이하이므로 `BLACK`
- Pixel 3: R 값이 가장 크므로 `RED`
- Pixel 4: G 값이 가장 크므로 `GREEN`
- Pixel 5: B 값이 가장 크므로 `BLUE`

`MIXED`에 해당하는 픽셀은 없으므로 개수는 0입니다.

## 5. Answer

```python
n = int(input())

color_order = ["WHITE", "BLACK", "RED", "GREEN", "BLUE", "MIXED"]
counts = {color: 0 for color in color_order}

results = []

for i in range(1, n + 1):
    r, g, b = map(int, input().split())

    if r >= 200 and g >= 200 and b >= 200:
        color = "WHITE"
    elif r <= 50 and g <= 50 and b <= 50:
        color = "BLACK"
    elif r > g and r > b:
        color = "RED"
    elif g > r and g > b:
        color = "GREEN"
    elif b > r and b > g:
        color = "BLUE"
    else:
        color = "MIXED"

    counts[color] += 1
    results.append(f"Pixel {i}: {color}")

for color in color_order:
    results.append(f"{color}: {counts[color]}")

print("\n".join(results))
```
