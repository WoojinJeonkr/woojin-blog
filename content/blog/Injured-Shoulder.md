---
external : false
title : "Injured Shoulder"
tag : [Baekjoon, Python]
date : 2026-03-26
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/32307)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 사전 입력
n = int(input())
dictionary = set(input().strip() for _ in range(n))

# 검사할 단어 수
m = int(input())

for _ in range(m):
    word = input().strip()

    # 1. 사전에 있는 경우
    if word in dictionary:
        print(1)
        continue

    # 2. 두 단어로 나눌 수 있는지 확인
    found = False
    for i in range(1, len(word)):
        left = word[:i]
        right = word[i:]

        if left in dictionary and right in dictionary:
            found = True
            break

    if found:
        print(2)
    else:
        print(0)
```
