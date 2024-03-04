---
external : false
title : "DefaultDict Tutorial"
tag : [Hackerrank, Python]
date : 2024-03-04
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/defaultdict-tutorial/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```python
from collections import defaultdict

# 입력으로 n과 m을 받음
n, m = map(int, input().split())

# 디폴트 딕셔너리 생성
d = defaultdict(list)

# n번 반복하여 첫 번째 답변 입력 후 딕셔너리에 저장
for i in range(n):
  answer1 = input()
  d[answer1].append(i+1)

# m번 반복하여 두 번째 답변을 입력하고 해당하는 인덱스 출력
for j in range(m):
  answer2 = input()
  # 만약 answer2가 딕셔너리에 존재하면 해당하는 인덱스 출력, 아니면 -1 출력
  print(*d[answer2]) if answer2 in d else print(-1)
```
