---
external : false
title : "Login successful"
tag : [Programmers, Python]
date : 2025-04-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120883)에서 확인하실 수 있습니다.

## 2. Answer

```python
def solution(id_pw, db):
  for user in db:
    if id_pw[0] == user[0]:  # 아이디 일치 확인
      if id_pw[1] == user[1]:  # 비밀번호 일치 확인
        return "login"
      else:
        return "wrong pw"
  return "fail"  # 아이디 일치하는 항목이 없음
```
