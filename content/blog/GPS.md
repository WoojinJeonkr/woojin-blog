---
external : false
title : "GPS"
tag : [Programmers, Java]
date : 2025-10-23
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1837?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
    public int solution(int n, int m, int[][] edge_list, int k, int[] gps_log) {
        final int INF = 1_000_000_000; // 매우 큰 값(도달 불가능 상태 표시용)

        // 인접 행렬 생성 (노드 번호는 1부터 n까지)
        boolean[][] adj = new boolean[n + 1][n + 1];
        for (int[] e : edge_list) {
            adj[e[0]][e[1]] = true;
            adj[e[1]][e[0]] = true; // 양방향 그래프이므로 양쪽 다 true
        }

        // dp[t][v] = 시간 t(0부터 시작)에 노드 v에 있을 때의 최소 수정 횟수
        int[][] dp = new int[k][n + 1];
        for (int i = 0; i < k; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = INF; // 초기값: 도달 불가능
            }
        }

        // 시작 위치는 수정 불가하므로 초기화
        dp[0][gps_log[0]] = 0;

        // 시간 t = 1부터 k-1까지 순차적으로 계산
        for (int t = 1; t < k; t++) {
            for (int v = 1; v <= n; v++) {
                // 현재 시간 t에서 GPS가 v라고 되어 있을 때, 값이 다르면 수정 1회 필요
                int cost = (v == gps_log[t]) ? 0 : 1;

                // 이전 시간 t-1의 모든 노드 u를 확인
                for (int u = 1; u <= n; u++) {
                    if (dp[t - 1][u] == INF) continue; // 이전에 도달 불가능한 노드는 건너뜀

                    // 같은 위치에 머물거나 (u == v)
                    // 혹은 인접 노드로 이동할 수 있다면 (adj[u][v])
                    if (u == v || adj[u][v]) {
                        // 이전 상태에서 현재 상태로 이동하는 최소 수정 횟수 갱신
                        dp[t][v] = Math.min(dp[t][v], dp[t - 1][u] + cost);
                    }
                }
            }
        }

        // 마지막 시점의 GPS 위치에 대한 최소 수정 횟수 확인
        int ans = dp[k - 1][gps_log[k - 1]];

        // 도달 불가능하면 -1 반환
        return (ans >= INF) ? -1 : ans;
    }
}
```
