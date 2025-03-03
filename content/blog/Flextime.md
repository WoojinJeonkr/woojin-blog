---
external : false
title : "Flextime"
tag : [Programmers, Python]
date : 2025-03-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/388351)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서 직원들의 주간 출근 기록을 분석하여 상품 수령 대상자를 판단해야 합니다. 핵심은 평일 출근 시간 준수 여부입니다.
이를 위해 모든 직원의 출근 기록을 요일별로 분류하고, 평일에 해당하는 날짜만 추출하여 기준 시간 내 출근 여부를 검증합니다.

문제를 해결하기 위해 HHMM 형식의 시간을 분 단위로 변환하여 비교 연산을 단순화합니다. 예를 들어, 9:58은 598분, 10:08은 608분으로 처리됩니다. 이벤트 시작 요일(startday)을 기준으로 7일간의 요일을 계산하고, (시작 요일 - 1 + j) % 7 공식으로 각 일자별 실제 요일을 도출합니다. 계산된 요일이 0~4(월~금) 범위인 경우만 평일로 간주합니다.

각 직원의 희망 출근 시각에 10분을 더한 시간을 마감 시간으로 설정하고, 평일에 해당하는 날짜의 실제 출근 시간이 마감 시간을 초과하면 자동 탈락 처리합니다. 단 한 번이라도 기준을 위반하면 해당 직원은 상품 수령 대상에서 제외됩니다. 모든 평일 출근 기록이 기준을 만족한 직원에게만 상품 수령 자격을 부여합니다.

## 3. Answer

```python
def solution(schedules, timelogs, startday):
  answer = 0
  n = len(schedules)
  
  for i in range(n):
    # 현재 직원의 출근 희망 시각 계산 (분 단위)
    schedule = schedules[i]
    h = schedule // 100  # 시간 추출
    m = schedule % 100   # 분 추출
    schedule_time = h * 60 + m  # 분 단위로 변환
    deadline = schedule_time + 10  # 지각 여부 기준 시간
    
    valid = True  # 현재 직원의 유효성 플래그
    
    # 7일간의 출근 기록 검사
    for j in range(7):
      # 현재 요일 계산 (0:월, 1:화, ..., 4:금, 5:토, 6:일)
      weekday = (startday - 1 + j) % 7
      
      # 주말(토/일)은 검사 제외
      if weekday >= 5:
        continue
      
      # 현재 날짜의 출근 기록 확인
      log = timelogs[i][j]
      h_log = log // 100  # 출근 시간 추출
      m_log = log % 100   # 출근 분 추출
      log_time = h_log * 60 + m_log  # 분 단위로 변환
      
      # 지각 여부 판정 (기준 시간 초과 시 실패)
      if log_time > deadline:
        valid = False
        break  # 더 이상 검사 필요 없음
    
    # 모든 평일 출근 조건 충족 시 카운트 증가
    if valid:
      answer += 1
  
  return answer
```
