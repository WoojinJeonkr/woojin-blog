---
external : false
title : "N plus 1 card game"
tag : [Programmers, Python]
date : 2025-09-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/258707)에서 확인하실 수 있습니다.

## 2. Answer

```py
from collections import deque

def solution(coin, cards):
    n = len(cards)

    # 처음에 n/3장의 카드를 손패로 받음
    hand = set(cards[:n // 3])

    # 이후 카드 뭉치 (2장씩 뽑을 대상)
    deck = deque(cards[n // 3:])

    # 동전을 사용해서만 얻을 수 있는 후보 카드들
    candidates = set()

    # 매 라운드 시작 시 카드 2장을 후보로 추가
    def draw_next_two_cards():
        if deck:
            candidates.add(deck.popleft())
            candidates.add(deck.popleft())

    # 주어진 두 카드 집합에서 합이 n+1인 카드 쌍을 찾아 제거
    def remove_pair(from_set: set, in_set: set) -> bool:
        for x in list(from_set):
            y = n + 1 - x
            if y in in_set and y != x:
                from_set.remove(x)
                in_set.remove(y)
                return True
        return False

    round_count = 1  # 첫 라운드는 무조건 시작

    while deck:
        draw_next_two_cards()  # 카드 2장 뽑아서 후보에 추가

        # 1. 손패에서만 카드 쌍이 가능한 경우 (동전 0개 사용)
        if remove_pair(hand, hand):
            round_count += 1

        # 2. 손패 + 후보 카드에서 가능한 경우 (동전 1개 사용)
        elif coin >= 1 and remove_pair(hand, candidates):
            coin -= 1
            round_count += 1

        # 3. 후보 카드에서만 가능한 경우 (동전 2개 사용)
        elif coin >= 2 and remove_pair(candidates, candidates):
            coin -= 2
            round_count += 1

        # 4. 어떤 조합도 불가능하면 게임 종료
        else:
            break

    return round_count
```
