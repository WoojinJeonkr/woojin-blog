---
external : false
title : "ICPC"
tag : [Baekjoon, Python]
date : 2026-02-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/16727)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 1차전: Persepolis 홈
p1, s1 = map(int, input().split())

# 2차전: Esteghlal 홈
s2, p2 = map(int, input().split())

# 합산 점수 계산
persepolis_total = p1 + p2
esteghlal_total = s1 + s2

# 합산 점수 비교
if persepolis_total > esteghlal_total:
    print("Persepolis")
elif persepolis_total < esteghlal_total:
    print("Esteghlal")
else:
    # 원정 다득점 비교
    if p2 > s1:
        print("Persepolis")
    elif p2 < s1:
        print("Esteghlal")
    else:
        print("Penalty")
```
