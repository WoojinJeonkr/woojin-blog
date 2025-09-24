---
external : false
title : "Wall inspection"
tag : [Programmers, Python]
date : 2025-09-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/60062)에서 확인하실 수 있습니다.

## 2. Answer

```py
from itertools import permutations

def solution(n, weak, dist):
    length = len(weak)
    
    # 원형을 선형으로 확장 (순환 처리하기 위해)
    extended_weak = weak + [w + n for w in weak]
    
    # 최소 친구 수를 무한대로 초기화
    min_friends = float('inf')

    # weak의 각 위치를 시작점으로 설정
    for start in range(length):
        # 친구들을 배치할 수 있는 모든 순열 탐색
        for friends in permutations(dist):
            count = 1  # 첫 번째 친구부터 시작
            # 현재 친구가 점검할 수 있는 마지막 위치
            position = extended_weak[start] + friends[0]

            # start부터 length개의 취약 지점을 커버할 수 있는지 확인
            for index in range(start, start + length):
                # 현재 친구가 점검할 수 없는 지점이 나오면 다음 친구 투입
                if extended_weak[index] > position:
                    count += 1  # 친구 수 증가
                    # 사용할 수 있는 친구 수를 초과하면 종료
                    if count > len(dist):
                        break
                    # 다음 친구가 점검할 수 있는 최대 위치 갱신
                    position = extended_weak[index] + friends[count - 1]

            # 현재 조합으로 점검이 가능하면 최소 친구 수 갱신
            if count < min_friends:
                min_friends = count

    # 모든 취약 지점을 커버할 수 있는 경우 최소 친구 수 반환
    if min_friends <= len(dist):
        return min_friends
    # 커버할 수 없는 경우 -1 반환
    else:
        return -1
```
