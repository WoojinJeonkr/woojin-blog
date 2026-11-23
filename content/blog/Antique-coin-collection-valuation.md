---
external: false
title: "Antique coin collection valuation"
tag: [Python]
date: 2026-11-23
---

## 1. Problem

화폐 수집가는 오래된 동전의 발행 연도와 보존 상태를 기준으로 수집품의 가치를 평가합니다.

여러 개의 동전 정보가 주어졌을 때 각 동전의 평가 금액을 계산하고 전체 수집품의 가치를 구하는 프로그램을 작성하세요.

동전의 기본 가치는 발행 연도에 따라 결정됩니다.

- 1950년 이전: 50,000원
- 1950년 이상 1970년 미만: 30,000원
- 1970년 이상 1990년 미만: 10,000원
- 1990년 이상: 1,000원

보존 상태에 따른 추가 배율은 다음과 같습니다.

- `EXCELLENT`: 기본 가치의 3배
- `GOOD`: 기본 가치의 2배
- `NORMAL`: 기본 가치의 1배

최종 평가 금액은 기본 가치에 보존 상태 배율을 곱하여 계산합니다.

### 입력

- 첫 번째 줄에 동전의 개수 N이 주어집니다.
- 다음 N개의 줄에 발행 연도와 보존 상태가 공백으로 구분되어 주어집니다.

### 출력

- 각 동전의 평가 금액을 입력 순서대로 출력합니다.
- 마지막 줄에는 전체 동전의 평가 금액 합계를 출력합니다.
- 추가로 가장 높은 평가 금액을 가진 동전의 번호를 출력합니다.
- 최고 평가 금액이 같은 동전이 여러 개라면 가장 먼저 입력된 동전의 번호를 출력합니다.

### 제한사항

- 1 ≤ N ≤ 100
- 1800 ≤ 발행 연도 ≤ 2026
- 보존 상태는 `EXCELLENT`, `GOOD`, `NORMAL` 중 하나입니다.

## 2. Input example

### Example 1

```text
4
1940 EXCELLENT
1965 GOOD
1980 NORMAL
2000 EXCELLENT
```

### Example 2

```text
5
1950 NORMAL
1960 NORMAL
1975 GOOD
1985 GOOD
1995 NORMAL
```

## 3. Output example

### 3.1. Example 1

```text
Coin 1: 150000 won
Coin 2: 60000 won
Coin 3: 10000 won
Coin 4: 3000 won
Total value: 223000 won
Highest value coin: 1
```

### 3.2. Example 2

```text
Coin 1: 30000 won
Coin 2: 30000 won
Coin 3: 20000 won
Coin 4: 20000 won
Coin 5: 1000 won
Total value: 101000 won
Highest value coin: 1
```

## 4. Explanation

### 4.1. Example 1

각 동전의 기본 가치와 보존 상태 배율을 적용합니다.

- Coin 1: 1940년 발행, 50,000원 × 3 = 150,000원
- Coin 2: 1965년 발행, 30,000원 × 2 = 60,000원
- Coin 3: 1980년 발행, 10,000원 × 1 = 10,000원
- Coin 4: 2000년 발행, 1,000원 × 3 = 3,000원

전체 가치는 다음과 같습니다.

150,000 + 60,000 + 10,000 + 3,000 = 223,000원

가장 높은 평가 금액은 150,000원이므로 1번 동전이 가장 가치가 높습니다.

### 4.2. Example 2

각 동전의 평가 금액은 다음과 같습니다.

- Coin 1: 30,000원
- Coin 2: 30,000원
- Coin 3: 20,000원
- Coin 4: 20,000원
- Coin 5: 1,000원

전체 가치는 다음과 같습니다.

30,000 + 30,000 + 20,000 + 20,000 + 1,000 = 101,000원

가장 높은 평가 금액은 30,000원이며, 1번과 2번 동전이 같은 금액입니다.

동일한 최고 금액이라면 먼저 입력된 동전을 선택하므로 결과는 1번입니다.

## 5. Answer

```python
n = int(input())

condition_multiplier = {
    "EXCELLENT": 3,
    "GOOD": 2,
    "NORMAL": 1
}

results = []
total_value = 0
highest_value = -1
highest_coin = 0

for i in range(1, n + 1):
    year, condition = input().split()
    year = int(year)

    if year < 1950:
        base_value = 50000
    elif year < 1970:
        base_value = 30000
    elif year < 1990:
        base_value = 10000
    else:
        base_value = 1000

    value = base_value * condition_multiplier[condition]

    total_value += value
    results.append(f"Coin {i}: {value} won")

    if value > highest_value:
        highest_value = value
        highest_coin = i

results.append(f"Total value: {total_value} won")
results.append(f"Highest value coin: {highest_coin}")

print("\n".join(results))
```
