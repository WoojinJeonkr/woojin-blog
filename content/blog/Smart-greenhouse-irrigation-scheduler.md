---
external: false
title: "Smart greenhouse irrigation scheduler"
tag: [Python]
date: 2026-11-15
---

## 1. Problem

스마트 온실에서는 작물의 토양 수분 상태를 확인하여 자동으로 물을 공급합니다.

여러 화분의 토양 수분 측정값과 목표 수분량이 주어졌을 때 각 화분에 필요한 물의 양을 계산하는 프로그램을 작성하세요.

각 화분의 물 공급량은 다음 기준으로 계산합니다.

- 현재 수분량이 목표 수분량 이상이면 물을 공급하지 않습니다.
- 현재 수분량이 목표 수분량보다 낮으면 두 값의 차이만큼 물을 공급합니다.
- 화분마다 물 공급량을 계산한 뒤 전체 물 공급량을 합산합니다.

모든 수분량의 단위는 mL로 간주합니다.

### 입력

- 첫 번째 줄에 화분의 개수 N과 목표 수분량 T가 공백으로 구분되어 주어집니다.
- 다음 N개의 줄에 각 화분의 현재 수분량이 주어집니다.

### 출력

- 각 화분에 공급할 물의 양을 입력 순서대로 출력합니다.
- 마지막 줄에는 전체 물 공급량을 출력합니다.
- 물을 공급하지 않는 화분도 0mL로 출력합니다.

### 제한사항

- 1 ≤ N ≤ 100
- 1 ≤ T ≤ 1,000
- 0 ≤ 현재 수분량 ≤ 1,000
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
4 500
300
450
600
200
```

### Example 2

```text
5 400
400
350
250
500
100
```

## 3. Output example

### 3.1. Example 1

```text
Pot 1: 200mL
Pot 2: 50mL
Pot 3: 0mL
Pot 4: 300mL
Total: 550mL
```

### 3.2. Example 2

```text
Pot 1: 0mL
Pot 2: 50mL
Pot 3: 150mL
Pot 4: 0mL
Pot 5: 300mL
Total: 500mL
```

## 4. Explanation

### 4.1. Example 1

목표 수분량은 500mL입니다.

- Pot 1: 500 - 300 = 200mL
- Pot 2: 500 - 450 = 50mL
- Pot 3: 현재 수분량이 목표보다 많으므로 0mL
- Pot 4: 500 - 200 = 300mL

전체 물 공급량은 다음과 같습니다.

200 + 50 + 0 + 300 = 550mL

### 4.2. Example 2

목표 수분량은 400mL입니다.

- Pot 1: 목표 수분량과 같으므로 0mL
- Pot 2: 400 - 350 = 50mL
- Pot 3: 400 - 250 = 150mL
- Pot 4: 현재 수분량이 목표보다 많으므로 0mL
- Pot 5: 400 - 100 = 300mL

전체 물 공급량은 다음과 같습니다.

0 + 50 + 150 + 0 + 300 = 500mL

## 5. Answer

```python
n, target = map(int, input().split())

results = []
total_water = 0

for i in range(1, n + 1):
    current = int(input())

    water = max(0, target - current)
    total_water += water

    results.append(f"Pot {i}: {water}mL")

results.append(f"Total: {total_water}mL")

print("\n".join(results))
```
