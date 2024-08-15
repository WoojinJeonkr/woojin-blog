---
external : false
title : "Valid parentheses"
tag : [Programmers, Java]
date : 2024-08-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12909)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Stack;

class Solution {
  // 주어진 문자열이 올바른 괄호 문자열인지 확인하는 함수
  boolean solution(String s) {
    Stack<Character> stack = new Stack<>();

    // 문자열의 각 문자에 대해 반복
    for (char ch : s.toCharArray()) {
      if (ch == '(') {
        // 여는 괄호를 스택에 추가
        stack.push(ch);
      } else if (ch == ')') {
        // 닫는 괄호를 만났을 때
        if (stack.isEmpty()) {
          // 여는 괄호가 없는 상태에서 닫는 괄호가 나왔으면 잘못된 문자열
          return false;
        }
        // 스택에서 여는 괄호를 제거
        stack.pop();
      }
    }

    // 스택이 비어 있으면 모든 괄호가 짝이 맞는 것
    return stack.isEmpty();
  }
}
```
