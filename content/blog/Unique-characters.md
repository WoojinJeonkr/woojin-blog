---
external : false
title : "Unique characters"
tag : [Programmers, Python]
date : 2025-07-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120896)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(s):
  char_counts = {} # 문자의 빈도수를 저장할 딕셔너리
  
  # 1. 문자 빈도수 계산
  for char in s:
    if char in char_counts:
      char_counts[char] += 1
    else:
      char_counts[char] = 1
          
  # 2. 한 번만 등장하는 문자 필터링
  unique_chars = []
  for char, count in char_counts.items():
    if count == 1:
      unique_chars.append(char)
          
  # 3. 사전순 정렬
  unique_chars.sort()
  
  # 4. 문자열로 변환하여 반환
  answer = "".join(unique_chars)
  
  return answer
```
