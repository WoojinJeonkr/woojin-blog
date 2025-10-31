---
external : false
title : "Baekjoon budget"
tag : [Baekjoon, Python]
date : 2025-10-31
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2512)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 지방의 수 입력
N = int(input())
# 각 지방의 예산 요청 리스트 입력
requests = list(map(int, input().split()))
# 국가 전체 예산 입력
total_budget = int(input())

# 이분 탐색을 위한 시작값(low)과 끝값(high)
low, high = 0, max(requests)
# 가능한 최대 상한액을 저장할 변수
max_cap = 0

# 이분 탐색 시작
while low <= high:
    cap = (low + high) // 2  # 상한액 후보 (중간값)
    
    # 상한액(cap)을 기준으로 배정된 총 예산 계산
    allocated = sum(min(req, cap) for req in requests)

    # 배정된 예산이 전체 예산 이하이면
    if allocated <= total_budget:
        max_cap = cap        # 가능한 상한액으로 저장
        low = cap + 1        # 상한액을 더 높여 탐색
    else:
        high = cap - 1       # 배정 예산 초과 → 상한액을 낮춤

# 가능한 최대 상한액 출력
print(max_cap)
```
