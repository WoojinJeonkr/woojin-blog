---
external : false
title : "Movie theater seat reservation"
tag : [Python]
date : 2026-10-03
---

## 1. Problem

영화관의 한 상영관에는 좌석이 일렬로 배치되어 있다.

각 좌석의 예약 여부가 주어졌을 때, **예약되지 않은 좌석의 개수**와 **연속해서 비어 있는 좌석 중 가장 긴 구간의 길이**를 계산하는 프로그램을 작성하시오.

예약된 좌석은 `1`, 예약되지 않은 좌석은 `0`으로 표시한다.

### 입력

첫 번째 줄에 전체 좌석의 수 `N`이 주어진다.

두 번째 줄에 각 좌석의 예약 여부가 순서대로 주어진다.

### 출력

첫 번째 줄에 예약되지 않은 좌석의 개수를 출력한다.

두 번째 줄에 연속해서 비어 있는 좌석 중 가장 긴 구간의 길이를 출력한다.

### 제한사항

- `1 <= N <= 100,000`
- 각 좌석은 `0` 또는 `1`이다.
- `0`은 예약되지 않은 좌석을 의미한다.
- `1`은 예약된 좌석을 의미한다.

## 2. Input example

### Example 1

```text
10
1 0 0 1 0 0 0 1 0 0
```

### Example 2

```text
12
0 0 1 1 0 1 0 0 0 0 1 0
```

## 3. Output example

### 3.1. Example 1

```text
6
3
```

### 3.2. Example 2

```text
7
4
```

## 4. Explanation

### 4.1. Example 1

좌석 상태는 다음과 같다.

`1 0 0 1 0 0 0 1 0 0`

예약되지 않은 좌석은 총 `6개`이다.

연속해서 비어 있는 구간은 다음과 같다.

- 2~3번 좌석: 2개
- 5~7번 좌석: 3개
- 9~10번 좌석: 2개

따라서 가장 긴 빈 좌석 구간은 `3개`이다.

### 4.2. Example 2

좌석 상태는 다음과 같다.

`0 0 1 1 0 1 0 0 0 0 1 0`

예약되지 않은 좌석은 총 `7개`이다.

가장 긴 연속 빈 좌석 구간은 7~10번 좌석으로 총 `4개`이다.

## 5. Answer

```python
N = int(input())
seats = list(map(int, input().split()))

empty_count = 0
current_empty = 0
maximum_empty = 0

for seat in seats:
    if seat == 0:
        empty_count += 1
        current_empty += 1
        maximum_empty = max(maximum_empty, current_empty)
    else:
        current_empty = 0

print(empty_count)
print(maximum_empty)
```
