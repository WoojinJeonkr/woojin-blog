---
external : false
title : "Process"
tag : [Programmers, Java]
date : 2024-08-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42587)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
  public int solution(int[] priorities, int location) {
    // 프로세스의 인덱스와 우선순위를 저장할 큐를 생성합니다.
    Deque<int[]> queue = new LinkedList<>();
    // 우선순위 큐를 생성하여 가장 높은 우선순위를 추적합니다.
    PriorityQueue<Integer> priorityQueue = new PriorityQueue<>(Collections.reverseOrder());
    
    // 큐와 우선순위 큐에 프로세스를 추가합니다.
    for (int i = 0; i < priorities.length; i++) {
      queue.add(new int[]{i, priorities[i]});
      priorityQueue.add(priorities[i]);
    }
    
    int answer = 0;
    
    // 큐가 비어있지 않을 동안 반복합니다.
    while (!queue.isEmpty()) {
      int[] current = queue.poll();
      int index = current[0];
      int priority = current[1];
      
      // 현재 프로세스의 우선순위가 큐의 가장 높은 우선순위와 같은지 확인합니다.
      if (priority == priorityQueue.peek()) {
        answer++;
        priorityQueue.poll(); // 가장 높은 우선순위의 프로세스를 우선순위 큐에서 제거합니다.
        if (index == location) {
          return answer; // 특정 프로세스의 실행 순서를 반환합니다.
        }
      } else {
        queue.add(current); // 현재 프로세스를 다시 큐의 끝에 추가합니다.
      }
    }
    
    return answer; // 특정 프로세스가 몇 번째로 실행되었는지 반환합니다.
  }
}
```
