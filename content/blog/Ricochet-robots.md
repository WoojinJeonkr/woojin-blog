---
external : false
title : "Ricochet robots"
tag : [Programmers, Java]
date : 2024-10-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/169199)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 보드게임판에서 로봇을 목표 위치로 최소 이동 횟수만큼 이동시키는 문제로, 이동 경로를 찾는 방식에 적합한 너비 우선 탐색(BFS) 알고리즘을 사용하여 해결할 수 있습니다. 말은 상하좌우로 미끄러져 이동하며, 장애물이나 게임판의 가장자리에 부딪힐 때까지 계속 이동하게 됩니다. 이러한 이동 방식은 한 번에 한 칸씩 이동하는 것이 아니라 장애물에 부딪힐 때까지 이동하는 방식이므로, 모든 가능한 경로를 탐색해야 합니다.

우선, BFS를 적용하기 위해 시작 위치인 로봇의 좌표와 목표 위치인 목표 지점의 좌표를 찾아 큐에 넣고 탐색을 시작합니다. BFS는 현재 위치에서 네 방향으로 말이 미끄러질 수 있는 최대한의 거리를 탐색한 후, 그 위치에서 다시 BFS를 진행하는 방식입니다.

탐색 중에 이미 방문한 위치는 다시 방문하지 않도록 방문 체크 배열을 사용하여 중복된 탐색을 방지합니다. 큐에서 꺼낸 현재 위치가 목표 지점일 경우 그때까지의 이동 횟수를 반환하고, 모든 가능한 경로를 탐색한 후에도 목표 지점에 도달하지 못하면 -1을 반환하는 방식으로 해결합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(String[] board) {
    int rows = board.length;
    int cols = board[0].length();
    
    // 상, 하, 좌, 우 방향 벡터
    int[] dx = {-1, 1, 0, 0};
    int[] dy = {0, 0, -1, 1};
    
    // 방문 여부를 체크하는 배열
    boolean[][] visited = new boolean[rows][cols];
    
    // BFS를 위한 큐
    Queue<int[]> queue = new LinkedList<>();
    
    int startX = 0, startY = 0, goalX = 0, goalY = 0;
    
    // 로봇(R)과 목표(G)의 위치를 찾음
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (board[i].charAt(j) == 'R') {
          startX = i;
          startY = j;
        } else if (board[i].charAt(j) == 'G') {
          goalX = i;
          goalY = j;
        }
      }
    }
    
    // 시작 위치 큐에 삽입 (x좌표, y좌표, 이동 횟수)
    queue.add(new int[]{startX, startY, 0});
    visited[startX][startY] = true;
    
    while (!queue.isEmpty()) {
      int[] current = queue.poll();
      int x = current[0];
      int y = current[1];
      int moves = current[2];
      
      // 목표 위치에 도달했으면 이동 횟수를 반환
      if (x == goalX && y == goalY) {
        return moves;
      }
      
      // 4방향으로 말이 이동할 수 있음
      for (int i = 0; i < 4; i++) {
        int nx = x;
        int ny = y;
        
        // 벽 또는 장애물에 부딪힐 때까지 계속 이동
        while (true) {
          int nextX = nx + dx[i];
          int nextY = ny + dy[i];
          
          // 범위를 벗어나거나 장애물을 만났을 때 멈춤
          if (nextX < 0 || nextX >= rows || nextY < 0 || nextY >= cols || board[nextX].charAt(nextY) == 'D') {
            break;
          }
          
          nx = nextX;
          ny = nextY;
        }
        
        // 이동한 위치가 방문한 적 없을 때만 큐에 넣음
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.add(new int[]{nx, ny, moves + 1});
        }
      }
    }
    
    // 목표 지점에 도달할 수 없으면 -1 반환
    return -1;
  }
}
```
