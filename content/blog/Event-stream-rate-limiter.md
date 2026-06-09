---
external : false
title : "Event stream rate limiter"
tag : [Python]
date : 2026-06-09
---

## 1. Problem

한 이벤트 처리 시스템은 과도한 이벤트 발생으로 인해 처리 서버에 부하가 집중되는 것을 방지하기 위해 Rate Limiter를 사용한다.

각 이벤트는 발생 시각(timestamp)과 이벤트 소스(sourceId)를 가진다.

규칙은 다음과 같다.

1. 동일한 sourceId에서 발생한 이벤트는 마지막으로 처리된 시각으로부터 K초 이상 경과해야 처리된다.
2. K초가 지나지 않은 경우 해당 이벤트는 무시된다.
3. 서로 다른 sourceId는 독립적으로 관리된다.
4. 이벤트는 발생 시각 순서대로 입력된다.

주어진 이벤트 목록에 대해 실제로 처리되는 이벤트 개수를 구하시오.

예를 들어 K = 10 일 때

```text
1 UserA
5 UserA
12 UserA
20 UserA
```

라면

```text
1 UserA  -> 처리
5 UserA  -> 무시
12 UserA -> 처리
20 UserA -> 무시
```

가 된다.

첫 번째 이벤트가 처리된 이후,

같은 sourceId의 다음 이벤트는 마지막 처리 시각으로부터 K초 이상 경과해야 다시 처리될 수 있다.

## 2. Input

첫째 줄에 이벤트 수 N과 제한 시간 K가 주어진다.

```text
N K
```

다음 N개의 줄에는 이벤트 정보가 주어진다.

```text
timestamp sourceId
```

## 3. Limit

- 1 ≤ N ≤ 300000
- 1 ≤ K ≤ 10^9
- 0 ≤ timestamp ≤ 10^9
- sourceId 길이 : 1 ~ 30
- sourceId는 영문 대소문자, 숫자로 구성
- 입력은 timestamp 오름차순으로 주어진다.

## 4. Output

실제로 처리되는 이벤트 개수를 출력한다.

## 5. Input Example

```text
10 10
1 UserA
5 UserA
8 UserB
12 UserA
18 UserB
21 UserA
25 UserA
30 UserC
35 UserB
40 UserA
```

## 6. Output Example

```text
7
```

## 7. Example Explanation

이벤트 처리 결과는 다음과 같다.

```text
1  UserA -> 처리
5  UserA -> 무시
8  UserB -> 처리
12 UserA -> 처리
18 UserB -> 처리
21 UserA -> 무시
25 UserA -> 처리
30 UserC -> 처리
35 UserB -> 처리
40 UserA -> 처리
```

실제로 처리된 이벤트는 총 7개이다.

이 문제는 해시(Hash), 자료구조(Data Structure), 시뮬레이션(Simulation) 문제이다.

## 8. Answer

```py
import sys

input = sys.stdin.readline

n, k = map(int, input().split())

last_processed = {}
processed_count = 0

for _ in range(n):
    timestamp, source_id = input().split()
    timestamp = int(timestamp)

    if source_id not in last_processed:
        processed_count += 1
        last_processed[source_id] = timestamp
    elif timestamp - last_processed[source_id] >= k:
        processed_count += 1
        last_processed[source_id] = timestamp

print(processed_count)
```
