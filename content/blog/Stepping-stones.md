---
external : false
title : "Stepping stones"
tag : [Programmers, Python]
date : 2025-08-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/64062)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(stones, k):
    # 건널 수 있는 최소 인원(left), 최대 인원(right) 범위 설정
    left, right = 1, max(stones)
    answer = 0

    # 이분 탐색 수행
    while left <= right:
        mid = (left + right) // 2  # 현재 몇 명이 건널 수 있는지 가정
        cnt = 0                    # 연속해서 밟을 수 없는 돌의 개수
        can_cross = True           # mid명이 건널 수 있는지 여부

        # 돌 하나씩 확인
        for stone in stones:
            if stone - mid < 0:  # mid명이 지나가면 돌이 0 이하라면 밟을 수 없음
                cnt += 1
                # 연속으로 k개 이상의 돌이 밟을 수 없으면 실패
                if cnt >= k:
                    can_cross = False
                    break
            else:
                cnt = 0  # 밟을 수 있는 돌을 만나면 연속 카운트 초기화

        # mid명이 건널 수 있다면 더 많은 인원도 가능할 수 있음
        if can_cross:
            answer = mid
            left = mid + 1
        # mid명이 건널 수 없다면 인원을 줄여야 함
        else:
            right = mid - 1

    return answer
```
