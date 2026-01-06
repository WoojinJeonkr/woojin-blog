---
external : false
title : "Pups"
tag : [Baekjoon, Python]
date : 2026-01-06
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26575)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 테스트 케이스 개수 입력
n = int(sys.stdin.readline())

# 각 테스트 케이스 처리
for _ in range(n):
    # d: 강아지 수
    # f: 강아지 1마리당 먹는 사료 양 (파운드)
    # p: 사료 1파운드당 가격
    # 문제 설명상 모두 실수 형태로 들어올 수 있으므로 float으로 처리
    d, f, p = map(float, sys.stdin.readline().split())

    # 총 비용 계산
    # 총 비용 = 강아지 수 * 강아지당 사료 양 * 파운드당 가격
    total_cost = d * f * p

    # 결과 출력
    # 달러 기호($)를 붙이고 소수점 둘째 자리까지 반올림하여 출력
    print(f"${total_cost:.2f}")
```
