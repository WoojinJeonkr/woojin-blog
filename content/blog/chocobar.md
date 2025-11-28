---
external : false
title : "chocobar"
tag : [Baekjoon, Python]
date : 2025-11-28
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/27959)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 두 정수 N과 M을 입력받는다.
# N: 100원 동전의 개수
# M: 초코바의 가격
N, M = map(int, input().split())

# 가진 돈(N * 100)이 초코바 가격(M) 이상인지 확인한다.
if N * 100 >= M:
    # 충분하면 Yes 출력
    print("Yes")
else:
    # 부족하면 No 출력
    print("No")
```
