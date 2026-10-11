---
external : false
title : "Fitness step count analysis"
tag : [Python]
date : 2026-10-11
---

## 1. Problem

운동 기록 앱에서는 하루 동안 걸은 걸음 수를 기록하고, 목표 달성 여부를 확인한다.

일주일 동안 매일 걸은 걸음 수가 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 일주일 동안 걸은 총 걸음 수
- 하루 평균 걸음 수를 소수점 첫째 자리까지 반올림한 값
- 하루 10,000보 이상 걸은 날의 수
- 가장 많이 걸은 날의 걸음 수

### 입력

첫째 줄에 기록할 날짜 수 \(N\)이 주어진다.

둘째 줄에 각 날짜의 걸음 수를 나타내는 정수 \(N\)개가 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 총 걸음 수를 출력한다.

둘째 줄에 하루 평균 걸음 수를 소수점 첫째 자리까지 출력한다.

셋째 줄에 10,000보 이상 걸은 날의 수를 출력한다.

넷째 줄에 하루 중 가장 많이 걸은 걸음 수를 출력한다.

### 제한사항

- \(1 \leq N \leq 31\)
- \(0 \leq S \leq 100000\)
- \(S\)는 하루 동안 걸은 걸음 수이다.

## 2. Input example

### Example 1

```text
7
8000 12000 9500 15000 6000 11000 10000
```

### Example 2

```text
5
3000 4500 7000 6500 9000
```

## 3. Output example

### 3.1. Example 1

```text
71500
10214.3
4
15000
```

### 3.2. Example 2

```text
30000
6000.0
0
9000
```

## 4. Explanation

### 4.1. Example 1

일주일 동안 걸은 총 걸음 수는 71,500보이다.

하루 평균은 \(71500 \div 7 \approx 10214.3\)보이다.

10,000보 이상 걸은 날은 12,000보, 15,000보, 11,000보, 10,000보로 총 4일이다.

가장 많이 걸은 날은 15,000보를 걸은 날이다.

### 4.2. Example 2

5일 동안 걸은 총 걸음 수는 30,000보이다.

하루 평균은 \(30000 \div 5 = 6000.0\)보이다.

10,000보 이상 걸은 날은 없으며, 가장 많이 걸은 날의 걸음 수는 9,000보이다.

## 5. Answer

```python
n = int(input())
steps = list(map(int, input().split()))

total = sum(steps)
average = total / n
goal_days = sum(1 for step in steps if step >= 10000)
max_steps = max(steps)

print(total)
print(f"{average:.1f}")
print(goal_days)
print(max_steps)
```
