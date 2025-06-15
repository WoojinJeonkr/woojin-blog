---
external : false
title : "PCCE Humidifier"
tag : [Programmers, Python]
date : 2025-06-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250127)에서 확인하실 수 있습니다.

## 2. Answer

```py
def func1(humidity, val_set):
  # target 모드: 현재 습도가 설정값 미만이면 3, 아니면 1 반환
  if humidity < val_set:
    return 3
  return 1

def func2(humidity):
  # auto 모드: 현재 습도 구간에 따라 단계 반환
  if humidity >= 50:
    return 0
  elif humidity >= 40:
    return 1
  elif humidity >= 30:
    return 2
  elif humidity >= 20:
    return 3
  elif humidity >= 10:
    return 4
  else:
    return 5

def func3(humidity, val_set):
  # minimum 모드: 현재 습도가 설정값 미만이면 1, 아니면 0 반환
  if humidity < val_set:
    return 1
  return 0

def solution(mode_type, humidity, val_set):
  answer = 0
  # 모드에 따라 알맞은 함수 호출
  if mode_type == "auto":
    answer = func2(humidity)
  elif mode_type == "target":
    answer = func1(humidity, val_set)
  elif mode_type == "minimum":
    answer = func3(humidity, val_set)
  return answer
```
