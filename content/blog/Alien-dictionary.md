---
external : false
title : "Alien dictionary"
tag : [Programmers, Python]
date : 2025-04-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120869)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(spell, dic):
  answer = 0  # 결과를 저장할 변수 초기화
  spell_set = set(spell)  # spell의 철자들을 중복 없이 집합으로 저장
  for word in dic:  # dic의 각 단어에 대해 반복
    # 단어 철자 집합이 spell 철자 집합과 같고 길이도 같으면
    if set(word) == spell_set and len(word) == len(spell):
      answer = 1  # 결과를 1로 설정
      return answer  # 1 반환하고 함수 종료
  answer = 2  # 일치하는 단어가 없으면 결과를 2로 설정
  return answer  # 최종 결과 반환
```
