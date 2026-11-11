---
external: false
title: "Museum artifact humidity monitoring"
tag: [Python]
date: 2026-11-11
---

## 1. Problem

박물관에서는 전시 중인 유물의 손상을 방지하기 위해 보관 공간의 습도를 주기적으로 측정합니다.

습도 측정값이 주어졌을 때 각 측정값을 다음 기준에 따라 분류하고, 전체 측정 결과를 분석하는 프로그램을 작성하세요.

습도 분류 기준은 다음과 같습니다.

- 40% 미만: `DRY`
- 40% 이상 61% 미만: `NORMAL`
- 61% 이상 71% 미만: `HUMID`
- 71% 이상: `DANGER`

모든 측정값을 분류한 뒤 각 분류의 측정 횟수와 평균 습도를 출력합니다.

평균 습도는 소수점 둘째 자리까지 출력합니다.

### 입력

- 첫 번째 줄에 습도 측정 횟수 N이 주어집니다.
- 두 번째 줄에 N개의 습도 측정값이 공백으로 구분되어 주어집니다.

### 출력

- 첫 번째 줄부터 각 측정값의 분류 결과를 순서대로 출력합니다.
- 마지막 네 줄에는 `DRY`, `NORMAL`, `HUMID`, `DANGER` 순서로 각 분류의 측정 횟수와 평균 습도를 출력합니다.
- 해당 분류에 속하는 측정값이 없다면 평균 습도는 `0.00`으로 출력합니다.

### 제한사항

- 1 ≤ N ≤ 100
- 습도 측정값은 0 이상 100 이하의 정수입니다.

## 2. Input example

### Example 1

```text
6
35 45 55 65 75 85
```

### Example 2

```text
5
40 50 60 70 80
```

## 3. Output example

### 3.1. Example 1

```text
35: DRY
45: NORMAL
55: NORMAL
65: HUMID
75: DANGER
85: DANGER
DRY: 1회, 평균 35.00%
NORMAL: 2회, 평균 50.00%
HUMID: 1회, 평균 65.00%
DANGER: 2회, 평균 80.00%
```

### 3.2. Example 2

```text
40: NORMAL
50: NORMAL
60: NORMAL
70: HUMID
80: DANGER
DRY: 0회, 평균 0.00%
NORMAL: 3회, 평균 50.00%
HUMID: 1회, 평균 70.00%
DANGER: 1회, 평균 80.00%
```

## 4. Explanation

### 4.1. Example 1

측정값은 `35, 45, 55, 65, 75, 85`입니다.

- 35%는 40% 미만이므로 `DRY`입니다.
- 45%, 55%는 40% 이상 61% 미만이므로 `NORMAL`입니다.
- 65%는 61% 이상 71% 미만이므로 `HUMID`입니다.
- 75%, 85%는 71% 이상이므로 `DANGER`입니다.

각 분류의 평균 습도는 다음과 같습니다.

- DRY: 35 ÷ 1 = 35.00%
- NORMAL: (45 + 55) ÷ 2 = 50.00%
- HUMID: 65 ÷ 1 = 65.00%
- DANGER: (75 + 85) ÷ 2 = 80.00%

### 4.2. Example 2

측정값은 `40, 50, 60, 70, 80`입니다.

- 40%, 50%, 60%는 `NORMAL`입니다.
- 70%는 `HUMID`입니다.
- 80%는 `DANGER`입니다.
- `DRY`에 해당하는 측정값은 없습니다.

따라서 각 분류의 측정 횟수와 평균 습도는 출력 예시와 같습니다.

## 5. Answer

```python
n = int(input())
humidity_values = list(map(int, input().split()))

categories = {
    "DRY": [],
    "NORMAL": [],
    "HUMID": [],
    "DANGER": []
}

results = []

for humidity in humidity_values:
    if humidity < 40:
        category = "DRY"
    elif humidity < 61:
        category = "NORMAL"
    elif humidity < 71:
        category = "HUMID"
    else:
        category = "DANGER"

    categories[category].append(humidity)
    results.append(f"{humidity}: {category}")

for category, values in categories.items():
    count = len(values)

    if count > 0:
        average = sum(values) / count
    else:
        average = 0

    results.append(
        f"{category}: {count}회, 평균 {average:.2f}%"
    )

print("\n".join(results))
```
