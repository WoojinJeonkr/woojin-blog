---
external : false
title : "Binary conversion"
tag : [Baekjoon, Python]
date : 2026-01-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/10829)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 입력받은 자연수 N을 정수로 변환
N = int(input().strip())

# 이진수의 각 자리를 저장할 리스트
binary = []
while N > 0:
    # N을 2로 나눈 나머지를 이진수 한 자리로 저장
    binary.append(str(N % 2))
    # N을 2로 나누어 다음 계산을 위해 갱신
    N //= 2

# 나머지를 구한 순서는 이진수의 역순이므로 뒤집어서 문자열로 합쳐 출력
print(''.join(reversed(binary)))
```
