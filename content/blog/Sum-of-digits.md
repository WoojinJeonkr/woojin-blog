---
external : false
title : "Sum of digits"
tag : [Programmers, Python]
date : 2025-02-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120906)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(n):
  # 1. 숫자를 문자열로 변환 (ex. 1234 → "1234")
  num_str = str(n)
  
  # 2. 각 문자를 숫자로 변환 후 합산
  # [실행 과정 예시]
  # "1" → 1, "2" → 2 ... 전체 합 계산
  total = 0
  for char in num_str:    # 문자열 순회
    total += int(char)    # 문자 → 정수 변환 후 누적
  
  # 3. 최종 결과 반환
  return total
```
