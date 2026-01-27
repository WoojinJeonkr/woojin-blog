---
external : false
title : "Kkungs space trip"
tag : [Baekjoon, Python]
date : 2026-01-27
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9501)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 표준 입력을 빠르게 받기 위한 설정
import sys
input = sys.stdin.readline

# 테스트 케이스 개수 입력
test_case_count = int(input())

# 각 테스트 케이스 처리
for _ in range(test_case_count):
    # 우주선 개수와 목적지까지의 거리 입력
    spaceship_count, destination_distance = map(int, input().split())
    possible_spaceship_count = 0  # 도달 가능한 우주선 수

    # 각 우주선 정보 확인
    for _ in range(spaceship_count):
        # 최고 속도, 연료량, 연료 소비율 입력
        max_speed, fuel_amount, fuel_consumption_rate = map(int, input().split())

        # 필요한 연료(D * c) <= 보유 연료로 이동 가능한 거리(f * v) 이면 가능
        if destination_distance * fuel_consumption_rate <= fuel_amount * max_speed:
            possible_spaceship_count += 1

    # 결과 출력
    print(possible_spaceship_count)
```
