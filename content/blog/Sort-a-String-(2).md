---
external : false
title : "Sort a String (2)"
tag : [Programmers, Python]
date : 2025-04-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120911)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(my_string):
  # 입력 문자열을 소문자로 변환한 뒤 알파벳 순으로 정렬
  answer = ''.join(sorted(my_string.lower()))
  return answer  # 정렬된 문자열 반환
```
