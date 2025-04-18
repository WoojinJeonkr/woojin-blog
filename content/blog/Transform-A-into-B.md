---
external : false
title : "Transform A into B"
tag : [Programmers, Python]
date : 2025-04-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120886)에서 확인하실 수 있습니다.

## 2. Answer 1

내장함수를 사용하지 않고 직접 구현하려면 각 알파벳의 개수를 세어서 비교하면 됩니다.

```python
def solution(before, after):
  # 알파벳 개수를 저장할 리스트 (a~z: 26개)
  count_before = [0] * 26
  count_after = [0] * 26

  for ch in before:
    count_before[ord(ch) - ord('a')] += 1

  for ch in after:
    count_after[ord(ch) - ord('a')] += 1

  # 두 리스트가 같으면 1, 아니면 0 반환
  if count_before == count_after:
    return 1
  else:
    return 0
```

## 3. Answer 2

내장함수 sorted()를 사용한다면 보다 간편하게 구할 수 있습니다.

```python
def solution(before, after):
  # 두 정렬된 리스트가 같으면
  # 두 문자열은 같은 문자를 같은 개수만큼 가지고 있다는 뜻이므로 1을 반환합니다.
  if sorted(before) == sorted(after):
    return 1
  else:
    return 0
```
