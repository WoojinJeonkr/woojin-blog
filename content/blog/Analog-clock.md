---
external : false
title : "Analog clock"
tag: [Programmers, Python]
date: 2025-03-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250135)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 시계의 구조와 각 침의 움직임을 이해해야 합니다.  

시침은 12시간에 한 바퀴(360도)를 돌며, 초당 약 1/120도씩 움직입니다. 분침은 60분에 한 바퀴를 돌며 초당 0.1도씩 움직이고, 초침은 60초에 한 바퀴를 돌며 초당 6도씩 움직입니다.  

알람이 울리는 조건은 특정 시간 동안 초침이 시침 또는 분침과 겹치는 순간이며, 같은 순간에 초침이 시침과 분침 모두와 겹치면 알람은 한 번만 울립니다.  

문제 해결을 위해 주어진 시작 시간과 종료 시간을 초 단위로 변환한 뒤, 각 초마다 시침, 분침, 초침의 각도를 계산합니다. 이를 통해 겹치는 순간을 확인하고 알람 횟수를 카운트합니다. 겹치는 조건은 두 각도가 같거나 차이가 360도가 되는 경우로 정의됩니다. 또한 중복된 알람을 방지하기 위해 같은 순간에 두 번 이상 겹칠 경우 한 번만 카운트합니다.

## 3. Answer

```python
def solution(h1, m1, s1, h2, m2, s2):
  answer = 0
  
  # 초로 모두 환산
  start_time = h1 * 3600 + m1 * 60 + s1
  end_time = h2 * 3600 + m2 * 60 + s2
  
  # 시작 지점에 겹쳐있는 경우 카운트
  if start_time == 0 or start_time == 12 * 3600:
    answer += 1
      
  while start_time < end_time:
    # 시침 12시간에 360도 -> 1시간에 30도 -> 1초에 30/3600도 (1/120도)
    # 분침 60분에 360도 -> 1초에 360/3600도 (0.1도)
    # 초침 60초에 360도 -> 1초에 6도
    h = start_time / 120 % 360
    m = start_time / 10 % 360
    s = start_time * 6 % 360

    # 다음 초의 각도를 계산하여 겹치는지 확인
    n_h = (start_time + 1) / 120 % 360
    n_m = (start_time + 1) / 10 % 360
    n_s = (start_time + 1) * 6 % 360

    # 각도가 다시 돌아가서 겹치는 경우를 처리
    n_h = n_h if n_h != 0 else 360
    n_m = n_m if n_m != 0 else 360
    n_s = n_s if n_s != 0 else 360
    
    # 알람 체크
    if s < h and n_h <= n_s:
      answer += 1
    if s < m and n_m <= n_s:
      answer += 1
    # 중복된 경우 알람을 한 번만 울리도록 처리
    if n_s == n_m and n_s == n_h:
      answer -= 1
    
    start_time += 1
  
  return answer
```
