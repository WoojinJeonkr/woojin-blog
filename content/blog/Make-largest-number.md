---
external : false
title : "Make largest number"
tag : [Programmers, Java]
date : 2024-10-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42883)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 숫자에서 k개의 숫자를 제거해 가장 큰 숫자를 만들어야 하므로, 각 자릿수에서 가능한 한 큰 숫자를 선택하는 것이 중요합니다. 이를 위해 숫자를 왼쪽부터 하나씩 확인하면서, 현재 선택한 숫자가 이전에 선택된 숫자보다 크다면 이전 숫자를 제거하는 방식으로 진행합니다. 이를 반복하면서 가장 큰 숫자를 만들 수 있습니다.

구체적으로, 우리는 각 자릿수의 숫자를 순차적으로 살펴보고, 현재 숫자가 이미 선택된 숫자보다 크다면 앞선 숫자를 제거합니다. 이를 위해 스택과 같은 자료 구조를 활용하여 숫자를 관리합니다. 스택에 숫자를 넣을 때마다, 스택의 마지막 숫자와 현재 숫자를 비교해 만약 현재 숫자가 더 크면 스택의 숫자를 제거하고 새로운 숫자를 추가합니다. 이 과정을 반복하여 가장 큰 숫자를 만들 수 있습니다. 모든 숫자를 처리한 후에도 k개의 숫자를 제거해야 할 수 있으므로, 제거할 숫자가 남아 있으면 결과의 마지막에서 k개의 숫자를 자릅니다.

## 3. Answer

```java
class Solution {
  public String solution(String number, int k) {
    StringBuilder answer = new StringBuilder(); // 결과를 저장할 StringBuilder
    int length = number.length(); // 입력 숫자의 길이

    for (int i = 0; i < length; i++) {
      char current = number.charAt(i); // 현재 문자를 가져옴

      // 스택(문자열) 마지막 문자가 현재 문자보다 작고, 제거할 수 있는 수(k)가 남아있다면 제거
      while (k > 0 && answer.length() > 0 && answer.charAt(answer.length() - 1) < current) {
        answer.deleteCharAt(answer.length() - 1); // 스택에서 마지막 문자 제거
        k--; // 제거한 개수 감소
      }

      answer.append(current); // 현재 문자를 스택에 추가
    }

    // 만약 제거할 숫자가 남아있다면, 뒤에서부터 k개를 제거
    return answer.substring(0, answer.length() - k).toString();
  }
}
```
