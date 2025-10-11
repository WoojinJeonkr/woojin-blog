---
external : false
title : "Choosing dice"
tag : [Programmers, Python]
date : 2025-10-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/258709)에서 확인하실 수 있습니다.

## 2. Answer

```py
from itertools import combinations

def solution(dice):
    n = len(dice)
    half = n // 2
    best_win = -1
    best_pick = None

    # 주사위 인덱스 리스트
    dice_indices = list(range(n))

    # A가 선택할 수 있는 모든 주사위 조합 탐색
    for a_pick in combinations(dice_indices, half):
        # B는 남은 주사위를 선택
        b_pick = [i for i in dice_indices if i not in a_pick]

        # A의 모든 합 경우의 수 계산
        a_sums = [0]
        for idx in a_pick:
            new_sums = []
            for s in a_sums:
                for face in dice[idx]:
                    new_sums.append(s + face)
            a_sums = new_sums

        # B의 모든 합 경우의 수 계산
        b_sums = [0]
        for idx in b_pick:
            new_sums = []
            for s in b_sums:
                for face in dice[idx]:
                    new_sums.append(s + face)
            b_sums = new_sums

        # 정렬 후 투 포인터 방식으로 A의 승리 횟수 계산
        a_sums.sort()
        b_sums.sort()
        win = 0
        j = 0
        len_b = len(b_sums)

        for a_val in a_sums:
            while j < len_b and b_sums[j] < a_val:
                j += 1
            win += j

        # 승리 횟수가 최대인 조합 저장
        if win > best_win:
            best_win = win
            best_pick = a_pick

    # 주사위 번호는 1부터 시작하므로 +1
    return [x + 1 for x in best_pick]
```
