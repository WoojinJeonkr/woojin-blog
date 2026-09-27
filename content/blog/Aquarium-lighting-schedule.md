---
external : false
title : "Aquarium lighting schedule"
tag : [Python]
date : 2026-09-27
---

## 1. Problem

어항에 설치된 조명은 하루 중 정해진 시간 동안 작동한다.

여러 날 동안 기록된 조명 작동 시간을 이용하여 **전체 조명 작동 시간**과 **가장 오래 작동한 날의 시간**을 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 기록된 날짜의 수 `N`이 주어진다.

두 번째 줄에 각 날짜의 조명 작동 시간이 순서대로 주어진다.

### 출력

첫 번째 줄에 전체 조명 작동 시간을 출력한다.

두 번째 줄에 가장 오래 조명이 작동한 날의 시간을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 날짜의 조명 작동 시간은 `0 <= LightingTime <= 24`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
8 10 6 12 9
```

### Example 2

```text
6
7 11 10 8 12 9
```

## 3. Output example

### 3.1. Example 1

```text
45
12
```

### 3.2. Example 2

```text
57
12
```

## 4. Explanation

### 4.1. Example 1

각 날짜의 조명 작동 시간은 다음과 같다.

`8, 10, 6, 12, 9`

전체 작동 시간은

`8 + 10 + 6 + 12 + 9 = 45`

시간이다.

가장 오래 작동한 날은 `12시간`이다.

### 4.2. Example 2

각 날짜의 조명 작동 시간은 다음과 같다.

`7, 11, 10, 8, 12, 9`

전체 작동 시간은

`7 + 11 + 10 + 8 + 12 + 9 = 57`

시간이다.

가장 오래 작동한 날은 `12시간`이다.

## 5. Answer

```python
N = int(input())
lighting_times = list(map(int, input().split()))

total_time = sum(lighting_times)
maximum_time = max(lighting_times)

print(total_time)
print(maximum_time)
```
