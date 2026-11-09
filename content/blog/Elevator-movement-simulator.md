---
external: false
title: "Elevator movement simulator"
tag: [Python]
date: 2026-11-09
---

## 1. Problem

고층 건물의 엘리베이터는 현재 층에서 사용자가 요청한 층으로 이동한다.

엘리베이터는 1층에서 시작하며, 여러 번의 층 이동 요청을 순서대로 처리한다.

각 요청은 현재 층을 기준으로 이동할 층수를 의미한다.

- 양수이면 위쪽으로 이동한다.
- 음수이면 아래쪽으로 이동한다.
- 이동 결과가 1층보다 낮아지는 요청은 무시한다.
- 이동 결과가 건물의 최고층보다 높아지는 요청도 무시한다.
- 요청이 무시되면 엘리베이터는 현재 층에 그대로 머무른다.

모든 이동 요청을 처리한 후 최종 층수와 실제 이동한 총 층수를 계산하는 프로그램을 작성하시오.

### 입력

첫째 줄에 건물의 최고층 \(F\)와 이동 요청 횟수 \(N\)이 공백으로 구분되어 주어진다.

둘째 줄에 각 이동 요청이 공백으로 구분되어 주어진다.

### 출력

첫째 줄에 엘리베이터의 최종 층수를 출력한다.

둘째 줄에 엘리베이터가 실제로 이동한 총 층수를 출력한다.

### 제한사항

- \(2 \leq F \leq 100\)
- \(1 \leq N \leq 100\)
- 이동 요청은 -100 이상 100 이하의 정수이다.
- 엘리베이터의 시작 층은 항상 1층이다.

## 2. Input example

### Example 1

```text
10 5
3 4 -2 8 -1
```

### Example 2

```text
15 6
5 -2 -10 4 8 -3
```

## 3. Output example

### 3.1. Example 1

```text
6
13
```

### 3.2. Example 2

```text
5
25
```

## 4. Explanation

### 4.1. Example 1

엘리베이터는 1층에서 시작한다.

1. `+3`: 4층으로 이동, 이동 거리 3
2. `+4`: 8층으로 이동, 이동 거리 4
3. `-2`: 6층으로 이동, 이동 거리 2
4. `+8`: 10층을 초과하므로 이동하지 않음
5. `-1`: 5층으로 이동, 이동 거리 1

최종 층수는 5층이며 실제 이동한 총 층수는 10층이다.

### 4.2. Example 2

엘리베이터는 1층에서 시작한다.

1. `+5`: 6층으로 이동, 이동 거리 5
2. `-2`: 4층으로 이동, 이동 거리 2
3. `-10`: 1층보다 낮아지므로 이동하지 않음
4. `+4`: 8층으로 이동, 이동 거리 4
5. `+8`: 15층을 초과하므로 이동하지 않음
6. `-3`: 5층으로 이동, 이동 거리 3

최종 층수는 5층이며 실제 이동한 총 층수는 14층이다.

## 5. Answer

```python
floor, n = map(int, input().split())
requests = list(map(int, input().split()))

current = 1
total_movement = 0

for request in requests:
    next_floor = current + request

    if 1 <= next_floor <= floor:
        total_movement += abs(request)
        current = next_floor

results = [
    str(current),
    str(total_movement)
]

print("\n".join(results))
```
