---
external : false
title : "PCCP puzzle game challenge"
tag : [Programmers, Python]
date : 2025-06-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340212)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(diffs, times, limit):
  n = len(diffs)

  # 주어진 숙련도(level)로 모든 퍼즐을 풀 수 있는지 확인하는 함수
  def check(level):
    total_time = 0  # 총 소요 시간
    for i in range(n):
      diff = diffs[i]  # 현재 퍼즐의 난이도
      time_cur = times[i]  # 현재 퍼즐의 기본 소요 시간
      time_prev = 0  # 이전 퍼즐의 소요 시간
      if i > 0:
        time_prev = times[i-1] # 첫 번째 퍼즐이 아닐 경우에만 이전 퍼즐 시간 적용

      if diff <= level:
        # 숙련도가 난이도보다 높거나 같으면 퍼즐을 틀리지 않음
        total_time += time_cur
      else:
        # 숙련도가 난이도보다 낮으면 난이도 - 숙련도 만큼 틀림
        wrong_attempts = diff - level
        # 틀린 횟수 * (현재 퍼즐 시간 + 이전 퍼즐 시간) + 현재 퍼즐 시간
        total_time += wrong_attempts * (time_cur + time_prev) + time_cur

      # 총 소요 시간이 제한 시간을 초과하면 더 이상 진행할 필요 없음
      if total_time > limit:
        return False
    return True # 모든 퍼즐을 제한 시간 내에 해결 가능

  # 이분 탐색을 위한 숙련도 범위 설정
  left = 1  # 최소 숙련도는 1
  right = max(diffs) + 1  # 최대 난이도보다 1 큰 값 (가능한 최대 숙련도)
  answer = right  # 정답 초기값 (가장 높은 숙련도로 초기화)

  # 이분 탐색 시작
  while left < right:
    mid = (left + right) // 2  # 중간값 계산 (현재 탐색할 숙련도)

    if check(mid):
      # mid 숙련도로 모든 퍼즐 해결 가능하면, 더 낮은 숙련도를 찾아봄
      answer = mid
      right = mid
    else:
      # mid 숙련도로 모든 퍼즐 해결 불가능하면, 더 높은 숙련도가 필요함
      left = mid + 1

  return answer # 최소 숙련도 반환
```
