---
external : false
title : "Good times"
tag : [Baekjoon, Python]
date : 2026-03-11
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6812)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 오타와 기준 시간을 입력받음 (HHMM 형태의 정수)
t = int(input())

# 입력받은 시간을 시(hour)와 분(minute)으로 분리
h = t // 100
m = t % 100

# 계산을 쉽게 하기 위해 전체 시간을 분 단위로 변환
base = h * 60 + m

# 각 도시와 오타와 기준 시차(분 단위)를 리스트로 정의
cities = [
    ("Ottawa", 0),          # 오타와 (기준 시간)
    ("Victoria", -180),     # 빅토리아 (오타와보다 3시간 느림)
    ("Edmonton", -120),     # 에드먼턴 (오타와보다 2시간 느림)
    ("Winnipeg", -60),      # 위니펙 (오타와보다 1시간 느림)
    ("Toronto", 0),         # 토론토 (오타와와 동일)
    ("Halifax", 60),        # 핼리팩스 (오타와보다 1시간 빠름)
    ("St. John's", 90)      # 세인트존스 (오타와보다 1시간 30분 빠름)
]

# 각 도시별로 시간을 계산
for name, offset in cities:

    # 기준 시간에 도시 시차를 더하고 하루(1440분)를 기준으로 보정
    total = (base + offset) % (24 * 60)

    # 계산된 총 분을 다시 시와 분으로 변환
    hh = total // 60
    mm = total % 60

    # HHMM 형식으로 변환하여 도시 이름과 함께 출력
    print(f"{hh*100+mm} in {name}")
```
