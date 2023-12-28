---
external: false
title: "Baekjoon 2947"
date: 2023-07-09
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/2947)

## 2. 풀이 (Python, memory: 31256KB, time: 40ms)

```python
def sort_pieces(pieces):
    # 정렬의 목표가 되는 순서를 지정한다.
    target_sequence = [1, 2, 3, 4, 5]
    
    # 주어진 조각의 순서가 목표 순서와 일치할 때까지 반복한다.
    while pieces != target_sequence:
        # 인접한 두 조각의 순서를 비교하고 잘못된 경우 위치를 바꾼다.
        for i in range(4):
            if pieces[i] > pieces[i+1]:
                pieces[i], pieces[i+1] = pieces[i+1], pieces[i]
                # 위치를 바꾼 후의 조각의 순서를 출력한다.
                print(' '.join(map(str, pieces)))

# 입력을 받는다.
pieces = list(map(int, input().split()))

# 정렬을 수행한다.
sort_pieces(pieces)
```
