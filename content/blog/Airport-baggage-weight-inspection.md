---
external : false
title : "Airport baggage weight inspection"
tag : [Python]
date : 2026-10-19
---

## 1. Problem

공항에서는 항공기에 실을 수하물의 무게를 검사하고, 초과 수하물 요금을 계산한다.

승객들이 맡긴 수하물의 무게가 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

항공사의 수하물 규정은 다음과 같다.

- 수하물 무게가 20kg 이하이면 추가 요금이 없다.
- 20kg 초과 25kg 이하이면 초과한 무게 1kg당 2,000원의 요금이 부과된다.
- 25kg 초과이면 초과한 무게 1kg당 3,000원의 요금이 부과된다. 이 경우 전체 무게에서 20kg을 초과한 부분에 대해 요금을 계산한다.

수하물 무게는 정수이며, 요금은 수하물마다 별도로 계산한다.

다음 정보를 출력하시오.

- 전체 수하물의 무게 합계
- 추가 요금이 발생한 수하물의 개수
- 전체 추가 요금 합계
- 추가 요금이 가장 비싼 수하물의 번호

추가 요금이 가장 비싼 수하물이 여러 개라면 가장 먼저 입력된 수하물의 번호를 출력한다. 추가 요금이 발생한 수하물이 하나도 없다면 마지막 줄에 `0`을 출력한다.

### 입력

첫째 줄에 수하물의 개수 \(N\)이 주어진다.

둘째 줄에 각 수하물의 무게 \(W\)가 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 전체 수하물의 무게 합계를 출력한다.

둘째 줄에 추가 요금이 발생한 수하물의 개수를 출력한다.

셋째 줄에 전체 추가 요금 합계를 출력한다.

넷째 줄에 추가 요금이 가장 비싼 수하물의 번호를 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- \(1 \leq W \leq 50\)
- \(W\)는 수하물 하나의 무게(kg)이다.

## 2. Input example

### Example 1

```text
5
18 22 25 28 15
```

### Example 2

```text
4
10 19 20 17
```

## 3. Output example

### 3.1. Example 1

```text
108
3
27000
4
```

### 3.2. Example 2

```text
66
0
0
0
```

## 4. Explanation

### 4.1. Example 1

전체 수하물 무게는 \(18 + 22 + 25 + 28 + 15 = 108\)kg이다.

각 수하물의 추가 요금은 다음과 같다.

- 1번: 18kg이므로 0원
- 2번: 22kg이므로 \((22 - 20) \times 2,000 = 4,000\)원
- 3번: 25kg이므로 \((25 - 20) \times 2,000 = 10,000\)원
- 4번: 28kg이므로 \((28 - 20) \times 3,000 = 24,000\)원
- 5번: 15kg이므로 0원

추가 요금이 발생한 수하물은 총 3개이며, 추가 요금 합계는 38,000원이다.

추가 요금이 가장 비싼 수하물은 4번이다.

### 4.2. Example 2

전체 수하물 무게는 \(10 + 19 + 20 + 17 = 66\)kg이다.

모든 수하물이 20kg 이하이므로 추가 요금은 발생하지 않는다. 따라서 추가 요금이 발생한 수하물 수와 전체 추가 요금은 모두 0이다.

추가 요금이 발생한 수하물이 없으므로 마지막 줄에도 0을 출력한다.

## 5. Answer

```python
n = int(input())
weights = list(map(int, input().split()))

total_weight = sum(weights)
extra_fees = []

for weight in weights:
    if weight <= 20:
        fee = 0
    elif weight <= 25:
        fee = (weight - 20) * 2000
    else:
        fee = (weight - 20) * 3000

    extra_fees.append(fee)

charged_count = sum(1 for fee in extra_fees if fee > 0)
total_fee = sum(extra_fees)

if charged_count == 0:
    most_expensive_number = 0
else:
    most_expensive_number = extra_fees.index(max(extra_fees)) + 1

print(total_weight)
print(charged_count)
print(total_fee)
print(most_expensive_number)
```
