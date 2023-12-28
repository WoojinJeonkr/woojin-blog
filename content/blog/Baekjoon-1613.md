---
external: false
title: "Baekjoon 1613"
date: 2023-11-19
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1613)

## 2. 정답 코드 (pypy3, memory: 112704KB, time: 936ms)

```pypy3
import sys

# 입력을 더 빠르게 받기 위해 사용되는 함수
input_func = sys.stdin.readline

# 이벤트의 수와 관계의 수를 입력받음
num_events, num_relations = map(int, input_func().split())

# 이벤트 간의 관계를 나타내는 이차원 리스트 초기화
event_relations = [[0] * (num_events + 1) for _ in range(num_events + 1)]

# 관계의 수만큼 반복하면서 관계 정보를 입력받아 이차원 리스트에 저장
for _ in range(num_relations):
    before, after = map(int, input_func().split())
    event_relations[before][after] = 1

# 플로이드-와샬 알고리즘을 사용하여 이벤트 간의 관계를 갱신
for intermediate_event in range(1, num_events + 1):
    for start_event in range(1, num_events + 1):
        for end_event in range(1, num_events + 1):
            if event_relations[start_event][intermediate_event] + event_relations[intermediate_event][end_event] == 2:
                event_relations[start_event][end_event] = 1

# 쿼리의 수를 입력받음
num_queries = int(input())

# 각 쿼리에 대해 결과 출력
for _ in range(num_queries):
    event1, event2 = map(int, input_func().split())
    # 이벤트1이 이벤트2보다 선행하는 경우
    if event_relations[event1][event2] == 1:
        print(-1)
    # 이벤트2가 이벤트1보다 선행하는 경우
    elif event_relations[event2][event1] == 1:
        print(1)
    # 서로 선행 관계가 아닌 경우
    else:
        print(0)
```
