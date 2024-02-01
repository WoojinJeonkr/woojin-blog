---
external: false
title: "Baekjoon 1830"
tag: [Baekjoon, Python]
date: 2024-02-01
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1380)에서 확인하실 수 있습니다.

## 2. Solve (memory: KB, time: ms)

```python
# case 변수 초기화
case = 1

# 무한 루프 시작
while True:
  # 참가자 수 입력
  n = int(input())
  
  # 참가자 수가 0이면 루프 종료
  if n == 0:
      break

  # 참가자 이름 입력
  names = [input() for _ in range(n)]
  
  # 각 참가자의 득표 수 초기화
  count = [0] * n

  # 2n-1번의 득표 정보 입력
  for _ in range(2 * n - 1):
    i, a = input().split()
    count[int(i) - 1] += 1

  # 가장 많은 득표를 받은 참가자의 인덱스 찾기
  winner_index = count.index(1)
  winner_name = names[winner_index]

  # 결과 출력
  print(f"{case} {winner_name}")
  
  # case 변수 증가
  case += 1
```
