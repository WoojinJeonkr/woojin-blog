---
external: false
title: "Baekjoon 7489"
date: 2023-09-18
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/7489)

## 2. 정답 코드 (Python, memory: 31256KB, time: 44ms)

```python
# sys 모듈을 가져옵니다.
# 이 모듈은 시스템 입력을 처리하는 데 사용됩니다.
import sys

# 표준 입력에서 정수 값을 읽어들여 반복할 횟수를 지정합니다.
for _ in range(int(sys.stdin.readline())):
    # 표준 입력에서 정수 값을 읽어들여 n에 할당합니다.
    n = int(sys.stdin.readline())
    
    # 초기값으로 ans를 1로 설정합니다.
    # 이 변수는 팩토리얼을 계산하는 동안 결과를 저장합니다.
    ans = 1
    
    # 1부터 n까지 반복합니다.
    for i in range(1, n + 1):
        # ans에 i를 곱하고 1000000000000으로 나눈 나머지를 구합니다.
        ans *= i
        ans %= 1000000000000
        
        # ans가 10으로 나누어 떨어질 때까지 10으로 나눕니다.
        while ans % 10 == 0:
            ans /= 10
    
    # ans를 10으로 나눈 나머지를 정수로 변환하여 출력합니다.
    print(int(ans % 10))
```
