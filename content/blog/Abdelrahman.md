---
external : false
title : "Abdelrahman"
tag : [Baekjoon, Python]
date : 2026-04-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10693)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline  # 빠른 입력을 위해 sys.stdin.readline 사용

T = int(input())  # 테스트 케이스 개수 입력

for t in range(1, T + 1):
    N, M = map(int, input().split())  # 컴퓨터 수 N, 케이블(간선) 수 M 입력

    # 모든 컴퓨터가 서로 연결되기 위해 필요한 최소 간선 수는 (N - 1)
    # (즉, 스패닝 트리의 간선 개수)

    # 현재 간선이 M개이므로,
    # 제거 가능한 최대 간선 수 = 전체 간선 - 최소 필요 간선
    result = M - (N - 1)

    # 출력 형식에 맞게 결과 출력
    print(f"Case {t}: {result}")
```
