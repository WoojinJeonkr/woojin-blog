---
external : false
title : "Gömda ord"
tag : [Baekjoon, Python]
date : 2026-02-23
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/24196)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력 문자열 받기
s = input().strip()

# 결과 문자열을 저장할 리스트
result = []

# 현재 위치
index = 0

# 마지막 글자에 도달할 때까지 반복
while True:
    # 현재 문자 추가
    result.append(s[index])

    # 마지막 글자라면 종료
    if index == len(s) - 1:
        break

    # 이동 거리 계산 (A=1, B=2, ...)
    move = ord(s[index]) - ord('A') + 1

    # 다음 위치로 이동
    index += move

# 결과 출력
print("".join(result))
```
