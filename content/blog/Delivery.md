---
external : false
title : "Delivery"
tag : [Programmers, Java]
date : 2024-10-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12978)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 최단 경로를 찾는 문제로, 주어진 마을과 도로의 정보를 바탕으로 1번 마을에서 다른 마을로의 최단 배달 시간을 계산하고, 이 시간 내에 배달 가능한 마을의 개수를 세는 방식으로 접근할 수 있습니다.

먼저, 각 마을 간의 도로 정보를 인접 리스트 형태로 저장하여 마을 간의 연결 관계를 쉽게 파악할 수 있도록 합니다. 이를 통해 각 마을과 그에 연결된 마을 및 도로의 소요 시간을 효율적으로 관리할 수 있습니다.

다음으로, 다익스트라 알고리즘을 사용하여 1번 마을에서 시작해 모든 마을까지의 최단 시간을 계산합니다. 다익스트라 알고리즘은 우선순위 큐를 이용해 가장 짧은 경로부터 처리하는 방식으로 구현됩니다. 큐에서 꺼낸 마을을 기준으로 인접한 마을로 가는 경우의 최단 거리 정보를 갱신하고, 새롭게 발견된 최단 거리의 마을을 다시 큐에 추가합니다.

마지막으로, 계산된 최단 거리 배열에서 K 이하의 시간을 가진 마을의 개수를 세어 결과를 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int N, int[][] road, int K) {
    int[] dist = new int[N + 1]; // 각 마을에 대한 최단 거리를 저장할 배열
    Arrays.fill(dist, Integer.MAX_VALUE); // 최단 거리를 무한대로 초기화
    dist[1] = 0; // 1번 마을에서 시작하므로 거리는 0
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]); // 우선순위 큐를 사용하여 다익스트라 알고리즘 구현
    pq.add(new int[]{1, 0}); // {마을 번호, 소요 시간}
    
    List<int[]>[] graph = new ArrayList[N + 1]; // 각 마을에 연결된 도로 정보를 저장할 리스트
    for (int i = 1; i <= N; i++) {
      graph[i] = new ArrayList<>(); // 각 마을에 대한 리스트 초기화
    }
    
    for (int[] r : road) {
      int a = r[0], b = r[1], c = r[2]; // 도로 정보를 가져옴
      graph[a].add(new int[]{b, c}); // 양방향 도로 추가
      graph[b].add(new int[]{a, c}); // 양방향 도로 추가
    }
    
    while (!pq.isEmpty()) {
      int[] current = pq.poll(); // 현재 처리할 마을과 시간을 가져옴
      int now = current[0];
      int time = current[1];
      
      if (time > dist[now]) continue; // 이미 처리된 경우 건너뛴다
      
      for (int[] neighbor : graph[now]) {
        int next = neighbor[0]; // 인접한 마을
        int cost = neighbor[1]; // 인접한 마을까지의 도로 소요 시간
        
        if (dist[next] > time + cost) { // 더 짧은 경로가 발견된 경우
          dist[next] = time + cost; // 최단 거리 업데이트
          pq.add(new int[]{next, dist[next]}); // 큐에 추가
        }
      }
    }
    
    int answer = 0; // 배달 가능한 마을의 개수를 셀 변수
    for (int i = 1; i <= N; i++) {
      if (dist[i] <= K) { // K 이하의 최단 거리인 경우
        answer++; // 카운트 증가
      }
    }
    
    return answer; // 배달 가능한 마을의 개수 반환
  }
}
```
