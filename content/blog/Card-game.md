---
external : false
title : "Card game"
tag : [Baekjoon, Python]
date : 2026-02-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10801)에서 확인하실 수 있습니다.

## 2. Answer

```py
# A와 B의 카드 입력
A = list(map(int, input().split()))
B = list(map(int, input().split()))

a_win = 0  # A가 이긴 라운드 수
b_win = 0  # B가 이긴 라운드 수

# 10라운드 비교
for i in range(10):
    if A[i] > B[i]:
        a_win += 1
    elif A[i] < B[i]:
        b_win += 1
    # 같은 경우는 처리 없음 (무승부)

# 최종 승자 판단
if a_win > b_win:
    print("A")
elif a_win < b_win:
    print("B")
else:
    print("D")
```
