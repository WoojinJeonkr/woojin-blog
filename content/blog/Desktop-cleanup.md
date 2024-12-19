---
external : false
title : "Desktop cleanup"
tag : [Programmers, Python]
date : 2024-12-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/161990)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 바탕화면에 있는 모든 파일을 한 번의 드래그로 선택하기 위한 최적의 드래그 영역을 찾는 것이 핵심입니다. 최적의 드래그 영역을 찾기 위해서는 바탕화면에 있는 모든 파일들의 위치를 고려해야 합니다. 각 파일의 위치 정보를 활용하여 가장 위쪽, 왼쪽, 아래쪽, 오른쪽에 있는 파일들의 좌표를 찾아내면, 이 좌표들로 만들어지는 직사각형이 바로 우리가 찾는 최소한의 드래그 영역이 됩니다.

이때 중요한 점은 드래그의 시작점은 가장 위쪽과 가장 왼쪽에 있는 파일들의 좌표를 사용하고, 드래그의 끝점은 가장 아래쪽과 가장 오른쪽에 있는 파일들의 좌표에 1을 더한 값을 사용해야 한다는 것입니다. 끝점 좌표에 1을 더하는 이유는 드래그 영역이 파일을 완전히 포함해야 하기 때문입니다. 예를 들어 3번 행에 있는 파일을 선택하려면 드래그의 끝점은 4번 행까지 가야 파일이 선택됩니다. 이러한 방식으로 모든 파일을 포함하는 가장 작은 크기의 직사각형 영역을 찾아 드래그의 시작점과 끝점 좌표를 구할 수 있습니다.

## 3. Answer

```python
def solution(wallpaper):
  answer = []

  # 파일들의 위치를 저장할 변수 초기화
  min_x = float('inf')  # 가장 위쪽 파일의 위치 
  min_y = float('inf')  # 가장 왼쪽 파일의 위치
  max_x = float('-inf') # 가장 아래쪽 파일의 위치
  max_y = float('-inf') # 가장 오른쪽 파일의 위치
 
  # 바탕화면의 모든 위치를 확인
  for i in range(len(wallpaper)):
    for j in range(len(wallpaper[0])):
      if wallpaper[i][j] == '#':
        # 파일이 있는 위치를 기준으로 드래그 영역의 시작점과 끝점 계산
        min_x = min(min_x, i)
        min_y = min(min_y, j) 
        max_x = max(max_x, i + 1)
        max_y = max(max_y, j + 1)
 
  # 드래그 시작점(min_x,min_y)과 끝점(max_x,max_y) 반환
  answer = [min_x, min_y, max_x, max_y]
  return answer
```
