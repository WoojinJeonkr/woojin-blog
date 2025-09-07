---
external : false
title : "Mountain shaped tiling"
tag : [Programmers, Python]
date : 2025-09-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/258705)에서 확인하실 수 있습니다.

## 2. Answer

```py
MOD = 10007

def solution(n, tops):

    a = [0] * n  # 3번 방법으로 덮은 경우의 수
    b = [0] * n  # 1, 2, 4번 방법으로 덮은 경우의 수

    a[0] = 1  # 첫 번째 정삼각형 초기화
    b[0] = 3 if tops[0] else 2  # tops[0]에 따라 초기화

    for k in range(1, n):
        if tops[k]:  # 타일을 올릴 수 있으면
            a[k] = a[k-1] + b[k-1]  # 3번 방법으로 덮은 경우
            b[k] = a[k-1] * 2 + b[k-1] * 3  # 1, 2, 4번 방법으로 덮은 경우
        else:  # 타일을 올릴 수 없으면
            a[k] = a[k-1] + b[k-1]  # 3번 방법으로 덮은 경우
            b[k] = a[k-1] + b[k-1] * 2  # 2, 4번 방법으로 덮은 경우

        a[k] %= MOD
        b[k] %= MOD

    return (a[-1] + b[-1]) % MOD  # 마지막 결과 반환
```
