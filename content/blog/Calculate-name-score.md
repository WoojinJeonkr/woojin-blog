---
external : false
title : "Calculate name score"
tag : [Baekjoon, Python]
date : 2025-12-26
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/15813)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 이름의 길이를 입력받음
n = int(input().strip())

# 이름을 대문자 문자열로 입력받음
name = input().strip()

# 이름 점수를 저장할 변수 초기화
score = 0

# 이름에 포함된 각 알파벳에 대해 점수 계산
for ch in name:
    # ord(ch): 해당 문자의 아스키 코드 값
    # ord('A'): 'A'의 아스키 코드 값 (65)
    # 알파벳 순서에 맞게 1~26점으로 변환
    score += ord(ch) - ord('A') + 1

# 최종 이름 점수 출력
print(score)
```
