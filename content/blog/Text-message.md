---
external : false
title : "Text message"
tag : [Baekjoon, Python]
date : 2026-02-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2037)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

input = sys.stdin.readline

# 버튼 누르는 시간(p)과 대기 시간(w) 입력
p, w = map(int, input().split())

# 입력할 문자열
s = input().rstrip()

# 각 문자에 대해 (버튼 번호, 누르는 횟수) 매핑
key_map = {
    'A': (2, 1), 'B': (2, 2), 'C': (2, 3),
    'D': (3, 1), 'E': (3, 2), 'F': (3, 3),
    'G': (4, 1), 'H': (4, 2), 'I': (4, 3),
    'J': (5, 1), 'K': (5, 2), 'L': (5, 3),
    'M': (6, 1), 'N': (6, 2), 'O': (6, 3),
    'P': (7, 1), 'Q': (7, 2), 'R': (7, 3), 'S': (7, 4),
    'T': (8, 1), 'U': (8, 2), 'V': (8, 3),
    'W': (9, 1), 'X': (9, 2), 'Y': (9, 3), 'Z': (9, 4),
    ' ': (1, 1)
}

total_time = 0
prev_button = -1  # 이전 버튼 번호 저장

for ch in s:
    button, count = key_map[ch]

    # 이전 문자와 같은 버튼이면 대기 시간 추가 (공백 제외)
    if prev_button == button and button != 1:
        total_time += w

    # 버튼 누르는 시간 추가
    total_time += count * p

    # 현재 버튼을 이전 버튼으로 저장
    prev_button = button

print(total_time)
```
