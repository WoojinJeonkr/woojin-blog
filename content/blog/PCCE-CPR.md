---
external : false
title : "PCCE CPR"
tag : [Programmers, Python]
date : 2025-06-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340203)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(cpr):
  answer = []
  basic_order = ["check", "call", "pressure", "respiration", "repeat"]
  # cpr 리스트의 각 행동에 대해 반복합니다.
  for action in cpr:
    # basic_order 리스트의 인덱스를 반복합니다.
    for i in range(len(basic_order)):
      # 현재 행동이 basic_order의 행동과 일치하면
      if action == basic_order[i]:
        # 1-기반 순서(단계 번호)를 answer 리스트에 추가합니다.
        answer.append(i + 1)
  return answer
```
