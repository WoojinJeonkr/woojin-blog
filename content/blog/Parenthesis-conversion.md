---
external : false
title : "Parenthesis conversion"
tag : [Programmers, Java]
date : 2024-09-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/60058)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 문자열이 "균형잡힌 괄호 문자열"에서 "올바른 괄호 문자열"로 변환하는 작업을 요구합니다. 이를 해결하기 위해서는 먼저 문자열을 두 개의 부분으로 나누어야 합니다. 여기서 첫 번째 부분은 더 이상 분리할 수 없는 "균형잡힌 괄호 문자열"이고, 두 번째 부분은 나머지 문자열이 됩니다. "균형잡힌 괄호 문자열"은 '('와 ')'의 개수가 동일한 문자열을 말하며, "올바른 괄호 문자열"은 괄호의 개수가 맞을 뿐만 아니라 그 짝도 올바르게 이루어져야 합니다.

우선, 주어진 문자열이 비어 있으면 그대로 반환합니다. 그렇지 않으면, 문자열을 가능한 작은 "균형잡힌 괄호 문자열"과 나머지 문자열로 나눕니다. 나뉜 첫 번째 문자열이 "올바른 괄호 문자열"인 경우에는 남은 문자열에 대해 다시 동일한 과정을 반복하여 결과를 결합합니다. 만약 첫 번째 문자열이 "올바른 괄호 문자열"이 아니라면, 새로운 문자열을 만들어야 합니다. 이 과정에서는 빈 문자열을 만들고 첫 번째로 '('를 추가한 후, 나머지 문자열에 대해 재귀적으로 같은 변환 작업을 수행하여 이를 새로운 문자열에 추가합니다. 마지막으로 ')'를 추가하고, 첫 번째 문자열에서 첫 번째와 마지막 문자를 제거한 후 나머지 문자열의 괄호 방향을 뒤집어 결합합니다. 이렇게 생성된 문자열이 최종적으로 반환됩니다.

## 3. Answer

```java
class Solution {

  // "올바른 괄호 문자열"인지 확인하는 함수
  private boolean isCorrect(String s) {
    int balance = 0;
    for (char c : s.toCharArray()) {
      if (c == '(') balance++;
      else balance--;
      if (balance < 0) return false; // 중간에 짝이 맞지 않으면 false 반환
    }
    return balance == 0; // 전체적으로 균형이 맞으면 true 반환
  }

  // 문자열을 균형잡힌 u, v로 분리하는 함수
  private String[] splitUV(String p) {
    int balance = 0;
    int idx = 0;
    do {
      if (p.charAt(idx) == '(') balance++;
      else balance--;
      idx++;
    } while (balance != 0); // 균형이 맞을 때까지 분리
    return new String[] { p.substring(0, idx), p.substring(idx) };
  }

  // 괄호의 방향을 뒤집는 함수
  private String reverseBrackets(String u) {
    StringBuilder reversed = new StringBuilder();
    for (int i = 1; i < u.length() - 1; i++) { // 첫 번째와 마지막 문자를 제외하고
      if (u.charAt(i) == '(') reversed.append(')');
      else reversed.append('(');
    }
    return reversed.toString(); // 괄호를 뒤집어서 반환
  }

  // 주어진 문제 해결을 위한 메인 함수
  public String solution(String p) {
    if (p.isEmpty()) return p; // 1단계: 빈 문자열이면 그대로 반환

    String[] uv = splitUV(p); // 2단계: 문자열을 u, v로 분리
    String u = uv[0];
    String v = uv[1];

    if (isCorrect(u)) {
      return u + solution(v); // 3단계: u가 올바른 경우, v에 대해 재귀적으로 처리
    } else {
      StringBuilder result = new StringBuilder();
      result.append("("); // 4-1: '(' 추가
      result.append(solution(v)); // 4-2: v에 대해 재귀적으로 처리
      result.append(")"); // 4-3: ')' 추가
      result.append(reverseBrackets(u)); // 4-4: u의 첫/마지막 문자 제거 후 뒤집기
      return result.toString(); // 4-5: 생성된 문자열 반환
    }
  }
}
```
