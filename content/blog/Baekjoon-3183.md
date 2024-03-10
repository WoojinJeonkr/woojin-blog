---
external: false
title: "Baekjoon 3183"
tag: [Baekjoon, Python]
date : 2024-01-14
---

## 1. Problem

해당 문제는 여기에서 확인 가능합니다.

## 2. Approach

이 문제의 목적은 입력으로 주어진 날짜의 유효성을 판단하는 것입니다. 이를 위해 다음과 같은 조건을 고려하여 날짜의 유효성을 검사해야 합니다.

1. 월은 1에서 12 사이여야 합니다.
2. 일은 각 월에 해당하는 날짜 범위 내에 있어야 합니다.
3. 윤년을 고려하여 2월의 일 수를 결정합니다.

이러한 조건을 만족하면 주어진 날짜에 대해 "Valid"를 출력하고, 만족하지 않으면 "Invalid"를 출력해야 합니다.

## 3. Solve (memory: 31120KB, time: 44ms)

접근 방식을 기반으로 작성한 코드는 다음과 같습니다.

```python
def is_leap_year(year):
  # 윤년인지 여부를 판단하는 함수
  return year % 400 == 0 or (year % 100 != 0 and year % 4 == 0)

def is_valid_date(day, month, year):
  # 각 월의 일 수를 저장한 리스트
  days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
  # 월과 일의 범위가 유효한지 검사하고, 윤년인 경우 2월의 일 수를 조정
  return 1 <= month <= 12 and 1 <= day <= days_in_month[month - 1] + (is_leap_year(year) if month == 2 else 0)

while True:
  # 날짜를 입력받음
  day, month, year = map(int, input().split())
  
  # 입력이 0 0 0일 경우 루프 종료
  if day == 0 and month == 0 and year == 0:
    break
  
  # 날짜의 유효성을 판단하고 결과 출력
  print("Valid" if is_valid_date(day, month, year) else "Invalid")
```
