---
external : false
title : "Three delimiters"
tag : [Programmers, Python]
date : 2025-04-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181862)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(myStr):
  # 결과를 저장할 리스트 준비비
  answer = []

  # 나눌 문자열을 임시로 저장할 변수
  temp = ""

  # 문자열을 한 글자씩 확인
  for char in myStr:
    # 만약 현재 글자가 'a', 'b', 'c' 중 하나라면
    if char in ['a', 'b', 'c']:
      # 지금까지 모은 문자열이 있다면 결과 리스트에 추가
      if temp != "":
        answer.append(temp)
        temp = ""  # temp를 다시 빈 문자열로 초기화
    else:
      # 'a', 'b', 'c'가 아니면 temp에 추가
      temp += char

  # 반복이 끝난 후 temp에 남아있는 문자열이 있다면 추가
  if temp != "":
    answer.append(temp)

  # 만약 결과 리스트가 비어 있다면 ["EMPTY"]를 반환
  if not answer:
    return ["EMPTY"]
  else:
    return answer
```
