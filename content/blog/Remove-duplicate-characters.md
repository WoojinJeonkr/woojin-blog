---
external : false
title : "Remove duplicate characters"
tag : [Programmers, Python]
date : 2025-04-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120888)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(my_string):
  used_chars = set()  # 이미 등장한 문자를 저장할 집합
  answer = ''  # 결과 문자열을 저장할 변수
  for char in my_string:  # 주어진 문자열을 한 글자씩 순회
    if char not in used_chars:  # 해당 문자가 아직 등장하지 않았다면
      used_chars.add(char)  # 집합에 문자 추가 (등장한 것으로 표시)
      answer += char  # 결과 문자열에 문자 추가
  return answer  # 중복을 제거한 최종 문자열 반환
```
