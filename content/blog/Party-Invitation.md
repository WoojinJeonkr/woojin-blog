---
external : false
title : "Party Invitation"
tag : [Baekjoon, Python]
date : 2026-03-23
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10104)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
# 빠른 입력을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 친구 수 입력
K = int(input())
# 제거 라운드 수 입력
m = int(input())

# 1번부터 K번까지 친구 리스트 생성
friends = list(range(1, K + 1))

# 각 라운드별로 반복
for _ in range(m):
    # 제거 기준이 되는 r 값 입력
    r = int(input())

    # 필터링 후 새로운 리스트를 담을 변수
    new_list = []

    # 현재 친구 리스트를 순회하면서 위치 기반으로 판단
    for idx, person in enumerate(friends):
        # idx는 0부터 시작하므로 실제 위치는 idx+1
        # r의 배수 위치가 아닌 경우에만 리스트에 추가
        if (idx + 1) % r != 0:
            new_list.append(person)

    # 필터링된 결과로 친구 리스트 갱신
    friends = new_list

# 최종적으로 남은 친구들을 한 줄씩 출력
for f in friends:
    print(f)
```
