---
external: false
title: "Baekjoon 1987"
tag: [Baekjoon, Java]
date : 2024-02-27
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1987)에서 확인하실 수 있습니다.

## 2. Solve (memory: 18604KB, time: 940ms)

```java
import java.util.*;

public class Main {
  static int R, C;
  static char[][] board;
  static boolean[] visited = new boolean[26]; // 알파벳 방문 여부를 저장하기 위한 배열
  static int maxMove = 0; // 최대 이동 횟수

  // 상하좌우 이동을 위한 배열
  static int[] dr = {-1, 1, 0, 0};
  static int[] dc = {0, 0, -1, 1};

  // DFS를 통해 말의 이동 가능한 최대 횟수를 찾는 함수
  static void dfs(int r, int c, int move) {
    maxMove = Math.max(maxMove, move); // 현재까지의 이동 횟수 중 최댓값 갱신

    visited[board[r][c] - 'A'] = true; // 현재 위치 알파벳 방문 처리

    // 상하좌우로 이동
    for (int i = 0; i < 4; i++) {
      int nr = r + dr[i];
      int nc = c + dc[i];
      // 보드를 벗어나지 않고, 방문한 적이 없는 알파벳인 경우에만 이동 가능
      if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visited[board[nr][nc] - 'A']) {
        dfs(nr, nc, move + 1); // 이동 후 다음 위치로 재귀 호출
      }
    }

    visited[board[r][c] - 'A'] = false; // 이동 후 현재 위치 알파벳 방문 해제
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    R = scanner.nextInt();
    C = scanner.nextInt();
    scanner.nextLine(); // 개행문자 처리

    board = new char[R][C];
    for (int i = 0; i < R; i++) {
      String line = scanner.nextLine();
      for (int j = 0; j < C; j++) {
        board[i][j] = line.charAt(j);
      }
    }

    dfs(0, 0, 1); // 시작 위치 (0, 0)에서 DFS 시작

    System.out.println(maxMove); // 최대 이동 횟수 출력
  }
}

```
