---
external : false
title : "Triangular snail pattern"
tag : [Programmers, Python]
date : 2025-01-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/68645)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 문제 이해 시간: 6분
2. 문제 해결 시간: 16분
3. 디버깅 시간: 10분
4. 코드 시도 횟수: 2회

## 3. Problem solving process

해당 문제와 같은 삼각형 모양의 달팽이 채우기 문제는 규칙성을 파악하는 것이 중요합니다. 이미지를 보면 숫자가 채워지는 방향이 세 가지 패턴으로 반복됨을 알 수 있습니다. 먼저 위에서 아래로 내려가고, 그 다음 왼쪽에서 오른쪽으로 이동하며, 마지막으로 대각선 방향으로 위로 올라가는 패턴입니다

이러한 패턴을 구현하기 위해서는 2차원 배열을 사용하여 삼각형 모양의 공간을 만들고, 각 위치에 순차적으로 숫자를 채워나가는 방식을 사용할 수 있습니다. 시작점은 첫 번째 행의 위치로 잡고, 모듈러 연산을 활용하여 세 가지 이동 방향을 제어합니다. 이때 각 방향으로 이동하는 횟수는 점차 감소하는 특징이 있습니다

최종적으로 채워진 2차원 배열에서 0이 아닌 값들만 순서대로 1차원 배열로 변환하면 됩니다.

## 4. Answer

```python
def solution(n):
  # n x n 크기의 2차원 배열 초기화
  triangle = [[0] * n for _ in range(n)]
  # 시작 위치와 숫자 초기화
  x, y = -1, 0
  number = 1
  
  # 달팽이 모양으로 숫자 채우기
  for i in range(n):
    for j in range(i, n):
      # 아래로 이동
      if i % 3 == 0:
        x += 1
      # 오른쪽으로 이동
      elif i % 3 == 1:
        y += 1
      # 대각선 위로 이동
      else:
        x -= 1
        y -= 1
      triangle[x][y] = number
      number += 1
  
  # 2차원 배열을 1차원 배열로 변환
  answer = []
  for i in range(n):
    for j in range(n):
      if triangle[i][j] != 0:
        answer.append(triangle[i][j])
        
  return answer
```
