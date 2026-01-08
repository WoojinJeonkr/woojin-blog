---
external : false
title : "Previous Level"
tag : [Baekjoon, Python]
date : 2026-01-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/28453)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 레벨의 개수 입력
n = int(input())
# N개의 레벨 입력
levels = list(map(int, input().split()))

result = []
for m in levels:
    # 만렙(300) → 구간 1
    if m == 300:
        result.append(1)
    # 구만렙 이상, 만렙 미만 → 구간 2
    elif m >= 275:
        result.append(2)
    # 뀨만렙 이상, 구만렙 미만 → 구간 3
    elif m >= 250:
        result.append(3)
    # 뀨만렙 미만 → 구간 4
    else:
        result.append(4)

# 각 레벨이 속한 구간 번호를 공백으로 출력
print(*result)
```
