---
external : false
title : "PCCE storage cleanup"
tag : [Programmers, Python]
date : 2025-06-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250126)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(storage, num):
  clean_storage = []  # 정리된 물건 이름을 저장할 리스트
  clean_num = []      # 정리된 물건 개수를 저장할 리스트
  for i in range(len(storage)):
    # 이미 clean_storage에 해당 물건이 있으면 개수만 더함
    if storage[i] in clean_storage:
      pos = clean_storage.index(storage[i])
      clean_num[pos] += num[i]
    else:
      # 처음 등장하는 물건이면 이름과 개수를 각각 추가
      clean_storage.append(storage[i])
      clean_num.append(num[i])
      
  # 가장 개수가 많은 물건의 개수를 찾음
  max_num = max(clean_num)
  # 가장 개수가 많은 물건의 이름을 찾아서 반환
  answer = clean_storage[clean_num.index(max_num)]
  return answer
```
