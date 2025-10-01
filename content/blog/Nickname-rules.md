---
external : false
title : "Nickname rules"
tag : [Programmers, Python]
date : 2025-05-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340200)에서 확인하실 수 있습니다.

## 2. Problem Point

해당 문제는 주어진 닉네임 변환 규칙을 따라 올바르게 작동하지 않는 한 줄을 찾아 수정하는 디버깅 문제입니다.  
핵심은 닉네임 길이를 4자로 맞추는 조건 if len(answer) < 3:이 while len(answer) < 4:로 잘못 작성된 부분을 고치는 것입니다. 최종 닉네임은 4자 이상 8자 이하여야 하며, 특정 문자는 사용할 수 없습니다.

## 3. Answer

```py
def solution(nickname):
  answer = ""
  # 닉네임의 각 문자를 확인하며 변환 규칙 적용
  for letter in nickname:
    if letter == "l":
      answer += "I" # 소문자 'l'을 대문자 'I'로 변경
    elif letter == "w":
      answer += "vv" # 소문자 'w'를 'vv'로 변경
    elif letter == "W":
      answer += "VV" # 대문자 'W'를 'VV'로 변경
    elif letter == "O":
      answer += "0" # 대문자 'O'를 숫자 '0'으로 변경
    else:
      answer += letter # 그 외의 문자는 그대로 사용
  
  # 수정된 닉네임의 길이가 4 미만일 경우, 'o'를 붙여 길이가 4가 될 때까지 채움
  while len(answer) < 4:
    answer += "o"
  
  # 수정된 닉네임의 길이가 8보다 클 경우, 8번째 문자까지만 사용
  if len(answer) > 8:
    answer = answer[:8]
  
  return answer
```
