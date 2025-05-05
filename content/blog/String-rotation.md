---
external : false
title : "String rotation"
tag : [Programmers, Python]
date : 2025-05-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120921)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(A, B):
    answer = 0  # 민 횟수를 저장할 변수 초기화
    if len(A) != len(B):  # A와 B의 길이가 다르면 밀어서 만들 수 없음
        return -1
    if A == B:  # A와 B가 이미 같다면 밀 필요 없음
        return 0

    temp_a = A  # A를 직접 변경하지 않고 복사본을 사용
    for i in range(len(A)):
        temp_a = temp_a[-1] + temp_a[:-1]  # 오른쪽으로 한 칸 밀기: 마지막 문자를 맨 앞으로 이동
        answer += 1  # 민 횟수 증가
        if temp_a == B:  # 민 결과가 B와 같다면 현재까지 민 횟수 반환
            return answer
        if temp_a == A:  # 다시 원래 A와 같아졌는데 B가 아니면 만들 수 없음
            return -1

    return -1  # for 루프를 모두 돌았는데 B를 만들지 못했다면 -1 반환
```
