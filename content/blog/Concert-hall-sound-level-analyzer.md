---
external: false
title: "Concert hall sound level analyzer"
tag: [Python]
date: 2026-11-22
---

## 1. Problem

공연장에서는 관객의 안전과 쾌적한 관람 환경을 위해 소음 수준을 측정합니다.

공연 중 일정한 간격으로 측정한 소음 데시벨(dB) 값이 주어졌을 때, 각 측정값을 소음 등급으로 분류하고 공연장의 전체 소음 상태를 분석하는 프로그램을 작성하세요.

소음 등급은 다음 기준으로 구분합니다.

- 40dB 미만: `QUIET`
- 40dB 이상 60dB 미만: `MODERATE`
- 60dB 이상 80dB 미만: `LOUD`
- 80dB 이상: `VERY LOUD`

추가로 다음 항목을 계산합니다.

- 전체 측정값의 평균 소음 수준
- 가장 높은 소음 수준
- `LOUD` 또는 `VERY LOUD`에 해당하는 측정 횟수

평균 소음 수준은 소수점 둘째 자리까지 출력합니다.

### 입력

- 첫 번째 줄에 소음 측정 횟수 N이 주어집니다.
- 두 번째 줄에 N개의 소음 측정값이 공백으로 구분되어 주어집니다.

### 출력

- 각 측정값의 소음 등급을 입력 순서대로 출력합니다.
- 마지막에는 평균 소음 수준, 최고 소음 수준, 높은 소음 측정 횟수를 출력합니다.

### 제한사항

- 1 ≤ N ≤ 100
- 소음 측정값은 0 이상 150 이하의 정수입니다.

## 2. Input example

### Example 1

```text
6
35 45 65 85 75 55
```

### Example 2

```text
5
30 38 42 50 58
```

## 3. Output example

### 3.1. Example 1

```text
Reading 1: 35dB - QUIET
Reading 2: 45dB - MODERATE
Reading 3: 65dB - LOUD
Reading 4: 85dB - VERY LOUD
Reading 5: 75dB - LOUD
Reading 6: 55dB - MODERATE
Average: 60.00dB
Maximum: 85dB
High noise count: 3
```

### 3.2. Example 2

```text
Reading 1: 30dB - QUIET
Reading 2: 38dB - QUIET
Reading 3: 42dB - MODERATE
Reading 4: 50dB - MODERATE
Reading 5: 58dB - MODERATE
Average: 43.60dB
Maximum: 58dB
High noise count: 0
```

## 4. Explanation

### 4.1. Example 1

측정값은 `35, 45, 65, 85, 75, 55`입니다.

각 측정값을 소음 등급으로 분류하면 다음과 같습니다.

- 35dB: `QUIET`
- 45dB: `MODERATE`
- 65dB: `LOUD`
- 85dB: `VERY LOUD`
- 75dB: `LOUD`
- 55dB: `MODERATE`

평균 소음 수준은 다음과 같습니다.

(35 + 45 + 65 + 85 + 75 + 55) ÷ 6 = 60.00dB

가장 높은 소음은 85dB이며, `LOUD` 또는 `VERY LOUD`에 해당하는 측정값은 총 3개입니다.

### 4.2. Example 2

측정값은 `30, 38, 42, 50, 58`입니다.

- 30dB와 38dB는 `QUIET`
- 42dB, 50dB, 58dB는 `MODERATE`

평균 소음 수준은 다음과 같습니다.

(30 + 38 + 42 + 50 + 58) ÷ 5 = 43.60dB

가장 높은 소음은 58dB이며, `LOUD` 또는 `VERY LOUD`에 해당하는 측정값은 없습니다.

## 5. Answer

```python
n = int(input())
noise_values = list(map(int, input().split()))

results = []
high_noise_count = 0

for i, noise in enumerate(noise_values, start=1):
    if noise < 40:
        level = "QUIET"
    elif noise < 60:
        level = "MODERATE"
    elif noise < 80:
        level = "LOUD"
    else:
        level = "VERY LOUD"

    if noise >= 60:
        high_noise_count += 1

    results.append(f"Reading {i}: {noise}dB - {level}")

average = sum(noise_values) / n
maximum = max(noise_values)

results.append(f"Average: {average:.2f}dB")
results.append(f"Maximum: {maximum}dB")
results.append(f"High noise count: {high_noise_count}")

print("\n".join(results))
```
