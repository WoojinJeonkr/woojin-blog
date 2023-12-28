---
external: false
title: "Check Subset"
date: 2023-08-13
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/py-check-subset/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)

## 2. 정답 코드 (Python)

```python
# collections 모듈에서 Counter 클래스를 가져옵니다.
from collections import Counter

# 테스트 케이스의 개수를 입력받습니다.
T = int(input())

# 각 테스트 케이스를 처리합니다.
for _ in range(T):
    # A 집합의 길이를 입력받습니다.
    A_leng = input()
    
    # A 집합의 원소들을 공백을 기준으로 분리하여 정수로 변환하고 리스트로 저장합니다.
    A_set = map(int, input().split())
    
    # B 집합의 길이를 입력받습니다.
    B_leng = input()
    
    # B 집합의 원소들을 공백을 기준으로 분리하여 정수로 변환하고 리스트로 저장합니다.
    B_set = map(int, input().split())

    # A 집합의 각 원소의 개수를 세어 Counter 객체를 생성합니다.
    counterA = Counter(A_set)
    
    # B 집합의 각 원소의 개수를 세어 Counter 객체를 생성합니다.
    counterB = Counter(B_set)
    
    # 모든 A 집합의 원소들에 대해, 해당 원소의 개수가 B 집합의 해당 원소의 개수보다 작거나 같은지 검사합니다.
    # 만약 모든 원소들이 조건을 만족하면 "True"를 출력하고, 그렇지 않으면 "False"를 출력합니다.
    if all(counterA[item] <= counterB[item] for item in counterA):
        print("True")
    else:
        print("False")
```
