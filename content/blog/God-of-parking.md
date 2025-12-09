---
external : false
title : "God of parking"
tag : [Baekjoon, Python]
date : 2025-12-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5054)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스 개수 입력
t = int(input())

for _ in range(t):
    # 방문할 상점 수 입력
    n = int(input())
    # 상점들의 위치 입력
    shops = list(map(int, input().split()))

    # 최소 걸음 수 계산:
    # 가장 왼쪽 상점(min)과 가장 오른쪽 상점(max) 사이를 왕복해야 하므로 (max - min) * 2
    result = (max(shops) - min(shops)) * 2

    # 결과 출력
    print(result)
```
