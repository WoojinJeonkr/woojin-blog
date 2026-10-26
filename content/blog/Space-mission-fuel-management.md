---
external: false
title: "Space mission fuel management"
tag: [Python]
date: 2026-10-26
---

## 1. Problem

우주 탐사선은 여러 임무를 수행하기 위해 연료를 사용한다. 임무마다 필요한 연료량과 실제로 사용한 연료량을 기록하여 연료 사용 현황을 분석한다.

각 임무의 연료 사용량이 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 전체 임무에서 사용한 연료량
- 임무당 평균 연료 사용량(소수점 이하 버림)
- 연료를 500kg 이상 사용한 임무의 수
- 연료를 가장 많이 사용한 임무의 번호

연료 사용량이 가장 많은 임무가 여러 개라면 가장 먼저 입력된 임무의 번호를 출력한다. 임무 번호는 입력 순서대로 1번부터 시작한다.

### 입력

첫째 줄에 임무의 수 \(N\)이 주어진다.

둘째 줄에 각 임무에서 사용한 연료량 \(F\)가 kg 단위의 정수로 주어진다. 각 값은 공백으로 구분된다.

### 출력

첫째 줄에 전체 연료 사용량을 출력한다.

둘째 줄에 임무당 평균 연료 사용량을 출력한다.

셋째 줄에 연료를 500kg 이상 사용한 임무의 수를 출력한다.

넷째 줄에 연료를 가장 많이 사용한 임무의 번호를 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- \(1 \leq F \leq 10000\)
- \(F\)는 각 임무에서 사용한 연료량(kg)이다.

## 2. Input example

### Example 1

```text
5
300 700 450 900 650
```

### Example 2

```text
4
100 200 150 250
```

## 3. Output example

### 3.1. Example 1

```text
3000
600
3
4
```

### 3.2. Example 2

```text
700
175
0
4
```

## 4. Explanation

### 4.1. Example 1

전체 연료 사용량은 \(300 + 700 + 450 + 900 + 650 = 3000\)kg이다.

임무당 평균 연료 사용량은 \(3000 \div 5 = 600\)kg이다.

500kg 이상 사용한 임무는 2번, 4번, 5번으로 총 3개이다.

가장 많은 연료를 사용한 임무는 900kg을 사용한 4번이다.

### 4.2. Example 2

전체 연료 사용량은 \(100 + 200 + 150 + 250 = 700\)kg이다.

임무당 평균 연료 사용량은 \(700 \div 4 = 175\)kg이다.

모든 임무의 연료 사용량이 500kg 미만이므로 해당 임무의 수는 0이다.

가장 많은 연료를 사용한 임무는 250kg을 사용한 4번이다.

## 5. Answer

```python
n = int(input())
fuel = list(map(int, input().split()))

total = sum(fuel)
average = total // n
high_usage = sum(1 for f in fuel if f >= 500)
max_mission = fuel.index(max(fuel)) + 1

print(total)
print(average)
print(high_usage)
print(max_mission)
```
