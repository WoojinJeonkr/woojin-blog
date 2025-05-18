---
external : false
title : "Sum of String Integers"
tag : [Programmers, Python]
date : 2025-04-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181849)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(num_str):
  answer = 0  # 합계를 저장할 변수
  for num in num_str:  # 문자열의 각 문자(숫자) 순회
    answer += int(num)  # 문자를 정수로 변환하여 합산
  return answer  # 최종 합계 반환
```
