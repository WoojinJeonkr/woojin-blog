---
external : false
title : "Maze escape"
tag : [Programmers, Java]
date : 2024-10-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/159993)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 먼저, 주어진 미로에서 시작점(S), 레버(L), 출구(E)의 위치를 파악해야 합니다. 이를 위해 미로를 탐색하면서 각각의 위치를 기록합니다. 이후, 미로의 이동 경로를 찾기 위해 BFS 알고리즘을 사용합니다. BFS는 각 칸을 이동할 때마다 최단 경로를 보장하는 방식으로 탐색을 진행하므로, 미로와 같은 문제에 적합합니다.

BFS 탐색을 통해 시작점에서 레버까지의 최단 경로를 먼저 찾습니다. 만약 레버까지 도달할 수 없다면 더 이상 탐색을 진행할 필요가 없으므로 탈출이 불가능하다는 결과를 반환합니다. 레버에 도착했다면, 다시 BFS를 활용해 레버에서 출구까지의 최단 경로를 계산합니다. 이 과정에서 레버를 당기지 않아도 출구는 지나갈 수 있지만, 문제의 조건에 맞추기 위해 레버를 먼저 당긴 후 출구로 이동해야 합니다.

각 경로 탐색에서 벽이나 미로의 경계를 넘어가지 않도록 범위를 제한하며, 이미 방문한 칸은 다시 방문하지 않도록 처리하여 중복 탐색을 방지합니다. 시작점에서 레버까지의 거리와 레버에서 출구까지의 거리를 합산하여 최종적으로 미로를 탈출하는데 필요한 최소 시간을 구하게 됩니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  // 상, 하, 좌, 우 방향 이동을 위한 배열
  private static final int[] dx = {-1, 1, 0, 0};
  private static final int[] dy = {0, 0, -1, 1};
  
  // BFS 함수: 시작점에서 목표 지점까지의 최단 거리를 구하는 함수
  private int bfs(String[] maps, int startX, int startY, char target) {
    int n = maps.length;    // 미로의 세로 크기
    int m = maps[0].length();  // 미로의 가로 크기
    boolean[][] visited = new boolean[n][m];  // 방문한 칸을 체크하는 배열
    Queue<int[]> queue = new LinkedList<>();  // BFS를 위한 큐
    
    // 시작 위치와 초기 거리를 큐에 삽입
    queue.offer(new int[]{startX, startY, 0});
    visited[startX][startY] = true;  // 시작 위치 방문 처리
    
    // 큐가 빌 때까지 BFS 탐색
    while (!queue.isEmpty()) {
      int[] current = queue.poll();  // 현재 위치와 거리 정보 가져오기
      int x = current[0], y = current[1], dist = current[2];
      
      // 목표 지점에 도달하면 현재까지의 거리 반환
      if (maps[x].charAt(y) == target) {
        return dist;
      }
      
      // 4방향으로 이동 가능 여부 탐색
      for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        // 미로 범위 내에서 벽이 아니고, 아직 방문하지 않은 칸이면 이동
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx].charAt(ny) != 'X' && !visited[nx][ny]) {
          visited[nx][ny] = true;  // 방문 처리
          queue.offer(new int[]{nx, ny, dist + 1});  // 다음 위치와 거리 정보 큐에 삽입
        }
      }
    }
    return -1;  // 목표 지점에 도달할 수 없는 경우
  }
  
  public int solution(String[] maps) {
    int n = maps.length;    // 미로의 세로 크기
    int m = maps[0].length();  // 미로의 가로 크기
    
    // 시작점(S), 레버(L), 출구(E)의 좌표 초기화
    int startX = -1, startY = -1;
    int leverX = -1, leverY = -1;
    int exitX = -1, exitY = -1;
    
    // 미로에서 S(시작점), L(레버), E(출구)의 위치 찾기
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        char cell = maps[i].charAt(j);
        if (cell == 'S') {
          startX = i;
          startY = j;
        } else if (cell == 'L') {
          leverX = i;
          leverY = j;
        } else if (cell == 'E') {
          exitX = i;
          exitY = j;
        }
      }
    }
    
    // 시작점에서 레버까지의 최단 거리 계산
    int toLever = bfs(maps, startX, startY, 'L');
    if (toLever == -1) {
      return -1;  // 레버까지 갈 수 없으면 탈출 불가
    }
    
    // 레버에서 출구까지의 최단 거리 계산
    int toExit = bfs(maps, leverX, leverY, 'E');
    if (toExit == -1) {
      return -1;  // 출구까지 갈 수 없으면 탈출 불가
    }
    
    // 총 이동 시간 반환
    return toLever + toExit;
  }
}
```
