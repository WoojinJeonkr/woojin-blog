---
external: false
title: "Baekjoon 5947"
tag: [Baekjoon, Python]
date : 2024-01-25
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5947)에서 확인 가능합니다.

## 2. Solve (memory: 41356KB, time: 1244ms)

```python
def count_cows(N, NQ, P, responses, criteria):
  count = 0

  # 각 소의 응답을 확인하여 기준을 충족하는지 검사
  for cow_response in responses:
    meet_criteria = True

    # 주어진 기준에 대해 각각의 질문과 답을 비교
    for question, answer in criteria:
      if cow_response[question - 1] != answer:
        meet_criteria = False
        break

    # 모든 기준을 충족하면 소의 수를 증가
    if meet_criteria:
      count += 1

  return count

# 입력 처리
N, NQ, P = map(int, input().split())

responses = []
for _ in range(N):
  response = list(map(int, input().split()))
  responses.append(response)

criteria = []
for _ in range(P):
  Qj, Aj = map(int, input().split())
  criteria.append((Qj, Aj))

# 결과 출력
result = count_cows(N, NQ, P, responses, criteria)
print(result)
```
