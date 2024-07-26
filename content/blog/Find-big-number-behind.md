---
external : false
title : "Find big number behind"
tag : [Programmers, Java]
date : 2024-07-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/154539)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Stack;

class Solution {
  public int[] solution(int[] numbers) {
    int n = numbers.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    // 결과 배열을 -1로 초기화
    for (int i = 0; i < n; i++) {
      result[i] = -1;
    }
    
    // 오른쪽에서 왼쪽으로 배열을 순회
    for (int i = n - 1; i >= 0; i--) {
      int current = numbers[i];
      
      // 스택에서 현재 원소보다 작거나 같은 값 제거
      while (!stack.isEmpty() && stack.peek() <= current) {
        stack.pop();
      }
      
      // 스택의 현재 가장 위 값이 현재 원소의 뒷 큰수
      if (!stack.isEmpty()) {
        result[i] = stack.peek();
      }
      
      // 현재 원소를 스택에 추가
      stack.push(current);
    }
    
    return result;
  }
}
```
