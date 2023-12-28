---
external: false
title: "Exceptions"
date: 2023-09-10
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/exceptions/problem?isFullScreen=true)

## 2. 정답 코드 (Python)

```python
# 테스트 케이스 개수를 입력받는다.
T = int(input())

# 테스트 케이스 개수만큼 반복하면서 에러 케이스에 대해 출력한다
for _ in range(T):
    a, b = input().split()
    try:
        print(int(int(a)/int(b)))
    except ZeroDivisionError as e:
        print("Error Code: integer division or modulo by zero")
    except ValueError as e:
        print("Error Code:", e)
```
