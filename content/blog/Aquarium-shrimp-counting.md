---
external : false
title : "Aquarium shrimp counting"
tag : [Python]
date : 2026-09-26
---

## 1. Problem

어항을 관찰하면서 여러 구역에서 발견된 체리새우의 수를 기록하고 있다.

어항을 여러 구역으로 나누고 각 구역에서 발견된 체리새우의 수가 주어졌을 때, **가장 많은 새우가 발견된 구역의 새우 수**와 **전체 새우 수**를 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 어항을 나눈 구역의 수 `N`이 주어진다.

두 번째 줄에 각 구역에서 발견된 체리새우의 수가 순서대로 주어진다.

### 출력

첫 번째 줄에 전체 구역에서 발견된 체리새우의 수를 출력한다.

두 번째 줄에 한 구역에서 발견된 가장 많은 체리새우의 수를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 구역의 새우 수는 `0 <= ShrimpCount <= 1,000`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
3 5 2 8 4
```

### Example 2

```text
6
7 2 9 4 6 3
```

## 3. Output example

### 3.1. Example 1

```text
22
8
```

### 3.2. Example 2

```text
31
9
```

## 4. Explanation

### 4.1. Example 1

각 구역에서 발견된 새우의 수는 다음과 같다.

`3, 5, 2, 8, 4`

전체 새우 수는

`3 + 5 + 2 + 8 + 4 = 22`

마리이다.

가장 많은 새우가 발견된 구역에는 `8마리`가 있다.

### 4.2. Example 2

각 구역에서 발견된 새우의 수는 다음과 같다.

`7, 2, 9, 4, 6, 3`

전체 새우 수는

`7 + 2 + 9 + 4 + 6 + 3 = 31`

마리이다.

가장 많은 새우가 발견된 구역에는 `9마리`가 있다.

## 5. Answer

```python
N = int(input())
shrimp_counts = list(map(int, input().split()))

total_shrimp = sum(shrimp_counts)
maximum_shrimp = max(shrimp_counts)

print(total_shrimp)
print(maximum_shrimp)
```
