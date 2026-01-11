---
external : false
title : "Plumber Hangseung"
tag : [Baekjoon, Python]
date : 2026-01-11
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1449)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 물이 새는 곳의 개수 n, 테이프 길이 L 입력
n, L = map(int, input().split())
# 물이 새는 위치 입력
water = list(map(int, input().split()))
# 물이 새는 위치를 오름차순으로 정렬
water.sort()
# 첫 번째 물 새는 위치에 테이프를 붙이기 시작
start = water[0]
# 사용한 테이프 개수 (최소 1개는 필요)
count = 1

# 두 번째 물 새는 위치부터 확인
for location in water[1:]:
    # 현재 테이프로 덮을 수 있는 범위에 포함되면
    # (start <= location < start + L)
    if location < start + L:
        continue  # 같은 테이프로 덮기
    else:
        # 덮을 수 없으면 새 테이프 사용
        start = location
        count += 1

# 필요한 테이프 최소 개수 출력
print(count)
```
