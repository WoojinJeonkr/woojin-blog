---
external : false
title : "Convert number"
tag : [Programmers, Java]
date : 2024-08-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/154538)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
  public int solution(int x, int y, int n) {
    // x가 y보다 크거나 같다면, 변환할 수 있는지 확인
    if (x >= y) {
      return x == y ? 0 : -1;
    }

    Queue<int[]> queue = new LinkedList<>();
    boolean[] visited = new boolean[y + 1];

    // 시작 상태를 큐에 추가
    queue.add(new int[]{x, 0});
    visited[x] = true;

    // BFS 탐색 시작
    while (!queue.isEmpty()) {
      int[] current = queue.poll();
      int currentValue = current[0];
      int steps = current[1];

      // 현재 값이 y와 같다면 최소 연산 횟수를 반환
      if (currentValue == y) {
        return steps;
      }

      // x에 n을 더한 값을 큐에 추가
      if (currentValue + n <= y && !visited[currentValue + n]) {
        queue.add(new int[]{currentValue + n, steps + 1});
        visited[currentValue + n] = true;
      }

      // x에 2를 곱한 값을 큐에 추가
      if (currentValue * 2 <= y && !visited[currentValue * 2]) {
        queue.add(new int[]{currentValue * 2, steps + 1});
        visited[currentValue * 2] = true;
      }

      // x에 3을 곱한 값을 큐에 추가
      if (currentValue * 3 <= y && !visited[currentValue * 3]) {
        queue.add(new int[]{currentValue * 3, steps + 1});
        visited[currentValue * 3] = true;
      }
    }

    // y에 도달할 수 없는 경우 -1 반환
    return -1;
  }
}
```
