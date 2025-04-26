---
external : false
title : "Folding banknotes"
tag : [Programmers, Python]
date : 2025-04-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340199)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(wallet, bill):
  answer = 0
  
  # 지갑과 지폐 크기를 정렬하여 작은 값과 큰 값으로 구분
  wallet_small, wallet_large = sorted(wallet)
  bill_small, bill_large = sorted(bill)
  
  # 지폐가 지갑에 들어갈 수 있을 때까지 반복
  while bill_small > wallet_small or bill_large > wallet_large:
    # 항상 더 긴 쪽을 접습니다
    if bill_large >= bill_small:
      bill_large //= 2  # 정수 나눗셈으로 소수점 버림
    else:
      bill_small //= 2
        
    # 접은 후 다시 정렬 (작은 값, 큰 값 순서 유지)
    bill_small, bill_large = sorted([bill_small, bill_large])
    
    # 접은 횟수 증가
  answer += 1
  
  return answer
```
