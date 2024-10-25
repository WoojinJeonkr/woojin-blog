---
external : false
title : "Creating stars at intersections"
tag : [Programmers, Java]
date : 2024-10-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/87377)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 여러 직선의 교점을 구한 후, 해당 교점 중 정수 좌표에 위치한 점들에 별 표시를 하여 이를 문자열 형태의 최소 격자판으로 나타내는 작업입니다. 먼저 각 직선은 일반적으로 `Ax + By + C = 0`의 형태로 주어지며, 두 직선의 교점이 존재한다면 공식에 따라 교점을 구할 수 있습니다. 두 직선의 교점이 유일하게 존재하려면 행렬식 `D = A1 * B2 - A2 * B1`이 0이 아니어야 합니다. 그렇지 않으면 두 직선은 평행하거나 일치하여 교점이 없습니다.

교점이 유일하게 존재하는 경우, x와 y는 각각 `(B1 * C2 - B2 * C1) / D`와 `(A2 * C1 - A1 * C2) / D`로 계산됩니다. 이때, 나누어 떨어지는 경우에만 정수 좌표가 되므로, 정수로 표현되는 교점만 따로 저장해둡니다.

모든 직선 쌍에 대해 위 과정을 반복하여 교점 중 정수 좌표를 찾고 나면, 이제 이를 포함하는 최소 크기의 격자판을 그려야 합니다. 정수 좌표로 이루어진 모든 교점들에 대해 x와 y의 최소값과 최대값을 구하여, 별이 그려질 부분을 포함하는 격자판의 크기를 결정합니다.

이후 격자판을 문자 배열로 초기화한 뒤, 각 교점의 위치에 해당하는 좌표에 별(*)을 배치합니다. 이때, y좌표는 배열의 특성상 위아래가 반전되므로, 이를 고려해 교점 좌표를 격자 배열의 정확한 위치에 반영합니다. 마지막으로 이 격자판 배열을 문자열 배열로 변환하여 정답을 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public String[] solution(int[][] line) {
    // 교점 좌표를 저장할 Set 생성 (중복 방지)
    Set<Point> points = new HashSet<>();
    
    int n = line.length;

    // 모든 직선 쌍에 대해 교점 계산
    for (int i = 0; i < n; i++) {
      for (int j = i + 1; j < n; j++) {
        int A1 = line[i][0], B1 = line[i][1], C1 = line[i][2];
        int A2 = line[j][0], B2 = line[j][1], C2 = line[j][2];

        // 두 직선의 교점을 구하기 위한 행렬식 계산
        long D = (long) A1 * B2 - (long) A2 * B1;

        // D가 0이 아니면 교점 존재
        if (D != 0) {
          long xNumerator = (long) B1 * C2 - (long) B2 * C1;
          long yNumerator = (long) A2 * C1 - (long) A1 * C2;

          // x와 y가 정수인지 확인
          if (xNumerator % D == 0 && yNumerator % D == 0) {
            int x = (int) (xNumerator / D);
            int y = (int) (yNumerator / D);
            points.add(new Point(x, y));
          }
        }
      }
    }

    // 교점들의 최소 및 최대 x, y 좌표를 찾음
    int minX = Integer.MAX_VALUE, maxX = Integer.MIN_VALUE;
    int minY = Integer.MAX_VALUE, maxY = Integer.MIN_VALUE;

    for (Point p : points) {
      minX = Math.min(minX, p.x);
      maxX = Math.max(maxX, p.x);
      minY = Math.min(minY, p.y);
      maxY = Math.max(maxY, p.y);
    }

    // 그리드의 가로와 세로 크기 계산
    int width = maxX - minX + 1;
    int height = maxY - minY + 1;
    char[][] grid = new char[height][width];

    // 그리드를 '.'으로 초기화
    for (int i = 0; i < height; i++) {
      Arrays.fill(grid[i], '.');
    }

    // 교점 좌표에 '*' 표시
    for (Point p : points) {
      grid[maxY - p.y][p.x - minX] = '*'; // y 좌표 반전하여 표시
    }

    // 그리드를 문자열 배열로 변환
    String[] answer = new String[height];
    for (int i = 0; i < height; i++) {
      answer[i] = new String(grid[i]);
    }

    return answer;
  }

  // 교점의 x와 y 좌표를 나타내는 Point 클래스 정의
  static class Point {
    int x, y;
    Point(int x, int y) {
      this.x = x;
      this.y = y;
    }
  }
}
```
