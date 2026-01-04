---
external : false
title : "FYI"
tag : [Baekjoon, Python]
date : 2026-01-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/17863)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 7자리 전화번호를 문자열로 입력
n = input().strip()

# 앞 3자리가 "555"인지 확인하여 조건에 따라 YES 또는 NO 출력
if n[:3] == "555":
    print("YES")
else:
    print("NO")
```
