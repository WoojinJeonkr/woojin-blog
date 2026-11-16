---
external: false
title: "Airport runway scheduling analyzer"
tag: [Python]
date: 2026-11-16
---

## 1. Problem

공항에서는 항공기의 안전한 이착륙을 위해 활주로 사용 시간을 관리합니다.

여러 항공기의 활주로 사용 시작 시각과 사용 시간을 입력받아 각 항공기의 종료 시각을 계산하고, 전체 활주로 운영 현황을 분석하는 프로그램을 작성하세요.

모든 항공기는 같은 활주로를 사용하며, 입력된 순서대로 활주로를 이용한다고 가정합니다.

다음 규칙을 적용합니다.

- 첫 번째 항공기는 입력된 시작 시각부터 활주로를 사용합니다.
- 다음 항공기의 시작 시각이 이전 항공기의 종료 시각보다 빠르면 이전 항공기의 종료 시각부터 사용합니다.
- 다음 항공기의 시작 시각이 이전 항공기의 종료 시각과 같거나 늦으면 입력된 시작 시각부터 사용합니다.
- 항공기의 실제 종료 시각은 실제 시작 시각에 사용 시간을 더한 값입니다.

시각은 자정부터 지난 분 단위로 입력하며, 출력할 때는 `HH:MM` 형식으로 변환합니다.

### 입력

- 첫 번째 줄에 항공기 수 N이 주어집니다.
- 다음 N개의 줄에 각 항공기의 예정 시작 시각과 활주로 사용 시간이 공백으로 구분되어 주어집니다.
- 시작 시각은 `HH:MM` 형식입니다.
- 사용 시간은 분 단위의 정수입니다.

### 출력

- 각 항공기의 실제 활주로 시작 시각과 종료 시각을 입력 순서대로 출력합니다.
- 마지막 줄에는 전체 활주로 사용 시간을 출력합니다.
- 전체 사용 시간은 각 항공기의 실제 사용 시간을 합산한 값입니다.

### 제한사항

- 1 ≤ N ≤ 100
- 시작 시각은 `00:00` 이상 `23:59` 이하입니다.
- 1 ≤ 사용 시간 ≤ 300
- 모든 항공기의 운항은 같은 날짜 안에서 시작하며, 종료 시각은 다음 날로 넘어갈 수 있습니다.

## 2. Input example

### Example 1

```text
3
09:00 30
09:20 40
10:00 20
```

### Example 2

```text
4
08:30 45
08:40 30
09:10 20
09:15 15
```

## 3. Output example

### 3.1. Example 1

```text
Flight 1: 09:00 - 09:30
Flight 2: 09:30 - 10:10
Flight 3: 10:10 - 10:30
Total runway time: 90 minutes
```

### 3.2. Example 2

```text
Flight 1: 08:30 - 09:15
Flight 2: 09:15 - 09:45
Flight 3: 09:45 - 10:05
Flight 4: 10:05 - 10:20
Total runway time: 110 minutes
```

## 4. Explanation

### 4.1. Example 1

첫 번째 항공기는 09:00에 시작하여 30분 동안 활주로를 사용하므로 09:30에 종료됩니다.

두 번째 항공기의 예정 시작 시각은 09:20이지만, 첫 번째 항공기가 아직 활주로를 사용하고 있습니다.

따라서 두 번째 항공기는 09:30에 시작하여 10:10에 종료됩니다.

세 번째 항공기의 예정 시작 시각은 10:00이므로 두 번째 항공기의 종료 시각인 10:10까지 기다려야 합니다.

전체 사용 시간은 다음과 같습니다.

30 + 40 + 20 = 90분

### 4.2. Example 2

첫 번째 항공기는 08:30부터 45분 동안 활주로를 사용하여 09:15에 종료됩니다.

두 번째 항공기는 예정 시작 시각이 08:40이므로 09:15까지 기다린 후 30분 동안 사용합니다.

세 번째 항공기는 예정 시작 시각이 09:10이므로 09:45에 시작합니다.

네 번째 항공기도 예정 시작 시각인 09:15보다 앞선 항공기의 종료 시각이 늦으므로 10:05에 시작합니다.

전체 사용 시간은 다음과 같습니다.

45 + 30 + 20 + 15 = 110분

## 5. Answer

```python
n = int(input())

results = []
previous_end = 0
total_time = 0

for i in range(1, n + 1):
    start_time, duration = input().split()

    hour, minute = map(int, start_time.split(":"))
    scheduled_start = hour * 60 + minute

    actual_start = max(scheduled_start, previous_end)
    actual_end = actual_start + int(duration)

    start_hour, start_minute = divmod(actual_start, 60)
    end_hour, end_minute = divmod(actual_end, 60)

    results.append(
        f"Flight {i}: "
        f"{start_hour:02d}:{start_minute:02d} - "
        f"{end_hour:02d}:{end_minute:02d}"
    )

    previous_end = actual_end
    total_time += int(duration)

results.append(f"Total runway time: {total_time} minutes")

print("\n".join(results))
```
