---
external : false
title : "Find the desired String"
tag : [Programmers, Python]
date : 2025-04-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181878)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(myString, pat):
  # 결과를 저장할 변수를 초기화합니다.
  answer = 0
  # 입력 문자열 myString을 모두 소문자로 변환
  lower_myString = myString.lower()
  # 찾을 패턴 문자열 pat을 모두 소문자로 변환
  lower_pat = pat.lower()
  # 소문자로 변환된 패턴 문자열이 소문자로 변환된 입력 문자열 안에 존재하는지 확인
  if lower_pat in lower_myString:
    # 패턴 문자열이 입력 문자열 안에 존재한다면 answer를 1로 설정
    answer = 1
  # 최종 결과 반환
  # 패턴이 존재하면 1, 존재하지 않으면 초기값 0을 반환
  return answer
```
