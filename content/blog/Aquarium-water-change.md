---
external : false
title : "Aquarium water change"
tag : [Python]
date : 2026-09-22
---

## 1. Problem

어항의 물을 일정량씩 교체하고 있다.

하루마다 교체한 물의 양이 주어졌을 때, 정해진 기간 동안 **전체 교체한 물의 양**을 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 물을 교체한 날짜의 수 `N`이 주어진다.

두 번째 줄에 각 날짜마다 교체한 물의 양이 순서대로 주어진다.

### 출력

전체 기간 동안 교체한 물의 총량을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 날짜의 물 교체량은 `0 <= Water <= 10,000`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
2 3 1 4 2
```

### Example 2

```text
7
5 2 3 0 4 1 5
```

## 3. Output example

### 3.1. Example 1

```text
12
```

### 3.2. Example 2

```text
20
```

## 4. Explanation

### 4.1. Example 1

각 날짜의 물 교체량은 다음과 같다.

- 1일차: 2L
- 2일차: 3L
- 3일차: 1L
- 4일차: 4L
- 5일차: 2L

따라서 전체 물 교체량은

`2 + 3 + 1 + 4 + 2 = 12`

L이다.

### 4.2. Example 2

각 날짜의 물 교체량은 다음과 같다.

- 1일차: 5L
- 2일차: 2L
- 3일차: 3L
- 4일차: 0L
- 5일차: 4L
- 6일차: 1L
- 7일차: 5L

따라서 전체 물 교체량은

`5 + 2 + 3 + 0 + 4 + 1 + 5 = 20`

L이다.

## 5. Answer

```python
N = int(input())
water_changes = list(map(int, input().split()))

total_water = sum(water_changes)

print(total_water)
```
