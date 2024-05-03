---
external : false
title : "ACM ICPC Team"
tag : [Hackerrank, Java]
date : 2024-05-02
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/acm-icpc-team/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static List<Integer> acmTeam(List<String> topic) {
  int maxTopics = 0; // 최대 주제 수
  int maxTeams = 0; // 최대 팀 수
  for (int i = 0; i < topic.size(); i++) { // 토픽 크기만큼 반복
    for (int j = i + 1; j < topic.size(); j++) { // i 다음부터 토픽 크기만큼 반복
      int counter = 0; // 카운터 초기화
      for (int k = 0; k < topic.get(i).length(); k++) { // 각 토픽의 길이만큼 반복
        if (topic.get(i).charAt(k) == '1' || topic.get(j).charAt(k) == '1') { // 두 토픽 중 하나라도 '1'인 경우
          counter++; // 카운터 증가
        }
      }
      if (counter > maxTopics) { // 카운터가 최대 주제 수보다 큰 경우
        maxTopics = counter; // 최대 주제 수 업데이트
        maxTeams = 1; // 최대 팀 수 초기화
      } else if (counter == maxTopics) { // 카운터가 최대 주제 수와 같은 경우
        maxTeams++; // 최대 팀 수 증가
      }
    }
  }
  return Arrays.asList(maxTopics, maxTeams); // 최대 주제 수와 최대 팀 수 리스트로 반환
}
```
