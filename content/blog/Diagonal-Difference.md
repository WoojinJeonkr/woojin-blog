---
external: false
title: "Diagonal Difference"
date: 2023-12-07
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true)

## 2. 문제 해석

주어진 정사각형 2차원 배열에서 주 대각선과 부 대각선의 합의 차이를 계산하는 문제로, 주 대각선은 좌상단에서 우하단으로의 대각선이며, 부 대각선은 우상단에서 좌하단으로의 대각선을 말합니다.

함수 안에 작성해야 할 코드는 다음과 같습니다.

1. 배열의 크기를 구합니다.
2. 주 대각선과 부 대각선의 합을 각각 누적합니다.
3. 주 대각선의 합에서 부 대각선의 합을 뺀 뒤, 절대값을 취해 결과를 반환합니다.

여기서 주의할 점은 문제의 예제가 3x3으로 나와 있다고 해서 3번 반복하는 반복문을 통해 주 대각선과 부 대각선의 합을 구하는 것이 아닌 배열의 크기에 관계없이 작동하도록 코드를 작성하는 것이 중요합니다.

## 3. 정답 코드 (Python)

```python
#!/bin/python3

import math
import os
import random
import re
import sys

# 'diagonalDifference' 함수를 완성하세요.
# 해당 함수는 정수를 반환해야 합니다.
# 함수는 매개변수로 2차원 정수 배열 arr을 받습니다.

def diagonalDifference(arr):
    n = len(arr)
    primary_diagonal_sum = 0  # 주 대각선의 합을 저장할 변수 초기화
    secondary_diagonal_sum = 0  # 부 대각선의 합을 저장할 변수 초기화

    for i in range(n):
        primary_diagonal_sum += arr[i][i]  # 주 대각선 합 누적
        secondary_diagonal_sum += arr[i][n - i - 1]  # 부 대각선 합 누적

    return abs(primary_diagonal_sum - secondary_diagonal_sum)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    n = int(input().strip())
    arr = []
    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)
    fptr.write(str(result) + '\n')
    fptr.close()
```
