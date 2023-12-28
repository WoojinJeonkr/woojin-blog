---
external: false
title: "Baekjoon 4328"
date: 2023-08-30
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/4328)

## 2. 정답 코드 (Python, memory: 31256KB, time: 64ms)

```python
def base_remainder(b, p, m):
    # p를 10진수로 변환하고, m을 10진수 기준으로 나눈 나머지를 계산합니다.
    n = int(p, b) % int(m, b)
    res = []
    
    # 나머지 'n'을 'b' 진법으로 변환합니다.
    while n >= b:
        res.append(str(n % b))
        n = n // b
    res.append(str(n))
    
    # 역순으로 된 숫자 리스트를 다시 정수로 변환합니다.
    return int(''.join(res[::-1]))

# 입력이 '0'인 줄이 나올 때까지 계속해서 입력을 처리합니다.
while True:
    # 입력을 정수 리스트로 읽어옵니다.
    li = list(map(int, input().split()))
    
    # 입력 리스트의 첫 번째 숫자가 0인지 확인하고, 그렇다면 반복문을 종료합니다.
    if li[0] == 0:
        break
    
    # 입력 리스트에서 값을 'b', 'p', 'm'에 할당합니다.
    b, p, m = li[0], li[1], li[2]
    
    # 'base_remainder' 함수를 사용하여 나머지를 계산하고 출력합니다.
    print(base_remainder(b, str(p), str(m)))
```
