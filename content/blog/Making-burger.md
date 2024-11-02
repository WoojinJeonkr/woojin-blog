---
external : false
title : "Making burger"
tag : [Programmers, Java]
date : 2024-11-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/133502)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 재료 배열에서 정해진 순서 [1, 2, 3, 1]에 맞게 재료가 쌓일 때마다 이를 햄버거로 포장해 카운트를 해야 하는 문제입니다. 이를 해결하기 위해 Stack 자료구조를 사용하여 순서를 확인하고 처리하는 방법을 선택했습니다.

먼저, 재료 배열을 순차적으로 순회하면서 각 재료를 스택에 추가합니다. 스택에 재료가 쌓이면 가장 마지막 4개의 요소가 [1, 2, 3, 1]과 같은지 확인해야 합니다. 이를 위해 스택의 크기가 4 이상일 때마다 가장 최근 4개의 요소를 패턴과 비교합니다.

만약 스택의 마지막 4개 요소가 [1, 2, 3, 1]과 일치한다면, 이는 완성된 햄버거를 의미하므로 해당 4개의 요소를 스택에서 제거합니다. 그런 다음, 포장한 햄버거의 개수를 증가시킵니다. 이렇게 배열의 모든 요소를 순회한 후, 최종적으로 포장된 햄버거의 개수를 반환합니다.

## 3. Answer

```java
import java.util.Stack;

class Solution {
  public int solution(int[] ingredient) {
    int answer = 0;
    Stack<Integer> stack = new Stack<>();

    // 재료 배열을 순회합니다.
    for (int item : ingredient) {
      stack.push(item); // 현재 재료를 스택에 추가
      
      // 스택의 마지막 4개 요소가 햄버거 패턴(1, 2, 3, 1)인지 확인
      if (stack.size() >= 4) {
        if (stack.get(stack.size() - 4) == 1 &&
            stack.get(stack.size() - 3) == 2 &&
            stack.get(stack.size() - 2) == 3 &&
            stack.get(stack.size() - 1) == 1) {
          
          // 패턴이 일치하면 햄버거로 포장하고, 해당 재료를 스택에서 제거
          stack.pop();
          stack.pop();
          stack.pop();
          stack.pop();
          
          // 포장한 햄버거 개수를 증가
          answer++;
        }
      }
    }

    return answer; // 최종적으로 포장된 햄버거 개수 반환
  }
}
```
