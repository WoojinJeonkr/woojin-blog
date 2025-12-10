---
external : false
title : "Just A Minim"
tag : [Baekjoon, Python]
date : 2025-12-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15036)에서 확인하실 수 있습니다.

## 2. Answer

```py
mapping = {
    0: 2.0,      # 브레브: 2박
    1: 1.0,      # 온음표: 1박
    2: 0.5,      # 이분음표: 1/2박
    4: 0.25,     # 4분음표: 1/4박
    8: 0.125,    # 8분음표: 1/8박
    16: 0.0625   # 16분음표: 1/16박
}

N = int(input())                    # 음표 개수 입력
arr = list(map(int, input().split()))  # 음표 코드 리스트 입력

total = 0.0
for x in arr:
    total += mapping[x]             # 코드에 해당하는 길이를 누적

print(total)                        # 총 음표 길이 출력
```
