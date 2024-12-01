---
external : false
title : "Shortest path in game map"
tag : [Programmers, Java]
date : 2024-12-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1844)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제는 캐릭터가 맵에서 가장 빠르게 목표 지점에 도달할 수 있는 경로를 찾는 과제입니다. 이를 해결하기 위해 맵을 하나의 "그래프"로 생각할 수 있습니다. 그래프는 점(노드)과 선(간선)으로 구성된 구조로, 여기서는 맵의 각 칸이 점이 되고, 인접한 칸들로 이동할 수 있는 경로가 선이 됩니다. 이 구조와 BFS를 사용하여 최단 경로를 구할 수 있습니다.

BFS는 시작 지점에서 가까운 칸부터 차례로 탐색하며, 최단 거리를 계산하는 데 매우 유용합니다. 이 문제에서는 BFS를 사용해 시작 지점에서 출발하여 네 방향(상, 하, 좌, 우)으로 이동하며 목표 지점까지의 최단 경로를 탐색합니다.

알고리즘의 동작 방식은 다음과 같습니다. 먼저, 큐(Queue)라는 자료구조를 사용하여 탐색할 위치를 순서대로 저장합니다. BFS는 먼저 들어온 것을 먼저 처리하는 특징이 있어 큐를 활용하면 탐색 순서를 관리하기 쉽습니다. 시작 지점부터 탐색을 시작하여 네 방향으로 이동합니다. 이동할 때마다 현재 위치에서 몇 칸 떨어져 있는지 계산하며, 방문하지 않은 칸을 탐색 대상으로 추가합니다. 만약 맵의 경계를 벗어나거나 벽(이동 불가능한 칸)을 만나면 해당 경로는 건너뜁니다. 탐색 도중 목표 지점에 도달하면 지금까지 이동한 칸의 수를 반환합니다. 만약 모든 경로를 탐색했음에도 목표 지점에 도달할 수 없다면 -1을 반환합니다.

## 3. Answer

```java
import java.util.LinkedList;
import java.util.Queue;

class Solution {
  public int solution(int[][] maps) {
    int n = maps.length;       // 맵의 행 크기
    int m = maps[0].length;    // 맵의 열 크기
    int[] dx = {-1, 1, 0, 0};  // 상, 하, 좌, 우 이동 방향
    int[] dy = {0, 0, -1, 1};
    
    // BFS를 위한 큐 생성 및 시작 위치 추가
    Queue<int[]> queue = new LinkedList<>();
    queue.add(new int[]{0, 0});
    
    while (!queue.isEmpty()) {
      // 큐에서 현재 위치를 꺼냄
      int[] current = queue.poll();
      int x = current[0];
      int y = current[1];
      
      // 4방향으로 탐색
      for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        // 맵의 범위를 벗어나거나 벽인 경우 건너뜀
        if (nx < 0 || ny < 0 || nx >= n || ny >= m || maps[nx][ny] == 0) {
          continue;
        }
        
        // 방문하지 않은 칸이면 이동 가능
        if (maps[nx][ny] == 1) {
          maps[nx][ny] = maps[x][y] + 1; // 이동 거리 갱신
          queue.add(new int[]{nx, ny}); // 큐에 추가
        }
      }
    }
    
    // 상대 팀 진영에 도달하지 못한 경우 -1 반환
    return maps[n - 1][m - 1] == 1 ? -1 : maps[n - 1][m - 1];
  }
}
```
