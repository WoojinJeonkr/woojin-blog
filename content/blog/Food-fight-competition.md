---
external : false
title : "Food fight competition"
tag : [Programmers, Python]
date : 2024-12-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/134240)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 음식 배열을 통해 두 선수에게 공정하게 배치할 수 있는 음식을 계산합니다. 각 음식의 개수 중 나눌 수 있는 최대 개수를 계산하여 왼쪽 선수의 음식 순서를 생성합니다. 이를 위해 음식의 종류를 나타내는 숫자를 필요한 만큼 반복하여 문자열에 추가합니다.

이후 중앙에는 물(0번 음식)을 배치하고, 오른쪽 선수의 음식은 왼쪽 선수의 음식을 뒤집은 형태로 구성합니다.

최종적으로 이 세 요소(왼쪽 선수 음식, 물, 오른쪽 선수 음식)를 결합하여 대회의 음식 배치 문자열을 생성합니다.

## 3. Answer

```python
def solution(food):
  # 왼쪽 선수가 먹을 음식 순서 생성
  left_player = ''
  for i in range(1, len(food)):
    left_player += str(i) * (food[i] // 2)

  # 중앙에 물 추가
  water = '0'

  # 오른쪽 선수는 왼쪽 선수의 순서를 뒤집은 것
  right_player = left_player[::-1]

  # 최종 음식 배치 문자열 생성
  answer = left_player + water + right_player
  return answer
```
