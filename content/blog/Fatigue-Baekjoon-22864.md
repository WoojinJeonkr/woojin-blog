---
external : false
title : "Fatigue Baekjoon 22864"
tag : [Baekjoon, Python]
date : 2025-03-08
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/22864)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제는 하루 24시간 동안 일을 하거나 쉴 때, 번아웃(피로도가 최대치 M을 초과)되지 않도록 최대한 많은 일을 처리하는 문제입니다. 문제를 해결하기 위해서는 매 시간마다 일을 할지 쉴지를 결정해야 합니다.

우선, 현재 피로도와 최대 피로도를 비교하여 일을 할 수 있는지 판단합니다. 일을 할 수 있다면 피로도를 증가시키고 처리한 일의 양을 더합니다. 만약 피로도가 최대치를 초과할 위험이 있다면 쉬면서 피로도를 감소시킵니다. 이때 피로도가 음수가 되지 않도록 0으로 설정합니다. 이러한 과정을 24시간 동안 반복하여 처리한 일의 총량을 계산하면 됩니다.

## 3. Answer

```python
# 입력 받기
A, B, C, M = map(int, input().split())

# 초기화
fatigue = 0  # 현재 피로도
work_done = 0  # 처리한 일의 양

# 하루는 24시간
for _ in range(24):
  if fatigue + A <= M:  # 일을 할 수 있는 경우
    fatigue += A
    work_done += B
  else:  # 일을 하지 않고 쉬는 경우
    fatigue -= C
    if fatigue < 0:
      fatigue = 0

# 결과 출력
print(work_done)
```
