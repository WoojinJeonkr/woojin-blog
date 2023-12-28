---
external: false
title: "Baekjoon 6679"
date: 2023-12-11
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/6679)

## 2. 문제 해석

주어진 문제에서는 "싱기한 네자리 숫자"를 찾아야 하며, 이 숫자는 다음 조건을 만족해야 합니다.

- 10진수, 12진수, 16진수로 나타낸 다음, 각 숫자의 자리수를 더했을 때, 세 값이 모두 같아야 한다.

힌트에 따르면 싱기한 네자리 숫자의 첫 번째 수는 2992이라고 되어 있습니다. 따라서 코드를 작성할 때, 2992부터 시작하여 10진수, 12진수, 16진수의 자리수 합을 비교하면서 조건을 만족하는 숫자를 찾아내야 합니다.
이를 위해 반복문과 각 진법에 대한 자리수 합을 계산하는 방법을 사용하여 가능한 모든 네자리 숫자를 검사하고, 조건을 만족하는 숫자를 찾아내도록 아래와 같이 코드를 작성하면 됩니다.

## 3. 정답 코드 (python3, memory: 31120KB, time: 52ms)

```python
for number in range(2992, 10000):
    temp_number = number
    
    # 16진수
    hex_sum = 0 
    while temp_number != 0:
        hex_sum += temp_number % 16
        temp_number //= 16
    
    temp_number = number
    # 12진수
    twelve_sum = 0
    while temp_number != 0:
        twelve_sum += temp_number % 12
        temp_number //= 12
    
    temp_number = number
    # 10진수
    decimal_sum = 0
    while temp_number != 0:
        decimal_sum += temp_number % 10
        temp_number //= 10
    
    if hex_sum == twelve_sum == decimal_sum:
        print(number)
```
