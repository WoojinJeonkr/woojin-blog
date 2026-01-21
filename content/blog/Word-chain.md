---
external : false
title : "Word chain"
tag : [Baekjoon, Python]
date : 2026-01-21
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/20528)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 문자열의 개수 입력
n = int(sys.stdin.readline().strip())

# 팰린드롬 문자열들 입력
words = sys.stdin.readline().split()

# 첫 번째 문자열의 첫 글자를 기준 문자로 설정
# 팰린드롬이므로 첫 글자 == 마지막 글자
first_char = words[0][0]

# 모든 문자열의 첫 글자가 같은지 확인
for w in words:
    # 하나라도 기준 문자와 다르면 끝말잇기 불가능
    if w[0] != first_char:
        print(0)
        break
else:
    # 모든 문자열의 첫 글자가 같으면 끝말잇기 가능
    print(1)
```
