---
external: false
title: "itertools permutations()"
date: 2023-09-04
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/itertools-permutations/problem?isFullScreen=true)

## 2. 정답 코드 (Python)

```python
from itertools import permutations

# 입력을 문자열 S와 정수 K로 분리합니다.
S, K = input().split()

# 문자열 S에서 길이가 K인 순열을 모두 생성하고 사전순으로 정렬합니다.
permutation_list = sorted(list(permutations(S, int(K))))

# 정렬된 순열을 출력합니다.
for i in permutation_list:
    print(''.join(i))
```
