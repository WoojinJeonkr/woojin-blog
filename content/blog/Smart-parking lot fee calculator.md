---
external: false
title: "Smart parking lot fee calculator"
tag: [Python]
date: 2026-11-07
---

## 1. Problem

스마트 주차장에서는 차량의 입차 시간과 출차 시간을 기준으로 주차 요금을 자동으로 계산한다.

주차 요금은 다음 규칙에 따라 계산한다.

- 기본 주차 시간은 30분이다.
- 기본 요금은 1,000원이다.
- 기본 시간을 초과하면 10분마다 500원이 추가된다.
- 10분 미만으로 초과한 경우에도 10분 요금을 부과한다.
- 주차 시간이 30분 이하라면 기본 요금만 부과한다.

차량의 입차 시각과 출차 시각이 주어졌을 때 주차 시간과 최종 요금을 계산하는 프로그램을 작성하시오.

시각은 24시간제로 입력되며, 입차와 출차는 같은 날짜에 이루어진다.

### 입력

첫째 줄에 차량의 입차 시각이 `시 분` 형식으로 주어진다.

둘째 줄에 차량의 출차 시각이 `시 분` 형식으로 주어진다.

### 출력

첫째 줄에 총 주차 시간을 분 단위로 출력한다.

둘째 줄에 최종 주차 요금을 원 단위로 출력한다.

### 제한사항

- 입차 및 출차 시각은 00시 00분부터 23시 59분까지이다.
- 출차 시각은 입차 시각보다 늦다.
- 주차 시간은 1분 이상이다.

## 2. Input example

### Example 1

```text
9 10
10 25
```

### Example 2

```text
13 20
15 05
```

## 3. Output example

### 3.1. Example 1

```text
75
3500
```

### 3.2. Example 2

```text
105
5000
```

## 4. Explanation

### 4.1. Example 1

입차 시각은 9시 10분이고 출차 시각은 10시 25분이다.

- 총 주차 시간: 75분
- 기본 주차 시간: 30분
- 초과 주차 시간: 75 - 30 = 45분
- 추가 요금 단위: 45 / 10을 올림하여 5회
- 추가 요금: 5 × 500 = 2,500원
- 최종 요금: 1,000 + 2,500 = 3,500원

### 4.2. Example 2

입차 시각은 13시 20분이고 출차 시각은 15시 5분이다.

- 총 주차 시간: 105분
- 기본 주차 시간: 30분
- 초과 주차 시간: 105 - 30 = 75분
- 추가 요금 단위: 75 / 10을 올림하여 8회
- 추가 요금: 8 × 500 = 4,000원
- 최종 요금: 1,000 + 4,000 = 5,000원

## 5. Answer

```python
start_hour, start_minute = map(int, input().split())
end_hour, end_minute = map(int, input().split())

start_time = start_hour * 60 + start_minute
end_time = end_hour * 60 + end_minute

parking_time = end_time - start_time

if parking_time <= 30:
    fee = 1000
else:
    extra_time = parking_time - 30
    extra_units = (extra_time + 9) // 10
    fee = 1000 + extra_units * 500

results = [
    str(parking_time),
    str(fee)
]

print("\n".join(results))
```
