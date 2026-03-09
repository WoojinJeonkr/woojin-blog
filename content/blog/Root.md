---
external : false
title : "Root"
tag : [Baekjoon, Python]
date : 2026-03-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/4619)에서 확인하실 수 있습니다.

## 2. Answer

```py
while True:
    B, N = map(int, input().split())

    # 입력 종료 조건
    if B == 0 and N == 0:
        break

    # B의 N제곱근 근사값
    root = B ** (1 / N)

    # 후보 A
    a = int(root)
    b = a + 1

    # B와 더 가까운 값을 선택
    if abs(a ** N - B) <= abs(b ** N - B):
        print(a)
    else:
        print(b)
```
