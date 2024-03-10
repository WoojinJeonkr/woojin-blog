---
external: false
title: 'Baekjoon 1359'
tag : [Baekjoon, Python]
date : 2024-02-10
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1359)에서 확인하실 수 있습니다.

## 2. Solve (memory: 33240KB, time: 44ms)

```python
import math

# 조합을 계산하는 함수
def combination(n, r):
  p = 1
  c = 1
  while r > 0:
    c *= n
    p *= r
    n -= 1
    r -= 1
  return c // p

def main():
  # 입력값 받기
  n, m, k = map(int, input().split())

  res = 0.0
  p = combination(n, m)  # 전체 조합의 분모 계산
  while m >= k:
    if n - m < m - k:  # 분자가 작은 경우 k를 증가시키고 다음 반복문으로 이동
      k += 1
      continue
      
    # 현재 조합 계산하여 결과에 더하기
    c = combination(m, k) * combination(n - m, m - k)
    res += c / p
    k += 1

  print("%.16f" % res)  # 결과 출력

if __name__ == "__main__":
  main()
```
