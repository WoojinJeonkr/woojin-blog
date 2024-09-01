---
external : false
title : "Choosing tangerines"
tag : [Programmers, Java]
date : 2024-09-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/138476)에서 확인하실 수 있습니다.

## 2. Problem solving process

귤의 크기가 일정하지 않은 상황에서, k개의 귤을 선택하여 상자에 담을 때 가능한 한 적은 수의 귤 크기 종류를 선택하는 것이 목표입니다. 이를 해결하기 위해 먼저, 주어진 귤의 크기 배열에서 각 크기가 등장하는 빈도를 계산합니다. 각 크기의 빈도가 계산되면, 빈도가 높은 크기부터 선택하여 적은 종류의 귤로 k개의 귤을 채울 수 있습니다.

이 과정에서 빈도를 기준으로 내림차순 정렬을 수행하여, 가장 많이 등장하는 귤 크기부터 차례대로 선택합니다. 빈도가 높은 크기를 우선적으로 선택하면, 동일한 크기의 귤을 많이 담을 수 있어 종류의 수를 최소화할 수 있습니다.

그런 다음, k개의 귤을 모두 선택할 때까지 빈도가 높은 크기를 차례대로 더해가며 귤을 선택합니다. 이때 선택된 크기의 종류 수를 계산하여, k개의 귤을 선택하는 데 사용된 최소한의 크기 종류 수를 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int k, int[] tangerine) {
    // 귤 크기별 빈도수를 저장하기 위한 Map
    Map<Integer, Integer> frequencyMap = new HashMap<>();
    
    // 귤 크기별 빈도 계산
    for (int size : tangerine) {
      frequencyMap.put(size, frequencyMap.getOrDefault(size, 0) + 1);
    }
    
    // 빈도를 내림차순으로 정렬하기 위해 List에 저장
    List<Integer> frequencies = new ArrayList<>(frequencyMap.values());
    Collections.sort(frequencies, Collections.reverseOrder());
    
    int total = 0;  // 현재까지 고른 귤의 개수
    int kindCount = 0;  // 선택한 종류의 수
    
    // 빈도가 높은 것부터 차례대로 k개를 채울 때까지 종류를 선택
    for (int frequency : frequencies) {
      total += frequency;
      kindCount++;
      if (total >= k) {
        break;
      }
    }
    
    return kindCount;  // 최소한의 종류 수 반환
  }
}
```
