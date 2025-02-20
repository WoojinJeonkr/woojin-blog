---
external : false
title : "Create maximum value (1)"
tag : [Programmers, Python]
date : 2025-02-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120847)에서 확인하실 수 있습니다.

## 2. Problem solving metrics

1. 이해 시간: 2분
2. 해결 시간: 4분
3. 시도 횟수: 1회

## 3. Problem solving process

정수 배열에서 두 수를 곱해 만들 수 있는 최댓값을 찾는 문제는 배열 내에서 두 개의 최대 값을 찾아 곱하는 방식으로 해결할 수 있습니다.

이를 위해 Python의 내장 함수인 sorted()를 사용하여 배열을 정렬한 후, 가장 큰 두 수를 곱해 최댓값을 구할 수 있습니다.

배열을 정렬하면 가장 큰 두 수는 배열의 끝에 위치하게 되며, 이를 곱하면 두 수의 곱 중 최댓값을 얻을 수 있습니다.

## 4. Answer

```python
def solution(numbers):
  # 배열을 정렬하여 가장 큰 두 수를 찾음
  sorted_numbers = sorted(numbers)
  
  # 가장 큰 두 수를 곱하여 최댓값을 구함
  answer = sorted_numbers[-1] * sorted_numbers[-2]
  
  return answer
```
