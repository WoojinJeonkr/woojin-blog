---
external : false
title : "Spiral integer fill"
tag : [Programmers, Python]
date : 2025-05-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181832)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(n):
  # n x n 크기의 2차원 배열 초기화
  answer = [[0] * n for _ in range(n)]
  # 채울 숫자 초기화
  num = 1
  # 시작 행, 끝 행, 시작 열, 끝 열 인덱스 초기화
  row_start, row_end = 0, n - 1
  col_start, col_end = 0, n - 1

  # 시작 행이 끝 행보다 작거나 같고 시작 열이 끝 열보다 작거나 같은 동안 반복
  while row_start <= row_end and col_start <= col_end:
    # 오른쪽으로 이동하며 숫자 채우기
    for i in range(col_start, col_end + 1):
      answer[row_start][i] = num
      num += 1
    # 시작 행 증가
    row_start += 1

    # 아래로 이동하며 숫자 채우기
    for i in range(row_start, row_end + 1):
      answer[i][col_end] = num
      num += 1
    # 끝 열 감소
    col_end -= 1

    # 시작 행이 끝 행보다 작거나 같고 시작 열이 끝 열보다 작거나 같은 경우 (내부 사각형 존재)
    if row_start <= row_end and col_start <= col_end:
      # 왼쪽으로 이동하며 숫자 채우기
      for i in range(col_end, col_start - 1, -1):
        answer[row_end][i] = num
        num += 1
      # 끝 행 감소
      row_end -= 1

      # 위로 이동하며 숫자 채우기
      for i in range(row_end, row_start - 1, -1):
        answer[i][col_start] = num
        num += 1
      # 시작 열 증가
      col_start += 1

  # 완성된 2차원 배열 반환
  return answer
```
