---
external : false
title : "Hat Circle"
tag : [Baekjoon, Python]
date : 2026-03-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/32364)에서 확인하실 수 있습니다.

## 2. Answer

```py
# sys 모듈 import
import sys

# 빠른 입력을 위해 readline 사용
input = sys.stdin.readline

# 사람 수 N 입력 (항상 짝수)
N = int(input())

# 각 좌석의 모자 번호를 정수 리스트로 저장
H = [int(input()) for _ in range(N)]

# 원형에서 정반대 위치 간 거리 계산 (N/2)
half = N // 2

# 조건을 만족하는 사람 수 카운트 변수 초기화
count = 0

# 앞 절반 좌석만 순회하며 반대편과 비교
for i in range(half):
    # 현재 좌석과 정반대 좌석의 모자 번호가 같은지 확인
    if H[i] == H[i + half]:
        # 서로 마주보는 두 사람 모두 조건 만족 → 2명 증가
        count += 2

# 결과 출력
print(count)
```
