---
external: false
title: "Baekjoon 4158"
date: 2023-09-20
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4158)

## 2. 정답 코드 (Python, memory: 127000KB, time: 2168ms)

```python
import sys

# 표준 입력 대신 sys.stdin.readline을 사용하도록 input 함수를 재정의합니다
input = sys.stdin.readline

while True:
    # N과 M을 공백을 기준으로 입력 받아 정수로 변환합니다
    N, M = map(int, input().split())

    # N과 M이 모두 0이면 반복문을 종료합니다
    if N == 0 and M == 0:
        break

    # CD 번호를 저장하기 위한 집합을 초기화합니다
    cd_set = set()
    # 공통된 CD 번호의 개수를 세기 위한 변수를 초기화합니다
    cd_count = 0

    # N개의 CD 번호를 입력 받아 집합에 저장합니다
    for _ in range(N):
        cd = int(input())
        cd_set.add(cd)

    # M개의 CD 번호를 입력 받아 집합에 포함되어 있는지 확인하고 개수를 증가시킵니다
    for _ in range(M):
        cd = int(input())
        if cd in cd_set:
            cd_count += 1

    # 공통된 CD 번호의 개수를 출력합니다
    print(cd_count)
```
