---
external : false
title : "Smartphone battery usage"
tag : [Python]
date : 2026-10-07
---

## 1. Problem

스마트폰을 사용하면서 시간대별 배터리 잔량을 기록하고 있다.

각 시간대의 배터리 잔량이 주어졌을 때, **가장 많이 배터리가 감소한 구간**과 **전체 배터리 감소량**을 계산하는 프로그램을 작성하시오.

단, 배터리가 충전되어 잔량이 증가한 구간은 배터리 감소량에 포함하지 않는다.

### 입력

첫 번째 줄에 배터리를 측정한 횟수 `N`이 주어진다.

두 번째 줄에 각 시간대의 배터리 잔량이 순서대로 주어진다.

### 출력

첫 번째 줄에 전체 배터리 감소량을 출력한다.

두 번째 줄에 연속된 두 측정값 사이에서 발생한 가장 큰 배터리 감소량을 출력한다.

### 제한사항

- `2 <= N <= 100,000`
- `0 <= Battery <= 100`
- 모든 배터리 잔량은 정수이다.

## 2. Input example

### Example 1

```text
6
100 90 85 92 70 60
```

### Example 2

```text
7
95 80 75 88 65 50 55
```

## 3. Output example

### 3.1. Example 1

```text
43
22
```

### 3.2. Example 2

```text
50
23
```

## 4. Explanation

### 4.1. Example 1

배터리 잔량의 변화는 다음과 같다.

- `100 → 90`: 10 감소
- `90 → 85`: 5 감소
- `85 → 92`: 충전되었으므로 감소량에 포함하지 않음
- `92 → 70`: 22 감소
- `70 → 60`: 10 감소

전체 배터리 감소량은

`10 + 5 + 22 + 10 = 47`

이다.

가장 많이 감소한 구간은 `92 → 70`으로 `22`이다.

### 4.2. Example 2

배터리 잔량의 변화는 다음과 같다.

- `95 → 80`: 15 감소
- `80 → 75`: 5 감소
- `75 → 88`: 충전되었으므로 제외
- `88 → 65`: 23 감소
- `65 → 50`: 15 감소
- `50 → 55`: 충전되었으므로 제외

전체 배터리 감소량은

`15 + 5 + 23 + 15 = 58`

이다.

가장 많이 감소한 구간은 `88 → 65`로 `23`이다.

## 5. Answer

```python
N = int(input())
battery = list(map(int, input().split()))

total_decrease = 0
maximum_decrease = 0

for i in range(1, N):
    decrease = battery[i - 1] - battery[i]

    if decrease > 0:
        total_decrease += decrease
        maximum_decrease = max(maximum_decrease, decrease)

print(total_decrease)
print(maximum_decrease)
```
