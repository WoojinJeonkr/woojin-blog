---
external : false
title : "Angle addition"
tag : [Programmers, Python]
date : 2025-06-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340206)에서 확인하실 수 있습니다.

## 2. Answer

```python
angle1 = int(input())  # 첫 번째 각도 입력
angle2 = int(input())  # 두 번째 각도 입력

sum_angle = angle1 + angle2  # 두 각도를 더함
print(sum_angle % 360)  # 360으로 나눈 나머지를 출력하여 0 이상 360 미만의 각도로 변환
```
