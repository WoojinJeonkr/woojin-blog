---
external: false
title: "Baekjoon 10709"
date: 2023-11-28
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/10709)

## 2. 정답 코드 (python3, memory: 31120KB, time: 56ms)

```python
# 높이와 너비 입력
height, width = map(int, input().split())
# 그리드 입력
grid = [input() for _ in range(height)]

# 각 행에 대해 수행
for row in grid:
    # 구름 정보 초기화
    cloud_info = [-1 for _ in range(width)]
    # 행 내에서 'c'가 있는 위치에 대해 구름 정보 갱신
    for i in range(width):
        if row[i] == 'c':
            cloud_info[i] = 0
    
    # 구름 간 거리 계산
    cloud_distance = 0
    for i in range(1, width):
        if cloud_info[i] == 0:
            cloud_distance = 0
        if cloud_info[i - 1] != -1:
            if cloud_info[i] != 0:
                cloud_distance += 1
                cloud_info[i] = cloud_distance
    
    # 결과 출력
    print(*cloud_info)
```
