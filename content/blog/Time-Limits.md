---
external : false
title : "Time Limits"
tag : [Baekjoon, Python]
date : 2025-11-29
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/16427)에서 확인하실 수 있습니다.

## 2. Answer

```py
# n: 심사위원 풀이 개수, s: 곱해야 하는 배수
n, s = map(int, input().split())

# 각 풀이의 실행 시간(밀리초) 리스트
times = list(map(int, input().split()))

# 가장 오래 걸린 실행 시간
slowest = max(times)

# 가장 느린 시간 * s (밀리초 기준)
limit_ms = slowest * s

# 밀리초를 초로 변환하며 올림 처리 (정수 초 필요)
# 예: 1500ms → 2초
limit_sec = (limit_ms + 999) // 1000

# 최종 시간 제한(초) 출력
print(limit_sec)
```
