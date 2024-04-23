---
external : false
title : "Strong Password"
tag : [Hackerrank, Java]
date : 2024-04-23
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static int minimumNumber(int n, String password) {
  int addNum = 0;
  // 비밀번호에 숫자가 없는 경우
  if (!password.chars().anyMatch(Character::isDigit)) {
    addNum++;
  }
  // 비밀번호에 소문자가 없는 경우
  if (!password.chars().anyMatch(Character::isLowerCase)) {
    addNum++;
  }
  // 비밀번호에 대문자가 없는 경우
  if (!password.chars().anyMatch(Character::isUpperCase)) {
    addNum++;
  }
  // 비밀번호에 특수문자가 없는 경우
  if (!password.chars().anyMatch(ch -> "!@#$%^&*()-+".indexOf((char) ch) >= 0)) {
    addNum++;
  }
  addNum = Math.max(addNum, 6 - password.length());
  return addNum;
}
```
