---
external : false
title : "Menu renewal"
tag : [Programmers, Java]
date : 2024-08-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/72411)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 먼저 각 손님의 주문에서 특정 크기의 메뉴 조합을 찾아내는 것이 필요합니다. 이를 위해 주어진 course 배열에 명시된 코스 요리의 크기에 따라 조합을 생성합니다. 각 주문에서 가능한 모든 메뉴 조합을 생성하고, 이 조합들이 얼마나 자주 등장했는지를 해시맵을 이용해 카운트합니다.

생성된 모든 조합 중에서 최소 두 번 이상 주문된 조합만을 고려하며, 해당 코스 크기에서 가장 많이 등장한 조합들을 찾아냅니다. 이러한 조합들은 결과 리스트에 추가되고, 이 리스트는 마지막에 사전 순으로 정렬되어 최종 결과로 반환됩니다.

이 과정에서 백트래킹 기법을 활용하여 재귀적으로 조합을 생성합니다. 각 조합이 생성될 때마다 그 빈도를 기록하여, 최종적으로 가장 빈도가 높은 조합들을 선택하는 방식으로 접근합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public String[] solution(String[] orders, int[] course) {
    List<String> result = new ArrayList<>();

    // 각 코스 크기별로 가능한 메뉴 조합 찾기
    for (int c : course) {
      Map<String, Integer> combinationCount = new HashMap<>();

      // 각 주문에 대해 가능한 조합을 생성하고 카운트
      for (String order : orders) {
        char[] items = order.toCharArray();
        Arrays.sort(items); // 조합을 만들기 위해 메뉴를 정렬
        findCombinations(items, new StringBuilder(), combinationCount, 0, c);
      }

      // 가장 많이 등장한 조합의 횟수 찾기
      int maxCount = 2; // 최소 두 번 이상 등장한 조합만 고려
      for (int count : combinationCount.values()) {
        maxCount = Math.max(maxCount, count);
      }

      // 가장 많이 등장한 조합을 결과 리스트에 추가
      for (Map.Entry<String, Integer> entry : combinationCount.entrySet()) {
        if (entry.getValue() == maxCount) {
          result.add(entry.getKey());
        }
      }
    }

    // 결과를 사전순으로 정렬
    Collections.sort(result);
    return result.toArray(new String[0]);
  }

  // 재귀적으로 조합을 생성하는 함수
  private void findCombinations(char[] items, StringBuilder current, Map<String, Integer> countMap, int start, int length) {
    if (current.length() == length) {
      String combination = current.toString();
      countMap.put(combination, countMap.getOrDefault(combination, 0) + 1);
      return;
    }
    
    for (int i = start; i < items.length; i++) {
      current.append(items[i]);
      findCombinations(items, current, countMap, i + 1, length);
      current.deleteCharAt(current.length() - 1); // 백트래킹으로 이전 상태로 복원
    }
  }
}
```
