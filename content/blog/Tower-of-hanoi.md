---
external : false
title : "Tower of hanoi"
tag : [Programmers, Python]
date : 2025-03-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12946)에서 확인하실 수 있습니다.

## 2. Problem solving process

하노이 탑 문제는 세 개의 기둥과 다양한 크기의 원판으로 구성됩니다. 목표는 한 기둥에 쌓여 있는 원판들을 다른 기둥으로 옮기는 것입니다. 이 과정에서 두 가지 중요한 규칙을 지켜야 합니다: 한 번에 하나의 원판만 옮길 수 있으며, 큰 원판이 작은 원판 위에 위치할 수 없습니다.

해결 과정은 재귀 함수를 통해 구현할 수 있습니다. 가장 큰 원판을 제외한 나머지 원판들을 보조 기둥으로 옮긴 후, 가장 큰 원판을 목표 기둥으로 옮깁니다. 그 후, 보조 기둥에 있는 나머지 원판들을 다시 목표 기둥으로 옮깁니다. 이 과정을 반복하여 모든 원판을 목표 기둥으로 옮길 수 있습니다.

## 3. Answer

```python
def solution(n):
  answer = [[]]  # 초기 리스트 설정
  
  def hanoi(n, from_pole, to_pole, aux_pole):
    if n == 1:  # 원판이 하나일 때
      answer.append([from_pole, to_pole])  # 이동 경로 추가
      return
    
    hanoi(n - 1, from_pole, aux_pole, to_pole)  # 보조 기둥으로 이동
    answer.append([from_pole, to_pole])  # 이동 경로 추가
    hanoi(n - 1, aux_pole, to_pole, from_pole)  # 목표 기둥으로 이동
    
  hanoi(n, 1, 3, 2)  # 하노이 탑 문제 시작
  
  # 첫 번째 빈 리스트 제거
  answer = answer[1:]
  
  return answer
```
