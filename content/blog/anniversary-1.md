---
external : false
title  :"anniversary"
tag : [Baekjoon, Python]
date : 2026-03-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10420)에서 확인하실 수 있습니다.

## 2. Answer

```py
# datetime: 날짜와 시간을 다루기 위한 모듈
# timedelta: 날짜 간의 차이 또는 특정 일수만큼 더할 때 사용하는 클래스
from datetime import datetime, timedelta

# 기념하려는 날의 번호 입력 (N번째 날)
N = int(input())

# 시작 날짜 설정 (문제에서 기준 날짜로 사용해야 하는 날짜)
start_date = datetime(2014, 4, 2)

# N번째 날을 구하기 위해 시작 날짜에 (N-1)일을 더함
# N=1일 때 시작 날짜 자체가 되어야 하기 때문
result = start_date + timedelta(days=N-1)

# 결과 날짜를 YYYY-MM-DD 형식의 문자열로 변환하여 출력
print(result.strftime("%Y-%m-%d"))
```
