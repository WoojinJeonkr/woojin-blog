---
external : false
title : "Farthest node"
tag : [Programmers, Java]
date : 2024-11-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/49189)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하려면 먼저 그래프라는 개념을 이해하고, 이를 컴퓨터에서 어떻게 표현할 수 있는지를 알아야 합니다. 그래프는 여러 개의 노드와 그 노드를 연결하는 간선으로 이루어진 구조입니다. 데이터와 데이터 사이의 관계를 나타낼 때 유용한 도구이기도 합니다. 컴퓨터에서는 그래프를 저장하고 처리하기 위해 특정한 방법으로 표현하는데, 이 문제에서는 인접 리스트를 사용합니다. 인접 리스트는 각 노드가 연결된 다른 노드들의 정보를 리스트 형태로 저장하는 방식으로, 메모리를 효율적으로 사용할 수 있습니다.

다음으로, 문제의 핵심은 "1번 노드에서 가장 멀리 떨어진 노드가 몇 개인지"를 찾는 것입니다. 여기서 중요한 점은 "가장 멀리"라는 것이 최단 거리를 기준으로 한다는 것입니다. 이를 계산하기 위해 우리는 BFS이라는 알고리즘을 사용합니다. BFS는 특정 노드에서 시작해 연결된 모든 노드를 한 단계씩 탐색하며 나아가는 방법입니다. 가까운 노드부터 탐색을 확장해 나가기 때문에, 각 노드까지의 최단 거리를 자연스럽게 구할 수 있습니다.

BFS를 통해 1번 노드에서 출발해 모든 노드까지의 최단 거리를 계산한 다음, 이 거리 값들 중에서 가장 큰 값(최대 거리)을 찾습니다. 그리고 이 최대 거리와 같은 거리를 가지는 노드들의 개수를 세면 됩니다. 예를 들어, 1번 노드에서 거리가 3인 노드가 3개 있다면, 답은 3이 되는 식입니다.

그러므로 해당 문제를 풀기 위해서는 아래의 과정을 거치게 됩니다.

1. 먼저 그래프를 인접 리스트 형태로 표현합니다. 이를 통해 각 노드가 연결된 정보를 효율적으로 저장할 수 있습니다.
2. BFS 알고리즘을 사용해 1번 노드에서 시작하여 모든 노드까지의 최단 거리를 계산합니다. BFS는 큐(Queue) 자료 구조를 활용하여 노드를 하나씩 탐색합니다.
3. BFS 탐색 결과로 얻은 최단 거리 배열에서 가장 큰 값을 찾고, 이 값과 같은 거리를 가지는 노드들의 개수를 세어 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int n, int[][] edge) {
    // 그래프를 인접 리스트 형태로 초기화
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
      graph.add(new ArrayList<>());
    }
    
    // 간선 정보를 그래프에 추가
    for (int[] e : edge) {
      graph.get(e[0]).add(e[1]);
      graph.get(e[1]).add(e[0]);
    }
    
    // 각 노드의 최단 거리를 저장할 배열
    int[] distances = new int[n + 1];
    Arrays.fill(distances, -1); // -1로 초기화 (방문하지 않은 상태)
    distances[1] = 0; // 1번 노드의 거리는 0
    
    // BFS를 위한 큐 생성
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(1); // 1번 노드부터 탐색 시작
    
    // BFS 탐색
    while (!queue.isEmpty()) {
      int current = queue.poll(); // 현재 노드
      
      for (int neighbor : graph.get(current)) { // 인접 노드 탐색
        if (distances[neighbor] == -1) { // 방문하지 않은 노드일 경우
          distances[neighbor] = distances[current] + 1; // 거리 업데이트
          queue.offer(neighbor); // 큐에 추가
        }
      }
    }
    
    // 가장 멀리 있는 거리와 해당 거리의 노드 개수 계산
    int maxDistance = 0;
    int count = 0;
    
    for (int distance : distances) {
      if (distance > maxDistance) { // 더 먼 거리가 발견되면
        maxDistance = distance; // 최대 거리 갱신
        count = 1; // 개수 초기화
      } else if (distance == maxDistance) { // 같은 최대 거리라면
        count++; // 개수 증가
      }
    }
    
    return count; // 최대 거리의 노드 개수 반환
  }
}
```
