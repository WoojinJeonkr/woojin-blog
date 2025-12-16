---
external : false
title : "String"
tag : [Baekjoon, Python]
date : 2025-12-16
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/7120)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력 문자열을 받아 앞뒤 공백 제거
s = input().strip()

# 결과 문자열을 저장할 리스트
result = []
# 이전 문자 저장용 변수
prev = None

# 문자열의 각 문자를 순회
for ch in s:
    # 이전 문자와 다를 경우만 처리
    if ch != prev:
        # 결과 리스트에 현재 문자 추가
        result.append(ch)
        # 이전 문자 갱신
        prev = ch

# 리스트를 문자열로 변환하여 출력
print("".join(result))
```
