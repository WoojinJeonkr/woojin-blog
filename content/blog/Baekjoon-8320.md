---
external: false
title: "Baekjoon 8320"
date: 2023-09-22
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/8320)

## 2. 정답 코드 (Python, memory: 31256KB, time: 52ms)

```python
# 사용자로부터 정수를 입력받는다
n = int(input())

# square 변수를 초기화하여 결과를 저장할 준비를 한다
square = 0

# i를 1부터 n까지 반복하는 외부 루프
for i in range(1, n+1):
    # j를 i부터 n//i까지 반복하는 내부 루프
    for j in range(i, n//i+1):
        # 각 반복에서 square 변수를 1씩 증가시킨다
        square += 1

# 모든 반복이 끝난 후 square 변수에 저장된 값을 출력한다
print(square)
```
