---
external : false
title : "Cloth"
tag : [Programmers, Java]
date : 2024-08-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42578)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.HashMap;

class Solution {
  public int solution(String[][] clothes) {
    // 의상 종류별로 의상 개수를 저장할 해시 맵
    HashMap<String, Integer> typeCountMap = new HashMap<>();
    
    // 의상 목록을 순회하며 각 의상 종류별로 개수 세기
    for (String[] cloth : clothes) {
      String type = cloth[1];
      typeCountMap.put(type, typeCountMap.getOrDefault(type, 0) + 1);
    }
    
    // 조합 가능한 경우의 수 계산
    int totalCombinations = 1;
    for (int count : typeCountMap.values()) {
      totalCombinations *= (count + 1); // 각 종류에서 하나를 선택하거나 선택하지 않는 경우
    }
    
    // 아무것도 입지 않는 경우를 제외
    return totalCombinations - 1;
  }
}
```
