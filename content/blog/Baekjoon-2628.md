---
external: false
title: "Baekjoon 2628"
date: 2023-10-30
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2628)

## 2. 정답 코드 (Python, memory: 31120KB, time: 44ms)

```python
# 입력으로 가로와 세로의 길이를 받음
width, height = map(int, input().split())

# 각 가로 길이의 간격을 저장하는 리스트 초기화
width_intervals = [0, width]

# 각 세로 길이의 간격을 저장하는 리스트 초기화
height_intervals = [0, height]

# 색종이의 개수를 입력받아서 각 색종이의 위치와 길이를 리스트에 저장
for _ in range(int(input())):
    position, length = map(int, input().split())
    
    # 가로로 자를 때
    if position == 0:
        height_intervals.append(length)
    # 세로로 자를 때
    else:
        width_intervals.append(length)

# 가로 길이의 간격 리스트를 정렬하여 좌측에서 오른쪽으로 비교하기 용이하게 함
width_intervals.sort()

# 세로 길이의 간격 리스트를 정렬하여 상단에서 하단으로 비교하기 용이하게 함
height_intervals.sort()

# 최대 넓이를 저장할 변수 초기화
max_square = 0

# 모든 가능한 조합을 비교하여 최대 넓이를 찾음
for i in range(1, len(width_intervals)):
    for j in range(1, len(height_intervals)):
        # 현재 가로 길이와 세로 길이를 계산
        current_width = width_intervals[i] - width_intervals[i - 1]
        current_height = height_intervals[j] - height_intervals[j - 1]
        
        # 현재 조합의 넓이 계산 후 최대 넓이와 비교하여 갱신
        max_square = max(max_square, current_width * current_height)

# 최대 넓이 출력
print(max_square)
```
