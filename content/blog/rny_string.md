---
external : false
title : "rny_string"
tag : [Programmers, Python]
date : 2025-03-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181863)에서 확인하실 수 있습니다.

## 2. replace

```python
기존 문자열.replace(변환되는 문자, 변환할 문자)
```

위와 같은 형태로 작성한다.

## 3. Answer

```python
def solution(rny_string):
  # 결과를 저장할 변수 정의
  answer = ''
  
  # 입력 문자열에서 'm'을 'rn'으로 대체
  answer = rny_string.replace('m', "rn")
  
  # 변환된 문자열 반환
  return answer
```
