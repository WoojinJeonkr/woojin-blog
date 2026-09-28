---
external : false
title : "Subway passenger counting"
tag : [Python]
date : 2026-09-28
---

## 1. Problem

지하철을 운행하는 동안 각 역에서 승객이 타고 내린 수를 기록하고 있다.

각 역에서 **승차한 승객 수와 하차한 승객 수**가 주어졌을 때, 모든 역을 지나가는 동안 지하철에 탑승하고 있는 **최대 승객 수**를 계산하는 프로그램을 작성하시오.

처음에는 지하철에 승객이 한 명도 탑승하고 있지 않다고 가정한다.

### 입력

첫 번째 줄에 지하철이 정차하는 역의 수 `N`이 주어진다.

다음 `N`개의 줄에 각 역에서 승차한 승객 수와 하차한 승객 수가 공백으로 주어진다.

### 출력

지하철에 탑승하고 있었던 승객 수의 최댓값을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- `0 <= In <= 10,000`
- `0 <= Out <= 10,000`
- 항상 하차하는 승객 수는 현재 탑승객 수보다 많지 않다.
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
3 0
5 2
2 1
4 3
1 5
```

### Example 2

```text
6
10 0
3 4
5 2
2 6
8 1
1 9
```

## 3. Output example

### 3.1. Example 1

```text
8
```

### 3.2. Example 2

```text
14
```

## 4. Explanation

### 4.1. Example 1

각 역에서 승객 수를 계산하면 다음과 같다.

- 1번 역: `0 + 3 - 0 = 3명`
- 2번 역: `3 + 5 - 2 = 6명`
- 3번 역: `6 + 2 - 1 = 7명`
- 4번 역: `7 + 4 - 3 = 8명`
- 5번 역: `8 + 1 - 5 = 4명`

따라서 지하철에 가장 많은 승객이 탑승하고 있었던 순간의 승객 수는 `8명`이다.

### 4.2. Example 2

각 역에서 승객 수를 계산하면 다음과 같다.

- 1번 역: `0 + 10 - 0 = 10명`
- 2번 역: `10 + 3 - 4 = 9명`
- 3번 역: `9 + 5 - 2 = 12명`
- 4번 역: `12 + 2 - 6 = 8명`
- 5번 역: `8 + 8 - 1 = 15명`
- 6번 역: `15 + 1 - 9 = 7명`

따라서 최대 승객 수는 `15명`이다.

## 5. Answer

```python
N = int(input())

passengers = 0
maximum_passengers = 0

for _ in range(N):
    in_count, out_count = map(int, input().split())

    passengers += in_count
    passengers -= out_count

    maximum_passengers = max(maximum_passengers, passengers)

print(maximum_passengers)
```
