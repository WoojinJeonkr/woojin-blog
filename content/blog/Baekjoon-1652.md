---
external: false
title: "Baekjoon 1652"
date: 2023-10-09
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1652)

## 2. 정답 코드 (Python, memory: 31256KB, time: 48ms)

```python
import sys
input = sys.stdin.readline

# 세그먼트 개수를 세는 함수 정의
def count_segments(matrix, N):
    count = 0
    for i in range(N):
        cnt = 0
        for j in range(N):
            if matrix[i][j] == '.':
                cnt += 1
            elif matrix[i][j] == 'X':
                if cnt >= 2:  # 세그먼트의 길이가 2 이상이면 세그먼트 개수 증가
                    count += 1
                cnt = 0  # 세그먼트 길이 초기화
        if cnt >= 2:  # 각 행의 마지막 세그먼트 처리
            count += 1
    return count

# 입력 받기
N = int(input())  # 행렬의 크기 입력
matrix = [list(map(str, input().strip())) for _ in range(N)]  # NxN 행렬 입력 받기

# 수평 세그먼트 개수 세기
row = count_segments(matrix, N)

# 행렬을 전치하여 수직 세그먼트 개수 세기
matrix_transposed = [[matrix[j][i] for j in range(N)] for i in range(N)]
column = count_segments(matrix_transposed, N)

# 결과 출력
print(row, column)
```
