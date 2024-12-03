---
external : false
title : "Deserted island trip"
tag : [Programmers, Java]
date : 2024-12-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/154540)에서 확인하실 수 있습니다.

## 2. Problem solving process

무인도에서 최대 머물 수 있는 날을 계산하기 위해, 지도에서 무인도(숫자로 표현된 영역)를 탐색하는 알고리즘을 설계했습니다. 각 무인도는 상하좌우로 연결된 땅으로 이루어져 있으며, 이를 그래프 형태로 간주하고 BFS 알고리즘을 사용하여 탐색합니다. 먼저 지도 전체를 순회하면서 'X'가 아닌 영역 중 아직 방문하지 않은 칸을 발견하면, 해당 칸을 시작점으로 BFS를 수행합니다. BFS 탐색 과정에서 같은 무인도에 속하는 모든 칸을 방문하며, 해당 칸의 숫자를 누적하여 무인도에서 머물 수 있는 총 일수를 계산합니다. 탐색이 끝나면 계산된 일수를 리스트에 저장하고, 지도 탐색을 계속합니다.

탐색이 완료된 후, 무인도에서 머물 수 있는 날들을 오름차순으로 정렬하여 결과를 반환합니다. 만약 무인도가 하나도 없는 경우에는 결과로 -1을 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int[] solution(String[] maps) {
    int rows = maps.length; // 지도의 행 개수
    int cols = maps[0].length(); // 지도의 열 개수
    boolean[][] visited = new boolean[rows][cols]; // 방문 여부를 확인하는 배열
    List<Integer> islandDays = new ArrayList<>(); // 각 섬에서 최대 머물 수 있는 날을 저장할 리스트

    // 상, 하, 좌, 우 방향 이동을 위한 배열
    int[] dx = { -1, 1, 0, 0 };
    int[] dy = { 0, 0, -1, 1 };

    // 지도 전체를 탐색
    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        // 바다('X')이거나 이미 방문한 경우 스킵
        if (maps[i].charAt(j) == 'X' || visited[i][j]) continue;

        int totalDays = 0; // 현재 섬에서 머물 수 있는 총 일수 초기화
        Queue<int[]> queue = new LinkedList<>(); // BFS를 위한 큐 생성
        queue.add(new int[] { i, j }); // 현재 위치 큐에 추가
        visited[i][j] = true; // 현재 위치 방문 처리

        // BFS를 수행하여 섬 탐색
        while (!queue.isEmpty()) {
          int[] current = queue.poll(); // 큐에서 현재 위치 가져오기
          int x = current[0];
          int y = current[1];

          totalDays += maps[x].charAt(y) - '0'; // 현재 위치의 식량 수를 더함

          // 상, 하, 좌, 우로 이동하며 섬의 다른 부분 탐색
          for (int k = 0; k < 4; k++) {
            int nx = x + dx[k];
            int ny = y + dy[k];

            // 이동 가능한 위치인지 확인
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && 
                maps[nx].charAt(ny) != 'X' && !visited[nx][ny]) {
              queue.add(new int[] { nx, ny }); // 큐에 추가
              visited[nx][ny] = true; // 방문 처리
            }
          }
        }

        // 현재 섬에서 머물 수 있는 총 일수를 리스트에 추가
        islandDays.add(totalDays);
      }
    }

    // 무인도가 없는 경우 -1 반환
    if (islandDays.isEmpty()) return new int[] { -1 };

    // 결과를 오름차순으로 정렬 후 배열로 변환하여 반환
    Collections.sort(islandDays);
    return islandDays.stream().mapToInt(Integer::intValue).toArray();
  }
}
```
