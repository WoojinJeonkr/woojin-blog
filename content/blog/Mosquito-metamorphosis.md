---
external : false
title : "Mosquito metamorphosis"
tag : [Python]
date : 2026-09-08
---

## 1. Problem

여름이 되면 물이 고여 있는 곳에서 장구벌레를 발견할 수 있습니다.

장구벌레는 물속에서 일정한 기간 동안 성장한 뒤 번데기 단계를 거쳐 모기로 변태합니다.

어떤 물통에 장구벌레가 여러 마리 존재하고 있으며, 각각의 장구벌레는 서로 다른 성장 시간을 가지고 있습니다.

각 장구벌레가 모기로 변태하기까지 필요한 시간이 주어졌을 때, 특정 날짜까지 **몇 마리의 장구벌레가 모기로 변태했는지** 계산하려고 합니다.

모든 장구벌레는 첫날부터 동시에 성장하기 시작한다고 가정합니다.

장구벌레의 성장에 필요한 시간이 `TransformationTime`일 때, 해당 시간이 지나면 즉시 모기로 변태합니다.

주어진 날짜에 모기로 변태한 장구벌레의 수를 구하는 프로그램을 작성하세요.

### 입력

첫 번째 줄에 장구벌레의 수 `LarvaCount`와 관찰 기간 `ObservationDay`가 주어집니다.

두 번째 줄에 각 장구벌레가 모기로 변태하기까지 필요한 시간이 `LarvaCount`개 주어집니다.

각 시간은 일(day) 단위입니다.

### 출력

관찰 기간이 끝났을 때 모기로 변태한 장구벌레의 수를 출력합니다.

### 제한사항

- `1 ≤ LarvaCount ≤ 100,000`
- `1 ≤ ObservationDay ≤ 1,000,000`
- `1 ≤ TransformationTime ≤ 1,000,000`
- 모든 입력값은 정수입니다.

## 2. Input example

### Example 1

```text
6 7
3 5 8 2 7 10
```

### Example 2

```text
8 10
1 12 5 10 3 15 7 10
```

## 3. Output example

### 3.1. Example 1

```text
4
```

### 3.2. Example 2

```text
6
```

## 4. Explanation

### 4.1. Example 1

관찰 기간은 `7일`입니다.

각 장구벌레가 모기로 변태하기까지 필요한 시간은 다음과 같습니다.

```text
3 5 8 2 7 10
```

관찰 기간인 7일 이내에 변태하는 장구벌레는 다음과 같습니다.

```text
3일 → 변태
5일 → 변태
8일 → 변태하지 않음
2일 → 변태
7일 → 변태
10일 → 변태하지 않음
```

따라서 총 `4`마리가 모기로 변태합니다.

### 4.2. Example 2

관찰 기간은 `10일`입니다.

각 장구벌레의 변태 시간은 다음과 같습니다.

```text
1 12 5 10 3 15 7 10
```

10일 이내에 변태하는 장구벌레는:

```text
1일
5일
10일
3일
7일
10일
```

총 `6`마리입니다.

## 5. Answer

```python
import sys

input = sys.stdin.readline

larva_count, observation_day = map(int, input().split())
transformation_times = map(int, input().split())

transformed_larva_count = 0

for transformation_time in transformation_times:
    if transformation_time <= observation_day:
        transformed_larva_count += 1

print(transformed_larva_count)
```
