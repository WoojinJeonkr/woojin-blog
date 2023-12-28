---
external: false
title: "sWAP cASE"
date: 2023-08-29
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/swap-case/problem?isFullScreen=true)

## 2. 정답 코드 (Python)

```python
# 대문자면 소문자로, 소문자면 대문자로 바꾸는 함수
def swap_case(s):
    swap_s = ""
    for char in s:
        if char.isupper():
            swap_s += char.lower()
        elif char.islower():
            swap_s += char.upper()
        else:
            swap_s += char
    return swap_s

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)
```
