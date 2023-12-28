---
external: false
title: "String Formatting"
date: 2023-12-21
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/python-string-formatting/problem?isFullScreen=true)

## 2. 정답 코드 (python)

```python
# 주어진 숫자까지의 숫자를 10진수, 8진수, 16진수, 2진수 형식으로 출력하는 함수
def print_formatted(number):
    width = len(bin(number)[2:])  # 숫자의 이진수 표현의 최대 길이 계산

    # 1부터 주어진 숫자까지 반복하면서 각 숫자를 10진수, 8진수, 16진수, 2진수 형식으로 출력
    for i in range(1, number + 1):
        decimal = str(i)  # 10진수 표현
        octal = oct(i)[2:]  # 8진수 표현 (접두어 '0o' 제외)
        hexadecimal = hex(i)[2:].upper()  # 16진수 표현 (접두어 '0x' 제외, 대문자로 변환)
        binary = bin(i)[2:]  # 2진수 표현 (접두어 '0b' 제외)
        
        # 각 형식에 대해 지정된 너비(width)에 맞춰 정렬하여 출력
        print("{:>{width}} {:>{width}} {:>{width}} {:>{width}}".format(decimal, octal, hexadecimal, binary, width=width))

if __name__ == '__main__':
    n = int(input())  # 사용자로부터 숫자를 입력받음
    print_formatted(n)  # print_formatted 함수 호출하여 결과 출력
```
