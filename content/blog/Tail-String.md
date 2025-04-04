---
external : false
title : "Tail String"
tag : [Programmers, Python]
date : 2025-04-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181841)에서 확인하실 수 있습니다.

## 2. Problem solving process

반복문을 돌며 ex가 포함한 단어는 answer 변수에 붙이지 않고 포함되지 않은 단어만을 answer 변수에 붙여서 반환하면 된다.

## 3. Answer

```py
def solution(str_list, ex):
  answer = ''  # 결과를 저장할 빈 문자열 초기화
  for word in str_list:  # str_list의 각 단어를 순회
    if ex not in word:  # 현재 단어에 ex가 포함되어 있지 않으면
      answer += word  # 해당 단어를 결과 문자열에 추가
  return answer  # 최종 결과 문자열 반환
```
