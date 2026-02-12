---
external : false
title : "Affine Cipher"
tag : [Baekjoon, Python]
date : 2026-02-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11575)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 빠른 입력을 위해 readline 사용
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input().strip())

# 테스트 케이스 반복
for _ in range(T):
    # a, b 값 입력
    a, b = map(int, input().split())

    # 평문 입력
    s = input().strip()

    # 결과 저장 리스트
    result = []

    # 문자열의 각 문자에 대해 암호화 수행
    for ch in s:
        # 문자 → 숫자 변환 (A=0 ~ Z=25)
        x = ord(ch) - ord('A')

        # 아핀 암호 공식 적용
        encrypted = (a * x + b) % 26

        # 숫자 → 문자 변환 후 저장
        result.append(chr(encrypted + ord('A')))

    # 암호문 출력
    print(''.join(result))
``
```
