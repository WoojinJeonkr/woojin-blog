---
external : false
title : "Snail food consumption"
tag : [Python]
date : 2026-09-16
---

## 1. Problem

수조에 여러 마리의 우렁이가 살고 있습니다.

우렁이마다 하루에 먹을 수 있는 먹이의 양이 서로 다르다고 가정합니다.

관리자는 우렁이들에게 충분한 먹이를 공급하기 위해 하루 동안 필요한 전체 먹이의 양을 계산하려고 합니다.

각 우렁이가 하루에 먹을 수 있는 먹이의 양이 주어졌을 때, 모든 우렁이가 하루 동안 먹을 수 있는 **전체 먹이의 양**을 계산하는 프로그램을 작성하세요.

단, 모든 우렁이는 매일 자신의 하루 섭취량만큼 먹이를 먹는다고 가정합니다.

### 입력

첫 번째 줄에 우렁이의 수 `SnailCount`가 주어집니다.

두 번째 줄에 각 우렁이가 하루에 먹을 수 있는 먹이의 양 `FoodAmount`가 `SnailCount`개 주어집니다.

먹이의 양은 g 단위의 정수입니다.

### 출력

모든 우렁이가 하루 동안 먹을 수 있는 전체 먹이의 양을 출력합니다.

### 제한사항

- `1 ≤ SnailCount ≤ 100,000`
- `1 ≤ FoodAmount ≤ 1,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
6
2 3 1 4 2 3
```

### Example 2

```text
8
5 2 4 3 1 6 2 3
```

## 3. Output example

### 3.1. Example 1

```text
15
```

### 3.2. Example 2

```text
26
```

## 4. Explanation

### 4.1. Example 1

수조에 우렁이가 `6마리` 있습니다.

각 우렁이가 하루에 먹을 수 있는 먹이의 양은 다음과 같습니다.

```text
2 3 1 4 2 3
```

모든 우렁이의 하루 섭취량을 더하면:

```text
2 + 3 + 1 + 4 + 2 + 3 = 15
```

따라서 하루 동안 필요한 전체 먹이의 양은 `15g`입니다.

### 4.2. Example 2

수조에 우렁이가 `8마리` 있습니다.

각 우렁이의 하루 섭취량은 다음과 같습니다.

```text
5 2 4 3 1 6 2 3
```

전체 섭취량을 계산하면:

```text
5 + 2 + 4 + 3 + 1 + 6 + 2 + 3 = 26
```

따라서 하루 동안 필요한 전체 먹이의 양은 `26g`입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

snail_count = int(input())
food_amounts = map(int, input().split())

total_food_amount = 0

for food_amount in food_amounts:
    total_food_amount += food_amount

print(total_food_amount)
```
