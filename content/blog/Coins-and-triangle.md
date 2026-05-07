---
external : false
title : "Coins and triangle"
tag : [Codechef, Python]
date : 2026-05-07
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/binary-search/INTBINS01/problems/TRICOIN)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

for _ in range(T):
    # 가지고 있는 동전 개수 입력
    N = int(input())

    # 이분 탐색 범위 설정
    left = 0
    right = N

    # 만들 수 있는 최대 높이 저장 변수
    answer = 0

    # 이분 탐색 수행
    while left <= right:
        # 중간 높이 계산
        mid = (left + right) // 2

        # 높이 mid를 만들 때 필요한 동전 개수 계산
        coins = mid * (mid + 1) // 2

        # 필요한 동전 수가 N 이하라면 가능
        if coins <= N:
            answer = mid
            left = mid + 1
        else:
            # 동전이 부족하면 높이를 줄임
            right = mid - 1

    # 최대 높이 출력
    print(answer)
```
