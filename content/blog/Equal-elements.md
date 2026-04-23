---
external : false
title : "Equal Elements"
tag : [Codechef, Python]
date : 2026-04-23
---

## 1. Problem

해당 문제는 [여기](https://www.codechef.com/practice/course/arrays-strings-sorting/INTARR01/problems/EQUALELE)에서 확인하실 수 있습니다.

## 2. Answer

```py
# 표준 입력을 빠르게 처리하기 위해 sys 모듈을 사용
import sys
# input 함수를 sys.stdin.readline으로 대체하여 입력 속도 향상
input = sys.stdin.readline

# 테스트 케이스 개수 입력
T = int(input())

# 각 테스트 케이스에 대해 반복
for _ in range(T):
    # 배열의 크기 입력
    N = int(input())
    # 배열 원소들을 공백 기준으로 입력받아 정수 리스트로 변환
    A = list(map(int, input().split()))

    # 각 숫자의 등장 횟수를 저장할 딕셔너리
    freq = {}
    # 가장 많이 등장한 원소의 개수를 저장할 변수
    max_count = 0

    # 배열을 순회하며 각 값의 빈도 계산
    for x in A:
        # 현재 값의 등장 횟수를 1 증가 (없으면 0에서 시작)
        freq[x] = freq.get(x, 0) + 1
        # 최대 등장 횟수 갱신
        if freq[x] > max_count:
            max_count = freq[x]

    # 최소 연산 횟수 출력 (전체 개수 - 가장 많이 등장한 개수)
    print(N - max_count)
```
