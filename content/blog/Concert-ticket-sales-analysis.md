---
external: false
title: "Concert ticket sales analysis"
tag: [Python]
date: "2026-10-24"
---

## 1. Problem

공연장에서는 좌석별 티켓 판매 현황을 기록하고 매출을 분석한다.

공연 티켓은 좌석 등급에 따라 가격이 다르다.

- `1`: VIP석, 150,000원
- `2`: R석, 100,000원
- `3`: S석, 70,000원

판매된 티켓의 좌석 등급이 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 전체 티켓 판매 매출
- 판매된 티켓 수
- VIP석 판매 수
- 가장 많이 판매된 좌석 등급

가장 많이 판매된 좌석 등급이 여러 개라면 `VIP석`, `R석`, `S석` 순서로 먼저 나오는 등급을 출력한다.

### 입력

첫째 줄에 판매된 티켓 수 \(N\)이 주어진다.

둘째 줄에 각 티켓의 좌석 등급을 나타내는 정수 \(N\)개가 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 전체 티켓 판매 매출을 출력한다.

둘째 줄에 판매된 티켓 수를 출력한다.

셋째 줄에 VIP석 판매 수를 출력한다.

넷째 줄에 가장 많이 판매된 좌석 등급을 `VIP`, `R`, `S` 중 하나로 출력한다.

### 제한사항

- \(1 \leq N \leq 1000\)
- 각 티켓의 좌석 등급은 1, 2, 3 중 하나이다.

## 2. Input example

### Example 1

```text
6
1 2 3 1 2 1
```

### Example 2

```text
5
2 3 2 3 1
```

## 3. Output example

### 3.1. Example 1

```text
645000
6
3
VIP
```

### 3.2. Example 2

```text
490000
5
1
R
```

## 4. Explanation

### 4.1. Example 1

판매된 티켓은 VIP석 3장, R석 2장, S석 1장이다.

전체 매출은 다음과 같다.

- VIP석: \(3 \times 150000 = 450000\)원
- R석: \(2 \times 100000 = 200000\)원
- S석: \(1 \times 70000 = 70000\)원

따라서 전체 매출은 \(450000 + 200000 + 70000 = 720000\)원이다.

VIP석은 총 3장 판매되었으며, 가장 많이 판매된 좌석 등급은 VIP석이다.

### 4.2. Example 2

판매된 티켓은 R석 2장, S석 2장, VIP석 1장이다.

전체 매출은 다음과 같다.

- VIP석: \(1 \times 150000 = 150000\)원
- R석: \(2 \times 100000 = 200000\)원
- S석: \(2 \times 70000 = 140000\)원

따라서 전체 매출은 490,000원이다.

R석과 S석이 각각 2장씩 판매되었다. 두 등급의 판매 수가 같으므로 우선순위가 더 높은 R석을 출력한다.

## 5. Answer

```python
n = int(input())
tickets = list(map(int, input().split()))

prices = {1: 150000, 2: 100000, 3: 70000}
names = {1: "VIP", 2: "R", 3: "S"}

counts = {1: 0, 2: 0, 3: 0}
total_revenue = 0

for ticket in tickets:
    counts[ticket] += 1
    total_revenue += prices[ticket]

best_grade = 1

for grade in [2, 3]:
    if counts[grade] > counts[best_grade]:
        best_grade = grade

print(total_revenue)
print(n)
print(counts[1])
print(names[best_grade])
```
