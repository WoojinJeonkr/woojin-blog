---
external : false
title : "Close Window"
tag : [Baekjoon, Python]
date : 2026-04-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/13909)에서 확인하실 수 있습니다.

## 2. Answer

```py
import math

# 창문의 개수(사람 수)를 입력받음
N = int(input())

# 열려 있는 창문의 개수는 N 이하의 완전제곱수 개수와 같음
# 즉, N의 제곱근의 정수 부분이 정답
print(int(math.isqrt(N)))
```
