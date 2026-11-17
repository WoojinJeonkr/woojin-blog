---
external: false
title: "Emergency power distribution planner"
tag: [Python]
date: 2026-11-17
---

## 1. Problem

재난 상황에서 비상 발전기의 전력을 여러 시설에 나누어 공급해야 합니다.

발전기의 총 공급 가능 전력과 각 시설이 필요로 하는 전력량이 주어졌을 때, 시설을 우선순위에 따라 정렬하고 전력을 공급하는 프로그램을 작성하세요.

전력 공급 규칙은 다음과 같습니다.

- 각 시설에는 중요도 점수가 부여됩니다.
- 중요도 점수가 높은 시설부터 전력을 공급합니다.
- 중요도 점수가 같다면 시설 번호가 작은 순서로 공급합니다.
- 시설에 필요한 전력을 모두 공급할 수 있을 때만 해당 시설에 전력을 공급합니다.
- 남은 전력이 부족하면 해당 시설은 건너뛰고 다음 시설을 확인합니다.
- 전력을 공급한 시설의 번호는 공급 순서대로 출력합니다.

### 입력

- 첫 번째 줄에 발전기의 총 공급 가능 전력 W와 시설 개수 N이 주어집니다.
- 다음 N개의 줄에 시설 번호, 중요도 점수, 필요 전력이 공백으로 구분되어 주어집니다.

### 출력

- 전력을 공급받은 시설 번호를 공급 순서대로 출력합니다.
- 두 번째 줄에는 공급된 총 전력량을 출력합니다.
- 전력을 공급받은 시설이 없다면 첫 번째 줄에는 `NONE`을 출력합니다.

### 제한사항

- 1 ≤ W ≤ 100,000
- 1 ≤ N ≤ 100
- 시설 번호는 1부터 N까지의 정수입니다.
- 1 ≤ 중요도 점수 ≤ 100
- 1 ≤ 필요 전력 ≤ 100,000
- 시설 번호는 중복되지 않습니다.

## 2. Input example

### Example 1

```text
1000 4
1 90 400
2 70 300
3 90 500
4 50 200
```

### Example 2

```text
800 5
1 40 300
2 90 500
3 70 400
4 90 200
5 60 100
```

## 3. Output example

### 3.1. Example 1

```text
Supplied facilities: 1 3
Total supplied power: 900
Remaining power: 100
```

### 3.2. Example 2

```text
Supplied facilities: 2 4 5
Total supplied power: 800
Remaining power: 0
```

## 4. Explanation

### 4.1. Example 1

발전기의 총 공급 가능 전력은 1,000입니다.

중요도 점수와 시설 번호를 기준으로 정렬하면 다음과 같습니다.

1. 시설 1: 중요도 90, 필요 전력 400
2. 시설 3: 중요도 90, 필요 전력 500
3. 시설 2: 중요도 70, 필요 전력 300
4. 시설 4: 중요도 50, 필요 전력 200

- 시설 1에 400을 공급합니다. 남은 전력은 600입니다.
- 시설 3에 500을 공급합니다. 남은 전력은 100입니다.
- 시설 2와 시설 4는 남은 전력이 부족하므로 건너뜁니다.

따라서 시설 1과 3에 총 900의 전력을 공급합니다.

### 4.2. Example 2

발전기의 총 공급 가능 전력은 800입니다.

우선순위에 따라 정렬하면 다음과 같습니다.

1. 시설 2: 중요도 90, 필요 전력 500
2. 시설 4: 중요도 90, 필요 전력 200
3. 시설 3: 중요도 70, 필요 전력 400
4. 시설 5: 중요도 60, 필요 전력 100
5. 시설 1: 중요도 40, 필요 전력 300

- 시설 2에 500을 공급합니다. 남은 전력은 300입니다.
- 시설 4에 200을 공급합니다. 남은 전력은 100입니다.
- 시설 3은 전력이 부족하므로 건너뜁니다.
- 시설 5에 100을 공급합니다. 남은 전력은 0입니다.
- 시설 1에도 전력을 공급할 수 없습니다.

따라서 시설 2, 4, 5에 총 800의 전력을 공급합니다.

## 5. Answer

```python
total_power, n = map(int, input().split())

facilities = []

for _ in range(n):
    number, priority, required = map(int, input().split())
    facilities.append((number, priority, required))

facilities.sort(key=lambda x: (-x[1], x[0]))

remaining_power = total_power
supplied = []
used_power = 0

for number, priority, required in facilities:
    if required <= remaining_power:
        supplied.append(str(number))
        remaining_power -= required
        used_power += required

if supplied:
    first_line = "Supplied facilities: " + " ".join(supplied)
else:
    first_line = "Supplied facilities: NONE"

results = [
    first_line,
    f"Total supplied power: {used_power}",
    f"Remaining power: {remaining_power}"
]

print("\n".join(results))
```
