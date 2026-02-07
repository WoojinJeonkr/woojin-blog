---
external : false
title : "Shuttlebus"
tag : [Baekjoon, Python]
date : 2026-02-07
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/25625)에서 확인하실 수 있습니다.

## 2. Answer

```py
# x: 서울대입구역 ↔ 제2공학관 한 번 이동하는 데 걸리는 시간(분)
# y: 현재 시각 기준으로 버스가 제2공학관에 도착하기까지 남은 시간(분)
x, y = map(int, input().split())

# y > x 이면 버스는 제2공학관 → 서울대입구역 방향으로 이동 중이므로
# 서울대입구역에 도착하기까지 남은 시간은 y - x
# y < x 이면 버스는 서울대입구역 → 제2공학관 방향으로 이동 중이므로
# 제2공학관 도착 후 다시 돌아와야 하여 y + x 분이 걸림
print(y - x) if y > x else print(y + x)
```
