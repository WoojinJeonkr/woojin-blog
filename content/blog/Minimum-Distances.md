---
external : false
title : "Minimum Distances"
tag : [Hackerrank, Java]
date : 2024-04-15
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/minimum-distances/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int minimumDistances(List<Integer> a) {
  // 여기에 코드를 작성하십시오.
  int result = -1;  // 초기 결과 값을 -1로 설정합니다 (찾지 못했을 때를 대비).
  
  // 리스트 'a'의 모든 요소를 순회합니다.
  for (int i = 0; i < a.size(); i++) {
    // 현재 요소와 다른 요소 사이의 거리를 비교합니다.
    for (int j = i + 1; j < a.size(); j++) {
      int distance = -1;  // 거리 변수를 초기화합니다.
      
      // 만약 같은 값을 가진 두 요소를 발견하면,
      if (a.get(i).equals(a.get(j))) {
        distance = j - i;  // 두 요소 사이의 거리를 계산합니다.
        
        // 새로 계산된 거리가 기존에 저장된 거리보다 작거나, 아직 결과가 설정되지 않았다면 결과를 갱신합니다.
        if (distance < result || result == -1) result = distance;
        break;  // 최소 거리를 찾았으므로 더 이상의 탐색을 중지합니다.
      }
    }
  }
  return result;  // 계산된 최소 거리 결과를 반환합니다.
}
```
