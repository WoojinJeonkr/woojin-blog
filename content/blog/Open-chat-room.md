---
external : false
title : "Open chat room"
tag : [Programmers, Java]
date : 2024-09-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42888)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 카카오톡 오픈채팅방에서 유저들이 입장, 퇴장하거나 닉네임을 변경할 때 발생하는 메시지를 처리하는 문제입니다. 각 유저는 고유한 아이디를 가지고 있으며, 입장 시에는 닉네임과 함께 기록됩니다. 퇴장 시에는 현재 닉네임을 기준으로 메시지가 출력되며, 닉네임이 변경되면 이전 기록된 모든 메시지에서도 닉네임이 수정되어야 합니다.

이를 해결하기 위해서는 우선 유저의 아이디와 닉네임을 관리하는 방법이 필요합니다. 이를 위해 해시맵을 사용하여 각 유저 아이디에 대한 최신 닉네임을 저장하고, 이후 메시지 생성 시 해당 닉네임을 참조하는 방식으로 처리할 수 있습니다.

우선 모든 기록을 한 번 순회하면서 Enter와 Change 명령에 대해 유저 아이디와 닉네임을 매핑합니다. 이 과정을 통해 각 유저의 최신 닉네임 상태를 확보하게 됩니다.

이후 다시 한 번 기록을 순회하면서 Enter와 Leave 명령에 대한 메시지를 생성합니다. 이때, 저장된 유저 아이디에 대응하는 최신 닉네임을 참조하여 메시지를 작성합니다. 이를 통해 닉네임이 변경되더라도 모든 이전 메시지에서 최신 닉네임이 반영되도록 할 수 있습니다.

최종적으로 생성된 메시지 리스트를 배열 형태로 반환하여 문제를 해결할 수 있습니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public String[] solution(String[] record) {
    // 유저 아이디와 닉네임을 매핑할 해시맵
    Map<String, String> userMap = new HashMap<>();
    // 결과 메시지 리스트
    List<String> result = new ArrayList<>();
    
    // 첫 번째 루프: 유저 아이디와 닉네임 매핑 업데이트
    for (String rec : record) {
      String[] parts = rec.split(" ");
      String action = parts[0];
      String userId = parts[1];
      
      if (action.equals("Enter") || action.equals("Change")) {
        String nickname = parts[2];
        userMap.put(userId, nickname);
      }
    }
    
    // 두 번째 루프: 최종 메시지 생성
    for (String rec : record) {
      String[] parts = rec.split(" ");
      String action = parts[0];
      String userId = parts[1];
      
      if (action.equals("Enter")) {
        result.add(userMap.get(userId) + "님이 들어왔습니다.");
      } else if (action.equals("Leave")) {
        result.add(userMap.get(userId) + "님이 나갔습니다.");
      }
    }
    
    // 결과 리스트를 배열로 변환하여 반환
    return result.toArray(new String[result.size()]);
  }
}
```
