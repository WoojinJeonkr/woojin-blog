---
external : false
title : "Paper cutting"
tag : [Codechef, Python]
date : 2026-04-28
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/number-theory/INTNT01/problems/CUTPAPER)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N, K = map(int, input().split())

    # 한 변에서 만들 수 있는 K 크기 정사각형 개수
    count = N // K

    # 전체 개수 = 가로 * 세로
    print(count * count)
```
