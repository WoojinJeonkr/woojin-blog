---
external : false
title : "Mixing Milk"
tag : [Baekjoon, Python]
date : 2026-03-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/16769)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 각 양동이의 최대 용량을 저장할 리스트
capacity = []

# 각 양동이에 현재 들어있는 우유 양을 저장할 리스트
milk = []

# 입력 받기 (총 3개의 양동이)
for _ in range(3):
    c, m = map(int, input().split())
    capacity.append(c)  # 최대 용량 저장
    milk.append(m)      # 현재 우유 양 저장

# 총 100번 붓기 작업 수행
for i in range(100):
    # 현재 붓는 양동이 번호 (0, 1, 2 반복)
    from_bucket = i % 3

    # 다음 양동이 번호 (0->1, 1->2, 2->0 순환)
    to_bucket = (i + 1) % 3

    # 실제로 옮길 수 있는 우유의 양
    # (현재 양동이의 우유 양,
    #  받는 양동이의 남은 공간) 중 작은 값
    amount = min(
        milk[from_bucket],
        capacity[to_bucket] - milk[to_bucket]
    )

    # 우유 이동
    milk[from_bucket] -= amount  # 붓는 쪽에서 감소
    milk[to_bucket] += amount    # 받는 쪽에서 증가

# 최종 결과 출력
for m in milk:
    print(m)
```
