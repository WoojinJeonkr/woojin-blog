---
external : false
title : "Shuttle bus"
tag : [Programmers, Python]
date : 2025-08-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17678)에서 확인하실 수 있습니다.

## 2. Answer

```py
def to_minutes(time_str):
    # "HH:MM" 문자열을 분 단위로 변환
    h, m = map(int, time_str.split(":"))
    return h * 60 + m

def to_hhmm(minutes):
    # 분 단위를 "HH:MM" 문자열로 변환
    h = minutes // 60
    m = minutes % 60
    return f"{h:02d}:{m:02d}"

def solution(n, t, m, timetable):
    # 크루 도착 시간을 분 단위로 변환 후 정렬
    crew = sorted([to_minutes(time) for time in timetable])
    # 셔틀 도착 시간 계산 (09:00 = 540분부터 시작)
    shuttles = [540 + t * i for i in range(n)]
    
    idx = 0  # 현재 탑승 대기 중인 크루 인덱스
    for i in range(n):
        shuttle_time = shuttles[i]  # 현재 셔틀 도착 시간
        cnt = 0  # 이번 셔틀에 탑승한 크루 수
        # 셔틀 도착 시간 이전에 온 크루부터 최대 m명까지 태움
        while idx < len(crew) and crew[idx] <= shuttle_time and cnt < m:
            idx += 1
            cnt += 1
        # 마지막 셔틀일 경우 콘의 도착 시각 결정
        if i == n - 1:
            if cnt < m:
                # 자리가 남아 있다면 셔틀 도착 시간에 맞춰도 됨
                return to_hhmm(shuttle_time)
            else:
                # 자리가 없다면 마지막으로 탄 크루보다 1분 빨리 와야 함
                return to_hhmm(crew[idx - 1] - 1)
```
