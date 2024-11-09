---
external : false
title : "Hall of fame 1"
tag : [Programmers, Java]
date: 2024-11-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/138477)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해서는 매일의 가수 점수를 명예의 전당에 올리고, 명예의 전당에서 최하위 점수를 기록하는 작업을 반복해야 합니다. 명예의 전당 목록에는 k개의 상위 점수를 유지해야 하며, 이를 효율적으로 관리하기 위해 오름차순 정렬을 유지하는 PriorityQueue를 사용합니다. PriorityQueue는 항상 최솟값을 빠르게 조회할 수 있어, 매일 새로운 점수를 추가할 때 목록의 크기가 k개를 초과하면 가장 낮은 점수를 제거하여 k개의 상위 점수만 유지할 수 있습니다.

이렇게 하면 매일 k번째 점수 이하의 값들은 자동으로 제거되므로, PriorityQueue의 최상단 값이 매일 발표할 최하위 점수가 됩니다. 매일 반복해서 새로운 점수를 추가하고, 필요 시 최하위 점수를 제거하며 PriorityQueue에서 최솟값을 answer 배열에 저장하는 방식으로 모든 날에 대해 발표할 점수를 기록할 수 있습니다.

## 3. Answer

```java
import java.util.PriorityQueue;

class Solution {
  public int[] solution(int k, int[] score) {
    // 결과를 저장할 배열 생성
    int[] answer = new int[score.length];
    // 명예의 전당을 관리할 PriorityQueue 생성 (오름차순)
    PriorityQueue<Integer> hallOfFame = new PriorityQueue<>();
    
    // 매일 점수를 처리
    for (int i = 0; i < score.length; i++) {
      // 새로운 점수를 명예의 전당에 추가
      hallOfFame.add(score[i]);
      
      // 명예의 전당에 k개보다 많은 점수가 있으면 최하위 점수 제거
      if (hallOfFame.size() > k) {
        hallOfFame.poll();
      }
      
      // 현재 명예의 전당의 최하위 점수를 결과에 저장
      answer[i] = hallOfFame.peek();
    }
    
    return answer;
  }
}
```
