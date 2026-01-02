---
external : false
title : "Hating duplicates"
tag : [Baekjoon, Python]
date : 2026-01-02
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/20922)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# N: 수열의 길이, K: 같은 숫자가 허용되는 최대 개수
N, K = map(int, input().split())
arr = list(map(int, input().split()))

# 각 숫자의 등장 횟수를 저장할 배열 (a_i ≤ 100000)
count = [0] * 100001

# 슬라이딩 윈도우의 왼쪽 포인터
left = 0

# 조건을 만족하는 최장 연속 부분 수열의 길이
answer = 0

# 오른쪽 포인터를 0부터 N-1까지 이동
for right in range(N):
    # 현재 숫자의 등장 횟수 증가
    count[arr[right]] += 1

    # 어떤 숫자의 등장 횟수가 K를 초과하면
    # 조건을 만족할 때까지 왼쪽 포인터를 이동
    while count[arr[right]] > K:
        count[arr[left]] -= 1  # 왼쪽 숫자 제거
        left += 1              # 왼쪽 포인터 이동

    # 현재 윈도우 길이로 최댓값 갱신
    answer = max(answer, right - left + 1)

# 결과 출력
print(answer)
```
