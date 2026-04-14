---
external : false
title : "Tram"
tag : [Baekjoon, Python]
date : 2026-04-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/20738)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

def solve():
    # 입력 속도 향상을 위한 설정
    input = sys.stdin.read
    data = input().split()

    if not data:
        return

    n = int(data[0])
    sum_diff = 0

    # x_i, y_i 좌표를 순회하며 (y_i - x_i)의 합을 구함
    for i in range(n):
        x = int(data[2*i + 1])
        y = int(data[2*i + 2])
        sum_diff += (y - x)

    # 평균값 계산
    result = sum_diff / n

    # 결과 출력 (소수점 6자리까지)
    print(f"{result:.6f}")

if __name__ == "__main__":
    solve()
```
