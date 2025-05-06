---
external : false
title : "Prime factorization"
tag : [Programmers, Python]
date : 2025-05-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120852)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(n):
  answer = []  # 소인수를 저장할 리스트 초기화
  divisor = 2  # 나눌 수를 2로 초기화
  while divisor * divisor <= n:  # divisor 제곱이 n 이하일 동안 반복
    if n % divisor == 0:  # n이 divisor로 나누어 떨어지면
      if divisor not in answer:  # divisor가 answer에 없으면
        answer.append(divisor)  # answer에 divisor 추가
      n //= divisor  # n을 divisor로 나눈 몫으로 업데이트
    else:  # 나누어 떨어지지 않으면
      divisor += 1  # divisor를 1 증가
  if n > 1 and n not in answer:  # 반복 후 n이 1보다 크고 answer에 없으면 (남은 소수)
    answer.append(n)  # answer에 n 추가
  answer.sort()  # answer 리스트를 오름차순으로 정렬
  return answer  # 정렬된 answer 리스트 반환
```
