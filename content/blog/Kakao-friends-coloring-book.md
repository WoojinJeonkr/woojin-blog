---
external : false
title : "Kakao friends coloring book"
tag : [Programmers, Java]
date : 2025-06-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1829?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```python
import java.util.LinkedList;
import java.util.Queue;

class Solution {
  // 상하좌우 방향 정의
  private static final int[][] DIRECTIONS = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

  public int[] solution(int m, int n, int[][] picture) {
    // 방문 여부를 저장할 배열
    boolean[][] visited = new boolean[m][n];
    int numberOfArea = 0;      // 영역의 개수
    int maxSizeOfOneArea = 0;  // 가장 큰 영역의 크기

    // 모든 칸을 순회
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        // 색칠된 영역이고 방문하지 않았다면
        if (picture[i][j] != 0 && !visited[i][j]) {
          numberOfArea++;  // 영역 개수 증가
          int currentAreaSize = bfs(i, j, m, n, picture, visited); // 영역 크기 계산
          maxSizeOfOneArea = Math.max(maxSizeOfOneArea, currentAreaSize); // 최대값 갱신
        }
      }
    }

    return new int[]{numberOfArea, maxSizeOfOneArea};
  }

  // BFS로 연결된 같은 색상의 영역 크기 계산
  private int bfs(int x, int y, int m, int n, int[][] picture, boolean[][] visited) {
    Queue<int[]> queue = new LinkedList<>();
    queue.offer(new int[]{x, y});
    visited[x][y] = true;
    int color = picture[x][y];
    int size = 0; // 현재 영역의 크기

    while (!queue.isEmpty()) {
      int[] current = queue.poll();
      size++; // 영역 크기 증가

      // 상하좌우 인접 칸 확인
      for (int[] dir : DIRECTIONS) {
        int nx = current[0] + dir[0];
        int ny = current[1] + dir[1];

        // 범위 내에 있고, 같은 색상이며, 방문하지 않았다면
        if (nx >= 0 && nx < m && ny >= 0 && ny < n 
            && !visited[nx][ny] && picture[nx][ny] == color) {
          visited[nx][ny] = true;
          queue.offer(new int[]{nx, ny});
        }
      }
    }
    return size;
  }
}
```
