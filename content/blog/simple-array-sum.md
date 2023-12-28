---
external: false
title: "simple array sum"
date: 2023-12-05
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true)

## 2. 문제 해석

입력의 첫 번째 줄에는 리스트 안의 요소의 개수가 주어지고 입력의 두 번째 줄에는 리스트 안의 요소가 한 줄로 띄어쓰기를 통해 주어집니다.
문제의 결과는 리스트 안 요소의 합을 구하는 것이므로 리스트 안 요소를 합해주는 sum을 사용하여 sum(ar)을 simpleArraySum 함수 안에서 리턴하면 됩니다.

## 3. 정답 코드 (Python)

```python
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'simpleArraySum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY ar as parameter.
#

def simpleArraySum(ar):
    # Write your code here
    return sum(ar)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = simpleArraySum(ar)

    fptr.write(str(result) + '\n')

    fptr.close()
```
