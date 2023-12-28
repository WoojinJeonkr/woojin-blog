---
external: false
title: "Baekjoon 2578"
date: 2023-11-25
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2578)

## 2. 정답 코드 (python3, memory: 31120KB, time: 40ms)

```python
import sys
input_fn = sys.stdin.readline

# 빙고 카드 생성
bingo_card = [list(map(int, input_fn().split())) for _ in range(5)]
marked_numbers = []

# 사용자가 부른 숫자 기록
for _ in range(5):
    marked_numbers += list(map(int, input_fn().split()))

# 빙고 여부를 확인하는 함수
def check_bingo():
    bingo_count = 0
    # 가로 빙고 확인
    for row in bingo_card:
        if row.count(0) == 5:
            bingo_count += 1
    # 세로 빙고 확인
    for col in range(5):
        marked_count = 0
        for row in range(5):
            if bingo_card[row][col] == 0:
                marked_count += 1
        if marked_count == 5:
            bingo_count += 1
    # 왼쪽 대각선 빙고 확인
    left_diag = 0
    for i in range(5):
        if bingo_card[i][i] == 0:
            left_diag += 1
    if left_diag == 5:
        bingo_count += 1
    # 오른쪽 대각선 빙고 확인
    right_diag = 0
    for i in range(5):
        if bingo_card[i][4-i] == 0:
            right_diag += 1
    if right_diag == 5:
        bingo_count += 1
    return bingo_count 

marked_count = 0

# 부른 숫자와 빙고 카드를 비교하면서 맞는 숫자를 찾고 빙고 확인
for i in range(25):
    for x in range(5):
        for y in range(5):
            if marked_numbers[i] == bingo_card[x][y]:
                bingo_card[x][y] = 0
                marked_count += 1
    # 부른 숫자가 12개 이상일 때 빙고 확인
    if marked_count >= 12:
        result = check_bingo()
        # 빙고가 3개 이상이면 결과 출력 후 종료
        if result >= 3:
            print(i+1)
            break
```
