---
external : false
title : "Hate English"
tag : [Programmers, Python]
date : 2025-05-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120894)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(numbers):
  # 영단어-숫자 매핑
  word_to_num = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
  }
  
  result = ""  # 결과 저장
  i = 0  # 문자열 인덱스
  
  while i < len(numbers):
    # 현재 위치에서 단어 매칭 확인
    for word, num in word_to_num.items():
      if numbers[i:i+len(word)] == word:
        result += num
        i += len(word)
        break  # 매칭 시 즉시 break
  
  return int(result)  # 정수 변환 반환
```
