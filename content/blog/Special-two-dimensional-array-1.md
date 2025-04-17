---
external : false
title : "Special two dimensional array 1"
tag : [Programmers, Python]
date : 2025-04-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181833)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(n):
  answer = [[]]  # 결과를 저장할 2차원 리스트(첫 번째 행은 빈 리스트로 초기화)
  for i in range(n):  # i는 행(row) 인덱스
    row = []  # 새로운 행을 저장할 리스트
    for j in range(n):  # j는 열(column) 인덱스
      if i == j:  # 행과 열의 인덱스가 같으면(즉, 대각선이면)
        row.append(1)  # 1을 추가
      else:
        row.append(0)  # 아니면 0을 추가
    if i == 0:
      answer[0] = row  # 첫 번째 행은 기존의 빈 리스트에 덮어쓰기
    else:
      answer.append(row)  # 두 번째 행부터는 리스트에 추가
  return answer  # 완성된 2차원 리스트 반환
```
