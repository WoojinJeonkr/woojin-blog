---
external : false
title : "Biorhythms"
tag : [Baekjoon, Python]
date : 2026-04-01
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/9182)에서 확인하실 수 있습니다.

## 2. Answer

```py
case_num = 1

while True:
    p, e, i, d = map(int, input().split())

    # 종료 조건
    if p == -1 and e == -1 and i == -1 and d == -1:
        break

    # d 다음 날부터 시작
    day = d + 1

    while True:
        # 세 주기의 peak 조건을 모두 만족하는지 확인
        if (day - p) % 23 == 0 and (day - e) % 28 == 0 and (day - i) % 33 == 0:
            # 조건을 만족하면 결과 출력
            print(f"Case {case_num}: the next triple peak occurs in {day - d} days.")
            break

        # 하루씩 증가
        day += 1

    case_num += 1
```
