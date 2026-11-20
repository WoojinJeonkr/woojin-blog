---
external: false
title: "Underwater sensor data anomaly detector"
tag: [Python]
date: 2026-11-20
---

## 1. Problem

수중 연구 장비에는 수온, 수압, 염도 등을 측정하는 센서가 설치되어 있습니다.

센서가 일정한 간격으로 측정한 수온 데이터가 주어졌을 때, 급격한 온도 변화를 감지하는 프로그램을 작성하세요.

첫 번째 측정값은 비교 대상이 없으므로 정상 데이터로 처리합니다.

두 번째 측정값부터는 바로 이전 측정값과의 차이를 계산합니다.

이전 측정값과 현재 측정값의 차이가 3도 이상이면 `ANOMALY`로 판정합니다.

온도가 상승하거나 하락하는 방향은 구분하지 않으며, 절댓값을 기준으로 판단합니다.

### 입력

- 첫 번째 줄에 측정 데이터 개수 N이 주어집니다.
- 다음 N개의 줄에 각 측정 시점의 수온이 실수로 주어집니다.

### 출력

- 각 측정값의 판정 결과를 입력 순서대로 출력합니다.
- 첫 번째 측정값은 `NORMAL`로 출력합니다.
- 두 번째 측정값부터는 이전 측정값과의 차이에 따라 `NORMAL` 또는 `ANOMALY`를 출력합니다.
- 마지막 줄에는 이상 데이터 개수를 출력합니다.

### 제한사항

- 2 ≤ N ≤ 100
- 수온은 -5.0도 이상 40.0도 이하입니다.
- 수온은 소수점 첫째 자리까지 입력됩니다.
- 이상 판정 기준은 온도 차이 3.0도 이상입니다.

## 2. Input example

### Example 1

```text
5
20.0
21.5
25.0
24.0
19.0
```

### Example 2

```text
6
15.0
16.0
17.0
18.0
19.0
20.0
```

## 3. Output example

### 3.1. Example 1

```text
Reading 1: 20.0C - NORMAL
Reading 2: 21.5C - NORMAL
Reading 3: 25.0C - ANOMALY
Reading 4: 24.0C - NORMAL
Reading 5: 19.0C - ANOMALY
Anomaly count: 2
```

### 3.2. Example 2

```text
Reading 1: 15.0C - NORMAL
Reading 2: 16.0C - NORMAL
Reading 3: 17.0C - NORMAL
Reading 4: 18.0C - NORMAL
Reading 5: 19.0C - NORMAL
Reading 6: 20.0C - NORMAL
Anomaly count: 0
```

## 4. Explanation

### 4.1. Example 1

측정값은 다음과 같습니다.

`20.0, 21.5, 25.0, 24.0, 19.0`

각 측정값을 바로 이전 측정값과 비교합니다.

- Reading 1: 첫 번째 측정값이므로 `NORMAL`
- Reading 2: 21.5 - 20.0 = 1.5도이므로 `NORMAL`
- Reading 3: 25.0 - 21.5 = 3.5도이므로 `ANOMALY`
- Reading 4: 24.0 - 25.0 = -1.0도이므로 `NORMAL`
- Reading 5: 19.0 - 24.0 = -5.0도이므로 `ANOMALY`

따라서 이상 데이터는 총 2개입니다.

### 4.2. Example 2

측정값은 다음과 같습니다.

`15.0, 16.0, 17.0, 18.0, 19.0, 20.0`

각 측정값의 변화량은 모두 1.0도입니다.

모든 변화량이 이상 판정 기준인 3.0도보다 작으므로 모든 측정값은 `NORMAL`입니다.

따라서 이상 데이터는 0개입니다.

## 5. Answer

```python
n = int(input())

previous = None
anomaly_count = 0
results = []

for i in range(1, n + 1):
    temperature = float(input())

    if previous is None:
        status = "NORMAL"
    elif abs(temperature - previous) >= 3.0:
        status = "ANOMALY"
        anomaly_count += 1
    else:
        status = "NORMAL"

    results.append(
        f"Reading {i}: {temperature:.1f}C - {status}"
    )

    previous = temperature

results.append(f"Anomaly count: {anomaly_count}")

print("\n".join(results))
```
