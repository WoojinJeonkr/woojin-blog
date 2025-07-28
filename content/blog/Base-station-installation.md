---
external : false
title : "Base station installation"
tag : [Programmers, Python]
date : 2025-07-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12979)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

def solution(n, stations, w):
    answer = 0
    
    current_apt = 1  # 현재 전파를 확인해야 할 아파트 번호
    
    for station in stations:
        # 기존 기지국(station)의 커버 범위 시작점
        cover_start = station - w
        
        # current_apt 부터 cover_start 이전까지가 전파가 닿지 않는 구간
        if current_apt < cover_start:
            # 전파가 닿지 않는 아파트의 개수
            uncovered_length = cover_start - current_apt
            
            # 필요한 기지국 개수 계산
            # (2 * w + 1)이 5G 기지국 하나의 커버 범위
            answer += math.ceil(uncovered_length / (2 * w + 1))
        
        # 현재 기지국의 커버 범위 끝 다음 아파트로 current_apt 업데이트
        current_apt = station + w + 1
        
    # 마지막 기지국 이후부터 N까지 전파가 닿지 않는 구간 처리
    if current_apt <= n:
        uncovered_length = n - current_apt + 1
        answer += math.ceil(uncovered_length / (2 * w + 1))
        
    return answer
```
