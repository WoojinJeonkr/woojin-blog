---
external : false
title : "Aquarium feeding amount"
tag : [Python]
date : 2026-09-24
---

## 1. Problem

어항에 있는 생물에게 매일 정해진 양의 먹이를 주고 있다.

여러 날 동안 투입한 먹이의 양이 주어졌을 때, 전체 기간 동안 사용한 **먹이의 총량**을 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 먹이를 준 날의 수 `N`이 주어진다.

두 번째 줄에 각 날짜에 사용한 먹이의 양이 순서대로 주어진다.

### 출력

전체 기간 동안 사용한 먹이의 총량을 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 날짜의 먹이 양은 `0 <= Food <= 1,000`
- 모든 입력값은 정수이다.

## 2. Input example

### Example 1

```text
5
2 3 2 4 1
```

### Example 2

```text
6
5 2 4 3 1 5
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

각 날짜의 먹이 양은 `2, 3, 2, 4, 1`이다.

따라서 전체 먹이 양은

`2 + 3 + 2 + 4 + 1 = 12`

이다.

### 4.2. Example 2

각 날짜의 먹이 양은 `5, 2, 4, 3, 1, 5`이다.

따라서 전체 먹이 양은

`5 + 2 + 4 + 3 + 1 + 5 = 20`

이다.

## 5. Answer

```python
N = int(input())
food = list(map(int, input().split()))

total_food = sum(food)

print(total_food)
```
