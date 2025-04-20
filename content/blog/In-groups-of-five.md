---
external : false
title : "In groups of five"
tag : [Programmers, Python]
date : 2025-04-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181886)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(names):
  answer = []           # 결과를 저장할 리스트
  nameCnt = 1           # 이름의 순서를 세는 변수 (1부터 시작)
  for name in names:    # names 리스트의 각 이름에 대해 반복
    if (nameCnt % 5 == 1):   # 5명씩 나눴을 때 첫 번째 사람인지 확인
      answer.append(name)  # 해당 이름을 결과 리스트에 추가
    nameCnt = nameCnt + 1    # 이름 순서 증가
  return answer          # 결과 리스트 반환
```
