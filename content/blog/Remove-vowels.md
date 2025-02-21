---
external : false
title : "Remove vowels"
tag : [Programmers, Python]
date : 2025-02-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120849)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 2분
2. 해결 시간: 3분
3. 시도 횟수: 1회

## 3. Problem solving process

문제를 해결하기 위해 문자열의 각 문자를 하나씩 확인하면서, 해당 문자가 모음인지 여부를 판단합니다. 영어의 모음은 'a', 'e', 'i', 'o', 'u'로 정의되며, 이 문자열에 포함된 문자가 모음인지 확인합니다. 만약 문자가 모음이 아니라면, 결과 문자열에 추가합니다.

이 과정을 문자열의 모든 문자에 대해 반복하면, 모음을 제거한 최종 문자열을 얻을 수 있습니다.

## 4. Answer

```python
def solution(my_string):
  # 모음 목록을 정의합니다
  vowels = 'aeiou'
  # 결과 문자열을 초기화합니다
  answer = ''
  
  # 입력 문자열의 각 문자를 순회합니다
  for char in my_string:
    # 문자가 모음이 아니면 결과 문자열에 추가합니다
    if char not in vowels:
      answer += char
  
  # 모음을 제거한 문자열을 반환합니다
  return answer
```
