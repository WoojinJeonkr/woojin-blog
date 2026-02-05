---
external : false
title : "Cross country"
tag : [Baekjoon, Python]
date : 2026-02-05
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9017)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 테스트 케이스 수 입력
T = int(input())

for _ in range(T):
    # 전체 선수 수 입력
    N = int(input())

    # 결승선 통과 순서대로 팀 번호 입력
    teams = list(map(int, input().split()))

    # 팀별 참가 인원 수를 세기 위한 딕셔너리
    count = {}
    for t in teams:
        count[t] = count.get(t, 0) + 1

    # 정확히 6명이 참가한 팀만 점수 계산 대상
    valid = set(t for t in count if count[t] == 6)

    # 유효한 팀의 점수를 저장할 딕셔너리
    scores = {t: [] for t in valid}

    # 유효한 팀 선수에게만 순위 점수 부여
    score = 1
    for t in teams:
        if t in valid:
            scores[t].append(score)
            score += 1

    # 우승팀 선정을 위한 변수 초기화
    winner = None
    best_sum = float('inf')
    best_fifth = float('inf')

    # 팀별 점수를 비교하여 우승팀 결정
    for t in scores:
        # 상위 4명의 점수 합
        total = sum(scores[t][:4])

        # 다섯 번째 선수의 점수
        fifth = scores[t][4]

        # 점수 합이 낮거나, 같으면 5번째 점수가 더 낮은 팀 선택
        if total < best_sum or (total == best_sum and fifth < best_fifth):
            best_sum = total
            best_fifth = fifth
            winner = t

    # 우승팀 출력
    print(winner)
```
