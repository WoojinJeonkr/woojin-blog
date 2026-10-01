---
external : false
title : "Game score tracking"
tag : [Python]
date : 2026-10-01
---

## 1. Problem

게임에서 여러 라운드를 진행하면서 획득한 점수를 기록하고 있다.

각 라운드에서 획득한 점수가 주어졌을 때, 모든 라운드의 **총점**과 **최고 점수와 최저 점수의 차이**를 계산하는 프로그램을 작성하시오.

### 입력

첫 번째 줄에 게임 라운드의 수 `N`이 주어진다.

두 번째 줄에 각 라운드에서 획득한 점수가 순서대로 주어진다.

### 출력

첫 번째 줄에 모든 라운드의 총점을 출력한다.

두 번째 줄에 최고 점수와 최저 점수의 차이를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 라운드의 점수는 `0 <= Score <= 10,000`
- 모든 점수는 정수이다.

## 2. Input example

### Example 1

```text
5
80 65 90 75 70
```

### Example 2

```text
6
120 95 150 80 110 135
```

## 3. Output example

### 3.1. Example 1

```text
380
25
```

### 3.2. Example 2

```text
690
70
```

## 4. Explanation

### 4.1. Example 1

각 라운드의 점수는 다음과 같다.

`80, 65, 90, 75, 70`

총점은

`80 + 65 + 90 + 75 + 70 = 380`

점수 중 최댓값은 `90`, 최솟값은 `65`이다.

따라서 점수 차이는

`90 - 65 = 25`

이다.

### 4.2. Example 2

각 라운드의 점수는 다음과 같다.

`120, 95, 150, 80, 110, 135`

총점은

`120 + 95 + 150 + 80 + 110 + 135 = 690`

점수 중 최댓값은 `150`, 최솟값은 `80`이다.

따라서 점수 차이는

`150 - 80 = 70`

이다.

## 5. Answer

```python
N = int(input())
scores = list(map(int, input().split()))

total_score = sum(scores)
score_difference = max(scores) - min(scores)

print(total_score)
print(score_difference)
```
