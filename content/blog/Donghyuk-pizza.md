---
external : false
title : "Donghyuk pizza"
tag : [Baekjoon, Python]
date : 2026-04-11
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/6502)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 피자 번호를 1부터 시작
pizza_index = 1

# 입력이 끝날 때까지 반복
while True:
    # 한 줄 입력을 받아 정수 리스트로 변환 (r, w, l)
    inputs = list(map(int, input().split()))

    # 첫 번째 값이 0이면 입력 종료
    if inputs[0] == 0:
        break

    # 반지름, 너비, 높이를 각각 변수에 할당
    radius, width, height = inputs

    # 직사각형의 중심에서 꼭짓점까지 거리의 제곱 (대각선의 절반 길이의 제곱)
    diagonal_half_squared = (width / 2) ** 2 + (height / 2) ** 2

    # 원의 반지름 제곱이 위 값보다 크거나 같으면 테이블 위에 올릴 수 있음
    if radius ** 2 >= diagonal_half_squared:
        print(f"Pizza {pizza_index} fits on the table.")
    else:
        print(f"Pizza {pizza_index} does not fit on the table.")

    # 다음 피자 번호로 증가
    pizza_index += 1
```
