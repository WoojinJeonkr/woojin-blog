---
external : false
title : "Splitting power grid"
tag : [Programmers, Java]
date : 2024-08-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/86971)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
  public int solution(int n, int[][] wires) {
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
      graph.add(new ArrayList<>());
    }

    // 주어진 전선 정보를 그래프에 추가
    for (int[] wire : wires) {
      graph.get(wire[0]).add(wire[1]);
      graph.get(wire[1]).add(wire[0]);
    }

    int answer = Integer.MAX_VALUE;

    // 각 전선을 끊어보면서 두 개의 네트워크 크기를 계산
    for (int i = 0; i < wires.length; i++) {
      int u = wires[i][0];
      int v = wires[i][1];

      boolean[] visited = new boolean[n + 1];
      visited[u] = true; // 첫 번째 컴포넌트에 포함
      visited[v] = true; // 첫 번째 컴포넌트에 포함

      int sizeOfComponent = 1; // 첫 번째 컴포넌트의 크기
      Stack<Integer> stack = new Stack<>();
      stack.push(u); // DFS 시작 노드 추가

      // DFS를 사용하여 첫 번째 컴포넌트의 크기 계산
      while (!stack.isEmpty()) {
        int node = stack.pop();
        for (int neighbor : graph.get(node)) {
          if (!visited[neighbor]) {
            visited[neighbor] = true; // 방문 처리
            stack.push(neighbor); // 스택에 추가
            sizeOfComponent++; // 컴포넌트 크기 증가
          }
        }
      }

      int sizeOfOtherComponent = n - sizeOfComponent; // 두 번째 컴포넌트의 크기 계산
      int difference = Math.abs(sizeOfComponent - sizeOfOtherComponent); // 크기 차이 계산
      answer = Math.min(answer, difference); // 최소 차이 업데이트
    }

    return answer;
  }
}
```
