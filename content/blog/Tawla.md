---
external : false
title : "Tawla"
tag : [Baekjoon, Python]
date : 2026-03-05
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/11800)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 테스트 케이스 개수 입력
t = int(sys.stdin.readline())

# 주사위 숫자에 대한 기본 별칭
name = {
    1: "Yakk",
    2: "Doh",
    3: "Seh",
    4: "Ghar",
    5: "Bang",
    6: "Sheesh"
}

# 두 주사위 값이 같은 경우(더블)에 사용하는 별칭
double = {
    1: "Habb Yakk",
    2: "Dobara",
    3: "Dousa",
    4: "Dorgy",
    5: "Dabash",
    6: "Dosh"
}

# 각 테스트 케이스 처리
for i in range(1, t + 1):
    # 두 주사위 값 입력
    a, b = map(int, sys.stdin.readline().split())

    # 두 값이 같은 경우 더블 별칭 사용
    if a == b:
        result = double[a]

    # 5와 6 조합인 경우 특수 규칙 적용
    elif {a, b} == {5, 6}:
        result = "Sheesh Beesh"

    # 일반적인 경우: 큰 수의 별칭 먼저 출력
    else:
        big = max(a, b)
        small = min(a, b)
        result = f"{name[big]} {name[small]}"

    # 결과 출력 (Case 번호 포함)
    print(f"Case {i}: {result}")
```
