---
external : false
title : "Delivery box"
tag : [Programmers, Java]
date : 2024-10-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131704)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 컨테이너 벨트에서 일정한 순서대로 택배 상자를 트럭에 실어야 하는 상황을 처리하는 문제로, 상자를 보관할 수 있는 스택 구조를 이용하여 해결할 수 있습니다. 주어진 순서대로 상자를 실을 수 없을 때는 보조 컨테이너 벨트(스택)에 상자를 임시로 보관할 수 있으며, 보조 벨트에서 가장 나중에 보관된 상자부터 다시 꺼낼 수 있는 구조로 동작합니다. 따라서 기본 컨테이너 벨트와 스택을 동시에 활용하여 원하는 순서에 맞게 상자를 실어야 합니다.

문제를 해결하기 위해 먼저 컨테이너 벨트에서 상자가 순서대로 내려오는데, 각 상자를 트럭에 실을 수 있는지 확인합니다. 트럭에 실을 수 없는 상자는 스택에 임시로 보관합니다. 스택의 마지막 상자가 트럭에 실어야 하는 상자라면 스택에서 꺼내 트럭에 싣습니다. 이 과정을 반복하며 더 이상 상자를 실을 수 없을 때는 반복을 중단하고, 지금까지 실은 상자의 개수를 반환합니다.

## 3. Answer

```java
import java.util.Stack;

class Solution {
  public int solution(int[] order) {
    Stack<Integer> stack = new Stack<>();  // 보조 컨테이너 벨트를 위한 스택
    int answer = 0;  // 실을 수 있는 상자의 개수
    int current = 1;  // 현재 컨테이너 벨트에서 내려올 상자 번호 (1번부터 시작)
    
    for (int target : order) {  // target은 트럭에 실어야 하는 상자의 번호
      // 컨테이너 벨트에서 상자를 내려와야 할 때
      while (current <= target) {
        stack.push(current);  // 현재 상자를 스택에 보관
        current++;  // 다음 상자로 이동
      }
      
      // 스택의 맨 위에 있는 상자가 우리가 실어야 하는 상자와 일치하는지 확인
      if (!stack.isEmpty() && stack.peek() == target) {
        stack.pop();  // 맞다면 스택에서 꺼내서 트럭에 싣기
        answer++;  // 트럭에 실은 상자 개수 증가
      } else {
        // 스택의 맨 위 상자가 실어야 하는 상자와 맞지 않으면 더 이상 실을 수 없다.
        break;
      }
    }
    
    return answer;  // 실을 수 있는 상자의 개수를 반환
  }
}
```
