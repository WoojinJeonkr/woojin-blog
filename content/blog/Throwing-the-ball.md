---
external : false
title : "Throwing the ball"
tag : [Programmers, Python]
date : 2025-08-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120843)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(numbers, k):
    # 공을 던지는 횟수: k-1번
    # k=1이면 0, k=2이면 1

    # 현재 공을 가진 사람의 인덱스
    current_index = 0

    # k-1번 공을 던지는 과정
    for _ in range(k - 1):
        # 오른쪽으로 한 명을 건너뛰고 그다음 사람에게 던지므로, 인덱스를 2 증가
        current_index = current_index + 2
        
        # 배열의 길이를 넘어갈 경우 고려
        current_index = current_index % len(numbers)
    
    # k번째로 공을 던지는 사람의 번호 반환
    answer = numbers[current_index]
    return answer
```
