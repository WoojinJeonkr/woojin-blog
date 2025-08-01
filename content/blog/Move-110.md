---
external : false
title : "Move 110"
tag : [Programmers, Python]
date : 2025-08-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/77886)에서 확인하실 수 있습니다.

## 2. Answer

```py
def solution(s):
    answer = []

    for string in s:
        stack = []
        count_110 = 0  # "110" 패턴의 개수를 셈

        # 문자열에서 "110"을 제거하는 과정
        for c in string:
            stack.append(c)
            # 스택의 마지막 3개 문자가 "110"이면 제거
            if len(stack) >= 3 and stack[-3:] == ['1', '1', '0']:
                stack.pop()
                stack.pop()
                stack.pop()
                count_110 += 1  # "110" 패턴 하나 제거했으므로 카운트 증가

        # "110"이 제거된 나머지 문자열
        rest = ''.join(stack)

        # "0"이 마지막으로 등장하는 위치를 찾음
        idx = rest.rfind('0')
        if idx == -1:
            # "0"이 없다면 문자열이 모두 '1'이므로 맨 앞에 "110"들을 삽입
            new_str = '110' * count_110 + rest
        else:
            # "0"이 존재하면 해당 위치 바로 뒤에 "110"들을 삽입
            new_str = rest[:idx+1] + '110' * count_110 + rest[idx+1:]

        # 결과 리스트에 추가
        answer.append(new_str)

    return answer
```
