---
external : false
title : "Halli Galli"
tag : [Baekjoon, Python]
date : 2026-01-14
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/27160)에서 확인하실 수 있습니다.

## 2. Answer

```py
import sys
input = sys.stdin.readline

# 펼쳐진 카드 개수 입력
N = int(input())

# 과일 종류별 총 개수 저장용 딕셔너리 초기화
fruit_count = {
    "STRAWBERRY": 0,
    "BANANA": 0,
    "LIME": 0,
    "PLUM": 0
}

# 카드 정보를 하나씩 입력받아 누적 합산
for _ in range(N):
    # 과일 종류와 개수 입력
    S, X = input().split()
    # 문자열을 정수로 변환
    X = int(X)
    # 해당 과일 개수 누적
    fruit_count[S] += X

# 과일 중 정확히 5개인 것이 있는지 검사
for cnt in fruit_count.values():
    # 하나라도 5면 종을 쳐야 함
    if cnt == 5:
        print("YES")
        break
# 모든 과일이 5가 아니면 종을 치지 않음
else:
    print("NO")
```
