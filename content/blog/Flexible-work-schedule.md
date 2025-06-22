---
external : false
title : "Flexible work schedule"
tag : [Programmers, Python]
date : 2025-06-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/388351)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(schedules, timelogs, startday):
  answer = 0
  n = len(schedules) # 직원 수

  # 시간을 정수 형태로 표현했을 때(예: 958은 9시 58분) 10분을 더하는 헬퍼 함수
  def add_10_minutes(time_int):
    hours = time_int // 100 # 시 부분 추출
    minutes = time_int % 100 # 분 부분 추출

    total_minutes = hours * 60 + minutes # 총 분으로 변환
    total_minutes += 10 # 10분 추가

    new_hours = total_minutes // 60 # 다시 시로 변환
    new_minutes = total_minutes % 60 # 다시 분으로 변환
    
    return new_hours * 100 + new_minutes # 정수 형태로 반환

  # 각 직원에 대해 상품을 받을 수 있는지 확인
  for i in range(n):
    hope_time = schedules[i] # 직원의 출근 희망 시각
    deadline_time = add_10_minutes(hope_time) # 출근 인정 마감 시각 계산 (희망 시각 + 10분)
    
    is_winner = True # 이 직원이 상품을 받을 자격이 있는지 나타내는 플래그
    
    # 일주일(7일) 동안의 출근 기록을 확인
    for j in range(7):
      current_log_time = timelogs[i][j] # 현재 요일의 실제 출근 시각
      
      # 현재 요일을 계산 (1:월요일, ..., 7:일요일)
      # startday는 1부터 시작, j는 0부터 시작
      current_day_of_week = (startday - 1 + j) % 7 + 1 
      
      # 토요일(6) 또는 일요일(7)은 이벤트에 영향을 주지 않으므로 건너뛰기
      if current_day_of_week == 6 or current_day_of_week == 7:
        continue
      
      # 평일인 경우 지각 여부 확인
      if current_log_time > deadline_time:
        is_winner = False # 지각했으므로 상품을 받을 수 없음
        break # 이 직원의 남은 요일을 더 이상 확인할 필요가 없음 (이미 탈락)
    
    # 모든 평일에 지각하지 않았다면, 상품을 받을 직원 수 증가
    if is_winner:
      answer += 1
            
  return answer # 상품을 받을 총 직원 수 반환
```
