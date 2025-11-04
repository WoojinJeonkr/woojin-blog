---
external : false
title : "New recruit"
tag : [Baekjoon, Python]
date : 2025-11-04
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1946)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

T = int(input().strip())  # 테스트 케이스 수 입력

for _ in range(T):
    N = int(input().strip())  # 지원자 수 입력
    applicants = [tuple(map(int, input().split())) for _ in range(N)]  # (서류 순위, 면접 순위)
    applicants.sort()  # 서류 순위를 기준으로 오름차순 정렬

    count = 1  # 첫 번째 지원자는 무조건 선발
    min_interview = applicants[0][1]  # 현재까지의 최소 면접 순위

    for i in range(1, N):
        # 현재 지원자의 면접 순위가 더 높으면(숫자가 작으면) 선발 가능
        if applicants[i][1] < min_interview:
            count += 1
            min_interview = applicants[i][1]  # 최소 면접 순위 갱신

    print(count)  # 선발 가능한 최대 인원 출력
```
