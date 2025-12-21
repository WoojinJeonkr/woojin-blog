---
external : false
title : "Account numbers"
tag : [Baekjoon, Python]
date : 2025-12-21
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/20350)에서 확인하실 수 있습니다.

## 2. Answer

```py
s = input().strip()

# 1. 앞의 4글자를 뒤로 이동
rearranged = s[4:] + s[:4]

# 2. 문자 → 숫자 변환
converted = []
for ch in rearranged:
    if ch.isdigit():
        converted.append(ch)
    else:
        converted.append(str(ord(ch) - ord('A') + 10))

num_str = "".join(converted)

# 3. 큰 수를 직접 만들지 않고 mod 97 계산
mod = 0
for digit in num_str:
    mod = (mod * 10 + int(digit)) % 97

# 4. 결과 출력
if mod == 1:
    print("correct")
else:
    print("incorrect")
```
