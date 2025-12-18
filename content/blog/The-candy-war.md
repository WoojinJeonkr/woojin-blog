---
external : false
title : "The candy war"
tag : [Baekjoon, Python]
date : 2025-12-19
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9037)에서 확인하실 수 있습니다.

## 2. Answer

```py
T = int(input().strip())

for _ in range(T):
    N = int(input().strip())
    candies = list(map(int, input().split()))

    # 처음에 모든 아이의 사탕 개수를 짝수로 맞춘다
    for i in range(N):
        if candies[i] % 2 == 1:
            candies[i] += 1

    # 모든 아이가 같은 수의 사탕을 가지고 있는지 확인하는 함수
    def is_same(arr):
        return all(x == arr[0] for x in arr)

    count = 0  # 순환 횟수

    # 모든 아이의 사탕 개수가 같아질 때까지 반복
    while not is_same(candies):
        # 각 아이가 줄 사탕의 개수 (자기 사탕의 절반)
        give = [c // 2 for c in candies]

        new_candies = [0] * N
        for i in range(N):
            # 현재 사탕 - 준 사탕 + 왼쪽 아이에게서 받은 사탕
            new_candies[i] = candies[i] - give[i] + give[i - 1]

        # 사탕 개수가 홀수이면 선생님이 1개를 추가
        for i in range(N):
            if new_candies[i] % 2 == 1:
                new_candies[i] += 1

        candies = new_candies
        count += 1  # 순환 1회 증가

    print(count)
```
