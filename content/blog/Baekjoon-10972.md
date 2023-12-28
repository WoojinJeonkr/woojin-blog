---
external: false
title: "Baekjoon 10972"
date: 2023-09-25
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/10972)

## 2. 정답 코드 (Python, memory: 32276KB, time: 48ms)

```python
# 순열의 길이를 입력 받습니다.
N = int(input())

# 순열을 입력받고 리스트로 변환합니다.
permutation = list(map(int, input().split()))

# 순열의 끝부터 감소하면서 인덱스 i를 찾습니다.
i = N - 1
while i > 0 and permutation[i - 1] >= permutation[i]:
    i -= 1

# 만약 i가 0이면 마지막 순열이므로 -1을 출력합니다.
if i == 0:
    print(-1)
else:
    j = N - 1
    # 순열의 끝부터 인덱스 j를 찾습니다.
    while permutation[j] <= permutation[i - 1]:
        j -= 1
    # i-1과 j의 원소를 교환합니다.
    permutation[i - 1], permutation[j] = permutation[j], permutation[i - 1]
    # i 이후의 원소들을 뒤집습니다.
    permutation[i:] = reversed(permutation[i:])
    # 결과 순열을 출력합니다.
    print(*permutation)
```
