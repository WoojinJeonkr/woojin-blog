---
external : false
title : "Serca"
tag : [Baekjoon, Python]
date : 2026-02-09
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26766)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 출력할 하트의 개수 입력
n = int(sys.stdin.readline())

# ASCII 아트로 구성된 하트 하나의 모양 (총 9줄)
heart = [
    " @@@   @@@ ",
    "@   @ @   @",
    "@    @    @",
    "@         @",
    " @       @ ",
    "  @     @  ",
    "   @   @   ",
    "    @ @    ",
    "     @     "
]

# 모든 출력을 저장할 리스트
out = []

# 하트 모양을 n번 반복해서 리스트에 추가
for _ in range(n):
    out.extend(heart)

# 줄바꿈으로 연결하여 한 번에 출력
print("\n".join(out))
```
