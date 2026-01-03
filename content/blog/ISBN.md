---
external : false
title : "ISBN"
tag : [Baekjoon, Python]
date : 2026-01-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/14626)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

s = sys.stdin.readline().strip()

total = 0
star_idx = -1

for i in range(13):
    if s[i] == '*':
        star_idx = i
        continue

    digit = int(s[i])

    # 인덱스 짝수 → 가중치 1, 홀수 → 가중치 3
    if i % 2 == 0:
        total += digit
    else:
        total += 3 * digit

# * 위치가 짝수 인덱스인 경우 (가중치 1)
if star_idx % 2 == 0:
    # m + total ≡ 0 (mod 10)
    missing = (10 - (total % 10)) % 10
else:
    # 3m + total ≡ 0 (mod 10) 을 만족하는 m 탐색
    target = (10 - (total % 10)) % 10
    missing = 0
    for x in range(10):
        if (3 * x) % 10 == target:
            missing = x
            break

print(missing)
```
