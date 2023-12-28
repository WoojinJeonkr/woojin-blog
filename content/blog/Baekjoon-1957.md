---
external: false
title: "Baekjoon 1957"
date: 2023-11-11
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1957)

## 2. 정답 코드 (Python, memory: 31120KB, time: 56ms)

```python
# 입력받은 m과 n으로 격자 생성
m, n = map(int,input().split())
matrix = [[0 for _ in range(n)] for _ in range(m)]
# 우하좌상 방향을 나타내는 딕셔너리
dir = {0:[0,1],1:[1,0],2:[0,-1],3:[-1,0]}

# 남은 칸의 수를 계산하고 2를 빼줌 (시작 칸과 마지막 칸 제외)
remain = m*n-2
# 방향 전환 횟수와 현재 방향 인덱스 초기화
turn = 0
index = 0
# 시작 위치를 (0, 0)으로 설정하고 "X"로 표시
x,y = 0,0
matrix[x][y] = "X"
# 남은 칸이 없을 때까지 반복
while remain>=0:
    # flag 변수를 False로 초기화
    flag = False
    # 다음 위치를 현재 방향으로 이동
    if 0<=x+dir[index][0]<m and 0<=y+dir[index][1]<n:
        # 다음 위치가 "X"가 아니면 이동하고 "X"로 표시
        if matrix[x+dir[index][0]][y+dir[index][1]] != "X":
            matrix[x+dir[index][0]][y+dir[index][1]] = "X"
            x,y = x+dir[index][0],y+dir[index][1]
            # flag 변수를 True로 변경
            flag = True
    # flag 변수가 False이면 방향 전환하고 방향 전환 횟수 증가
    if not flag:
        turn += 1
        index = (index+1)%4
        x,y = x+dir[index][0],y+dir[index][1]
        matrix[x][y] = "X"
    # 남은 칸의 수를 1 감소
    remain -= 1
# 방향 전환 횟수 출력
print(turn)
```
