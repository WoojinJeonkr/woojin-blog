---
external : false
title : "Frequency sort"
tag : [Baekjoon, Python]
date : 2025-12-30
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2910)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline  # 빠른 입력을 위한 설정

N, C = map(int, input().split())        # N: 메시지 길이, C: 숫자의 최댓값
nums = list(map(int, input().split()))  # 메시지 수열 입력

info = {}  # 각 숫자에 대한 [첫 등장 인덱스, 등장 횟수]를 저장하는 딕셔너리

for idx, num in enumerate(nums):
    if num not in info:       # 처음 등장한 숫자인 경우
        info[num] = [idx, 1]  # 첫 등장 인덱스와 등장 횟수 1로 초기화
    else:                     # 이미 등장한 숫자인 경우
        info[num][1] += 1     # 등장 횟수 증가

# 정렬 기준
# 1) 등장 횟수 내림차순 (-x[1][1])
# 2) 먼저 나온 숫자가 앞에 오도록 첫 등장 인덱스 오름차순 (x[1][0])
sorted_items = sorted(info.items(), key=lambda x: (-x[1][1], x[1][0]))

result = []
for num, (first_idx, cnt) in sorted_items:
    result.extend([num] * cnt)  # 각 숫자를 등장 횟수만큼 결과 리스트에 추가

print(*result)  # 공백으로 구분하여 출력
```
