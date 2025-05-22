---
external : false
title : "Department classification"
tag : [Programmers, Python]
date : 2025-05-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340204?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
code = input()
last_four_words = code[-4:]  # 코드의 마지막 4글자를 추출

if last_four_words == "_eye":
  print("Ophthalmologyc")    # 안과
elif last_four_words == "head":
  print("Neurosurgery")      # 신경외과
elif last_four_words == "infl":
  print("Orthopedics")       # 정형외과
elif last_four_words == "skin":
  print("Dermatology")       # 피부과
else:
  print("direct recommendation")  # 직접 추천
```
