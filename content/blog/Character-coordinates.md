---
external : false
title : "Character coordinates"
tag : [Programmers, Python]
date : 2025-05-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120861)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(keyinput, board):
  answer = [0, 0]  # 결과 좌표 초기화
  x_max = board[0] // 2  # x축 최대 이동 범위
  y_max = board[1] // 2  # y축 최대 이동 범위
  x, y = 0, 0  # 현재 좌표 초기화
  for key in keyinput:  # 입력된 키 순회
    if key == "up":  # 위쪽 키 입력
      if y < y_max:  # y축 최대 범위 확인
        y += 1  # y 좌표 증가
    elif key == "down":  # 아래쪽 키 입력
      if y > -y_max:  # y축 최소 범위 확인
        y -= 1  # y 좌표 감소
    elif key == "left":  # 왼쪽 키 입력
      if x > -x_max:  # x축 최소 범위 확인
        x -= 1  # x 좌표 감소
    elif key == "right":  # 오른쪽 키 입력
      if x < x_max:  # x축 최대 범위 확인
        x += 1  # x 좌표 증가
  answer[0] = x  # 결과 x 좌표 할당
  answer[1] = y  # 결과 y 좌표 할당
  return answer  # 최종 결과 반환
```
