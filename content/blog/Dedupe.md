---
external : false
title : "Dedupe"
tag : [Baekjoon, Python]
date : 2026-02-21
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5357)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 테스트 케이스 개수 입력
t = int(input())

# 각 테스트 케이스 처리
for _ in range(t):
    s = input().strip()

    # 결과 문자열 초기화 (첫 글자는 항상 포함)
    result = s[0]

    # 두 번째 문자부터 순회
    for i in range(1, len(s)):
        # 이전 문자와 다를 경우에만 추가
        if s[i] != s[i - 1]:
            result += s[i]

    # 결과 출력
    print(result)
```
