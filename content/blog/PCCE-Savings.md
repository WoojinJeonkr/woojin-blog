---
external : false
title : "PCCE Savings"
tag : [Programmers, Python]
date : 2025-06-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250130)에서 확인하실 수 있습니다.

## 2. Answer

```python
start = int(input())
before = int(input())
after = int(input())

money = start
month = 1

# money가 70 미만일 동안은 'before' 금액만큼 저축
while money < 70:
  money += before
  month += 1

# money가 100 미만일 동안은 'after' 금액만큼 저축
while money < 100:
  money += after
  month += 1

print(month)
```
