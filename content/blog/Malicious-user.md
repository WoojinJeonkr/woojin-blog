---
external : false
title : "Malicious user"
tag : [Programmers, Python]
date : 2025-07-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/64064)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 사용자 ID의 가능한 순열 생성을 위한 라이브러리
from itertools import permutations

def solution(user_id, banned_id):
    # 주어진 user가 banned 패턴과 일치하는지 확인하는 함수
    def is_match(user, banned):
        # 길이가 다르면 매칭 불가
        if len(user) != len(banned):
            return False
        # 각 문자 비교
        for u, b in zip(user, banned):
            # banned 아이디의 '*'는 어떤 문자와도 매칭됨
            if b == '*':
                continue
            # 문자가 다르면 매칭 실패
            if u != b:
                return False
        # 모든 조건을 통과하면 매칭 성공
        return True

    # 가능한 제재 아이디 조합을 저장할 set (중복 제거 목적)
    possible_sets = set()

    # user_id 중에서 banned_id 길이만큼 순열을 생성
    for perm in permutations(user_id, len(banned_id)):
        # 현재 순열이 모든 banned_id에 매칭되는지 확인할 플래그
        matched = True
        # 순열의 각 user와 banned를 비교
        for u, b in zip(perm, banned_id):
            # 하나라도 매칭 실패 시 중단
            if not is_match(u, b):
                matched = False
                break
        if matched:
            # 같은 사용자 조합이라면 순서가 달라도 한 번만 세기 위해 frozenset을 사용
            # frozenset을 사용하여 아이디 순서와 관계없이 같은 조합은 중복 제거
            possible_sets.add(frozenset(perm))
    
     # 가능한 고유 제재 아이디 조합의 개수 반환
    return len(possible_sets)
```
