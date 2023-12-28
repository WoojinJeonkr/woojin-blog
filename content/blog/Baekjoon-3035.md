---
external: false
title: "Baekjoon 3035"
date: 2023-07-19
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/3035)

## 2. 풀이 (Python, memory: 31256KB, time: 72ms)

```python
# 입력으로 행(R), 열(C), 행 확대 비율(ZR), 열 확대 비율(ZC)을 받아옵니다.
R, C, ZR, ZC = map(int, input().split())

# 페이퍼를 저장할 리스트를 생성합니다.
paper = []

# R만큼 반복하여 페이퍼의 각 행을 입력받고 리스트에 추가합니다.
for _ in range(R):
  paper.append(input())

# 페이퍼를 확대하여 출력하는 반복문입니다.
# 각 행에 대해서 ZR번 반복하고, 각 열에 대해서 ZC번 반복하여 확대된 형태로 출력합니다.
for i in range(R):
  for _ in range(ZR):
    for j in range(C):
      for _ in range(ZC):
        # 페이퍼의 i행 j열의 문자를 ZC번 반복하여 출력합니다.
        print(paper[i][j], end='')

    # 한 행의 문자 출력이 끝나면 줄바꿈을 수행합니다.
    print()
```
