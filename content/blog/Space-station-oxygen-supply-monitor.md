---
external: false
title: "Space station oxygen supply monitor"
tag: [Python]
date: 2026-11-13
---

## 1. Problem

우주 정거장에서는 승무원의 안전을 위해 산소 공급량을 지속적으로 확인해야 합니다.

우주 정거장의 현재 산소 저장량과 승무원 수, 1인당 시간당 산소 소비량, 운영 예정 시간이 주어집니다.

예정된 운영 시간 동안 산소가 충분한지 확인하고, 부족하다면 추가로 필요한 산소량을 계산하는 프로그램을 작성하세요.

산소 소비량은 다음과 같이 계산합니다.

- 전체 시간당 소비량은 승무원 수에 1인당 시간당 소비량을 곱한 값입니다.
- 전체 필요 산소량은 전체 시간당 소비량에 운영 시간을 곱한 값입니다.
- 현재 산소량이 필요 산소량보다 많거나 같으면 `SAFE`를 출력합니다.
- 산소가 부족하면 부족한 양을 계산하여 `WARNING`을 출력합니다.

### 입력

다음 네 줄에 걸쳐 정수가 주어집니다.

- 첫 번째 줄: 현재 산소 저장량(리터)
- 두 번째 줄: 승무원 수
- 세 번째 줄: 1인당 시간당 산소 소비량(리터)
- 네 번째 줄: 운영 예정 시간(시간)

### 출력

다음 항목을 순서대로 출력합니다.

- 전체 필요 산소량
- 현재 산소 저장량으로 운영 가능한 시간
- 산소 공급 상태
- 추가로 필요한 산소량

운영 가능한 시간은 소수점 둘째 자리까지 출력합니다.

산소가 충분한 경우 추가로 필요한 산소량은 0리터입니다.

### 제한사항

- 1 ≤ 현재 산소 저장량 ≤ 1,000,000
- 1 ≤ 승무원 수 ≤ 20
- 1 ≤ 1인당 시간당 산소 소비량 ≤ 1,000
- 1 ≤ 운영 예정 시간 ≤ 1,000

## 2. Input example

### Example 1

```text
5000
4
100
10
```

### Example 2

```text
3000
5
120
8
```

## 3. Output example

### 3.1. Example 1

```text
전체 필요 산소량: 4000리터
운영 가능 시간: 12.50시간
산소 공급 상태: SAFE
추가 필요 산소량: 0리터
```

### 3.2. Example 2

```text
전체 필요 산소량: 4800리터
운영 가능 시간: 5.00시간
산소 공급 상태: WARNING
추가 필요 산소량: 1800리터
```

## 4. Explanation

### 4.1. Example 1

현재 산소 저장량은 5,000리터이고 승무원은 4명입니다.

- 시간당 전체 소비량: 4 × 100 = 400리터
- 전체 필요 산소량: 400 × 10 = 4,000리터
- 운영 가능 시간: 5,000 ÷ 400 = 12.50시간

운영 예정 시간인 10시간 동안 필요한 산소는 4,000리터이므로 현재 저장량으로 충분합니다.

따라서 상태는 `SAFE`이며 추가 산소는 필요하지 않습니다.

### 4.2. Example 2

현재 산소 저장량은 3,000리터이고 승무원은 5명입니다.

- 시간당 전체 소비량: 5 × 120 = 600리터
- 전체 필요 산소량: 600 × 8 = 4,800리터
- 운영 가능 시간: 3,000 ÷ 600 = 5.00시간
- 추가 필요 산소량: 4,800 - 3,000 = 1,800리터

운영 예정 시간인 8시간을 유지하기에는 산소가 부족합니다.

따라서 상태는 `WARNING`이며 산소 1,800리터를 추가로 확보해야 합니다.

## 5. Answer

```python
oxygen = int(input())
crew = int(input())
consumption = int(input())
hours = int(input())

hourly_usage = crew * consumption
required_oxygen = hourly_usage * hours

available_hours = oxygen / hourly_usage

if oxygen >= required_oxygen:
    status = "SAFE"
    additional_oxygen = 0
else:
    status = "WARNING"
    additional_oxygen = required_oxygen - oxygen

results = [
    f"전체 필요 산소량: {required_oxygen}리터",
    f"운영 가능 시간: {available_hours:.2f}시간",
    f"산소 공급 상태: {status}",
    f"추가 필요 산소량: {additional_oxygen}리터"
]

print("\n".join(results))
```
