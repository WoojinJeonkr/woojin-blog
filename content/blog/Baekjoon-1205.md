---
external: false
title: "Baekjoon 1205"
date: 2023-12-16
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/1205)

## 2. 정답 코드 (python3, memory: 92960KB, time: 520ms, score: 25/25)

```python
# 사용자로부터 입력을 받아서 변수에 할당
n, score, p = map(int, input().split())

# 만약 참가자 수가 0이라면 항상 1위로 출력
if n == 0:
  print(1)
else:
  # 참가자의 기존 등수를 리스트로 입력 받음
  rank = list(map(int, input().split()))

  # 특정 상황에서는 -1을 출력하고, 그렇지 않으면 등수를 찾아 출력
  if n == p and rank[-1] >= score:
    # 새로운 점수가 마지막 등수와 같거나 크다면, 삽입이 불가능하므로 -1 출력
    print(-1)
  else:
    # 결과를 초기화하고, 새로운 등수를 찾아서 출력
    result = n + 1
    for i in range(n):
      if rank[i] <= score:
        result = i + 1
        break
    print(result)
```
