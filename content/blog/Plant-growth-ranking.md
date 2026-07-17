---
external : false
title : "Plant growth ranking"
tag : [Python]
date : 2026-07-17
---

## 1. Problem

한 식물 연구소에서는 여러 식물의 성장량을 기록하고 있다.

각 식물은 고유한 plantId를 가지며, 하루 동안 여러 번 성장량이 측정될 수 있다.

각 측정은 식물의 성장량(cm)을 의미하며, 같은 식물의 성장량은 모두 합산된다.

모든 측정이 끝난 후 가장 많이 성장한 식물의 이름과 총 성장량을 출력하시오.

만약 가장 많이 성장한 식물이 여러 개라면 plantId가 사전순으로 가장 앞서는 식물을 출력한다.

## 2. Input

첫째 줄에 성장 기록의 개수 N이 주어진다.

```text
N
```

다음 N개의 줄에는 성장 기록이 주어진다.

```text
plantId growth
```

- growth는 해당 측정에서 증가한 성장량(cm)이다.

## 3. Limit

- 1 ≤ N ≤ 300000
- 1 ≤ growth ≤ 10^6
- plantId 길이 : 1 ~ 30
- plantId는 영문 대소문자와 숫자로 구성

## 4. Output

가장 많이 성장한 식물의 이름과 총 성장량을 출력한다.

```text
plantId totalGrowth
```

## 5. Input Example

```text
10
Rose 5
Tulip 3
Rose 2
Lily 8
Tulip 7
Rose 4
Cactus 10
Lily 3
Tulip 2
Rose 1
```

## 6. Output Example

```text
Rose 12
```

## 7. Example Explanation

각 식물의 총 성장량은 다음과 같다.

```text
Rose    : 12
Tulip   : 12
Lily    : 11
Cactus  : 10
```

Rose와 Tulip의 성장량이 모두 12cm로 가장 크다.

동점인 경우 plantId가 사전순으로 가장 앞서는 식물을 출력하므로 정답은 다음과 같다.

```text
Rose 12
```

이 문제는 해시(Hash), 구현(Implementation), 정렬(Sorting) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n = int(input())

growth = {}

for _ in range(n):
    plant_id, value = input().split()
    value = int(value)

    growth[plant_id] = growth.get(plant_id, 0) + value

best_name = ""
best_growth = -1

for plant_id in sorted(growth):
    if growth[plant_id] > best_growth:
        best_growth = growth[plant_id]
        best_name = plant_id

print(best_name, best_growth)
```
