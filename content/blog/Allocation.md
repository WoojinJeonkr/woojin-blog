---
external : false
title : "Allocation"
tag : [Baekjoon, Python]
date : 2026-03-22
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/23895)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
# 빠른 입력을 위한 설정
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

# 각 테스트 케이스 처리
for t in range(1, T + 1):
    # 집 개수 N, 예산 B 입력
    N, B = map(int, input().split())

    # 각 집 가격 리스트 입력
    A = list(map(int, input().split()))

    # 가격 오름차순 정렬
    A.sort()

    # 현재까지 사용 금액
    total = 0
    # 구매한 집 개수
    count = 0

    # 싼 집부터 하나씩 확인
    for price in A:
        # 예산 안이면 구매
        if total + price <= B:
            total += price
            count += 1
        else:
            # 예산 초과 시 종료
            break

    # 결과 출력
    print(f"Case #{t}: {count}")
```
