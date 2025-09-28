---
external : false
title : "Sticker collection (2)"
tag : [Programmers, Python]
date : 2025-09-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12971)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(sticker):
    n = len(sticker)
    
    # 스티커가 1개뿐이면 그대로 반환
    if n == 1:
        return sticker[0]
    
    # 첫 번째 스티커를 사용하는 경우 (마지막 스티커는 사용 불가)
    dp1 = [0] * n
    dp1[0] = sticker[0]
    dp1[1] = max(sticker[0], sticker[1])
    for i in range(2, n - 1):
        dp1[i] = max(dp1[i - 1], dp1[i - 2] + sticker[i])
    
    # 첫 번째 스티커를 사용하지 않는 경우 (마지막 스티커 사용 가능)
    dp2 = [0] * n
    dp2[1] = sticker[1]
    for i in range(2, n):
        dp2[i] = max(dp2[i - 1], dp2[i - 2] + sticker[i])
    
    # 두 경우 중 최대값 반환
    return max(dp1[n - 2], dp2[n - 1])
```
