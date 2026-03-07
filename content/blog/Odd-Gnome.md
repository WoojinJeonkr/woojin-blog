---
external : false
title : "Odd Gnome"
tag : [Baekjoon, Python]
date : 2026-03-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15429)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스(gnome 그룹)의 개수 입력
n = int(input())

# 각 그룹에 대해 반복
for _ in range(n):
    # 한 줄 전체를 입력받아 정수 리스트로 변환
    data = list(map(int, input().split()))

    # 첫 번째 값은 gnome의 수
    g = data[0]

    # 실제 gnome ID 순서만 따로 리스트로 저장
    arr = data[1:]

    # 두 번째 gnome부터 순서가 깨지는 지점 탐색
    for i in range(1, g):
        # 이전 gnome ID + 1 이 아니라면 왕(king)
        if arr[i] != arr[i-1] + 1:
            # 문제에서 위치는 1부터 시작하므로 i+1 출력
            print(i+1)
            break
```
