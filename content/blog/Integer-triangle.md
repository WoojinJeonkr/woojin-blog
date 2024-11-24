---
external : false
title : "Integer triangle"
tag : [Programmers, Java]
date : 2024-11-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/43105)에서 확인하실 수 있습니다.

## 2. Problem solving process

삼각형에서 꼭대기부터 바닥까지 이동하며 거쳐간 숫자의 합이 최대가 되는 경로를 찾기 위해, 동적 계획법을 활용합니다.

문제를 해결하기 위해 각 위치에서 가능한 최대 합을 계산하며 삼각형을 내려옵니다. 이를 위해 2차원 배열을 사용해 현재 위치에서 누적된 최대 합을 저장합니다.

초기에는 삼각형의 꼭대기 값을 기준으로 설정하고, 이후 각 층의 값을 위층에서 계산된 누적 합을 기반으로 갱신합니다. 경계에 있는 값들은 한쪽에서만 영향을 받으므로 단순히 위에서 내려오는 값과 현재 값을 더합니다. 중간에 위치한 값들은 두 경로에서 오는 값 중 더 큰 값과 현재 값을 더해 갱신합니다.

마지막으로 삼각형의 바닥 행에 도달하면 해당 행에서 가장 큰 값을 찾아 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(int[][] triangle) {
    int n = triangle.length;
    int[][] dp = new int[n][n]; // dp[i][j]: i번째 행의 j번째 칸까지의 최대 합
    
    dp[0][0] = triangle[0][0]; // 삼각형 꼭대기 값 초기화
    
    // DP 테이블 채우기
    for (int i = 1; i < n; i++) {
      for (int j = 0; j <= i; j++) {
        if (j == 0) {
          // 맨 왼쪽 칸: 바로 위의 칸에서만 이동 가능
          dp[i][j] = dp[i - 1][j] + triangle[i][j];
        } else if (j == i) {
          // 맨 오른쪽 칸: 바로 위의 대각선 왼쪽 칸에서만 이동 가능
          dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
        } else {
          // 중간 칸: 위의 두 칸 중 최대값 선택
          dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
        }
      }
    }
    
    // 삼각형 바닥에서 최대값 찾기
    int answer = 0;
    for (int i = 0; i < n; i++) {
      answer = Math.max(answer, dp[n - 1][i]);
    }
    
    return answer;
  }
}
```
