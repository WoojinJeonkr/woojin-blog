---
external : false
title : "String in a String"
tag : [Programmers, Python]
date : 2025-02-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120908)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 2분
2. 해결 시간: 2분
3. 시도 횟수: 1회

## 3. in vs find

| 기능 | `in` | `find()` |
| --- | --- | --- |
| **기능 설명** | 문자열 내에 특정 문자열이 포함되어 있는지 확인 | 문자열 내에서 특정 문자열의 첫 번째 발생 위치를 반환 |
| **반환 값** | `True` (존재) 또는 `False` (존재하지 않음) | 문자열의 첫 번째 발생 위치의 인덱스 (존재하지 않으면 -1) |
| **속도** | 일반적으로 더 빠름 (인덱스 계산 안 함) | 인덱스를 계산해야 하므로 `in`보다 느림 |
| **사용 예시** | `if "abc" in my_string:` | `index = my_string.find("abc")` |
| **옵션 매개변수** | 없음 | `start`, `end` 매개변수를 통해 검색 범위 지정 가능 |

## 4. Answer

```python
def solution(str1, str2):
  # str1 문자열 내에 str2가 포함되어 있는지 확인합니다.
  # 포함되어 있으면 1, 그렇지 않으면 2를 반환합니다.
  return 1 if str2 in str1 else 2
```
