---
external : false
title : "Receiving report results"
tag : [Programmers, Java]
date : 2024-11-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/92334)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 신고 시스템을 구현하는 문제로, 주어진 조건에 맞춰 유저들이 받은 메일 수를 계산하는 것이 목표입니다. 문제를 해결하기 위해서는 각 유저가 신고한 유저와 그 유저가 신고받은 횟수를 효율적으로 처리할 필요가 있습니다. 그 과정을 단계별로 설명하겠습니다.

첫 번째로, 유저들이 신고한 대상과 그 신고 정보가 중복되지 않도록 처리해야 합니다. 예를 들어, 한 유저가 동일한 유저를 여러 번 신고하더라도 신고 횟수는 1회로 처리해야 합니다. 이를 위해 각 유저가 신고한 유저들을 집합(Set)으로 관리하여 중복을 제거합니다.

두 번째로, 각 유저가 신고한 유저가 k번 이상 신고를 받은 경우에만 해당 유저를 정지시키고, 그 유저에게 신고한 다른 유저들에게 메일을 보내야 합니다. 신고받은 횟수를 세는 방식으로 처리하면 됩니다. 신고받은 횟수가 k번 이상이면 해당 유저는 정지되고, 그 유저를 신고한 사람들에게 메일을 발송하게 됩니다.

마지막으로, 결과적으로 각 유저가 받은 메일의 수를 반환해야 합니다. 이를 위해 유저별 메일 수를 담을 배열을 준비하고, 정지된 유저를 신고한 유저들의 메일 수를 증가시킵니다. 이를 각 유저 ID의 순서대로 처리하여 최종적으로 배열을 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int[] solution(String[] id_list, String[] report, int k) {
    int[] answer = new int[id_list.length];
    
    // 유저 ID에 대한 인덱스를 저장하는 맵 생성
    Map<String, Integer> idIndexMap = new HashMap<>();
    for (int i = 0; i < id_list.length; i++) {
      idIndexMap.put(id_list[i], i);
    }
    
    // 각 유저가 신고한 유저들의 집합을 저장하는 맵 생성
    Map<String, Set<String>> reportMap = new HashMap<>();
    for (String rep : report) {
      String[] ids = rep.split(" ");
      String reporter = ids[0];  // 신고한 유저
      String reported = ids[1];  // 신고당한 유저
      
      // 중복 신고를 방지하기 위해 Set에 신고자를 추가
      reportMap.computeIfAbsent(reported, x -> new HashSet<>()).add(reporter);
    }
    
    // 신고당한 유저들의 신고 횟수를 확인하고, k번 이상 신고된 경우 처리
    for (String reported : reportMap.keySet()) {
      Set<String> reporters = reportMap.get(reported);
      if (reporters.size() >= k) {
        // 신고당한 유저가 k번 이상 신고를 받았다면 신고한 유저들에게 메일 발송
        for (String reporter : reporters) {
          answer[idIndexMap.get(reporter)]++;  // 메일 발송 횟수 증가
        }
      }
    }
    
    return answer;  // 각 유저가 받은 메일 수 반환
  }
}
```
