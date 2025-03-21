---
external : false
title : "Secret map"
tag : [Programmers, Python]
date : 2025-03-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=python3)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 두 개의 지도를 겹쳐 비밀지도를 해독하는 과정입니다.  

각각의 지도는 숫자로 암호화되어 있으며, 벽을 나타내는 1과 공백을 나타내는 0으로 구성된 이진수로 변환해 해독합니다.  

두 지도를 겹칠 때는 비트 OR 연산을 사용하며, 이는 두 값 중 하나라도 벽이라면 해당 위치를 벽으로 표시하는 방식입니다.  

OR 연산 결과로 얻어진 이진수는 지도 크기와 동일한 길이가 되도록 앞쪽에 부족한 0을 추가하여 정렬합니다. 이후, 각 이진수 값을 순회하며 1은 벽(#)으로, 0은 공백( )으로 변환합니다.  

위와 같이 각 행을 문자열로 변환하여 최종적으로 지도를 완성합니다.

## 3. Answer

```python
def solution(n, arr1, arr2):
  answer = []
  
  for i in range(n):
    # OR 연산으로 두 지도를 겹침
    binaryOr = bin(arr1[i] | arr2[i])[2:]  # 이진수로 변환 후 '0b' 제거
    
    # 길이가 n보다 짧으면 앞에 '0'을 추가
    if len(binaryOr) < n:
      binaryOr = '0' * (n - len(binaryOr)) + binaryOr
    
    # 이진수를 '#'과 ' '로 변환
    row = ""
    for char in binaryOr:
      if char == '1':
        row += '#'
      else:
        row += ' '
    
    # 변환된 행을 결과 리스트에 추가
    answer.append(row)
  
  return answer
```
