---
external : false
title : "Rotating brackets"
tag : [Programmers, Java]
date : 2024-09-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 문자열 내의 괄호가 올바르게 짝지어져 있는지 확인하고, 문자열을 왼쪽으로 회전시켰을 때 올바른 괄호 문자열이 되는 경우의 수를 구하는 문제입니다. 이를 해결하려면 먼저 괄호 문자열이 올바른지를 판별하는 방법을 알아야 합니다. 여기서 스택 자료구조를 활용하는 것이 효과적입니다. 여는 괄호가 나오면 스택에 추가하고, 닫는 괄호가 나오면 스택의 마지막 요소와 짝이 맞는지 확인해 처리합니다. 문자열을 끝까지 확인한 후 스택이 비어 있으면 해당 문자열은 올바른 괄호 문자열입니다.

그다음, 문자열을 한 칸씩 왼쪽으로 회전시키며 각 회전된 문자열이 올바른지 확인하는 과정이 필요합니다. 문자열 회전은 슬라이싱을 사용해 간단히 구현할 수 있으며, 매 회전마다 앞서 작성한 판별 함수를 사용해 올바른 괄호 문자열인지를 검사합니다. 올바른 문자열이 될 때마다 카운트하여 그 값을 최종적으로 반환하면 됩니다.

## 3. Answer

```java
import java.util.Stack;

class Solution {
  // 올바른 괄호 문자열인지 확인하는 함수
  private boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
      // 여는 괄호는 스택에 추가
      if (c == '(' || c == '{' || c == '[') {
        stack.push(c);
      } else {
        // 닫는 괄호가 나왔을 때 스택이 비어 있으면 false 반환
        if (stack.isEmpty()) return false;
        char top = stack.pop();
        // 닫는 괄호와 스택의 마지막 여는 괄호가 짝이 맞지 않으면 false 반환
        if (c == ')' && top != '(') return false;
        if (c == '}' && top != '{') return false;
        if (c == ']' && top != '[') return false;
      }
    }
    // 스택이 비어 있으면 올바른 괄호 문자열
    return stack.isEmpty();
  }

  public int solution(String s) {
    int answer = 0;
    int n = s.length();

    // 문자열을 왼쪽으로 한 칸씩 회전시키며 검사
    for (int i = 0; i < n; i++) {
      // 회전된 문자열 생성
      String rotated = s.substring(i) + s.substring(0, i);
      // 올바른 괄호 문자열이면 카운트 증가
      if (isValid(rotated)) {
        answer++;
      }
    }

    return answer;
  }
}
```
