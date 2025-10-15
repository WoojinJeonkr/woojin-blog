---
external : false
title : "Pedestrian heaven"
tag : [Programmers, java]
date : 2025-10-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1832?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
    int MOD = 20170805;

    public int solution(int m, int n, int[][] cityMap) {
        // dp[0][x][y] : 위쪽에서 내려와서 (x, y)에 도착한 경로 수 (세로 방향)
        // dp[1][x][y] : 왼쪽에서 오른쪽으로 와서 (x, y)에 도착한 경로 수 (가로 방향)
        int[][][] dp = new int[2][m + 1][n + 1];

        // 출발점 (0,0)에서의 시작 경로 수
        dp[0][0][0] = 1;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                // 자유 통행 구간(0) → 양쪽 방향의 경로를 모두 다음 칸에 전파
                if (cityMap[i][j] == 0) {
                    // 세로 방향으로 이동 (아래쪽 칸으로)
                    dp[0][i + 1][j] = (dp[0][i + 1][j] + dp[0][i][j] + dp[1][i][j]) % MOD;
                    // 가로 방향으로 이동 (오른쪽 칸으로)
                    dp[1][i][j + 1] = (dp[1][i][j + 1] + dp[0][i][j] + dp[1][i][j]) % MOD;
                }
                // 직진만 허용 구간(2) → 해당 방향의 경로만 다음 칸으로 전파
                else if (cityMap[i][j] == 2) {
                    // 세로 방향으로만 직진
                    dp[0][i + 1][j] = (dp[0][i + 1][j] + dp[0][i][j]) % MOD;
                    // 가로 방향으로만 직진
                    dp[1][i][j + 1] = (dp[1][i][j + 1] + dp[1][i][j]) % MOD;
                }
                // 통행 불가 구간(1)은 아무것도 하지 않음 → 자연스럽게 경로 수 0 처리
            }
        }

        // 도착점 (m-1, n-1)에 도착하는 경로 수 = 세로 방향 + 가로 방향
        return (dp[0][m - 1][n - 1] + dp[1][m - 1][n - 1]) % MOD;
    }
}
```
