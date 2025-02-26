---
external : false
title : "Personal data retention period"
tag : [Programmers, Python]
date : 2025-02-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/150370)에서 확인하실 수 있습니다.

## 2. Problem solving process

먼저, 오늘 날짜를 기준으로 하여 각 개인정보의 유효기간이 지났는지 판단합니다. 이를 위해 오늘 날짜를 datetime 객체로 변환하여 비교할 수 있는 형태로 만드는 것이 중요합니다.

다음으로, 각 약관의 유효기간을 딕셔너리로 저장하여 쉽게 조회할 수 있도록 합니다. 이 딕셔너리는 약관 종류를 키로, 유효기간을 값으로 저장합니다. 이를 통해 각 개인정보가 어떤 약관에 의해 수집되었는지에 따라 유효기간을 빠르게 계산할 수 있습니다.

각 개인정보의 유효기간을 계산할 때는 수집된 날짜와 약관의 유효기간을 고려하여 만료일을 결정합니다. 만약 유효기간이 달 단위로 주어지면, 월이 넘어가는 경우를 고려하여 년도와 월을 조정해야 합니다. 예를 들어, 12달 이상의 유효기간이 주어지면 년도가 증가하고, 월은 1월부터 다시 시작됩니다.

마지막으로, 계산된 만료일과 오늘 날짜를 비교하여 유효기간이 지났다면 해당 개인정보의 번호를 저장합니다.

## 3. Answer

```python
from datetime import datetime

def solution(today, terms, privacies):
  # 오늘 날짜를 datetime 객체로 변환
  today_date = datetime.strptime(today, "%Y.%m.%d")
  
  # 약관 종류와 유효기간을 딕셔너리로 저장
  term_dict = {}
  for term in terms:
    term_type, duration = term.split()
    term_dict[term_type] = int(duration)
  
  # 파기해야 할 개인정보 번호를 저장할 리스트
  answer = []
  
  # 각 개인정보에 대해 유효기간 계산
  for i, privacy in enumerate(privacies, start=1):
    date_str, term_type = privacy.split()
    # 개인정보 수집 날짜를 datetime 객체로 변환
    privacy_date = datetime.strptime(date_str, "%Y.%m.%d")
    
    # 유효기간 만료일 계산
    duration = term_dict[term_type]
    months = duration % 12
    years = duration // 12
    
    # 만료일 계산 시 년도가 넘어가는 경우 처리
    if privacy_date.month + months > 12:
      years += 1
      months -= 12
    
    # 유효기간 만료일을 datetime 객체로 변환
    expiration_date = datetime(privacy_date.year + years, privacy_date.month + months, privacy_date.day)
    
    # 만약 유효기간이 지났다면 파기해야 함
    if expiration_date <= today_date:
      answer.append(i)
  
  return answer
```
