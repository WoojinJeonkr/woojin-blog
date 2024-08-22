---
external : false
title : "Stock price"
tag : [Programmers, Java]
date : 2024-08-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42584)에서 확인하실 수 있습니다.

## 2. Problem solving process

위 문제를 해결하기 위해, 스택을 활용하여 주식 가격이 떨어지지 않는 기간을 효율적으로 계산할 수 있습니다. 주식 가격 배열을 순회하면서, 현재 가격이 스택의 상단에 있는 인덱스가 가리키는 가격보다 낮아지면, 해당 인덱스에서 가격이 떨어지기까지의 시간을 계산합니다.
이후, 스택에서 해당 인덱스를 제거하고 현재 인덱스를 스택에 추가합니다. 배열을 모두 순회한 후, 스택에 남아 있는 인덱스들은 마지막까지 가격이 떨어지지 않았으므로, 이들에 대한 시간을 별도로 계산하여 결과 배열에 저장합니다.
이 방법을 사용하면 시간 복잡도를 O(n)으로 유지할 수 있어, 큰 데이터 집합에서도 효율적으로 처리할 수 있습니다.

## 3. Answer

```java
import java.util.Stack;

class Solution {
  public int[] solution(int[] prices) {
    int n = prices.length;
    int[] answer = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
      // 현재 가격이 스택의 상단에 있는 가격보다 낮으면
      while (!stack.isEmpty() && prices[i] < prices[stack.peek()]) {
        int index = stack.pop();
        answer[index] = i - index; // 가격이 떨어지기까지의 시간 계산
      }
      stack.push(i); // 현재 인덱스를 스택에 추가
    }
    
    // 스택에 남아있는 인덱스 처리
    while (!stack.isEmpty()) {
      int index = stack.pop();
      answer[index] = n - index - 1; // 마지막까지 가격이 떨어지지 않은 시간 계산
    }
    
    return answer;
  }
}
```
