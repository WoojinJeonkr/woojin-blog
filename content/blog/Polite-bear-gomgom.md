---
external : false
title : "Polite bear gomgom"
tag : [Baekjoon, Python]
date : 2025-11-27
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/25192)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# ENTER 이후 등장한 닉네임 기록
seen = set()

# 곰곰티콘 사용 횟수
count = 0

N = int(input())

for _ in range(N):
    s = input().strip()

    if s == "ENTER":
        # 새로운 사람이 들어오면 기록 초기화
        seen.clear()
    else:
        # 처음 등장한 닉네임이면 곰곰티콘 사용
        if s not in seen:
            seen.add(s)
            count += 1

print(count)
```
