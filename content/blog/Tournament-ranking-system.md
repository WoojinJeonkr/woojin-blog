---
external: false
title: "Tournament ranking system"
tag: [Python]
date: "2026-10-13"
---

## 1. Problem

게임 대회에서는 참가자들이 여러 경기를 치르고, 승리 횟수에 따라 순위를 결정한다.

참가자별 승리 횟수가 주어졌을 때, 다음 정보를 계산하는 프로그램을 작성하시오.

- 승리 횟수가 가장 많은 참가자의 승리 횟수
- 전체 참가자의 승리 횟수 합계
- 승리 횟수가 5회 이상인 참가자의 수
- 참가자별 순위

순위는 승리 횟수가 많은 순서대로 결정한다. 승리 횟수가 같으면 공동 순위로 처리한다. 공동 순위 다음에는 건너뛴 순위를 적용한다. 예를 들어 승리 횟수가 `8, 6, 6, 3`이면 순위는 `1, 2, 2, 4`이다.

### 입력

첫째 줄에 참가자 수 \(N\)이 주어진다.

둘째 줄에 각 참가자의 승리 횟수 \(N\)개가 공백으로 구분되어 주어진다. 참가자는 입력 순서대로 1번부터 번호가 부여된다.

### 출력

첫째 줄에 가장 많은 승리 횟수를 출력한다.

둘째 줄에 전체 승리 횟수의 합계를 출력한다.

셋째 줄에 승리 횟수가 5회 이상인 참가자 수를 출력한다.

이후 각 참가자의 번호와 순위를 공백으로 구분하여 한 줄에 하나씩 입력 순서대로 출력한다.

### 제한사항

- \(1 \leq N \leq 100\)
- \(0 \leq W \leq 100\)
- \(W\)는 참가자의 승리 횟수이다.

## 2. Input example

### Example 1

```text
5
8 6 6 3 1
```

### Example 2

```text
4
2 7 5 7
```

## 3. Output example

### 3.1. Example 1

```text
8
24
3
1 1
2 2
3 2
4 4
5 5
```

### 3.2. Example 2

```text
```text
7
21
3
1 4
2 1
3 3
4 1
```

## 4. Explanation

### 4.1. Example 1

승리 횟수는 `8, 6, 6, 3, 1`이다.

가장 많은 승리 횟수는 8회이고, 전체 승리 횟수의 합계는 24회이다.

5회 이상 승리한 참가자는 1번, 2번, 3번으로 총 3명이다.

순위를 계산하면 1번은 1위, 2번과 3번은 공동 2위가 된다. 4번은 4위, 5번은 5위이다.

### 4.2. Example 2

승리 횟수는 `2, 7, 5, 7`이다.

가장 많은 승리 횟수는 7회이고, 전체 승리 횟수의 합계는 21회이다.

5회 이상 승리한 참가자는 2번, 3번, 4번으로 총 3명이다.

2번과 4번은 공동 1위이고, 3번은 3위, 1번은 4위이다.

## 5. Answer

```python
n = int(input())
wins = list(map(int, input().split()))

max_wins = max(wins)
total_wins = sum(wins)
qualified = sum(1 for win in wins if win >= 5)

print(max_wins)
print(total_wins)
print(qualified)

sorted_wins = sorted(wins, reverse=True)

for i, win in enumerate(wins):
    rank = sorted_wins.index(win) + 1
    print(i + 1, rank)
```
