---
external : false
title : "Travel itinerary"
tag : [Programmers, Java]
date : 2024-11-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/43164)에서 확인하실 수 있습니다.

## 2. Problem solving process

항공권 정보를 활용해 경로를 구성하는 문제는 다음과 같은 접근 방식을 사용하여 해결할 수 있습니다. 먼저 모든 항공권 정보를 활용해 경로를 찾아야 하며, 항상 "ICN" 공항에서 출발합니다. 따라서 문제를 해결하기 위해 깊이 우선 탐색(DFS)을 사용합니다. DFS는 모든 경로를 탐색하면서 조건에 맞는 최적의 경로를 찾는 데 효과적입니다.

항공권 정보를 사전순으로 정렬하는 것이 중요합니다. 동일한 출발지에서 여러 경로가 존재할 때 알파벳 순서로 우선하는 경로를 선택해야 하기 때문입니다. 정렬이 완료되면, DFS를 통해 "ICN" 공항에서 시작해 가능한 경로를 탐색합니다. 이때 각 항공권은 한 번만 사용해야 하므로, 방문 여부를 기록하는 배열을 만들어 사용한 항공권을 추적합니다.

DFS 탐색 과정에서 모든 항공권을 사용한 경우 유효한 경로로 판단하고 탐색을 종료합니다. 탐색 중 유효하지 않은 경로로 판단되면 백트래킹을 통해 이전 상태로 돌아가 다른 경로를 시도합니다. 이러한 방식으로 모든 항공권을 사용하는 경로를 찾아야 하며, 사전순으로 정렬된 항공권을 사용했기 때문에 자연스럽게 가장 알파벳 순서가 빠른 경로가 선택됩니다.

## 3. Answer

```java
class Solution {
  private String[] route; // 경로를 저장할 배열
  private boolean[] visited; // 항공권 사용 여부를 기록할 배열
  private int index; // route 배열에 현재 위치를 나타낼 인덱스

  public String[] solution(String[][] tickets) {
    int n = tickets.length;
    route = new String[n + 1]; // 경로는 항공권 수 + 1 만큼 필요
    visited = new boolean[n]; // 항공권 수만큼의 방문 배열 생성
    index = 0;

    sortTickets(tickets); // 항공권을 사전순으로 정렬
    route[index++] = "ICN"; // 항상 "ICN"에서 시작

    dfs("ICN", tickets, 0); // DFS 탐색 시작
    return route; // 완성된 경로를 반환
  }

  // 항공권을 사전순으로 정렬하는 메서드
  private void sortTickets(String[][] tickets) {
    for (int i = 0; i < tickets.length - 1; i++) {
      for (int j = i + 1; j < tickets.length; j++) {
        // 출발지가 같을 경우 도착지를 기준으로 사전순 정렬
        if (tickets[i][0].equals(tickets[j][0])) {
          if (tickets[i][1].compareTo(tickets[j][1]) > 0) {
            String temp1 = tickets[i][0];
            String temp2 = tickets[i][1];
            tickets[i][0] = tickets[j][0];
            tickets[i][1] = tickets[j][1];
            tickets[j][0] = temp1;
            tickets[j][1] = temp2;
          }
        // 출발지가 다를 경우 출발지를 기준으로 사전순 정렬
        } else if (tickets[i][0].compareTo(tickets[j][0]) > 0) {
          String temp1 = tickets[i][0];
          String temp2 = tickets[i][1];
          tickets[i][0] = tickets[j][0];
          tickets[i][1] = tickets[j][1];
          tickets[j][0] = temp1;
          tickets[j][1] = temp2;
        }
      }
    }
  }

  // DFS를 통해 가능한 경로를 탐색하는 메서드
  private boolean dfs(String current, String[][] tickets, int count) {
    // 모든 항공권을 사용한 경우 경로 탐색 완료
    if (count == tickets.length) {
      return true;
    }

    // 현재 공항에서 출발하는 항공권을 탐색
    for (int i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0].equals(current)) {
        visited[i] = true; // 해당 항공권 사용 표시
        route[index++] = tickets[i][1]; // 도착지를 경로에 추가

        // 다음 공항으로 DFS 재귀 호출
        if (dfs(tickets[i][1], tickets, count + 1)) {
          return true; // 유효한 경로를 찾으면 탐색 종료
        }

        // 유효한 경로를 찾지 못한 경우 백트래킹
        visited[i] = false;
        index--;
      }
    }
    return false; // 가능한 경로가 없는 경우 false 반환
  }
}
```
