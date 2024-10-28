---
external : false
title : "Nearest matching character"
tag : [Programmers, Java]
date : 2024-10-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/142086)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 주어진 문자열 s를 순차적으로 탐색하면서 각 문자의 이전 출현 위치를 기록하는 방식을 사용합니다. 각 문자의 위치를 기록하기 위해 HashMap을 활용하여, 특정 문자가 마지막으로 등장한 인덱스를 저장해 둡니다. 이를 통해, 문자열을 왼쪽에서 오른쪽으로 순회하며 현재 문자가 이전에 등장했는지 확인할 수 있습니다.

문자열 s의 각 인덱스를 순회할 때마다 현재 문자가 HashMap에 존재하는지 확인하여, 이전에 나왔다면 현재 인덱스와 그 문자의 마지막 인덱스와의 차이를 계산합니다. 이 차이는 현재 문자가 등장한 위치에서 가장 가까운 동일 문자의 위치를 의미하므로, 이를 결과 배열에 저장합니다. 만약 현재 문자가 처음 등장한 문자라면 결과 배열에 -1을 추가합니다.

탐색이 끝날 때마다 현재 문자의 위치를 HashMap에 갱신하여, 다음 번에 동일한 문자가 나오면 가장 최근의 위치와 비교할 수 있도록 합니다. 이 방식은 문자열의 길이에 비례하는 시간 복잡도로 문제를 해결하며, 반복된 문자와 위치를 효율적으로 처리할 수 있습니다.

## 3. Answer

```java
import java.util.HashMap;

class Solution {
  public int[] solution(String s) {
    int[] answer = new int[s.length()]; // 결과를 저장할 배열
    HashMap<Character, Integer> lastSeenIndex = new HashMap<>(); // 각 문자의 최근 인덱스를 저장할 해시맵
    
    for (int i = 0; i < s.length(); i++) {
      char c = s.charAt(i);
      if (lastSeenIndex.containsKey(c)) { // 문자가 이전에 등장한 적이 있는지 확인
        answer[i] = i - lastSeenIndex.get(c); // 있다면 현재 인덱스와 가장 가까운 이전 인덱스의 차이를 저장
      } else {
        answer[i] = -1; // 이전에 등장한 적이 없다면 -1 저장
      }
      lastSeenIndex.put(c, i); // 현재 문자의 위치를 해시맵에 업데이트
    }
    
    return answer; // 결과 배열 반환
  }
}
```
