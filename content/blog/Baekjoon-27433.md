---
external: false
title: "Baekjoon 27433"
date: 2023-07-10
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/27433)

## 2. 풀이 (Python, memory: 31256KB, time: 40ms)

```python
# 정수 N에 대한 N! 값 구하는 함수를 작성합니다.
def factorial(n):
    # 정수 N이 0이라면 1을 반환합니다.
    if n == 0:
        return 1
    
    # 정수 N을 1부터 N까지 차례대로 곱한 뒤 결과를 반환합니다.
    result = 1
    for i in range(1, n+1):
        result *= i
    
    return result

# 정수 N을 입력받습니다.
N = int(input())

# 정수 N에 대한 factorial 함수의 결과를 출력합니다.
print(factorial(N))
```
