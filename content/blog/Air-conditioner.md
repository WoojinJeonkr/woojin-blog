---
external : false
title : "Air conditioner"
tag : [Programmers, Java]
date : 2024-07-29
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/214289)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int solution(int temperature, int t1, int t2, int a, int b, int[] onboard) {
    int MAX_COST = 1000 * 100; // 최대 비용을 정의
    int OFFSET = 10; // 온도 조정을 위한 오프셋
    
    // 목표 온도와 임계값을 조정
    int adjustedT1 = t1 + OFFSET;
    int adjustedT2 = t2 + OFFSET;
    int adjustedTemperature = temperature + OFFSET;
    
    int numberOfOnboardUnits = onboard.length; // 탑재된 장치의 수
    int maxTemperature = 51; // 최대 온도 범위
    int[][] dp = new int[numberOfOnboardUnits][maxTemperature];
    
    // dp 배열을 최대 비용으로 초기화
    for (int i = 0; i < numberOfOnboardUnits; i++) {
      for (int j = 0; j < maxTemperature; j++) {
        dp[i][j] = MAX_COST;
      }
    }
    
    dp[0][adjustedTemperature] = 0; // 시작 상태의 비용은 0
    
    int direction = 1; // 온도 변화 방향
    
    // 목표 온도와 현재 온도를 비교하여 방향 설정
    if (adjustedTemperature > adjustedT2) {
      direction = -1; // 현재 온도가 목표 온도보다 높으면 감소 방향
    }
    
    // 각 장치에 대해 dp 배열을 채우기
    for (int i = 1; i < numberOfOnboardUnits; i++) {
      for (int j = 0; j < maxTemperature; j++) {
        int minCost = MAX_COST; // 현재 최소 비용 초기화
        
        // 장치가 온도를 조절할 수 있는지 확인
        if ((onboard[i] == 1 && adjustedT1 <= j && j <= adjustedT2) || onboard[i] == 0) {
          
          // 현재 온도에서 한 단계 이동 가능
          if (0 <= j + direction && j + direction < maxTemperature) {
            minCost = Math.min(minCost, dp[i - 1][j + direction]);
          }
          
          // 현재 온도를 유지할 경우의 비용
          if (j == adjustedTemperature) {
            minCost = Math.min(minCost, dp[i - 1][j]);
          }
          
          // 온도를 변경할 경우의 비용
          if (0 <= j - direction && j - direction < maxTemperature) {
            minCost = Math.min(minCost, dp[i - 1][j - direction] + a);
          }
          
          // 목표 온도 범위 내에 있는 경우의 비용
          if (adjustedT1 <= j && j <= adjustedT2) {
            minCost = Math.min(minCost, dp[i - 1][j] + b);
          }
          
          dp[i][j] = minCost; // dp 배열 업데이트
        }
      }
    }
    
    // 마지막 장치에서 가능한 최소 비용을 계산
    int finalCost = dp[numberOfOnboardUnits - 1][0];
    
    for (int j = 1; j < maxTemperature; j++) {
      finalCost = Math.min(finalCost, dp[numberOfOnboardUnits - 1][j]);
    }
    
    return finalCost; // 최소 비용 반환
  }
}
```
