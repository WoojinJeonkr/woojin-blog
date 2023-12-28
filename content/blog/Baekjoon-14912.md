---
external: false
title: "Baekjoon 14912"
date: 2023-11-16
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/14912)

## 2. 정답 코드 (Python, memory: 31120KB, time: 76ms)

```python
def count_digit_frequency(n, digit):
    count = 0
    # 1부터 n까지의 숫자에 대해 반복
    for i in range(1, n + 1):
        # 각 숫자를 문자열로 변환하고, 특정 숫자(digit)의 빈도수를 세어 count에 더함
        count += str(i).count(str(digit))
    return count

# 입력 받기
n, d = map(int, input().split())

# 결과 출력
result = count_digit_frequency(n, d)
print(result)
```
