---
external : false
title : "Perfect Number"
tag : [Baekjoon, Python]
date : 2025-11-30
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/14563)에서 확인하실 수 있습니다.

## 2. Answer

```py
def classify_number(n):
    # 진약수 합을 저장할 변수
    s = 1

    # 1의 진약수 합은 0이므로 항상 부족수
    if n == 1:
        return "Deficient"

    import math
    # 2부터 √n 까지 검사하여 약수를 효율적으로 탐색
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            s += i              # i는 약수
            if i != n // i:     # i와 n//i가 다르면 대칭 약수도 추가
                s += n // i

    # 완전수 판별
    if s == n:
        return "Perfect"
    # 부족수 판별
    elif s < n:
        return "Deficient"
    # 과잉수 판별
    else:
        return "Abundant"


# 입력 개수 T
T = int(input())
# 판별할 자연수들
numbers = list(map(int, input().split()))

# 각 숫자 판별 후 출력
for num in numbers:
    print(classify_number(num))
```
