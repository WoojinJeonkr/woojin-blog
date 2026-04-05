---
external : false
title : "Pilot Rating"
tag : [Baekjoon, Python]
date : 2026-04-05
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/26506)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 파일럿 수 입력 (짝수)
n = int(input())

# 각 파일럿의 점수 입력
ratings = [int(input()) for _ in range(n)]

# 점수 정렬
ratings.sort()

# 팀 최소 점수 초기화
answer = float('inf')

# 양쪽 끝에서 묶기
for i in range(n // 2):
    team_sum = ratings[i] + ratings[n - 1 - i]
    answer = min(answer, team_sum)

# 결과 출력
print(answer)
```
