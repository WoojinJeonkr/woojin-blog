---
external : false
title : "Dart countdown"
tag : [Programmers, Python]
date : 2025-09-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131129)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(target):
    # 가능한 점수와 해당 점수가 싱글/불인지 여부를 저장
    scores = set()
    
    for i in range(1, 21):
        scores.add((i, 1))       # 싱글 (1~20) - 싱글/불 카운트 +1
        scores.add((i * 2, 0))   # 더블 (2~40)
        scores.add((i * 3, 0))   # 트리플 (3~60)
    scores.add((50, 1))          # 불 (50점) - 싱글/불 카운트 +1

    # dp[i] = (i점을 만들기 위한 최소 다트 수, 그 때의 싱글/불 횟수)
    INF = float('inf')
    dp = [(INF, 0)] * (target + 1)
    dp[0] = (0, 0)  # 0점은 다트 0번, 싱글/불 0번으로 가능

    # 1점부터 target점까지 모든 점수에 대해 최적의 방법 계산
    for i in range(1, target + 1):
        for score, is_single_or_bull in scores:
            if i - score >= 0:
                prev_darts, prev_singles = dp[i - score]
                new_darts = prev_darts + 1
                new_singles = prev_singles + is_single_or_bull

                # 더 적은 다트 수로 만들 수 있으면 갱신
                if new_darts < dp[i][0]:
                    dp[i] = (new_darts, new_singles)
                # 다트 수가 같고, 싱글/불을 더 많이 사용했다면 갱신
                elif new_darts == dp[i][0] and new_singles > dp[i][1]:
                    dp[i] = (new_darts, new_singles)

    # target점을 만들기 위한 최소 다트 수와 싱글/불 횟수를 반환
    return list(dp[target])
```
