---
external : false
title : "Friendly ChongChong"
tag : [Baekjoon, Python]
date : 2025-12-05
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26069)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 만남 기록의 수 입력
N = int(input())

# 무지개 댄스를 추는 사람을 저장할 집합
dance = set()
dance.add("ChongChong")  # 처음에는 총총이만 댄스를 추고 있음

# 만남 기록 처리
for _ in range(N):
    a, b = input().split()
    
    # 두 사람 중 한 명이라도 댄스를 추고 있다면
    # 만난 이후로 둘 다 댄스를 추게 됨
    if a in dance or b in dance:
        dance.add(a)
        dance.add(b)

# 마지막에 댄스를 추는 사람의 수 출력
print(len(dance))
```
