---
external : false
title : "Expression maximization"
tag : [Programmers, Java]
date : 2024-09-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/67257)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 해결하기 위해서는 주어진 수식에서 연산자의 우선순위를 재정의하여 만들 수 있는 가장 큰 값을 찾아야 합니다. 이를 위해 우선적으로 수식에 포함된 숫자와 연산자를 분리하고, 다양한 우선순위 조합에 따라 수식을 계산하는 방법을 구현해야 합니다.

먼저 수식에서 숫자와 연산자를 추출해야 하므로, 주어진 문자열을 순회하면서 숫자는 리스트에 저장하고, 연산자는 별도의 리스트에 저장합니다. 그 후, 가능한 연산자 우선순위의 모든 경우의 수를 처리해야 합니다. 이때, 연산자의 우선순위는 고정된 순서가 아니라 재정의할 수 있으므로, 세 개의 연산자 +, -, *에 대한 순열을 이용해 총 6가지의 우선순위 조합을 생성합니다.

각 우선순위 조합에 대해 수식을 계산하는 과정에서는 현재 적용할 연산자를 기준으로 수식을 반복적으로 평가합니다. 즉, 첫 번째로 높은 우선순위의 연산자부터 차례대로 수식에 적용하며, 해당 연산자가 등장하는 모든 위치에서 연산을 수행하고 리스트에서 그 연산자와 피연산자를 제거합니다. 이 과정을 모든 연산자가 처리될 때까지 반복한 후 최종 계산된 값을 반환합니다.

계산된 결과는 음수일 경우 절댓값으로 변환하여 처리하며, 이렇게 얻어진 결과들 중 가장 큰 값을 선택하여 반환합니다. 이를 통해 주어진 수식에 대해 연산자의 우선순위를 재정의하여 얻을 수 있는 최대 값을 구할 수 있습니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  // 연산자를 적용하는 함수
  private long applyOperation(long a, long b, char op) {
    switch(op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      default: return 0;
    }
  }

  // 연산자 우선순위에 따라 수식을 계산하는 함수
  private long calculate(List<Long> numbers, List<Character> operators, char[] precedence) {
    List<Long> nums = new ArrayList<>(numbers);
    List<Character> ops = new ArrayList<>(operators);
    
    for (char op : precedence) {
      for (int i = 0; i < ops.size();) {
        if (ops.get(i) == op) {
          long result = applyOperation(nums.get(i), nums.get(i + 1), op);
          nums.set(i, result); // 계산된 값으로 업데이트
          nums.remove(i + 1); // 다음 숫자는 없어짐
          ops.remove(i); // 해당 연산자 제거
        } else {
          i++;
        }
      }
    }
    return nums.get(0); // 최종 계산된 값
  }

  public long solution(String expression) {
    List<Long> numbers = new ArrayList<>(); // 피연산자 저장 리스트
    List<Character> operators = new ArrayList<>(); // 연산자 저장 리스트
    
    // 숫자와 연산자를 분리
    StringBuilder num = new StringBuilder();
    for (char c : expression.toCharArray()) {
      if (Character.isDigit(c)) {
        num.append(c);
      } else {
        numbers.add(Long.parseLong(num.toString())); // 숫자를 리스트에 추가
        num.setLength(0); // 숫자 초기화
        operators.add(c); // 연산자를 리스트에 추가
      }
    }
    numbers.add(Long.parseLong(num.toString())); // 마지막 숫자 추가
    
    // 가능한 연산자 우선순위 조합
    char[][] precedences = {
      {'+', '-', '*'}, 
      {'+', '*', '-'}, 
      {'-', '+', '*'}, 
      {'-', '*', '+'}, 
      {'*', '+', '-'}, 
      {'*', '-', '+'}
    };
    
    long maxResult = 0;
    
    // 각 우선순위에 대해 계산
    for (char[] precedence : precedences) {
      long result = Math.abs(calculate(numbers, operators, precedence)); // 절댓값 처리
      maxResult = Math.max(maxResult, result); // 최대값 갱신
    }
    
    return maxResult;
  }
}
```
