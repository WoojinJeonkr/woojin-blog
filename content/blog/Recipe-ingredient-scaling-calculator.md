---
external: false
title: "Recipe ingredient scaling calculator"
tag: [Python]
date: 2026-11-26
---

## 1. Problem

요리 레시피의 재료 양을 인원수에 맞게 조절하는 프로그램을 작성하시오.

하나의 레시피는 기준 인원수에 맞춰 작성되어 있으며, 각 재료는 재료 이름과 기준 사용량으로 구성된다.

기준 인원수와 실제 요리할 인원수, 재료 개수, 각 재료의 이름과 사용량을 입력받는다.

실제 요리할 인원수에 맞춰 각 재료의 사용량을 비례 계산하고, 계산된 사용량을 소수점 둘째 자리까지 출력하시오.

재료의 출력 순서는 입력된 순서를 유지한다.

### 입력

첫 번째 줄에 기준 인원수와 실제 요리할 인원수가 공백으로 구분되어 주어진다.

두 번째 줄에 재료의 개수 N이 주어진다.

다음 N개의 줄에는 재료 이름과 기준 사용량이 공백으로 구분되어 주어진다.

### 출력

각 재료의 이름과 조절된 사용량을 한 줄에 하나씩 출력한다.

사용량은 소수점 둘째 자리까지 표시한다.

### 제한사항

- 기준 인원수와 실제 요리할 인원수는 1 이상 20 이하의 정수이다.
- 재료의 개수 N은 1 이상 10 이하이다.
- 재료 이름은 공백이 없는 문자열이다.
- 기준 사용량은 0보다 크고 1,000 이하인 실수이다.

## 2. Input example

### Example 1

```text
2 4
3
flour 200
sugar 50
milk 150
```

### Example 2

```text
4 3
4
rice 300
water 500
salt 8
oil 20
```

## 3. Output example

### 3.1. Example 1

```text
flour 400.00
sugar 100.00
milk 300.00
```

### 3.2. Example 2

```text
rice 225.00
water 375.00
salt 6.00
oil 15.00
```

## 4. Explanation

### 4.1. Example 1

기준 레시피는 2인분이며, 실제 요리할 인원수는 4명이다.

따라서 재료 사용량에 2를 곱한다.

- 밀가루: 200 × 2 = 400
- 설탕: 50 × 2 = 100
- 우유: 150 × 2 = 300

### 4.2. Example 2

기준 레시피는 4인분이며, 실제 요리할 인원수는 3명이다.

따라서 재료 사용량에 0.75를 곱한다.

- 쌀: 300 × 0.75 = 225
- 물: 500 × 0.75 = 375
- 소금: 8 × 0.75 = 6
- 식용유: 20 × 0.75 = 15

## 5. Answer

```python
base_people, target_people = map(int, input().split())
n = int(input())

ratio = target_people / base_people
results = []

for _ in range(n):
    name, amount = input().split()
    scaled_amount = float(amount) * ratio

    results.append(f"{name} {scaled_amount:.2f}")

print("\n".join(results))
```
