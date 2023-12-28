---
external: false
title: "Baekjoon 14647"
date: 2023-12-13
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/14647)

## 2. 정답 코드 (python3, memory: 38184KB, time: 320ms)

```python
def func(num):
  cnt = 0
  while num:
    if num % 10 == 9:
      cnt += 1
    num //= 10
  return cnt

def main():
  global max_val
  max_val = 0
  global sum_val
  sum_val = 0
  n, m = map(int, input().split())
  arr = [[0] * m for _ in range(n)]  # n x m 크기의 빙고판 배열 생성
  row = [0] * n  # 각 행의 9의 개수를 저장할 배열
  col = [0] * m  # 각 열의 9의 개수를 저장할 배열

  for i in range(n):
    arr[i] = list(map(int, input().split()))  # 빙고판의 각 행의 숫자 입력
    for j in range(m):
      row[i] += func(arr[i][j])  # 각 행의 9의 개수 누적
      col[j] += func(arr[i][j])  # 각 열의 9의 개수 누적
      sum_val += func(arr[i][j])  # 전체 9의 개수 누적

  # 행에 대해서 탐색
  for i in range(n):
    if row[i] > max_val:
      max_val = row[i]

  # 열에 대해서 탐색
  for j in range(m):
    if col[j] > max_val:
      max_val = col[j]

  # 전체 9의 갯수 값에서 행, 열 중 큰 값을 뺀 값이 정답
  print(sum_val - max_val)

if __name__ == "__main__":
  main()
```
