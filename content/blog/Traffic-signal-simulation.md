---
external: false
title: "Traffic signal simulation"
tag: [Python]
date: 2026-10-31
---

## 1. Problem

스마트 교차로에서는 차량의 흐름을 원활하게 관리하기 위해 신호등의 상태를 주기적으로 변경한다.

신호등은 다음 세 가지 상태를 순서대로 반복한다.

1. `RED`: 빨간불
2. `GREEN`: 초록불
3. `YELLOW`: 노란불
4. 다시 `RED`로 반복

각 신호의 지속 시간은 다음과 같다.

- 빨간불: 40초
- 초록불: 30초
- 노란불: 5초

현재 신호등이 빨간불로 시작한다고 가정한다.

차량이 교차로에 도착한 후 대기한 시간이 주어졌을 때, 해당 시간이 지난 시점의 신호등 상태와 다음 신호 변경까지 남은 시간을 계산하는 프로그램을 작성하시오.

신호가 변경되는 정확한 시점에는 새롭게 시작된 신호 상태를 출력한다.

### 입력

첫째 줄에 차량이 대기한 시간 \(T\)가 초 단위로 주어진다.

### 출력

첫째 줄에 해당 시점의 신호등 상태를 출력한다.

둘째 줄에 다음 신호 변경까지 남은 시간을 초 단위로 출력한다.

### 제한사항

- \(0 \leq T \leq 100000\)
- 신호등은 빨간불부터 시작한다.
- 신호등의 주기는 총 75초이다.

## 2. Input example

### Example 1

```text
45
```

### Example 2

```text
75
```

## 3. Output example

### 3.1. Example 1

```text
GREEN
25
```

### 3.2. Example 2

```text
RED
40
```

## 4. Explanation

### 4.1. Example 1

차량이 45초 동안 대기했다.

- 0초부터 39초까지: 빨간불
- 40초부터 69초까지: 초록불
- 70초부터 74초까지: 노란불

45초 시점에는 초록불이 켜져 있다.

초록불은 70초에 노란불로 변경되므로 남은 시간은 25초이다.

### 4.2. Example 2

신호등의 전체 주기는 75초이다.

75초가 지나면 새로운 주기가 시작되므로 신호등은 다시 빨간불이 된다.

빨간불은 40초 동안 유지되므로 다음 신호 변경까지 남은 시간은 40초이다.

## 5. Answer

```python
t = int(input())

cycle = t % 75

if cycle < 40:
    signal = "RED"
    remaining = 40 - cycle
elif cycle < 70:
    signal = "GREEN"
    remaining = 70 - cycle
else:
    signal = "YELLOW"
    remaining = 75 - cycle

print(signal)
print(remaining)
```
