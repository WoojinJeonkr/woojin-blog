---
external : false
title : "Matrix border rotation"
tag : [Programmers, Python]
date : 2025-01-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/77485)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제에서 주어진 이미지들은 행렬의 회전 연산을 시각적으로 보여주고 있습니다. 첫 번째 이미지는 6x6 크기의 기본 행렬을 보여주며, 1부터 36까지의 숫자가 순차적으로 배열되어 있습니다. 각 숫자는 행과 열에 따라 순서대로 증가하는 형태로 구성되어 있습니다.

두 번째와 세 번째 이미지에서는 (2,2,5,4) 좌표로 지정된 영역의 테두리를 시계 방향으로 회전시키는 과정을 보여줍니다. 회전은 빨간색 화살표로 표시된 방향을 따라 진행되며, 회전 영역의 테두리에 있는 숫자들만 이동하고 내부의 숫자들(15, 21)은 변경되지 않습니다.

마지막 이미지는 3x3 크기의 행렬에서 여러 번의 회전 연산이 수행되는 과정을 보여줍니다. 각각의 회전은 지정된 영역의 테두리를 시계 방향으로 이동시키며, 회전할 때마다 새로운 배열이 생성됩니다. 이 과정에서 숫자들의 위치가 순차적으로 변경되는 것을 확인할 수 있습니다.

이러한 회전 연산들은 행렬의 특정 영역을 선택하여 테두리 요소들만 시계 방향으로 한 칸씩 이동시키는 것이 핵심입니다.

그러므로 각 회전마다 이동되는 숫자들 중 가장 작은 값을 찾아 최종 결과 배열에 저장하는 것이 문제의 목표입니다.

## 3. Answer

```python
def solution(rows, columns, queries):
  # 초기 행렬 생성 (1부터 순차적으로 채움)
  matrix = [[row * columns + col + 1 for col in range(columns)] for row in range(rows)]
  answer = []
  
  for x1, y1, x2, y2 in queries:
    # 인덱스를 0부터 시작하도록 변환
    x1, y1, x2, y2 = x1-1, y1-1, x2-1, y2-1
    # 첫 번째 요소를 임시 저장
    temp = matrix[x1][y1]
    min_value = temp
    
    # 왼쪽 세로 테두리 이동 (아래에서 위로)
    for i in range(x1, x2):
      matrix[i][y1] = matrix[i+1][y1]
      min_value = min(min_value, matrix[i+1][y1])
    
    # 아래쪽 가로 테두리 이동 (오른쪽에서 왼쪽으로)
    for i in range(y1, y2):
      matrix[x2][i] = matrix[x2][i+1]
      min_value = min(min_value, matrix[x2][i+1])
    
    # 오른쪽 세로 테두리 이동 (위에서 아래로)
    for i in range(x2, x1, -1):
      matrix[i][y2] = matrix[i-1][y2]
      min_value = min(min_value, matrix[i-1][y2])
    
    # 위쪽 가로 테두리 이동 (왼쪽에서 오른쪽으로)
    for i in range(y2, y1, -1):
      matrix[x1][i] = matrix[x1][i-1]
      min_value = min(min_value, matrix[x1][i-1])
    
    # 임시 저장한 값을 마지막 위치에 배치
    matrix[x1][y1+1] = temp
    # 회전된 숫자들 중 최솟값을 결과 배열에 추가
    answer.append(min_value)
    
  return answer
```
