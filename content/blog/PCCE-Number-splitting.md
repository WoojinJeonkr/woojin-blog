---
external : false
title : "PCCE Number splitting"
tag : [Programmers, Python]
date : 2025-06-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/340205)에서 확인하실 수 있습니다.

## 2. Answer

```py
number = int(input())  # 입력받은 숫자를 정수로 변환

answer = 0  # 결과값 초기화

# 숫자의 자릿수를 문자열로 계산하여 2자리씩 자를 횟수를 정함
for i in range(len(str(number)) // 2):
  answer += number % 100  # 끝에서 두 자리를 더함
  number //= 100  # 끝 두 자리를 제거

print(answer)  # 최종 합 출력
```
