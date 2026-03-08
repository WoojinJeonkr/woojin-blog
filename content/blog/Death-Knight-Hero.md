---
external : false
title : "Death Knight Hero"
tag : [Baekjoon, Python]
date : 2026-03-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5013)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 전투 횟수 입력
n = int(input())

# 승리한 전투 수
win_count = 0

for _ in range(n):
    # 해당 전투에서 사용한 스킬 순서
    abilities = input().strip()

    # 'CD' 패턴이 없으면 승리
    if "CD" not in abilities:
        win_count += 1

# 승리한 전투 수 출력
print(win_count)
```
