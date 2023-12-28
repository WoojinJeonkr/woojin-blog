---
external: false
title: "Baekjoon 2897"
date: 2023-11-27
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2897)

## 2. 정답 코드 (python3, memory: 31120KB, time: 52ms)

```python
rows, columns = map(int, input().split(' ')) # 행과 열을 입력 받음

grid = []
# 각 행의 데이터를 문자열 리스트로 변환하여 입력 받음
for _ in range(rows):
    row_data = list(map(str, input()))
    grid.append(row_data)

# 각 위치에서 2x2 패턴을 추출하여 리스트에 추가
monster_patterns = []
for i in range(rows-1):
    for j in range(columns-1):
        monster_patterns.append([grid[i][j], grid[i][j+1], grid[i+1][j], grid[i+1][j+1]])

# 결과 카운트를 저장할 리스트 초기화
result_counts = [0 for _ in range(5)]

for pattern in monster_patterns:
    # '#'이 포함되어 있으면 패턴 무시
    if '#' in pattern:
        continue
    # '.'이 4개인 경우: 빈 공간이 4개인 패턴
    elif pattern.count('.') == 4:
        result_counts[0] += 1
    # 'X'가 1개인 경우: 몬스터 트럭이 한 대만 있는 패턴
    elif pattern.count('X') == 1:
        result_counts[1] += 1
    # 'X'가 2개인 경우: 몬스터 트럭이 두 대 있는 패턴
    elif pattern.count('X') == 2:
        result_counts[2] += 1
    # 'X'가 3개인 경우: 몬스터 트럭이 세 대 있는 패턴
    elif pattern.count('X') == 3:
        result_counts[3] += 1
    # 'X'가 4개인 경우: 몬스터 트럭이 네 대 있는 패턴
    elif pattern.count('X') == 4:
        result_counts[4] += 1

# 결과 카운트 출력
for count in result_counts:
    print(count)
```
