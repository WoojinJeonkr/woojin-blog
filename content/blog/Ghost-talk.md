---
external : false
title : "Ghost talk"
tag: [Baekjoon, Python]
date : 2026-03-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9226)에서 확인하실 수 있습니다.

## 2. Answer

```py
vowels = "aeiou"

while True:
    word = input().strip()

    if word == "#":
        break

    # 첫 글자가 모음
    if word[0] in vowels:
        print(word + "ay")
        continue

    # 첫 모음 위치 찾기
    idx = -1
    for i, ch in enumerate(word):
        if ch in vowels:
            idx = i
            break

    # 모음이 없는 경우
    if idx == -1:
        print(word + "ay")
    else:
        print(word[idx:] + word[:idx] + "ay")
```
