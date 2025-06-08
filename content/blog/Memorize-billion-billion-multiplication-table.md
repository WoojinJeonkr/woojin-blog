---
external: false
title : "Memorize billion billion multiplication table"
tag : [Programmers, Python]
date : 2025-06-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/138475?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(e, starts):
  # 약수 개수를 저장하는 리스트 초기화
  divisor_counts = [0] * (e + 1)

  # 1부터 e까지 각 수의 약수 개수를 계산
  for i in range(1, e + 1):
    for j in range(i, e + 1, i):
      divisor_counts[j] += 1

  # 각 위치에서부터 e까지 약수 개수가 가장 많은 수를 저장하는 리스트 초기화
  max_num = [0] * (e + 1)
  max_num[e] = e

  # 뒤에서부터 최대 약수 개수를 가진 수를 찾아 기록
  for i in range(e - 1, 0, -1):
    if divisor_counts[i] >= divisor_counts[max_num[i + 1]]:
      max_num[i] = i
    else:
      max_num[i] = max_num[i + 1]

  # starts 리스트의 각 값에 대해 정답을 찾아 저장
  answer = []
  for s in starts:
    answer.append(max_num[s])

  return answer
```
