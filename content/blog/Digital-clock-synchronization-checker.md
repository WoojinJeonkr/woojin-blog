---
external : false
title : "Digital clock synchronization checker"
tag : [Python]
date : 2026-05-24
---

## 1. Problem

한 데이터 센터에서는 여러 서버의 디지털 시계를 동기화하여 운영하고 있다.

각 서버는 `HH:MM:SS` 형식의 시간을 기록하며,
모든 서버 간 시간 차이가 일정 범위를 넘으면
동기화 오류가 발생한 것으로 판단한다.

시간 차이는 초(second) 단위로 계산한다.

예를 들어:

- `12:00:10`
- `12:00:25`

의 시간 차이는 15초이다.

N개의 서버 시간이 주어질 때,
가장 빠른 시간과 가장 늦은 시간의 차이가
K초 이하인지 판별하는 프로그램을 작성하시오.

## 2. Input

- 첫째 줄에 서버 개수 N과 허용 가능한 최대 시간 차이 K가 주어진다.
- 다음 N개의 줄에는 각 서버 시간이 `HH:MM:SS` 형식으로 주어진다.

## 3. Limit

- 2 ≤ N ≤ 1000
- 0 ≤ K ≤ 86400
- 모든 시간은 올바른 24시간 형식

## 4. Output

- 가장 빠른 시간과 가장 늦은 시간의 차이가 K 이하이면 `SYNC`
- 초과하면 `OUT OF SYNC` 를 출력한다.

## 5. Input Example

```text
4 20
12:00:10
12:00:25
12:00:18
12:00:05
```

## 6. Output Example

```text
SYNC
```

## 7. Example Explanation

각 시간을 초 단위로 변환하면:

- 12:00:10 → 43210초
- 12:00:25 → 43225초
- 12:00:18 → 43218초
- 12:00:05 → 43205초

가장 빠른 시간은 43205초,
가장 늦은 시간은 43225초이다.

시간 차이는:

20초

이며 허용 범위 K=20 이하이므로 동기화 상태이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

# 서버 개수 N과 허용 가능한 최대 시간 차이 K 입력
n, k = map(int, input().split())

times = []

# 시간을 초 단위로 변환하여 저장
for _ in range(n):
    h, m, s = map(int, input().strip().split(':'))

    total_seconds = h * 3600 + m * 60 + s
    times.append(total_seconds)

# 가장 빠른 시간과 가장 늦은 시간 계산
min_time = min(times)
max_time = max(times)

# 시간 차이 계산
diff = max_time - min_time

# 결과 출력
if diff <= k:
    print("SYNC")
else:
    print("OUT OF SYNC")
```
