---
external: false
title: "Library seat reservation analysis"
tag: [Python]
date: 2026-10-27
---

## 1. Problem

도서관에서는 좌석 예약 기록을 바탕으로 좌석 이용 현황을 분석하려고 한다.

좌석 예약 기록이 주어지면 다음 조건에 따라 이용 현황을 계산하는 프로그램을 작성하시오.

- 예약 기록은 좌석 번호와 이용 시간(분)으로 구성된다.
- 같은 좌석이 여러 번 예약될 수 있다.
- 전체 예약 건수, 총 이용 시간, 평균 이용 시간, 가장 오래 이용한 예약 시간을 계산한다.
- 평균 이용 시간은 소수점 둘째 자리에서 반올림하여 소수점 첫째 자리까지 출력한다.
- 예약 기록이 여러 개라면 가장 오래 이용한 예약의 시간만 출력한다.

### 입력

첫째 줄에 예약 기록의 개수 \(N\)이 주어진다.

다음 \(N\)개의 줄에는 좌석 번호와 이용 시간이 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 전체 예약 건수를 출력한다.

둘째 줄에 총 이용 시간을 출력한다.

셋째 줄에 평균 이용 시간을 출력한다.

넷째 줄에 가장 오래 이용한 예약 시간을 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- 좌석 번호는 1 이상 200 이하의 정수이다.
- 이용 시간은 1 이상 600 이하의 정수이다.

## 2. Input example

### Example 1

```text
4
12 60
7 90
12 30
3 120
```

### Example 2

```text
5
1 45
2 75
3 60
2 105
4 90
```

## 3. Output example

### 3.1. Example 1

```text
4
300
75.0
120
```

### 3.2. Example 2

```text
5
375
75.0
105
```

## 4. Explanation

### 4.1. Example 1

예약 기록은 총 4건이다.

- 총 이용 시간: 60 + 90 + 30 + 120 = 300분
- 평균 이용 시간: 300 / 4 = 75.0분
- 가장 오래 이용한 예약 시간: 120분

따라서 각 줄에 `4`, `300`, `75.0`, `120`을 출력한다.

### 4.2. Example 2

예약 기록은 총 5건이다.

- 총 이용 시간: 45 + 75 + 60 + 105 + 90 = 375분
- 평균 이용 시간: 375 / 5 = 75.0분
- 가장 오래 이용한 예약 시간: 105분

따라서 각 줄에 `5`, `375`, `75.0`, `105`를 출력한다.

## 5. Answer

```python
n = int(input())

total_time = 0
max_time = 0

for _ in range(n):
    seat, minutes = map(int, input().split())

    total_time += minutes

    if minutes > max_time:
        max_time = minutes

average_time = total_time / n

print(n)
print(total_time)
print(f"{average_time:.1f}")
print(max_time)
```
