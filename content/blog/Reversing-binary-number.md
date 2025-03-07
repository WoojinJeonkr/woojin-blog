---
external : false
title : "Reversing binary number"
tag : [Baekjoon, Python]
date : 2025-03-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11179)에서 확인하실 수 있습니다.

## 2. 관련 개념

인덱스, 슬라이싱, 2진법, 10진법, 형변환

## 3. Answer

```python
def reverse_binary(n):
  # 정수를 이진 문자열로 변환하고 '0b' 접두어 제거
  binary_str = bin(n)[2:]
  
  # 이진 문자열을 뒤집기. 
  # 슬라이싱 문법[::-1]은 문자열의 끝에서 시작하여 역순으로 요소를 반환합니다.
  reversed_binary_str = binary_str[::-1]
  
  # 뒤집힌 이진 문자열을 다시 정수로 변환
  result = int(reversed_binary_str, 2)
  
  # result 변수 반환
  return result

# 입력받은 정수
n = int(input())

# 결과 출력
print(reverse_binary(n))
```
