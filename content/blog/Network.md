---
external : false
title : "Network"
tag : [Programmers, Java]
date : 2024-11-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/43162)에서 확인하실 수 있습니다.

## 2. Problem solving process

네트워크 문제를 해결하기 위해 먼저 주어진 정보를 그래프의 인접 행렬로 간주하고 접근합니다. 컴퓨터는 그래프의 노드로, 두 컴퓨터 간의 연결은 간선으로 표현할 수 있습니다. 이를 통해 문제는 "연결된 노드 집합(네트워크)"을 찾는 문제로 단순화됩니다. 이 과정에서 그래프 탐색 알고리즘인 깊이 우선 탐색(DFS)이나 너비 우선 탐색(BFS)을 활용할 수 있습니다.

해결 방법은 다음과 같습니다. 먼저, 모든 컴퓨터가 탐색되었는지 확인하기 위해 방문 여부를 기록할 배열을 준비합니다. 그런 다음, 각 컴퓨터를 순차적으로 확인하면서 방문되지 않은 컴퓨터를 발견할 때마다 새로운 네트워크로 간주하고 탐색을 시작합니다. 이 탐색 과정에서 해당 컴퓨터와 연결된 모든 컴퓨터를 찾아 방문 처리하고, 같은 네트워크로 묶습니다. 탐색이 완료되면 새로운 네트워크를 발견한 것으로 간주하여 네트워크 개수를 증가시킵니다.

탐색은 DFS를 사용하여 재귀적으로 수행합니다. 현재 컴퓨터와 연결된 다른 컴퓨터를 하나씩 확인하며, 아직 방문하지 않은 컴퓨터가 있으면 해당 컴퓨터를 방문하고 탐색을 이어갑니다. 모든 컴퓨터에 대한 탐색이 끝난 후, 방문 배열과 네트워크 개수를 기반으로 최종 결과를 반환합니다. 이렇게 하면 주어진 연결 정보를 바탕으로 컴퓨터 네트워크의 개수를 효율적으로 구할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int n, int[][] computers) {
    boolean[] visited = new boolean[n]; // 각 컴퓨터의 방문 여부를 저장하는 배열
    int answer = 0; // 네트워크의 개수를 저장하는 변수

    for (int i = 0; i < n; i++) {
      // 아직 방문하지 않은 컴퓨터라면
      if (!visited[i]) {
        dfs(i, computers, visited); // 깊이 우선 탐색으로 네트워크 탐색
        answer++; // 새로운 네트워크 발견 시 개수 증가
      }
    }

    return answer; // 최종 네트워크 개수 반환
  }

  private void dfs(int node, int[][] computers, boolean[] visited) {
    visited[node] = true; // 현재 노드를 방문 처리

    for (int i = 0; i < computers.length; i++) {
      // 연결되어 있고 아직 방문하지 않은 노드라면
      if (computers[node][i] == 1 && !visited[i]) {
        dfs(i, computers, visited); // 재귀 호출로 연결된 컴퓨터 탐색
      }
    }
  }
}
```
