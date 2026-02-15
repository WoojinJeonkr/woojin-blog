---
external : false
title : "Contemporary Art"
tag : [Baekjoon, Python]
date : 2026-02-16
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/16600)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

# 넓이 입력
a = int(input().strip())

# 한 변 길이 계산 (√a)
side = math.sqrt(a)

# 둘레 계산 (4 × 한 변)
perimeter = 4 * side

# 결과 출력
print(perimeter)
```
