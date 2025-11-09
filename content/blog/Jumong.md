---
external : false
title : "Jumong"
tag : [Baekjoon, Python]
date : 2025-11-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1940)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 재료 개수 입력
N = int(input())
# 갑옷을 만들기 위해 필요한 합 M 입력
M = int(input())
# 재료들의 고유 번호 입력
materials = list(map(int, input().split()))

# 재료 번호를 오름차순으로 정렬
materials.sort()

count = 0  # 만들 수 있는 갑옷의 개수
left = 0   # 가장 작은 번호를 가리키는 포인터
right = N - 1  # 가장 큰 번호를 가리키는 포인터

# 투 포인터를 이용해 합이 M인 쌍 찾기
while left < right:
    total = materials[left] + materials[right]
    if total == M:  # 합이 M이면 갑옷 하나 만들 수 있음
        count += 1
        left += 1
        right -= 1
    elif total < M:  # 합이 M보다 작으면 작은 쪽 포인터 증가
        left += 1
    else:            # 합이 M보다 크면 큰 쪽 포인터 감소
        right -= 1

# 결과 출력
print(count)
```
