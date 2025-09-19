---
external : false
title : "Colored paper 2"
tag : [Baekjoon, Java]
date : 2025-09-19
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/2567)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 색종이 개수 입력
        int paperCount = scanner.nextInt();

        // 100x100 크기의 도화지 배열 생성 (0: 빈칸, 1: 색종이 붙은 칸)
        int[][] canvas = new int[100][100];

        // 색종이 정보를 입력받아 도화지에 표시
        for (int i = 0; i < paperCount; i++) {
            int x = scanner.nextInt(); // 색종이의 왼쪽 아래 x좌표
            int y = scanner.nextInt(); // 색종이의 왼쪽 아래 y좌표

            // 색종이 크기: 10x10
            for (int j = 0; j < 10; j++) {
                for (int k = 0; k < 10; k++) {
                    canvas[x + j][y + k] = 1; // 색종이 영역을 1로 표시
                }
            }
        }

        // 상하좌우 방향 벡터 (우, 좌, 하, 상)
        int[][] directions = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        int borderLength = 0; // 외곽선 길이 초기화

        // 도화지 전체를 순회하며 외곽선 계산
        for (int i = 0; i < 100; i++) {
            for (int j = 0; j < 100; j++) {
                if (canvas[i][j] == 1) { // 색종이가 붙은 칸이면
                    for (int k = 0; k < directions.length; k++) {
                        int dx = directions[k][0];
                        int dy = directions[k][1];
                        int nx = i + dx;
                        int ny = j + dy;

                        // 인접한 칸이 도화지 밖이거나 색종이가 없는 칸이면 외곽선
                        if (nx < 0 || nx > 99 || ny < 0 || ny > 99 || canvas[nx][ny] == 0) {
                            borderLength++;
                        }
                    }
                }
            }
        }

        // 최종 외곽선 길이 출력
        System.out.println(borderLength);
    }
}
```
