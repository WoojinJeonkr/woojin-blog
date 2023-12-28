---
external: false
title: "Baekjoon 11576"
date: 2023-11-24
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/11576)

## 2. 정답 코드 (python3, memory: 33240KB, time: 72ms)

```python
import math  # pow 함수를 사용하기 위한 내장함수 import

# a진법의 수를 b진법으로 변환
input_base, output_base = map(int, input().split())

# n자리수인 a진법 수
num_digits = int(input())

# 각 자리의 수를 나타내는 리스트
digits_list = list(map(int, input().split()))

# 10진법으로 표현한 수
decimal_num = 0

# 변환된 결과를 저장할 리스트
output_result = []
output_str = ''

# 10진법으로 변환
for i in range(num_digits):
    decimal_num += int(digits_list[i] * math.pow(input_base, num_digits - i - 1))

# b진법으로 변환
while decimal_num:
    remainder = decimal_num % output_base
    output_result.append(str(remainder))
    decimal_num = decimal_num // output_base

# 결과 역순으로 정렬
output_result = output_result[::-1]

# 결과 문자열 생성
output_str = ' '.join(output_result)

# 결과 출력
print(output_str)
```
