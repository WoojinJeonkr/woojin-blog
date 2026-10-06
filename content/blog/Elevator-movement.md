---
external : false
title : "Elevator movement"
tag : [Python]
date : 2026-10-06
---

## 1. Problem

한 건물의 엘리베이터가 여러 층을 이동하고 있다.

엘리베이터가 이동한 층의 번호가 순서대로 주어졌을 때, 전체 이동 과정에서 **엘리베이터가 이동한 총 층수**와 **한 번에 가장 많이 이동한 층수**를 계산하는 프로그램을 작성하시오.

엘리베이터는 처음에 `0층`에 있다.

### 입력

첫 번째 줄에 엘리베이터가 이동한 횟수 `N`이 주어진다.

두 번째 줄에 각 이동 후 엘리베이터가 도착한 층의 번호가 순서대로 주어진다.

### 출력

첫 번째 줄에 엘리베이터가 이동한 총 층수를 출력한다.

두 번째 줄에 한 번의 이동에서 이동한 층수의 최댓값을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- `0 <= Floor <= 100`
- 연속된 두 층의 차이는 최대 `100`이다.
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
3 7 2 10 6
```

### Example 2

```text
6
5 12 8 20 15 18
```

## 3. Output example

### 3.1. Example 1

```text
22
8
```

### 3.2. Example 2

```text
40
7
```

## 4. Explanation

### 4.1. Example 1

엘리베이터의 이동은 다음과 같다.

- `0층 → 3층`: 3층 이동
- `3층 → 7층`: 4층 이동
- `7층 → 2층`: 5층 이동
- `2층 → 10층`: 8층 이동
- `10층 → 6층`: 4층 이동

따라서 총 이동 층수는

`3 + 4 + 5 + 8 + 4 = 24`

층이다.

한 번에 가장 많이 이동한 거리는 `8층`이다.

### 4.2. Example 2

엘리베이터의 이동은 다음과 같다.

- `0층 → 5층`: 5층 이동
- `5층 → 12층`: 7층 이동
- `12층 → 8층`: 4층 이동
- `8층 → 20층`: 12층 이동
- `20층 → 15층`: 5층 이동
- `15층 → 18층`: 3층 이동

따라서 총 이동 층수는

`5 + 7 + 4 + 12 + 5 + 3 = 36`

층이다.

한 번에 가장 많이 이동한 거리는 `12층`이다.

## 5. Answer

```python
N = int(input())
floors = list(map(int, input().split()))

current_floor = 0
total_distance = 0
maximum_distance = 0

for floor in floors:
    distance = abs(floor - current_floor)

    total_distance += distance
    maximum_distance = max(maximum_distance, distance)

    current_floor = floor

print(total_distance)
print(maximum_distance)
```
