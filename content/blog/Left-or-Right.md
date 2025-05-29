---
external : false
title : "Left or Right"
tag : [Programmers, Python]
date : 2025-05-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181890)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(str_list):
    answer = []
    # 리스트를 순회하면서 'l' 또는 'r'을 찾음
    for i in range(len(str_list)):
    # 먼저 'l'이 나오면 그 왼쪽까지 반환
    if str_list[i] == 'l':
        answer = str_list[:i]
        break
    # 먼저 'r'이 나오면 그 오른쪽부터 반환
    elif str_list[i] == 'r':
        answer = str_list[i+1:] if i+1 < len(str_list) else []
        break
    return answer
```
