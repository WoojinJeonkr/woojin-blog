---
external : false
title : "Welcome kit"
tag : [Baekjoon, Python]
date : 2025-11-12
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/30802)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

# 참가자 수 입력
N = int(input().strip())
# 티셔츠 사이즈별 신청 인원 입력
sizes = list(map(int, input().split()))
# 티셔츠 묶음 단위 T, 펜 묶음 단위 P 입력
T, P = map(int, input().split())

# 각 사이즈별 필요한 티셔츠 묶음 수를 계산
tshirt_bundles = sum(math.ceil(size / T) for size in sizes)

# 펜은 정확히 N자루 필요하므로
# 가능한 최대 묶음 수와 남는 낱개 수 계산
pen_bundles = N // P
pen_single = N % P

# 결과 출력
print(tshirt_bundles)
print(pen_bundles, pen_single)
```
