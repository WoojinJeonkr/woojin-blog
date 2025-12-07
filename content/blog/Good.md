---
external : false
title : "Good"
tag : [Baekjoon, Python]
date : 2025-12-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1253)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 수의 개수 입력
N = int(input())
# N개의 수 입력
A = list(map(int, input().split()))
# 투 포인터 사용을 위해 정렬
A.sort()

count = 0  # 좋은 수의 개수

# 각 숫자 A[i]가 좋은 수인지 확인
for i in range(N):
    target = A[i]  # 현재 확인할 수
    left, right = 0, N - 1  # 투 포인터 초기화
    
    # 두 포인터 탐색
    while left < right:
        # 자기 자신을 포인터로 사용하면 안 되므로 건너뛰기
        if left == i:
            left += 1
            continue
        if right == i:
            right -= 1
            continue
        
        s = A[left] + A[right]  # 두 수의 합
        
        # 두 수의 합이 target과 같으면 좋은 수
        if s == target:
            count += 1
            break
        # 합이 작으면 left 증가
        elif s < target:
            left += 1
        # 합이 크면 right 감소
        else:
            right -= 1

# 좋은 수의 개수 출력
print(count)
```
