---
external: false
title: "Baekjoon 16212"
date: 2023-12-15
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/16212)

## 2. 정답 코드 (python3, memory: 92960KB, time: 520ms, score: 25/25)

```python
# 입력
N = int(input())  # 수열의 길이
sequence = list(map(int, input().split()))  # 수열

# 수열 정렬
sequence.sort()

# 출력
print(" ".join(map(str, sequence)))
```
