---
external : false
title : "Participant who did not finish"
tag : [Programmers, Java]
date : 2024-06-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.HashMap;

class Solution {
  public String solution(String[] participant, String[] completion) {
    HashMap<String, Integer> participantMap = new HashMap<>();
    
    // 참가자 배열을 순회하면서 해시맵에 저장
    for (String participantName : participant) {
      participantMap.put(participantName, participantMap.getOrDefault(participantName, 0) + 1);
    }
    
    // 완주자 배열을 순회하면서 해시맵에서 카운트를 감소
    for (String completionName : completion) {
      participantMap.put(completionName, participantMap.get(completionName) - 1);
    }
    
    // 해시맵을 순회하면서 값이 0이 아닌 참가자를 찾음
    for (String key : participantMap.keySet()) {
      if (participantMap.get(key) != 0) {
        return key;
      }
    }
    
    return ""; // 모든 참가자가 완주했을 경우 빈 문자열 반환 (이 경우는 문제 조건상 발생하지 않음)
  }
}
```
