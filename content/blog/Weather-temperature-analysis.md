---
external : false
title : "Weather temperature analysis"
tag : [Python]
date : 2026-10-05
---

## 1. Problem

일주일 동안 매일 아침의 기온을 측정하였다.

각 날짜의 기온이 주어졌을 때, **평균 기온보다 높은 날의 수**와 **가장 높은 기온과 가장 낮은 기온의 차이**를 계산하는 프로그램을 작성하시오.

평균 기온은 모든 기온의 합을 날짜 수로 나눈 값이다.

### 입력

첫 번째 줄에 기온을 측정한 날짜의 수 `N`이 주어진다.

두 번째 줄에 각 날짜의 기온이 순서대로 주어진다.

### 출력

첫 번째 줄에 평균 기온보다 높은 날의 수를 출력한다.

두 번째 줄에 가장 높은 기온과 가장 낮은 기온의 차이를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- `-50 <= Temperature <= 50`
- 모든 기온은 정수이다.
- 평균 기온과 같은 기온은 평균보다 높은 날에 포함하지 않는다.

## 2. Input example

### Example 1

```text
7
18 21 19 25 17 23 20
```

### Example 2

```text
5
10 15 20 15 5
```

## 3. Output example

### 3.1. Example 1

```text
3
8
```

### 3.2. Example 2

```text
2
15
```

## 4. Explanation

### 4.1. Example 1

측정된 기온은 다음과 같다.

`18, 21, 19, 25, 17, 23, 20`

전체 기온의 합은 `143`이고, 날짜는 `7일`이므로 평균 기온은

`143 / 7 = 20.43...`

도이다.

평균보다 높은 기온은 `21, 25, 23`으로 총 `3일`이다.

가장 높은 기온은 `25도`, 가장 낮은 기온은 `17도`이므로 기온 차이는

`25 - 17 = 8`

도이다.

### 4.2. Example 2

측정된 기온은 다음과 같다.

`10, 15, 20, 15, 5`

전체 기온의 합은 `65`이고, 평균 기온은

`65 / 5 = 13`

도이다.

평균보다 높은 기온은 `15, 20`으로 총 `2일`이다.

가장 높은 기온은 `20도`, 가장 낮은 기온은 `5도`이므로 기온 차이는

`20 - 5 = 15`

도이다.

## 5. Answer

```python
N = int(input())
temperatures = list(map(int, input().split()))

total = sum(temperatures)
high_days = 0

for temperature in temperatures:
    if temperature * N > total:
        high_days += 1

temperature_difference = max(temperatures) - min(temperatures)

print(high_days)
print(temperature_difference)
```
