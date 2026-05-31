---
external : false
title : "Office meeting room reservation optimizer"
tag : [Python]
date : 2026-05-31
---

## 1. Problem

대기업의 사무실에서는 여러 회의실을 운영하고 있다.

각 회의는 시작 시간과 종료 시간이 정해져 있으며,
한 회의실에서는 동시에 하나의 회의만 진행할 수 있다.

사무실 관리팀은 모든 회의를 진행하기 위해
최소 몇 개의 회의실이 필요한지 계산하려고 한다.

회의 일정 정보가 주어질 때,
모든 회의를 시간 충돌 없이 진행하기 위해 필요한
최소 회의실 수를 구하시오.

## 2. Input

- 첫째 줄에 회의 개수 N이 주어진다.
- 다음 N개의 줄에는 회의 시작 시간 S와 종료 시간 E가 주어진다.

```text
S E
```

의미:

- 회의는 S 시각에 시작한다.
- 회의는 E 시각에 종료한다.
- 어떤 회의가 종료되는 시각과 다른 회의가 시작되는 시각이 같다면 같은 회의실을 사용할 수 있다.

## 3. Limit

- 1 ≤ N ≤ 200000
- 1 ≤ S < E ≤ 1000000000

## 4. Output

모든 회의를 진행하기 위해 필요한 최소 회의실 수를 출력한다.

## 5. Input Example

```text
8
1 4
2 5
3 6
4 7
5 8
10 12
11 13
12 14
```

## 6. Output Example

```text
3
```

## 7. Example Explanation

회의를 시간순으로 살펴보면 다음과 같다.

```text
회의 A : 1 ~ 4
회의 B : 2 ~ 5
회의 C : 3 ~ 6
회의 D : 4 ~ 7
회의 E : 5 ~ 8
회의 F : 10 ~ 12
회의 G : 11 ~ 13
회의 H : 12 ~ 14
```

시간 구간

```text
1 ~ 4 구간 : A
2 ~ 5 구간 : A, B
3 ~ 4 구간 : A, B, C
```

에서는 동시에 3개의 회의가 진행된다.

따라서 최소 3개의 회의실이 필요하다.

이 문제는 시작 시간이 빠른 회의부터 처리하면서
현재 사용 중인 회의실의 종료 시간을 우선순위 큐로 관리하는
그리디(Greedy) + 힙(Heap) 문제이다.

## 8. Answer

```py
import sys
import heapq

input = sys.stdin.readline

# 입력
n = int(input())

meetings = []

for _ in range(n):
    s, e = map(int, input().split())
    meetings.append((s, e))

# 시작 시간 기준 정렬
meetings.sort()

# 회의실 종료 시간 저장
rooms = []

for start, end in meetings:

    # 가장 빨리 끝나는 회의실 사용 가능
    if rooms and rooms[0] <= start:
        heapq.heappop(rooms)

    heapq.heappush(rooms, end)

print(len(rooms))
```
