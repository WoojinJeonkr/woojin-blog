---
external : false
title : "Longest palindrome"
tag : [Programmers, Python]
date : 2025-08-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12904)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(s):
    # 중심에서 양옆으로 확장하며 팰린드롬 길이를 구하는 함수
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1  # 현재 팰린드롬의 길이 반환

    answer = 0
    for i in range(len(s)):
        # 홀수 길이 팰린드롬 확인 (중심이 하나)
        len1 = expand(i, i)
        # 짝수 길이 팰린드롬 확인 (중심이 두 개)
        len2 = expand(i, i + 1)
        # 최대 길이 갱신
        answer = max(answer, len1, len2)

    return answer
```
