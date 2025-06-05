---
external : false
title : "Check social distance"
tag : [Programmers, Python]
date : 2025-06-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/81302)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(places):
  answer = []
  for place in places:
    # 모든 응시자(P) 위치 수집
    ps = []
    for i in range(5):
      for j in range(5):
        if place[i][j] == 'P':
          ps.append((i, j))
    
    valid = True  # 거리두기 준수 여부
    # 모든 응시자 쌍에 대해 거리 검사
    for i in range(len(ps)):
      if not valid:
        break
      for j in range(i + 1, len(ps)):
        p1, p2 = ps[i], ps[j]
        distance = abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])
        
        if distance > 2:
          continue  # 거리 2 초과면 검사할 필요 없음
        if distance <= 1:
          # 맨해튼 거리 1 이하는 무조건 위반
          valid = False
          break
        elif distance == 2:
          # 맨해튼 거리 2인 경우, 파티션 여부 확인 필요
          r1, c1 = p1
          r2, c2 = p2
          if r1 == r2:
            # 같은 행에 있을 때, 사이에 파티션 없으면 위반
            if place[r1][(c1 + c2) // 2] != 'X':
              valid = False
              break
          elif c1 == c2:
            # 같은 열에 있을 때, 사이에 파티션 없으면 위반
            if place[(r1 + r2) // 2][c1] != 'X':
              valid = False
              break
          else:
            # 대각선 위치, 두 곳 모두 파티션이 있어야 함
            if not (place[r1][c2] == 'X' and place[r2][c1] == 'X'):
              valid = False
              break
      if not valid:
        break
    answer.append(1 if valid else 0)
  return answer
```
