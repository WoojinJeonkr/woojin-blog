---
external : false
title : "Master of playing alone"
tag : [Programmers, Java]
date : 2024-10-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131130)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 숫자 카드 상자들에서 그룹을 찾아내고, 그 그룹 중에서 두 개를 선택하여 크기의 곱으로 최대 점수를 계산하는 문제입니다. 먼저, 카드가 담긴 상자들의 그룹을 찾아야 합니다. 그룹을 찾는 과정은 각 상자를 하나씩 열어가며, 그 상자에 적힌 카드 번호를 따라 해당하는 번호의 상자를 열면서 반복합니다. 이렇게 하나의 연결된 상자 그룹을 찾아내고, 해당 상자들은 다시 탐색하지 않도록 기록합니다.

이를 위해 각 상자의 방문 여부를 기록할 visited 배열을 사용하여, 방문하지 않은 상자에서 시작해 상자를 열어가며 그룹의 크기를 계산합니다. 이 과정을 모든 상자에 대해 반복하며 각 상자 그룹의 크기를 리스트에 저장합니다.

그 다음, 저장된 그룹의 크기들을 내림차순으로 정렬한 후, 가장 큰 두 그룹의 크기를 곱한 값이 게임에서 얻을 수 있는 최대 점수가 됩니다. 만약 그룹이 두 개 이상 존재하지 않으면, 얻을 수 있는 점수는 0이 됩니다.

## 3. Answer

```java
import java.util.ArrayList;
import java.util.Collections;

class Solution {
  public int solution(int[] cards) {
    boolean[] visited = new boolean[cards.length];
    ArrayList<Integer> groupSizes = new ArrayList<>();
    
    // 각 상자 그룹을 탐색하여 크기를 구함
    for (int i = 0; i < cards.length; i++) {
      if (!visited[i]) {
        int groupSize = getGroupSize(cards, visited, i);
        groupSizes.add(groupSize);
      }
    }
    
    // 그룹 크기를 내림차순 정렬
    Collections.sort(groupSizes, Collections.reverseOrder());
    
    // 그룹이 2개 이상 있어야 하므로, 그렇지 않으면 점수는 0
    if (groupSizes.size() < 2) {
      return 0;
    }
    
    // 가장 큰 두 그룹의 크기를 곱한 값이 최대 점수
    return groupSizes.get(0) * groupSizes.get(1);
  }
  
  // 재귀 함수: 연결된 상자 그룹의 크기를 계산
  private int getGroupSize(int[] cards, boolean[] visited, int start) {
    int count = 0;
    int current = start;
    
    // 상자를 따라가며 그룹의 크기 계산
    while (!visited[current]) {
      visited[current] = true;
      current = cards[current] - 1; // 상자 번호는 1부터 시작하므로 -1 해줌
      count++;
    }
    
    return count;
  }
}
```
