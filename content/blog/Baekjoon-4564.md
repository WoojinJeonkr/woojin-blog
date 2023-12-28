---
external: false
title: "Baekjoon 4564"
date: 2023-08-27
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4564)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# 숫자의 각 자릿수 곱을 계산하는 함수를 정의합니다.
def calculate_digit_card(n):
    card = 1
    for digit in n:
        card *= int(digit)  # 각 자릿수를 가져와서 곱셈 연산을 수행합니다.
    return str(card)  # 곱셈 결과를 문자열로 변환하여 반환합니다.

# 프로그램을 실행하기 위한 메인 함수를 정의합니다.
def main():
    while True:
        n = input()  # 사용자로부터 입력을 문자열로 받습니다.
        if n == '0':
            break  # 입력이 '0'인 경우 루프를 종료합니다.
        while len(n) > 1:
            print(n, end=' ')  # 줄 바꿈 없이 현재 숫자를 출력합니다.
            n = calculate_digit_card(n)  # 숫자의 각 자릿수 곱을 계산합니다.
        print(n)  # 최종 자릿수 곱을 출력합니다.

# 스크립트가 메인 프로그램으로 실행되는지 확인합니다.
if __name__ == "__main__":
    main()  # 메인 함수를 호출하여 프로그램을 실행합니다.
```
