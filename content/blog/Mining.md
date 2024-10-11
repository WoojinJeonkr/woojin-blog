---
external : false
title : "Mining"
tag : [Programmers, Java]
date : 2024-10-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/172927)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 광물 채굴 시 사용하는 곡괭이에 따른 피로도를 최소화하는 것이 목표입니다. 주어진 곡괭이와 광물의 조합을 효율적으로 활용하여 필요한 최소 피로도를 계산해야 합니다. 이를 위해 다음과 같은 접근 방법을 사용합니다.

우선, 각 곡괭이별로 광물을 채굴할 때 소모되는 피로도를 미리 정의합니다. 이는 다이아몬드, 철, 돌 곡괭이에 따라 다르게 설정됩니다. 각 곡괭이를 사용할 수 있는 개수에 따라 피로도가 얼마나 소모되는지를 분석합니다.

다음으로, 주어진 광물 리스트를 5개씩 묶어 각 묶음에 대한 피로도를 계산합니다. 이 과정에서 각 곡괭이로 특정 광물 묶음을 캐면 발생하는 피로도를 합산하여, 해당 묶음의 피로도를 저장합니다. 이렇게 계산된 피로도는 각 곡괭이가 가진 개수에 따라 누적되고, 전체 피로도를 최소화하기 위해 가장 높은 피로도를 가진 묶음부터 처리합니다.

마지막으로, 처리한 묶음의 피로도를 바탕으로 곡괭이를 선택하여 사용하고, 남은 곡괭이의 개수를 업데이트합니다. 이 과정을 반복하여 모든 광물을 처리하거나 사용할 수 있는 곡괭이가 소진될 때까지 진행하며, 최종적으로 계산된 총 피로도를 반환합니다.

## 3. Answer

```java
class Solution {

  public int solution(int[] picks, String[] minerals) {
    int answer = 0;

    // 곡괭이 사용 시 피로도를 저장하는 점수판
    int[][] scoreBoard = {
      {1, 1, 1},   // 다이아몬드 곡괭이
      {5, 1, 1},   // 철 곡괭이
      {25, 5, 1}   // 돌 곡괭이
    };

    // 각 광물 묶음의 피로도를 저장하는 배열
    int[][] fatigueList = new int[10][3];
    int bundleCount = 0;

    // 총 사용 가능한 곡괭이 개수
    int totalPicks = picks[0] + picks[1] + picks[2];
    for (int i = 0; i < minerals.length; i += 5) {
      if (totalPicks == 0) break; // 더 이상 곡괭이가 없으면 종료

      // 각 광물 묶음의 피로도를 초기화
      int diaFatigue = 0, ironFatigue = 0, stoneFatigue = 0;
      for (int j = i; j < i + 5; j++) {
        if (j == minerals.length) break; // 광물 리스트의 끝에 도달하면 종료

        String mineral = minerals[j];
        int mineralType = mineral.equals("iron") ? 1 : mineral.equals("stone") ? 2 : 0;

        // 각 곡괭이 타입에 따라 피로도 계산
        diaFatigue += scoreBoard[0][mineralType];
        ironFatigue += scoreBoard[1][mineralType];
        stoneFatigue += scoreBoard[2][mineralType];
      }

      // 피로도를 배열에 저장
      fatigueList[bundleCount][0] = diaFatigue;
      fatigueList[bundleCount][1] = ironFatigue;
      fatigueList[bundleCount][2] = stoneFatigue;
      bundleCount++;
      totalPicks--;
    }

    // 피로도에 따라 내림차순 정렬
    for (int i = 0; i < bundleCount - 1; i++) {
      for (int j = i + 1; j < bundleCount; j++) {
        if (fatigueList[i][2] < fatigueList[j][2]) {
          int[] temp = fatigueList[i];
          fatigueList[i] = fatigueList[j];
          fatigueList[j] = temp;
        }
      }
    }

    // 각 광물 묶음의 피로도를 더하면서 곡괭이 사용
    for (int i = 0; i < bundleCount; i++) {
      int dia = fatigueList[i][0];
      int iron = fatigueList[i][1];
      int stone = fatigueList[i][2];

      if (picks[0] > 0) {
        answer += dia; // 다이아몬드 곡괭이 사용
        picks[0]--;
      } else if (picks[1] > 0) {
        answer += iron; // 철 곡괭이 사용
        picks[1]--;
      } else if (picks[2] > 0) {
        answer += stone; // 돌 곡괭이 사용
        picks[2]--;
      }
    }

    return answer; // 총 피로도 반환
  }
}
```
