---
external : false
title : "Delivery distance calculation"
tag : [Python]
date : 2026-10-04
---

## 1. Problem

배달 기사가 여러 건의 배달을 수행하고 있다.

각 배달에서 이동한 거리가 주어졌을 때, 모든 배달에 사용한 **총 이동 거리**와 **가장 긴 배달 거리**를 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 배달 건수 `N`이 주어진다.

두 번째 줄에 각 배달에서 이동한 거리가 순서대로 주어진다.

### 출력

첫 번째 줄에 전체 배달의 총 이동 거리를 출력한다.

두 번째 줄에 가장 긴 배달의 이동 거리를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 배달 거리는 `1 <= Distance <= 1,000`
- 모든 거리는 정수이다.

## 2. Input example

### Example 1

```text
5
12 8 15 10 5
```

### Example 2

```text
6
25 14 32 18 21 10
```

## 3. Output example

### 3.1. Example 1

```text
50
15
```

### 3.2. Example 2

```text
120
32
```

## 4. Explanation

### 4.1. Example 1

각 배달에서 이동한 거리는 다음과 같다.

`12, 8, 15, 10, 5`

전체 이동 거리는

`12 + 8 + 15 + 10 + 5 = 50`

이다.

가장 긴 배달 거리는 `15`이다.

### 4.2. Example 2

각 배달에서 이동한 거리는 다음과 같다.

`25, 14, 32, 18, 21, 10`

전체 이동 거리는

`25 + 14 + 32 + 18 + 21 + 10 = 120`

이다.

가장 긴 배달 거리는 `32`이다.

## 5. Answer

```python
N = int(input())
distances = list(map(int, input().split()))

total_distance = sum(distances)
maximum_distance = max(distances)

print(total_distance)
print(maximum_distance)
```
