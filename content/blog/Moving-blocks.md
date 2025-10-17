---
external : false
title : "Moving blocks"
tag : [Programmers, Java]
date : 2025-10-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/60063)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    // 보드의 크기
    static int boardSize;
    // 보드 상태 (0: 빈 칸, 1: 벽)
    static int[][] boardMap;
    // 상, 하, 좌, 우 이동을 위한 방향 벡터
    static int[] dirX = {-1, 1, 0, 0};
    static int[] dirY = {0, 0, -1, 1};

    public int solution(int[][] board) {
        boardSize = board.length;
        boardMap = board;
        return bfs();
    }

    /**
     * BFS(너비 우선 탐색)를 통해 로봇이 목표 지점까지
     * 최소 이동 횟수로 도달하는 값을 계산한다.
     */
    static int bfs() {
        Queue<Robot> queue = new LinkedList<>();
        // visited[y][x][orientation]
        // orientation: 0 = 가로, 1 = 세로
        boolean[][][] visited = new boolean[boardSize][boardSize][2];

        // 시작 위치: (0,0)과 (1,0), 가로 방향, 이동 횟수 0
        queue.add(new Robot(0, 0, 1, 0, 0, 0));

        while (!queue.isEmpty()) {
            Robot current = queue.poll();
            int backX = current.backX;
            int backY = current.backY;
            int frontX = current.frontX;
            int frontY = current.frontY;
            int orientation = current.orientation;
            int moveCount = current.moveCount;

            // 이미 방문한 상태라면 건너뜀
            if (visited[backY][backX][orientation] && visited[frontY][frontX][orientation]) continue;
            visited[backY][backX][orientation] = true;
            visited[frontY][frontX][orientation] = true;

            // 로봇의 두 칸 중 하나라도 목표 지점에 도달한 경우
            if ((backX == boardSize - 1 && backY == boardSize - 1)
                    || (frontX == boardSize - 1 && frontY == boardSize - 1)) {
                return moveCount;
            }

            // 1. 상하좌우로 이동
            for (int d = 0; d < 4; d++) {
                int nextBackX = backX + dirX[d];
                int nextBackY = backY + dirY[d];
                int nextFrontX = frontX + dirX[d];
                int nextFrontY = frontY + dirY[d];

                if (isMovable(nextBackX, nextBackY, nextFrontX, nextFrontY)) {
                    queue.add(new Robot(nextBackX, nextBackY, nextFrontX, nextFrontY, orientation, moveCount + 1));
                }
            }

            // 2. 90도 회전
            // 현재 로봇이 가로 방향일 때
            if (orientation == 0) {
                // 위쪽 회전 가능 여부 확인
                if (isMovable(backX, backY - 1, frontX, frontY - 1)) {
                    // 앞쪽 축 기준으로 위로 회전
                    queue.add(new Robot(frontX, frontY, frontX, frontY - 1, 1, moveCount + 1));
                    // 뒤쪽 축 기준으로 위로 회전
                    queue.add(new Robot(backX, backY, backX, backY - 1, 1, moveCount + 1));
                }
                // 아래쪽 회전 가능 여부 확인
                if (isMovable(backX, backY + 1, frontX, frontY + 1)) {
                    // 앞쪽 축 기준으로 아래로 회전
                    queue.add(new Robot(frontX, frontY, frontX, frontY + 1, 1, moveCount + 1));
                    // 뒤쪽 축 기준으로 아래로 회전
                    queue.add(new Robot(backX, backY, backX, backY + 1, 1, moveCount + 1));
                }
            }
            // 현재 로봇이 세로 방향일 때
            else if (orientation == 1) {
                // 오른쪽 회전 가능 여부 확인
                if (isMovable(backX + 1, backY, frontX + 1, frontY)) {
                    // 앞쪽 축 기준으로 오른쪽 회전
                    queue.add(new Robot(frontX, frontY, frontX + 1, frontY, 0, moveCount + 1));
                    // 뒤쪽 축 기준으로 오른쪽 회전
                    queue.add(new Robot(backX, backY, backX + 1, backY, 0, moveCount + 1));
                }
                // 왼쪽 회전 가능 여부 확인
                if (isMovable(backX - 1, backY, frontX - 1, frontY)) {
                    // 앞쪽 축 기준으로 왼쪽 회전
                    queue.add(new Robot(frontX, frontY, frontX - 1, frontY, 0, moveCount + 1));
                    // 뒤쪽 축 기준으로 왼쪽 회전
                    queue.add(new Robot(backX, backY, backX - 1, backY, 0, moveCount + 1));
                }
            }
        }
        // 도달 불가능할 경우
        return -1;
    }

    /**
     * 주어진 두 좌표가 모두 보드 범위 안에 있고
     * 벽이 없는 빈 칸인지 확인한다.
     */
    static boolean isMovable(int x1, int y1, int x2, int y2) {
        if (x1 < 0 || x2 < 0 || x1 > boardSize - 1 || x2 > boardSize - 1
                || y1 < 0 || y2 < 0 || y1 > boardSize - 1 || y2 > boardSize - 1
                || boardMap[y1][x1] == 1 || boardMap[y2][x2] == 1) {
            return false;
        }
        return true;
    }

    /**
     * 로봇의 상태를 나타내는 클래스
     * - backX, backY : 로봇의 뒤쪽 칸 좌표
     * - frontX, frontY : 로봇의 앞쪽 칸 좌표
     * - orientation : 0 = 가로, 1 = 세로
     * - moveCount : 현재까지의 이동 횟수
     */
    static class Robot {
        int backX;
        int backY;
        int frontX;
        int frontY;
        int orientation;
        int moveCount;

        public Robot(int backX, int backY, int frontX, int frontY, int orientation, int moveCount) {
            this.backX = backX;
            this.backY = backY;
            this.frontX = frontX;
            this.frontY = frontY;
            this.orientation = orientation;
            this.moveCount = moveCount;
        }
    }
}
```
