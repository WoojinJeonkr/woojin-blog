---
external : false
title : "Park"
tag : [Programmers, Python]
date : 2025-05-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340198)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(mats, park):
  n = len(park)         # 공원의 행 개수
  m = len(park[0])      # 공원의 열 개수
  mats.sort(reverse=True)  # 돗자리 크기를 내림차순 정렬 (큰 것부터 시도)

  for size in mats:  # 각 돗자리 크기에 대해
    for i in range(n - size + 1):  # 시작 행 인덱스
      for j in range(m - size + 1):  # 시작 열 인덱스
        can_place = True  # 해당 위치에 돗자리를 놓을 수 있는지 여부
        for x in range(i, i + size):  # 돗자리 내부 행 순회
          for y in range(j, j + size):  # 돗자리 내부 열 순회
            if park[x][y] != "-1":  # 사람이 있는 칸이면
              can_place = False   # 놓을 수 없음
              break
          if not can_place:  # 이미 놓을 수 없으면 더 이상 검사하지 않음
            break
        if can_place:  # 놓을 수 있는 위치를 찾으면
          return size  # 해당 크기 반환
  return -1  # 모든 돗자리를 놓을 수 없으면 -1 반환
```
