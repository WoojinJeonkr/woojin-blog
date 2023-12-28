---
external: false
title: "Baekjoon 4388"
date: 2023-07-07
---

## 1. Problem

[문제 확인하기](https://www.acmicpc.net/problem/4388)

## 2. Solution 1 (Python, memory: 31256KB, time: 44ms)

```python
while True:
    # 입력으로 두 수를 받고 두 수가 모두 0인 경우 반복 종료한다.
    num1, num2 = map(int, input().split())
    if num1 == 0 and num2 == 0:
        break

    # 받아올림 횟수를 세는 변수와 이전 자릿수에서의 받아올림 값을 초기화한다.
    carry_count = 0
    carry = 0
    
    # 두 수와 받아올림 값이 모두 0이 될 때까지 반복한다.
    while num1 > 0 or num2 > 0 or carry > 0:
        # 각 자릿수의 합과 이전 받아올림 값과 다음 자릿수로 넘어갈 때의 받아올림 값을 계산한다.
        digit_sum = (num1 % 10) + (num2 % 10) + carry
        carry = digit_sum // 10
        
        # 받아올림이 발생한 경우 받아올림 횟수를 증가시킨다.
        if carry > 0:
            carry_count += 1
        
        # 다음 자릿수로 이동한다.
        num1 //= 10
        num2 //= 10
    
    # 최종 계산된 결과를 출력한다.
    print(carry_count)
```
