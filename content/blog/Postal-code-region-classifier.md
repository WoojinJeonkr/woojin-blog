---
external: false
title: "Postal code region classifier"
tag: [Python]
date: 2026-11-19
---

## 1. Problem

우편물 자동 분류 시스템에서는 우편번호를 이용하여 우편물이 배송될 지역을 구분합니다.

여러 개의 우편번호가 주어졌을 때 각 우편번호의 첫 번째 숫자를 기준으로 배송 권역을 분류하고, 권역별 우편물 개수를 집계하는 프로그램을 작성하세요.

배송 권역은 다음 기준으로 구분합니다.

- 첫 번째 숫자가 `0` 또는 `1`이면 `CAPITAL`
- 첫 번째 숫자가 `2` 또는 `3`이면 `CENTRAL`
- 첫 번째 숫자가 `4` 또는 `5`이면 `SOUTH`
- 첫 번째 숫자가 `6` 또는 `7`이면 `EAST`
- 첫 번째 숫자가 `8` 또는 `9`이면 `WEST`

우편번호는 숫자 5자리 문자열로 입력됩니다.

### 입력

- 첫 번째 줄에 우편물 개수 N이 주어집니다.
- 다음 N개의 줄에 각각 5자리 우편번호가 주어집니다.

### 출력

- 각 우편번호의 배송 권역을 입력 순서대로 출력합니다.
- 마지막에는 권역별 우편물 개수를 `CAPITAL`, `CENTRAL`, `SOUTH`, `EAST`, `WEST` 순서로 출력합니다.

### 제한사항

- 1 ≤ N ≤ 100
- 우편번호는 숫자 5자리로 구성됩니다.
- 우편번호의 첫 번째 숫자는 0일 수 있습니다.

## 2. Input example

### Example 1

```text
6
04524
21500
34567
51234
67890
91234
```

### Example 2

```text
5
12345
23456
45678
78901
98765
```

## 3. Output example

### 3.1. Example 1

```text
04524: CAPITAL
21500: CENTRAL
34567: CENTRAL
51234: SOUTH
67890: EAST
91234: WEST
CAPITAL: 1
CENTRAL: 2
SOUTH: 1
EAST: 1
WEST: 1
```

### 3.2. Example 2

```text
12345: CAPITAL
23456: CENTRAL
45678: SOUTH
78901: EAST
98765: WEST
CAPITAL: 1
CENTRAL: 1
SOUTH: 1
EAST: 1
WEST: 1
```

## 4. Explanation

### 4.1. Example 1

입력된 우편번호의 첫 번째 숫자를 확인하여 배송 권역을 결정합니다.

- `04524`: 첫 번째 숫자가 0이므로 `CAPITAL`
- `21500`: 첫 번째 숫자가 2이므로 `CENTRAL`
- `34567`: 첫 번째 숫자가 3이므로 `CENTRAL`
- `51234`: 첫 번째 숫자가 5이므로 `SOUTH`
- `67890`: 첫 번째 숫자가 6이므로 `EAST`
- `91234`: 첫 번째 숫자가 9이므로 `WEST`

따라서 `CENTRAL` 권역의 우편물이 2개이고 나머지 권역은 각각 1개입니다.

### 4.2. Example 2

각 우편번호의 첫 번째 숫자를 확인하면 다음과 같습니다.

- `12345`: `CAPITAL`
- `23456`: `CENTRAL`
- `45678`: `SOUTH`
- `78901`: `EAST`
- `98765`: `WEST`

각 권역에 우편물이 하나씩 분류되므로 모든 권역의 개수는 1입니다.

## 5. Answer

```python
n = int(input())

regions = {
    "CAPITAL": 0,
    "CENTRAL": 0,
    "SOUTH": 0,
    "EAST": 0,
    "WEST": 0
}

results = []

for _ in range(n):
    postal_code = input().strip()
    first_digit = int(postal_code[0])

    if first_digit <= 1:
        region = "CAPITAL"
    elif first_digit <= 3:
        region = "CENTRAL"
    elif first_digit <= 5:
        region = "SOUTH"
    elif first_digit <= 7:
        region = "EAST"
    else:
        region = "WEST"

    regions[region] += 1
    results.append(f"{postal_code}: {region}")

for region, count in regions.items():
    results.append(f"{region}: {count}")

print("\n".join(results))
```
