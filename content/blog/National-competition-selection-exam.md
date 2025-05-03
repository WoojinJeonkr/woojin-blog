---
external : false
title : "National competition selection exam"
tag : [Programmers, Python]
date : 2025-05-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181851)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(rank, attendance):
    answer = 0
    # 참석 가능한 학생 필터링
    candidates = []
    for i in range(len(attendance)):
        if attendance[i]:
            candidates.append(i)
    
    # 등수와 인덱스를 튜플로 저장 후 정렬
    ranked = []
    for idx in candidates:
        ranked.append((rank[idx], idx))
    ranked.sort()
    
    # 상위 3명 추출
    a = ranked[0][1]
    b = ranked[1][1]
    c = ranked[2][1]
    
    answer = 10000 * a + 100 * b + c
    return answer
```
