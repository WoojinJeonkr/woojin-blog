---
external : false
title : "Multi timer event simulator"
tag : [Python]
date : 2026-05-27
---

## 1. Problem

게임 서버에서는 여러 개의 타이머 이벤트를 동시에 관리한다.

각 이벤트는 다음 정보를 가진다.

- 이벤트 이름
- 시작 시간 (`HH:MM:SS`)
- 반복 주기(초)

이벤트는 시작 시간 이후부터 반복 주기마다 실행된다.

관리자는 특정 시각까지 실행되는 모든 이벤트를 시간 순서대로 확인하려고 한다.

만약 같은 시각에 여러 이벤트가 실행된다면:

1. 이벤트 이름 사전순
2. 입력 순서

로 정렬한다.

N개의 이벤트 정보와 종료 시각이 주어질 때,
종료 시각 이하에서 실행되는 모든 이벤트를 출력하는 프로그램을 작성하시오.

## 2. Input

- 첫째 줄에 이벤트 개수 N과 종료 시각 T가 주어진다.
- 다음 N개의 줄에는 이벤트 이름, 시작 시간, 반복 주기(초)가 주어진다.

## 3. Limit

- 1 ≤ N ≤ 100
- 1 ≤ 반복 주기 ≤ 10000
- 종료 시각은 항상 `HH:MM:SS` 형식
- 이벤트 이름 길이 ≤ 20
- 하루(24시간) 내의 시간만 주어진다.
- 출력 이벤트 개수는 최대 100000개 이하

## 4. Output

실행되는 이벤트를 시간 순서대로 출력한다.

형식은 다음과 같다.

```text
HH:MM:SS 이벤트이름
```

## 5. Input Example

```text
3 00:01:00
Heal 00:00:10 15
Spawn 00:00:00 20
Buff 00:00:05 10
```

## 6. Output Example

```text
00:00:00 Spawn
00:00:05 Buff
00:00:10 Buff
00:00:10 Heal
00:00:20 Buff
00:00:20 Spawn
00:00:25 Heal
00:00:30 Buff
00:00:40 Buff
00:00:40 Heal
00:00:40 Spawn
00:00:50 Buff
00:00:55 Heal
00:01:00 Buff
00:01:00 Spawn
```

## 7. Example Explanation

각 이벤트는 다음과 같이 반복 실행된다.

- Heal:
  - 00:00:10
  - 00:00:25
  - 00:00:40
  - 00:00:55

- Spawn:
  - 00:00:00
  - 00:00:20
  - 00:00:40
  - 00:01:00

- Buff:
  - 00:00:05
  - 00:00:15
  - 00:00:25
  - 00:00:35
  - 00:00:45
  - 00:00:55

모든 실행 시각을 합쳐 시간 순서대로 정렬하여 출력한다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

# HH:MM:SS -> 초 변환
def to_seconds(time_str):
    h, m, s = map(int, time_str.split(':'))
    return h * 3600 + m * 60 + s

# 초 -> HH:MM:SS 변환
def to_time_str(seconds):
    h = seconds // 3600
    seconds %= 3600

    m = seconds // 60
    s = seconds % 60

    return f"{h:02d}:{m:02d}:{s:02d}"

# 입력
n, end_time = input().split()
n = int(n)

limit = to_seconds(end_time)

events = []

# 이벤트 정보 저장
for order in range(n):
    name, start_time, interval = input().split()

    start_sec = to_seconds(start_time)
    interval = int(interval)

    current = start_sec

    # 종료 시각 이하까지 반복 생성
    while current <= limit:
        events.append((current, name, order))
        current += interval

# 시간 -> 이름 -> 입력순 정렬
events.sort(key=lambda x: (x[0], x[1], x[2]))

# 출력
for time_sec, name, _ in events:
    print(to_time_str(time_sec), name)
```
