---
external: false
title: "Baekjoon 2535"
date: 2023-10-11
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2535)

## 2. 정답 코드 (Python, memory: 31120KB, time: 40ms)

```python
import sys

def get_input():
    return sys.stdin.readline()

input_func = get_input

# 테스트 케이스의 수를 입력받음
num_cases = int(input_func())
points = []  # 좌표를 저장할 리스트
count = 0

# 각 테스트 케이스의 좌표를 입력받아 points 리스트에 저장
for _ in range(num_cases):
    points.append(list(map(int, input_func().split())))

# 좌표를 세 번째 요소(높이)를 기준으로 내림차순으로 정렬
points = sorted(points, key=lambda x: -x[2])

# 첫 번째 좌표와 두 번째 좌표 출력
print(points[0][0], points[0][1])
print(points[1][0], points[1][1])

# 첫 번째 좌표와 두 번째 좌표의 x값이 같을 경우 count를 1로 설정
if points[0][0] == points[1][0]:
    count = 1

# count가 0이면 두 번째 좌표와 x값이 다른 첫 번째 이후의 좌표를 출력
# count가 1이면 두 번째 좌표와 x값이 다른 첫 번째 이후의 좌표 중 첫 번째와 같은 x값을 가진 좌표를 출력
for i in range(2, num_cases):
    if count == 0:
        print(points[i][0], points[i][1])
        break
    else:
        if points[1][0] != points[i][0]:
            print(points[i][0], points[i][1])
            break
```
