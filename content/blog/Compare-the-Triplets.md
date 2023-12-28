---
external: false
title: "Compare the Triplets"
date: 2023-12-06
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true)

## 2. 문제 해석

이 문제는 두 명의 참가자(여기서는 Alice와 Bob)에게 각각의 문제에 대한 평가 점수가 주어졌을 때, 각 문제에서 어떤 참가자가 더 높은 점수를 받았는지를 비교하여 비교 결과를 통해 두 참가자의 최종 점수를 알 수 있습니다.

점수 계산은 다음과 같은 방식을 따릅니다.

- 만약 Alice의 점수가 해당 문제에서 더 높다면, Alice는 1점을 얻습니다.
- 만약 Bob의 점수가 해당 문제에서 더 높다면, Bob은 1점을 얻습니다.
- 만약 양쪽의 점수가 같다면, 어느 쪽도 점수를 얻지 않습니다.

따라서 작성해야할 compareTriplets(a, b) 함수 안에는 각 문제에 대해 Alice의 점수가 들어있는 a와 Bob의 점수가 들어있는 b를 각각 비교해서 점수를 구해주는 코드가 들어가면 됩니다.

## 3. 정답 코드 (Python)

```python
#!/bin/python3

import math
import os
import random
import re
import sys

# 'compareTriplets' 함수를 완성합니다.
# 함수는 INTEGER_ARRAY 두 개를 받아옵니다.
# 각각의 배열은 다음과 같은 파라미터를 가지고 있습니다:
#  1. INTEGER_ARRAY a: Alice의 문제 평가 점수
#  2. INTEGER_ARRAY b: Bob의 문제 평가 점수
#
# 이 함수는 배열 'a'와 'b'의 각 원소를 비교하여 Alice와 Bob에게 점수를 부여합니다.
# 각 원소를 비교하고, Alice의 점수가 높으면 Alice에게 1점을, Bob의 점수가 높으면 Bob에게 1점을 부여합니다.
# 만약 양쪽의 점수가 같다면 어느 쪽도 점수를 얻지 않습니다.
# 최종적으로 Alice와 Bob이 얻은 총 점수를 담은 튜플을 반환합니다.

def compareTriplets(a, b):
    Alice, Bob = 0, 0
    for i in range(3):
        if a[i] > b[i]:
            Alice += 1
        elif a[i] < b[i]:
            Bob += 1
    return Alice, Bob

if __name__ == '__main__':
    # 출력 결과를 저장할 파일 열기
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # 입력: 사용자로부터 Alice와 Bob의 문제 평가 점수 읽어오기
    a = list(map(int, input().rstrip().split()))
    b = list(map(int, input().rstrip().split()))

    # compareTriplets 함수 호출하여 결과 얻기
    result = compareTriplets(a, b)

    # 결과를 출력 파일에 쓰기
    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    # 출력 파일 닫기
    fptr.close()
```
