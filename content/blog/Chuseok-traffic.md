---
external : false
title : "Chuseok traffic"
tag : [Programmers, Python]
date : 2025-09-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17676)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(lines):
    from datetime import datetime, timedelta

    # 로그 한 줄을 시작 시간과 끝 시간으로 파싱하는 함수
    def parse_line(line):
        date_str, time_str, duration_str = line.split()
        # 종료 시간 파싱
        end_time = datetime.strptime(date_str + " " + time_str, "%Y-%m-%d %H:%M:%S.%f")
        # 처리 시간에서 's'를 제거하고 초(float)로 변환
        duration = float(duration_str[:-1])
        # 시작 시간 계산: 끝 시간 - 처리 시간 + 0.001초
        start_time = end_time - timedelta(seconds=duration) + timedelta(milliseconds=1)
        return (start_time, end_time)

    # 모든 로그를 (시작 시간, 끝 시간) 튜플로 변환
    intervals = [parse_line(line) for line in lines]

    max_count = 0  # 최대 처리량 초기화

    # 각 로그의 시작 시간과 끝 시간을 기준으로 1초 구간 생성
    for start, end in intervals:
        for t in [start, end]:
            window_start = t
            window_end = t + timedelta(seconds=1)  # 1초 후까지의 구간
            count = 0  # 현재 구간에 겹치는 로그 수

            # 모든 로그와 비교하여 겹치는지 확인
            for s, e in intervals:
                # 로그가 [window_start, window_end) 구간에 겹치는 경우
                if e >= window_start and s < window_end:
                    count += 1

            # 최대값 갱신
            max_count = max(max_count, count)

    return max_count
```
