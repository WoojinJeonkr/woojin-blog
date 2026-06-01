---
external : false
title : "Global email delivery scheduling"
tag : [Python]
date : 2026-06-01
---

## 1. Problem

글로벌 IT 기업은 여러 국가의 지사에 이메일을 발송하고 있다.

이메일은 반드시 본사 서버에서 순차적으로 발송되며,
각 국가마다 현지 업무 시간에만 메일을 수신할 수 있다.

국가마다 시차(Time Zone)가 존재하며,
업무 시간은 다음과 같이 정의된다.

```text
09:00 ~ 18:00
```

본사 서버는 UTC 기준 시간으로 메일을 발송한다.

어떤 국가에 메일을 보냈을 때,
현지 시간이 업무 시간 이전이면 해당 국가는 업무 시작 시각인 09:00에 메일을 확인한다.

현지 시간이 업무 시간 이후이면 다음 날 09:00에 메일을 확인한다.

업무 시간 중이라면 즉시 확인한다.

N개 국가의 시차 정보와 메일 발송 시각이 주어질 때,
모든 국가가 실제로 메일을 확인한 시각(UTC 기준) 중 가장 늦은 시간을 구하시오.

## 2. Input

- 첫째 줄에 국가 수 N이 주어진다.
- 둘째 줄에 메일 발송 시각 H M이 주어진다.
- 다음 N개의 줄에는 각 국가의 UTC 시차가 주어진다.

```text
offset
```

의미:

- 해당 국가의 현지 시각 = UTC 시각 + offset
- offset은 음수일 수도 있다.

## 3. Limit

- 1 ≤ N ≤ 100000
- 0 ≤ H ≤ 23
- 0 ≤ M ≤ 59
- -12 ≤ offset ≤ 14

## 4. Output

모든 국가가 실제로 메일을 확인한 시각 중

```text
가장 늦은 UTC 시각
```

을 분 단위로 출력한다.

(메일 발송 시점을 기준으로 몇 분 후인지 출력)

## 5. Input Example

```text
5
16 30
9
1
-5
3
12
```

## 6. Output Example

```text
990
```

## 7. Example Explanation

메일은 UTC 기준

```text
16:30
```

에 발송된다.

각 국가의 확인 시각을 계산해보자.

- UTC+9 국가

현지 시각

```text
01:30 (다음 날)
```

업무 시작 전이므로

```text
09:00
```

에 확인한다.

UTC 기준 확인 시각은

```text
00:00 (다음 날)
```

이며 발송 후

```text
450분
```

뒤이다.

- UTC+1 국가

현지 시각

```text
17:30
```

으로 업무 시간 중이므로 즉시 확인한다.

발송 후

```text
0분
```

뒤이다.

- UTC-5 국가

현지 시각

```text
11:30
```

으로 업무 시간 중이므로 즉시 확인한다.

발송 후

```text
0분
```

뒤이다.

- UTC+3 국가

현지 시각

```text
19:30
```

으로 업무 종료 후이다.

다음 날

```text
09:00
```

에 확인하며 UTC 기준으로는

```text
06:00 (다음 날)
```

이다.

발송 후

```text
810분
```

뒤이다.

- UTC+12 국가

현지 시각

```text
04:30 (다음 날)
```

으로 업무 시작 전이다.

```text
09:00
```

에 확인하며 UTC 기준으로는

```text
09:00 (다음 날)
```

이다.

발송 후

```text
990분
```

뒤이다.

따라서 가장 늦게 확인하는 국가는 UTC+12 국가이며 정답은

```text
990
```

이다.

이 문제는 각 국가의 현지 시간을 계산한 뒤,
업무 시간 규칙에 따라 실제 확인 시각을 구하는 시뮬레이션 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n = int(input())

h, m = map(int, input().split())

send_time = h * 60 + m

DAY = 24 * 60

answer = 0

for _ in range(n):
    offset = int(input())

    local_time = send_time + offset * 60

    day_shift = local_time // DAY
    local_minute = local_time % DAY

    start_work = 9 * 60
    end_work = 18 * 60

    if start_work <= local_minute < end_work:
        confirm_local = local_time
    elif local_minute < start_work:
        confirm_local = day_shift * DAY + start_work
    else:
        confirm_local = (day_shift + 1) * DAY + start_work

    confirm_utc = confirm_local - offset * 60

    elapsed = confirm_utc - send_time

    answer = max(answer, elapsed)

print(answer)
```
