---
external : false
title : "Data structures are the best"
tag : [Baekjoon, Python]
date : 2026-04-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/23253)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 전체 교과서 수(N)와 더미 수(M) 입력
N, M = map(int, input().split())

# 최종적으로 번호순 정렬이 가능한지 여부를 저장하는 변수
is_possible = True

# 각 더미에 대해 반복
for _ in range(M):
    # 현재 더미에 쌓인 책의 개수 입력
    count = int(input())

    # 더미에 쌓인 책 번호를 아래 -> 위 순서로 입력받음
    stack = list(map(int, input().split()))

    # 인접한 책들을 비교하여 순서가 올바른지 확인
    for idx in range(count - 1):
        # 아래에 있는 책보다 위에 있는 책의 번호가 더 크면
        # (즉, 위에서 꺼낼 때 오름차순이 되지 않으면)
        if stack[idx] < stack[idx + 1]:
            # 올바른 순서로 꺼낼 수 없으므로 False 처리
            is_possible = False
            break

    # 이미 불가능한 경우 더 이상 확인하지 않고 종료
    if not is_possible:
        break

# 결과 출력: 가능하면 Yes, 아니면 No
if is_possible:
    print('Yes')
else:
    print('No')
```
