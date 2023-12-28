---
external: false
title: "Baekjoon 1718"
date: 2023-02-11
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/1718)

## 2. Solution

```python
text, key = input(), input()

ans = ''

for i in range(len(text)):
    if text[i] == ' ':
        ans += ' '
    else:
        ans += chr((ord(text[i]) - ord(key[i%len(key)]) - 1) % 26 + ord('a'))

print(ans)
```
