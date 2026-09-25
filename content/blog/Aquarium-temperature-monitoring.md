---
external : false
title : "Aquarium temperature monitoring"
tag : [Python]
date : 2026-09-25
---

## 1. Problem

어항에 설치된 온도 센서가 일정한 간격으로 수온을 측정하고 있다.

측정된 수온이 순서대로 주어졌을 때, 측정 기간 동안 기록된 **가장 높은 수온과 가장 낮은 수온의 차이**를 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 수온을 측정한 횟수 `N`이 주어진다.

두 번째 줄에 측정된 수온이 순서대로 주어진다.

### 출력

측정된 수온 중 가장 높은 값과 가장 낮은 값의 차이를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- `0 <= Temperature <= 40`
- 모든 수온은 정수이다.

## 2. Input example

### Example 1

```text
6
24 26 25 28 27 23
```

### Example 2

```text
7
27 28 26 29 30 28 25
```

## 3. Output example

### 3.1. Example 1

```text
5
```

### 3.2. Example 2

```text
5
```

## 4. Explanation

### 4.1. Example 1

측정된 수온은 다음과 같다.

`24, 26, 25, 28, 27, 23`

가장 높은 수온은 `28°C`이고, 가장 낮은 수온은 `23°C`이다.

따라서 수온 차이는

`28 - 23 = 5`

°C이다.

### 4.2. Example 2

측정된 수온은 다음과 같다.

`27, 28, 26, 29, 30, 28, 25`

가장 높은 수온은 `30°C`이고, 가장 낮은 수온은 `25°C`이다.

따라서 수온 차이는

`30 - 25 = 5`

°C이다.

## 5. Answer

```python
N = int(input())
temperatures = list(map(int, input().split()))

temperature_range = max(temperatures) - min(temperatures)

print(temperature_range)
```
