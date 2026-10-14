---
external : false
title : "Rainfall data analysis"
tag : [Python]
date : 2026-10-14
---

## 1. Problem

기상 관측소에서는 매일 내린 비의 양을 측정하여 강수량 데이터를 관리한다.

여러 날의 일일 강수량이 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 전체 관측 기간의 누적 강수량
- 비가 내린 날의 수
- 가장 많은 비가 내린 날의 강수량
- 강수량이 10mm 이상인 날의 수
- 강수량이 가장 많았던 날의 번호

강수량이 0mm이면 비가 내리지 않은 날로 간주한다. 강수량이 가장 많은 날이 여러 날이면 가장 먼저 해당 강수량을 기록한 날의 번호를 출력한다. 날짜 번호는 첫 번째 관측일을 1번으로 시작한다.

### 입력

첫째 줄에 관측 일수 \(N\)이 주어진다.

둘째 줄에 각 날짜의 강수량을 나타내는 정수 \(R\)이 \(N\)개 주어진다. 각 값은 공백으로 구분된다.

### 출력

첫째 줄에 누적 강수량을 출력한다.

둘째 줄에 비가 내린 날의 수를 출력한다.

셋째 줄에 최대 강수량을 출력한다.

넷째 줄에 강수량이 10mm 이상인 날의 수를 출력한다.

다섯째 줄에 최대 강수량을 기록한 날의 번호를 출력한다.

### 제한사항

- \(1 \leq N \leq 365\)
- \(0 \leq R \leq 500\)
- \(R\)은 하루 동안 측정한 강수량(mm)이다.

## 2. Input example

### Example 1

```text
7
0 12 5 20 0 10 8
```

### Example 2

```text
5
3 0 0 7 3
```

## 3. Output example

### 3.1. Example 1

```text
55
5
20
3
4
```

### 3.2. Example 2

```text
13
3
7
0
4
```

## 4. Explanation

### 4.1. Example 1

누적 강수량은 \(0 + 12 + 5 + 20 + 0 + 10 + 8 = 55\)mm이다.

강수량이 0mm보다 큰 날은 총 5일이다.

가장 많은 강수량은 20mm이며, 이는 4번째 날에 기록되었다.

강수량이 10mm 이상인 날은 12mm, 20mm, 10mm로 총 3일이다.

### 4.2. Example 2

누적 강수량은 \(3 + 0 + 0 + 7 + 3 = 13\)mm이다.

비가 내린 날은 1일, 4일, 5일로 총 3일이다.

가장 많은 강수량은 7mm이며, 4번째 날에 기록되었다.

강수량이 10mm 이상인 날은 없으므로 0을 출력한다.

## 5. Answer

```python
n = int(input())
rainfall = list(map(int, input().split()))

total = sum(rainfall)
rainy_days = sum(1 for rain in rainfall if rain > 0)
max_rain = max(rainfall)
heavy_rain_days = sum(1 for rain in rainfall if rain >= 10)
max_day = rainfall.index(max_rain) + 1

print(total)
print(rainy_days)
print(max_rain)
print(heavy_rain_days)
print(max_day)
```
