---
external : false
title : "Taking group photo"
tag : [Programmers, Java]
date : 2024-10-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1835?language=java)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제는 8명의 카카오프렌즈를 일렬로 배치하는 모든 경우의 수 중에서 주어진 조건을 만족하는 배치의 경우의 수를 계산하는 문제입니다. 각 프렌즈는 {A, C, F, J, M, N, R, T}로 표현되며, 각자의 원하는 배치 조건이 주어집니다. 조건은 두 프렌즈 간의 간격과 그에 따른 관계를 나타냅니다. 조건은 두 프렌즈 사이의 거리가 특정 값과 같거나, 작거나, 크다는 형태로 주어집니다. 따라서, 8명의 프렌즈를 순열을 통해 가능한 모든 배치 순서를 구하고, 각 순열에서 주어진 조건을 만족하는지 확인하는 방식으로 문제를 해결할 수 있습니다.

우선, 8명의 프렌즈를 순열로 배치할 수 있는 경우의 수는 8!로 40320입니다. 하지만 각 배치가 주어진 조건을 만족하는지 일일이 확인해야 합니다. 따라서 먼저 8명의 프렌즈를 순열로 나열한 후, 각 배치에서 주어진 제약 조건들을 하나씩 확인합니다. 조건을 확인하는 과정에서 두 프렌즈의 위치를 찾고, 그들의 실제 거리를 계산한 후, 주어진 관계 연산자(같음, 작음, 큼)에 따라 해당 배치가 유효한지 판단합니다. 모든 조건을 만족하는 배치만을 카운트하여 최종 답을 도출하게 됩니다.

따라서, 이 문제를 풀기 위해서는 모든 순열을 생성하고, 각 순열이 조건을 만족하는지 검사하는 절차를 수행하게 됩니다. 순열을 생성하는 과정에서 프렌즈가 중복되지 않게 배치되도록 관리하며, 각 배치가 조건을 만족할 때마다 그 경우의 수를 증가시킵니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  // 카카오프렌즈를 나타내는 문자열
  private static final String FRIENDS = "ACFJMNRT";
  // 친구들의 총 수
  private static final int NUM_FRIENDS = 8;
  // 카카오프렌즈 배열
  private static char[] friendsArray = FRIENDS.toCharArray();
  
  // 각 친구가 사용되었는지 여부를 확인하는 배열
  private boolean[] visited = new boolean[NUM_FRIENDS];
  // 순열을 저장하는 배열
  private char[] arrangement = new char[NUM_FRIENDS];
  // 조건을 만족하는 배치의 수
  private int answer = 0;
  
  // 문제의 해결을 위한 메인 함수
  public int solution(int n, String[] data) {
    // 8명의 프렌즈에 대한 모든 순열을 생성하고 조건을 만족하는지 확인
    generatePermutations(0, data);
    return answer;
  }
  
  // 순열을 생성하는 함수
  private void generatePermutations(int depth, String[] data) {
    // 모든 프렌즈를 배치했을 때
    if (depth == NUM_FRIENDS) {
      // 현재 배치가 조건을 만족하는지 확인
      if (isValidArrangement(data)) {
        answer++;
      }
      return;
    }
    
    // 각 프렌즈에 대해 순열을 생성
    for (int i = 0; i < NUM_FRIENDS; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arrangement[depth] = friendsArray[i];
        generatePermutations(depth + 1, data);
        visited[i] = false;
      }
    }
  }
  
  // 현재 배치가 주어진 조건들을 만족하는지 확인하는 함수
  private boolean isValidArrangement(String[] data) {
    for (String condition : data) {
      // 조건의 첫 번째와 세 번째 문자로 친구를 찾음
      char friend1 = condition.charAt(0);
      char friend2 = condition.charAt(2);
      // 조건의 네 번째 문자로 관계 연산자
      char operator = condition.charAt(3);
      // 다섯 번째 문자로 간격을 의미하는 숫자
      int distance = condition.charAt(4) - '0';
      
      // 두 친구의 현재 위치를 구함
      int pos1 = getPosition(friend1);
      int pos2 = getPosition(friend2);
      
      // 두 친구 사이의 실제 간격
      int actualDistance = Math.abs(pos1 - pos2) - 1;
      
      // 조건에 따라 배치가 유효한지 확인
      if (operator == '=') {
        if (actualDistance != distance) return false;
      } else if (operator == '<') {
        if (actualDistance >= distance) return false;
      } else if (operator == '>') {
        if (actualDistance <= distance) return false;
      }
    }
    return true;
  }
  
  // 특정 친구가 현재 배치에서 어느 위치에 있는지 반환하는 함수
  private int getPosition(char friend) {
    for (int i = 0; i < NUM_FRIENDS; i++) {
      if (arrangement[i] == friend) {
        return i;
      }
    }
    return -1; // 이 경우는 발생하지 않음
  }
}
```
