---
external : false
title : "Control Z"
tag : [Programmers, Python]
date : 2025-05-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120853)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(s):
  # 스택 초기화: 숫자를 저장할 리스트
  stack = []
  
  # 문자열을 공백 기준으로 분할하여 각 요소 처리
  for item in s.split():
    # 현재 요소가 'Z'인 경우
    if item == "Z":
      # 스택이 비어있지 않으면 마지막 요소 제거
      if len(stack) > 0:
        stack.pop()
    # 숫자 처리
    else:
      # 정수로 변환 후 스택에 추가
      stack.append(int(item))
  
  # 최종 결과 계산
  if len(stack) > 0:
    return sum(stack)
  else:
    return 0
```
