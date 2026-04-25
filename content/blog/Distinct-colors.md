---
external : false
title : "Distinct colors"
tag : [Codechef, Python]
date : 2026-04-25
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/arrays-strings-sorting/INTARR01/problems/DISTINCTCOL)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

for _ in range(T):
    # 색의 개수 입력
    N = int(input())

    # 각 색깔별 공의 개수 입력
    A = list(map(int, input().split()))

    # 같은 색 공은 한 박스에 하나만 들어갈 수 있으므로
    # 특정 색 i가 A[i]개라면 최소 A[i]개의 박스가 필요함
    # 모든 색에 대해 이 조건을 만족하려면
    # 결국 가장 많은 공을 가진 색의 개수가 정답이 됨
    print(max(A))
```
