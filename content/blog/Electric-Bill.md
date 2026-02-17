---
external : false
title : "Electric Bill"
tag : [Baekjoon, Python]
date : 2026-02-17
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/25881)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 요금 단가 입력 (처음 1000KWH, 초과분 단가)
rate1, rate2 = map(int, input().split())

# 처리할 고객 수 입력
n = int(input())

# 고객 수만큼 반복
for _ in range(n):
    # 고객 전력 사용량 입력
    usage = int(input())

    # 사용량이 1000KWH 이하인 경우
    if usage <= 1000:
        bill = usage * rate1
    # 사용량이 1000KWH 초과인 경우
    else:
        bill = 1000 * rate1 + (usage - 1000) * rate2

    # 사용량과 계산된 요금 출력
    print(usage, bill)
```
