---
external: false
title: "Baekjoon 1526"
date: 2023-08-17
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1526)

## 2. 정답 코드 (Python, memory: 31256KB, time: 80ms)

```python
# 골든 넘버를 구하는 함수
def find_largest_golden_number(N):
    def is_golden_number(number):
        while number > 0:
            digit = number % 10
             # 숫자의 각 자릿수가 4 또는 7이 아니면 골든 넘버 X
            if digit != 4 and digit != 7:
                return False
            number //= 10
        # 모든 자릿수가 4 또는 7이므로 골든 넘버
        return True

    # N부터 3까지 (3은 골든 넘버가 아니므로 제외) 거꾸로 반복
    for num in range(N, 3, -1):
        if is_golden_number(num):
            return num  # 찾은 골든 넘버를 반환

N = int(input())  # 사용자로부터 입력 받음: N은 골든 넘버를 탐색할 상한 값
print(find_largest_golden_number(N))  # [N, 4] 범위 내에서 가장 큰 골든 넘버를 출력
```
