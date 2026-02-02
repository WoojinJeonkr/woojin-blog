---
external : false
title : "Uphill"
tag : [Baekjoon, Python]
date : 2026-02-02
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/14910)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys

# 표준 입력으로 들어온 모든 값을 한 번에 읽어 정수 리스트로 변환
data = list(map(int, sys.stdin.read().split()))

# 수의 개수가 0개 또는 1개이면 항상 비내림차순이므로 Good 출력
if len(data) <= 1:
    print("Good")
    sys.exit(0)

# 인접한 두 수를 비교하면서 앞의 수가 더 크면 비내림차순이 아님
for i in range(len(data) - 1):
    if data[i] > data[i + 1]:
        print("Bad")
        break
# 반복문이 중간에 종료되지 않았다면 비내림차순이므로 Good 출력
else:
    print("Good")
```
