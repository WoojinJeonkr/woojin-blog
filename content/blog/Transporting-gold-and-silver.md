---
external : false
title : "Transporting gold and silver"
tag : [Programmers, Python]
date : 2025-09-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/86053)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(a, b, g, s, w, t):
    # 주어진 시간 내에 금 a, 은 b를 운반할 수 있는지 확인하는 함수
    def is_possible(time):
        total_gold = 0      # 시간 내에 옮길 수 있는 총 금
        total_silver = 0    # 시간 내에 옮길 수 있는 총 은
        total_weight = 0    # 시간 내에 옮길 수 있는 총 금+은

        for i in range(len(g)):
            # 한 도시에서 트럭이 왕복할 수 있는 횟수
            move = time // (t[i] * 2)

            # 마지막에 편도 한번 더 가능하면 추가
            if time % (t[i] * 2) >= t[i]:
                move += 1

            # 이 도시에서 옮길 수 있는 최대 무게
            max_weight = move * w[i]

            # 금, 은 각각 옮길 수 있는 최대량 (보유량과 max_weight 중 작은 값)
            gold = min(g[i], max_weight)
            silver = min(s[i], max_weight)

            # 금과 은 합쳐서 옮길 수 있는 최대량 (보유량과 max_weight 중 작은 값)
            both = min(g[i] + s[i], max_weight)

            total_gold += gold
            total_silver += silver
            total_weight += both

        # 조건 3가지 모두 충족해야 함
        return total_gold >= a and total_silver >= b and total_weight >= (a + b)

    # 이분 탐색 범위 설정 (최대 시간: 충분히 큰 값으로 설정)
    left = 0
    right = 4 * 10**14
    answer = right

    # 이분 탐색 시작
    while left <= right:
        mid = (left + right) // 2
        if is_possible(mid):
            answer = mid        # 현재 시간이 가능하므로 더 짧은 시간도 시도
            right = mid - 1
        else:
            left = mid + 1      # 시간이 부족하므로 늘리기

    return answer
```
