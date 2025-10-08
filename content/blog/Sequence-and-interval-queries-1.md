---
external : false
title : "Sequence and interval queries 1"
tag : [Programmers, Python]
date : 2025-10-08
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181883)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(arr, queries):
    # 각 쿼리를 순서대로 처리
    for s, e in queries:
        # s부터 e까지의 인덱스에 해당하는 값들을 모두 +1
        for i in range(s, e + 1):
            arr[i] += 1
    # 모든 쿼리 처리 후 변경된 배열 반환
    return arr
```
