---
external : false
title : "Hint stages"
tag : [Programmers, Python]
date : 2026-04-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/468377?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(cost, hint):
    # 스테이지 개수
    n = len(cost)

    # 최소 비용을 저장할 변수 (초기값은 매우 큰 값)
    answer = float('inf')

    # 각 스테이지에서 힌트 번들을 구매할지 말지를 비트마스크로 표현
    # (n-1개의 스테이지에서만 구매 가능하므로 2^(n-1) 경우 탐색)
    for mask in range(1 << (n-1)):
        # 현재까지 보유한 힌트 개수를 저장 (각 스테이지별)
        hints = [0] * n

        # 현재 경우의 총 비용
        total = 0

        # 1번 스테이지부터 n번 스테이지까지 순차적으로 진행
        for i in range(n):
            # 현재 스테이지에서 사용할 수 있는 힌트 수
            # (보유한 힌트 수와 최대 사용 가능 개수(n-1) 중 작은 값)
            use = min(hints[i], n-1)

            # 해당 힌트 개수를 사용했을 때의 스테이지 클리어 비용 추가
            total += cost[i][use]

            # 마지막 스테이지가 아니고,
            # 현재 mask에서 i번째 비트가 1이면 힌트 번들을 구매
            if i < n-1 and (mask & (1 << i)):
                # 힌트 번들 구매 비용 추가
                total += hint[i][0]

                # 번들에 포함된 힌트들을 이후 스테이지에 추가
                for h in hint[i][1:]:
                    hints[h-1] += 1

        # 모든 스테이지를 완료한 후 최소 비용 갱신
        answer = min(answer, total)

    # 최소 비용 반환
    return answer
```
