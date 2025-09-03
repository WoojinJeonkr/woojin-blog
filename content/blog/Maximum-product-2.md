---
external : false
title : "Maximum product 2"
tag : [Programmers, Python]
date : 2025-09-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120862)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(numbers):
    # numbers 배열을 오름차순 정렬
    numbers.sort()
    
    # 두 가지 경우 중 최댓값 선택
    # 1) 가장 작은 두 수의 곱 (음수 * 음수 = 양수 가능)
    # 2) 가장 큰 두 수의 곱 (양수 * 양수)
    answer = max(numbers[0] * numbers[1], numbers[-1] * numbers[-2])
    
    # 최종 결과 반환
    return answer
```
