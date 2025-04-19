---
external : false
title : "Cipher decryption"
tag : [Programmers, Python]
date : 2025-04-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120892)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(cipher, code):
  answer = '' # 결과를 저장할 빈 문자열을 초기화
  # cipher 문자열의 각 문자에 대해 반복
  for i in range(len(cipher)):
    # 현재 인덱스(i)에 1을 더한 값이 code의 배수인지 확인
    # 인덱스는 0부터 시작하므로, 실제 번째 수를 계산하기 위해 1을 더합니다.
    if (i + 1) % code == 0:
      # 조건이 참이면, 해당 번째의 문자를 결과 문자열에 추가
      answer += cipher[i]
  return answer  # 해독된 암호 문자열을 반환
```
