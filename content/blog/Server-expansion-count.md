---
external : false
title : "Server expansion count"
tag : [Programmers, Python]
date : 2025-05-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/389479?language=python3)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(players, m, k):
  active_servers = [0] * 24  # 각 시간대별로 운영 중인 서버 수를 저장하는 리스트
  answer = 0  # 총 서버 증설 횟수

  for t in range(24):
    required = players[t] // m  # 현재 시간대에 필요한 서버 수 (m명당 1대)
    current = active_servers[t]  # 현재 시간대에 운영 중인 서버 수

    if current < required:
      need = required - current  # 추가로 필요한 서버 수
      answer += need  # 증설 횟수 누적

      # 증설한 서버는 k시간 동안 운영됨
      for j in range(k):
        if t + j < 24:
          active_servers[t + j] += need  # 해당 시간대에 서버 수 반영

  return answer  # 최소 서버 증설 횟수 반환
```
