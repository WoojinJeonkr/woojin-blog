---
external: false
title: "Baekjoon 2858"
date: 2023-07-06
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/2858)

## 2. Solution 1 (Python, memory: 31256KB, time: 44ms)

```python
# 입력으로 빨간색 블록(R)과 갈색 블록(B)의 개수를 받아 변수 R과 B에 할당합니다.
R, B = map(int, input().split())

# R을 기반으로 정사각형의 한 변의 길이인 longer_side_length를 계산합니다.
# longer_side_length는 R의 길이에 4를 더한 후 2로 나눈 값입니다.
longer_side_length = (R + 4) // 2

# R과 B의 합을 계산하여 total_width 변수에 할당합니다.
# total_width는 정사각형을 만들기 위해 필요한 전체 가로 길이를 나타냅니다.
total_width = R + B

# 1부터 longer_side_length-1까지의 값들을 반복적으로 확인합니다.
for i in range(1, longer_side_length):
    # (longer_side_length - i) * i가 total_width와 같다면,
    # 조건을 만족하는 i와 (longer_side_length - i)의 값을 출력합니다.
    # 출력되는 값은 더 긴 변의 길이와 더 짧은 변의 길이입니다.
    # 그리고 반복문을 종료합니다.
    if (longer_side_length - i) * i == total_width:
        print(max(i, longer_side_length - i), min(i, longer_side_length - i))
        break
```
