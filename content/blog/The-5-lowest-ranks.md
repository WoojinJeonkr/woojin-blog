---
external : false
title : "The 5 lowest ranks"
tag : [Programmers, Python]
date : 2025-02-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181853)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(num_list):
  # 리스트 정렬 후 앞에서 5개 슬라이싱
  return sorted(num_list)[:5]
```
