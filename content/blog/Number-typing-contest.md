---
external : false
title : "Number typing contest"
tag : [Programmers, Python]
date :  2025-09-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/136797)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(numbers):
    # 손가락 간 이동 비용 테이블 (costs[a][b]는 a에서 b로 이동하는 데 드는 비용)
    costs = [[1, 7, 6, 7, 5, 4, 5, 3, 2, 3],
             [7, 1, 2, 4, 2, 3, 5, 4, 5, 6],
             [6, 2, 1, 2, 3, 2, 3, 5, 4, 5],
             [7, 4, 2, 1, 5, 3, 2, 6, 5, 4],
             [5, 2, 3, 5, 1, 2, 4, 2, 3, 5],
             [4, 3, 2, 3, 2, 1, 2, 3, 2, 3],
             [5, 5, 3, 2, 4, 2, 1, 5, 3, 2],
             [3, 4, 5, 6, 2, 3, 5, 1, 2, 4],
             [2, 5, 4, 5, 3, 2, 3, 2, 1, 2],
             [3, 6, 5, 4, 5, 3, 2, 4, 2, 1]]

    # 초기 상태: 왼손 4번, 오른손 6번 위치에 있음
    dp = {(4, 6): 0}

    # 입력 숫자 문자열을 하나씩 처리
    for str_num in numbers:
        num = int(str_num)  # 현재 눌러야 할 숫자
        next_dp = {}  # 다음 상태를 저장할 딕셔너리

        # 현재 가능한 모든 손가락 위치 조합에 대해 시도
        for (l, r), total_cost in dp.items():
            # 만약 현재 숫자 위치에 손가락이 이미 있으면 해당 손가락만 사용
            if num == l:
                key = (num, r)
                cost = total_cost + 1  # 제자리 입력 비용
                if key not in next_dp or cost < next_dp[key]:
                    next_dp[key] = cost
            elif num == r:
                key = (l, num)
                cost = total_cost + 1
                if key not in next_dp or cost < next_dp[key]:
                    next_dp[key] = cost
            else:
                # 왼손으로 현재 숫자를 누를 경우
                key1 = (num, r)
                cost1 = total_cost + costs[l][num]
                if key1 not in next_dp or cost1 < next_dp[key1]:
                    next_dp[key1] = cost1

                # 오른손으로 현재 숫자를 누를 경우
                key2 = (l, num)
                cost2 = total_cost + costs[r][num]
                if key2 not in next_dp or cost2 < next_dp[key2]:
                    next_dp[key2] = cost2

        # 다음 상태로 갱신
        dp = next_dp

    # 모든 경우 중 최소 비용 반환
    return min(dp.values())
```
