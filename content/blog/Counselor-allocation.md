---
external : false
title : "Counselor allocation"
tag : [Programmers, Python]
date : 2025-09-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/214288?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
import heapq
from itertools import product

def solution(k, n, reqs):
    # 상담 유형별로 참가자 요청을 나눠 저장할 리스트 (1번~k번 유형)
    type_reqs = [[] for _ in range(k + 1)]
    for a, b, c in reqs:
        type_reqs[c].append((a, b))

    # 주어진 멘토 배정에 대해 대기 시간 총합을 계산하는 함수
    def simulate(mentors):
        total_wait = 0
        for type_idx in range(1, k + 1):
            requests = type_reqs[type_idx]
            if not requests:
                continue

            # 멘토 별 상담 종료 시간을 저장하는 최소 힙 (초기값은 0)
            pq = [0] * mentors[type_idx]
            heapq.heapify(pq)

            for start, duration in requests:
                available = heapq.heappop(pq)  # 가장 빨리 가능한 멘토
                if available <= start:
                    # 즉시 상담 가능
                    heapq.heappush(pq, start + duration)
                else:
                    # 기다려야 하는 경우
                    total_wait += (available - start)
                    heapq.heappush(pq, available + duration)

        return total_wait

    min_wait = float('inf')
    extra = n - k  # 각 유형에 1명은 반드시 배정해야 하므로 남은 멘토 수

    # 남은 멘토(extra)를 k개의 유형에 분배하는 모든 조합 생성
    for alloc in product(range(extra + 1), repeat=k):
        if sum(alloc) == extra:
            # 각 유형에 최소 1명씩 더해서 최종 멘토 배정 배열 생성
            mentors = [0] + [a + 1 for a in alloc]  # mentors[1] ~ mentors[k]
            wait = simulate(mentors)
            min_wait = min(min_wait, wait)

    return min_wait
```
