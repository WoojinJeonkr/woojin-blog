---
external : false
title : "Reverse"
tag : [Baekjoon, Python]
date : 2026-02-03
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26546)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 표준 입력을 빠르게 처리하기 위해 sys 모듈 사용
import sys

# 입력 속도 향상을 위해 sys.stdin.readline 사용
input = sys.stdin.readline

# 테스트 케이스의 개수 입력
n = int(input())

# n개의 데이터셋에 대해 반복
for _ in range(n):
    # 문자열 s와 제거할 구간의 시작 i, 끝 j 입력
    s, i, j = input().split()
    
    # 인덱스를 정수로 변환
    i, j = int(i), int(j)
    
    # 문자열에서 [i, j) 구간을 제거한 결과 출력
    print(s[:i] + s[j:])
```
