---
external : false
title : "Codemaster 2023"
tag : [Baekjoon, Python]
date : 2026-01-05
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/28235)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력받은 구호(문자열) 입력 받음
s = input().strip()

# 구호가 "SONGDO"인 경우 "HIGHSCHOOL" 출력
if s == "SONGDO":
    print("HIGHSCHOOL")

# 구호가 "CODE"인 경우 "MASTER" 출력
elif s == "CODE":
    print("MASTER")

# 구호가 "2023"인 경우 "0611" 출력
elif s == "2023":
    print("0611")

# 구호가 "ALGORITHM"인 경우 "CONTEST" 출력
elif s == "ALGORITHM":
    print("CONTEST")
```
