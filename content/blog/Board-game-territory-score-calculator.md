---
external: false
title: "Board game territory score calculator"
tag: [Python]
date: 2026-11-21
---

## 1. Problem

보드게임에서는 플레이어가 여러 구역을 점령하고 구역마다 정해진 점수를 획득합니다.

게임이 종료된 후 각 플레이어가 점령한 구역의 정보가 주어졌을 때 최종 점수를 계산하는 프로그램을 작성하세요.

구역의 종류에 따른 기본 점수는 다음과 같습니다.

- `FOREST`: 3점
- `DESERT`: 2점
- `OCEAN`: 4점
- `MOUNTAIN`: 5점

추가 점수 규칙은 다음과 같습니다.

- 같은 종류의 구역을 3개 이상 점령하면 해당 종류의 구역마다 2점을 추가로 획득합니다.
- 서로 다른 종류의 구역을 모두 하나 이상 점령하면 보너스 5점을 획득합니다.
- 점령한 구역이 하나도 없으면 보너스 점수는 없습니다.

### 입력

- 첫 번째 줄에 점령한 구역의 개수 N이 주어집니다.
- 다음 N개의 줄에 점령한 구역의 종류가 하나씩 주어집니다.

### 출력

다음 항목을 순서대로 출력합니다.

- 종류별 점령 개수와 기본 점수
- 종류별 추가 점수
- 모든 종류의 구역을 점령했을 때의 보너스 점수
- 최종 점수

종류별 출력 순서는 `FOREST`, `DESERT`, `OCEAN`, `MOUNTAIN`입니다.

### 제한사항

- 0 ≤ N ≤ 100
- 구역 종류는 `FOREST`, `DESERT`, `OCEAN`, `MOUNTAIN` 중 하나입니다.
- 같은 구역 종류가 여러 번 입력될 수 있습니다.

## 2. Input example

### Example 1

```text
8
FOREST
FOREST
FOREST
DESERT
OCEAN
OCEAN
MOUNTAIN
MOUNTAIN
```

### Example 2

```text
6
FOREST
DESERT
OCEAN
MOUNTAIN
FOREST
DESERT
```

## 3. Output example

### 3.1. Example 1

```text
FOREST: 3개, 기본 9점, 추가 6점
DESERT: 1개, 기본 2점, 추가 0점
OCEAN: 2개, 기본 8점, 추가 0점
MOUNTAIN: 2개, 기본 10점, 추가 0점
All types bonus: 5점
Final score: 40점
```

### 3.2. Example 2

```text
FOREST: 2개, 기본 6점, 추가 0점
DESERT: 2개, 기본 4점, 추가 0점
OCEAN: 1개, 기본 4점, 추가 0점
MOUNTAIN: 1개, 기본 5점, 추가 0점
All types bonus: 5점
Final score: 24점
```

## 4. Explanation

### 4.1. Example 1

구역별 점령 개수와 기본 점수는 다음과 같습니다.

- FOREST: 3개 × 3점 = 9점
- DESERT: 1개 × 2점 = 2점
- OCEAN: 2개 × 4점 = 8점
- MOUNTAIN: 2개 × 5점 = 10점

FOREST는 3개를 점령했으므로 추가 점수는 3개 × 2점 = 6점입니다.

네 종류의 구역을 모두 점령했으므로 보너스 5점을 획득합니다.

최종 점수는 다음과 같습니다.

9 + 2 + 8 + 10 + 6 + 5 = 40점

### 4.2. Example 2

구역별 기본 점수는 다음과 같습니다.

- FOREST: 2개 × 3점 = 6점
- DESERT: 2개 × 2점 = 4점
- OCEAN: 1개 × 4점 = 4점
- MOUNTAIN: 1개 × 5점 = 5점

어느 종류도 3개 이상 점령하지 않았으므로 추가 점수는 없습니다.

네 종류를 모두 점령했으므로 보너스 5점을 획득합니다.

최종 점수는 다음과 같습니다.

6 + 4 + 4 + 5 + 5 = 24점

## 5. Answer

```python
n = int(input())

points = {
    "FOREST": 3,
    "DESERT": 2,
    "OCEAN": 4,
    "MOUNTAIN": 5
}

counts = {kind: 0 for kind in points}

for _ in range(n):
    kind = input().strip()
    counts[kind] += 1

results = []
total_score = 0

for kind, point in points.items():
    count = counts[kind]
    basic_score = count * point

    if count >= 3:
        extra_score = count * 2
    else:
        extra_score = 0

    total_score += basic_score + extra_score

    results.append(
        f"{kind}: {count}개, 기본 {basic_score}점, 추가 {extra_score}점"
    )

if all(count > 0 for count in counts.values()):
    bonus = 5
else:
    bonus = 0

total_score += bonus

results.append(f"All types bonus: {bonus}점")
results.append(f"Final score: {total_score}점")

print("\n".join(results))
```
