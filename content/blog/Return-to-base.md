---
external : false
title : "Return to base"
tag : [Programmers, Java]
date : 2024-11-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/132266)에서 확인하실 수 있습니다.

## 2. Problem solving process

강철부대 부대원들이 복귀할 수 있는 최단 시간을 구하는 문제를 해결하기 위해, 먼저 문제를 그래프 탐색 문제로 분석했습니다. 지도는 지역과 길 정보로 표현되며, 길은 양방향으로 연결된 간선으로 나타낼 수 있습니다. 각 부대원이 복귀할 때 최단 거리를 구하기 위해 BFS를 사용하였습니다. BFS는 출발점에서부터 각 노드까지의 최단 거리를 효율적으로 계산할 수 있는 알고리즘입니다.

이 과정에서 목적지인 강철부대의 위치를 출발점으로 설정하고, 목적지에서부터 역방향으로 탐색을 시작했습니다. 이를 통해 강철부대로 복귀할 수 있는 최소 시간을 계산합니다. 만약 특정 노드가 도달 불가능하다면, 해당 노드의 최단 거리는 -1로 표시됩니다.

최종적으로, 주어진 부대원들의 위치(sources)에 대해 계산된 거리를 배열 형태로 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int[] solution(int n, int[][] roads, int[] sources, int destination) {
    // 그래프를 인접 리스트로 생성
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
      graph.add(new ArrayList<>());
    }
    for (int[] road : roads) {
      graph.get(road[0]).add(road[1]); // 양방향 연결
      graph.get(road[1]).add(road[0]);
    }
    
    // 각 지역까지의 최단 거리를 저장하는 배열
    int[] distance = new int[n + 1];
    Arrays.fill(distance, -1); // 초기값을 -1로 설정 (도달 불가)
    distance[destination] = 0; // 목적지까지의 거리는 0으로 초기화
    
    // BFS를 위한 큐 초기화
    Queue<Integer> queue = new LinkedList<>();
    queue.add(destination);
    
    // BFS를 사용하여 최단 거리 계산
    while (!queue.isEmpty()) {
      int current = queue.poll(); // 현재 지역
      for (int neighbor : graph.get(current)) { // 인접한 지역 탐색
        if (distance[neighbor] == -1) { // 아직 방문하지 않은 경우
          distance[neighbor] = distance[current] + 1; // 거리 갱신
          queue.add(neighbor); // 큐에 추가
        }
      }
    }
    
    // 각 source에 대한 최단 거리 결과 생성
    int[] answer = new int[sources.length];
    for (int i = 0; i < sources.length; i++) {
      answer[i] = distance[sources[i]]; // 최단 거리 또는 -1 반환
    }
    
    return answer;
  }
}
```
