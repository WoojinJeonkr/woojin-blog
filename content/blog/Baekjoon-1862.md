---
external: false
title: "Baekjoon 1862"
date: 2023-10-03
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1862)

## 2. 정답 코드 (Python, memory: 31256KB, time: 40ms)

```python
def display_meter(meter):
    # 입력된 숫자의 자릿수를 계산합니다.
    length = len(str(meter))
    result = 0
    
    # 각 자릿수를 처리하는 루프
    for i in range(length):
        # 현재 자릿수의 숫자를 가져옵니다.
        digit = meter % 10
        # 다음 자릿수를 계산하기 위해 입력된 숫자를 10으로 나눕니다.
        meter = meter // 10

        # 현재 자릿수의 숫자가 4보다 큰 경우
        if digit > 4:
            # 9진수에서 4는 5보다 작으므로, 현재 자릿수의 숫자에서 1을 뺀 후 9의 제곱(i)을 곱하여 결과에 더합니다.
            result += (digit - 1) * (9 ** i)
        else:
            # 9진수에서 4 이하의 숫자는 그대로 9의 제곱(i)을 곱하여 결과에 더합니다.
            result += digit * (9 ** i)
    
    # 최종 결과를 출력합니다.
    print(result)

# 사용자로부터 미터 값을 입력받습니다.
meter = int(input())
# display_meter 함수를 호출하여 결과를 출력합니다.
display_meter(meter)
```
