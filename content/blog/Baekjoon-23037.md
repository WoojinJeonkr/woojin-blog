---
external: false
title: "Baekjoon 23037"
date: 2023-12-04
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/23037)

## 2. 문제 해석

문제의 목적은 주어진 다섯 자리 수의 각 자릿수를 다섯제곱한 값을 계산하고, 그 합을 출력하는 간단한 프로그램을 작성하는 것입니다.

1. 먼저, 사용자로부터 양의 정수 n을 입력으로 받습니다.
2. 입력받은 다섯 자리 수를 문자열로 변환하여 각 자릿수에 접근할 수 있도록 합니다.
3. 반복문을 사용하여 각 자릿수에 대해 다섯제곱을 계산하고, 이 값을 변수 sum_of_fifth_powers에 누적하여 더합니다.
4. 최종적으로 계산된 다섯제곱의 합인 sum_of_fifth_powers를 출력합니다.

이렇게 하면 문제의 출력값을 만족하는 입력받은 다섯 자리 수의 각 자릿수를 다섯제곱한 값들의 합이 출력할 수 있습니다.

## 3. 정답 코드 (python3, memory: 31120KB, time: 40ms)

```python
# 입력 받기
n = int(input())

# 각 자릿수의 다섯제곱의 합 계산
sum_of_fifth_powers = 0
for digit in str(n):
    sum_of_fifth_powers += int(digit) ** 5

# 결과 출력
print(sum_of_fifth_powers)
```
