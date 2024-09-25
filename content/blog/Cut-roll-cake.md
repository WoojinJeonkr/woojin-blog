---
external : false
title : "Cut roll cake"
tag : [Programmers, Java]
date : 2024-09-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/132265)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 롤케이크를 자를 때, 두 조각의 토핑 종류 수가 같아지는 지점을 찾는 문제입니다. 이를 해결하기 위해 먼저, 철수와 동생이 각각 가지게 될 토핑의 종류 수를 추적하는 방식으로 접근할 수 있습니다. 철수가 가져갈 조각은 왼쪽부터 시작해 점차 커지고, 동생이 가져갈 조각은 오른쪽부터 시작해 점차 줄어듭니다. 이때, 철수가 가져갈 조각의 토핑 종류는 집합(Set)으로 관리하여 중복을 제거하고, 동생이 가져갈 조각의 토핑 종류와 그 개수는 맵(Map)으로 관리하여 각 토핑이 얼마나 남았는지 추적합니다.

초기에는 동생이 케이크의 모든 토핑을 가지는 상태로 시작합니다. 그런 다음 철수가 토핑을 하나씩 가져가면서, 동생이 그만큼의 토핑을 잃어가게 됩니다. 이 과정에서 철수와 동생이 각자 가진 토핑의 종류가 같아지는 시점을 찾는 것이 목표입니다. 이를 위해 철수가 하나씩 토핑을 가져갈 때마다, 동생이 가진 해당 토핑의 개수를 줄이고, 만약 개수가 0이 되면 해당 토핑을 동생의 목록에서 제거합니다. 그리고 두 사람이 가진 토핑의 종류 수가 같을 때마다 공평하게 나눌 수 있는 지점이 하나씩 늘어나므로, 최종적으로 그러한 지점의 개수를 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int[] topping) {
    // 철수가 가져갈 토핑 종류를 저장하는 집합
    Set<Integer> leftSet = new HashSet<>();
    // 동생이 가져갈 토핑 종류와 그 개수를 저장하는 맵
    Map<Integer, Integer> rightMap = new HashMap<>();
    
    // 처음에는 모든 토핑이 동생 쪽에 있다고 가정
    for (int top : topping) {
      rightMap.put(top, rightMap.getOrDefault(top, 0) + 1);
    }
    
    int answer = 0;
    
    // 롤케이크의 각 잘리는 지점을 확인
    for (int i = 0; i < topping.length; i++) {
      // 철수가 가져갈 토핑을 leftSet에 추가
      leftSet.add(topping[i]);
      
      // 동생이 가져갈 토핑에서 해당 토핑의 개수를 하나 줄임
      rightMap.put(topping[i], rightMap.get(topping[i]) - 1);
      if (rightMap.get(topping[i]) == 0) {
        // 만약 동생 쪽에 해당 토핑이 더 이상 없으면 맵에서 제거
        rightMap.remove(topping[i]);
      }
      
      // 철수와 동생이 가져갈 토핑의 종류가 같다면 공평하게 나눌 수 있음
      if (leftSet.size() == rightMap.size()) {
        answer++;
      }
    }
    
    return answer;
  }
}
```
