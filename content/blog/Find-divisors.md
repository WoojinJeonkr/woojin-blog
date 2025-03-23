---
external : false
title : "Find divisors"
tag : [Programmers, Python]
date : 2025-03-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120897)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(n):
  # n의 약수를 저장할 빈 리스트
  answer = []

  # 1부터 n까지 반복하여 n의 약수를 찾음
  for i in range(1, n + 1):
    # i가 n의 약수인지 확인
    if n % i == 0:
      # i가 약수라면 answer 리스트에 추가
      answer.append(i)

  # 약수를 담은 리스트 반환
  return answer
```
