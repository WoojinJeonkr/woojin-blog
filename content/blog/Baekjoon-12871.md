---
external: false
title: "Baekjoon 12871"
tag: [Baekjoon, Python]
date : 2024-01-11
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/12871)에서 확인 가능합니다.

## 2. Solve (memory: 33240KB, time: 44ms)

```python
import math

def get_least_common_multiple(string_s_len, string_t_len):
  return string_s_len * string_t_len // math.gcd(string_s_len, string_t_len)

def is_same_pattern(s, t):
  len_s = len(s)
  len_t = len(t)
  
  # 두 문자열의 최소 공배수 계산
  standard_len = get_least_common_multiple(len_s, len_t)
  
  # 각 문자열을 최소 공배수만큼 반복하여 비교
  return 1 if s * (standard_len // len_s) == t * (standard_len // len_t) else 0

if __name__ == "__main__":
  # 입력 받기
  s = input().strip()
  t = input().strip()
  
  # 결과 출력
  print(is_same_pattern(s, t))
```
