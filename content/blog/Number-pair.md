---
external : false
title : "Number pair"
tag : [Programmers, Java]
date : 2024-12-17
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131128)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 두 개의 서로 다른 숫자 문자열에서 공통으로 존재하는 숫자를 사용해 가장 큰 수를 만드는 것입니다. 즉, 공통 숫자 집합을 활용해 최적의 결과를 도출하는 최적화 문제로 볼 수 있습니다.

### 2-1. 효율적인 데이터 구조의 선택

이 문제에서는 고정된 크기의 정수 배열을 사용해 각 숫자의 빈도를 추적했습니다. 숫자의 범위가 0부터 9까지로 제한되어 있으므로, 배열을 사용하면 메모리를 낭비하지 않으면서도 빈도를 빠르고 정확하게 기록할 수 있습니다.

### 2-2. 알고리즘의 핵심 로직

알고리즘의 핵심은 숫자를 내림차순으로 순회하며 가장 큰 수를 만드는 데 있습니다. 9부터 0까지 역순으로 각 숫자의 최소 공통 등장 횟수를 확인한 뒤, 이를 바탕으로 결과 문자열을 구성합니다.

### 2-3. 특수 케이스 처리

solution 함수를 완성하기 위해 공통된 숫자가 전혀 없는 경우나 결과가 오직 0으로만 이루어진 경우도 고려해야 합니다.

## 3. Answer

```java
class Solution {
  public String solution(String X, String Y) {
    // 1단계: 숫자 카운트 배열 초기화
    // - 배열의 각 인덱스는 0~9 숫자를 의미
    // - 배열 크기는 고정된 10으로 설정
    int[] xCount = new int[10];
    int[] yCount = new int[10];
    
    // 2단계: X 문자열 순회 및 숫자 카운트
    // - toCharArray()로 문자 배열로 변환
    // - 각 문자를 정수로 변환하여 해당 인덱스 카운트 증가
    // - 예: '3' -> 3번 인덱스의 카운트 1 증가
    for (char x : X.toCharArray()) {
      xCount[x - '0']++;
    }
    
    // 3단계: Y 문자열 순회 및 숫자 카운트
    // - X와 동일한 방식으로 카운트 수행
    for (char y : Y.toCharArray()) {
      yCount[y - '0']++;
    }
    
    // 4단계: 공통 숫자 찾기 및 최대 수 생성
    // - 9부터 0까지 역순으로 순회 (가장 큰 수 만들기 위함)
    // - 각 숫자의 X, Y에서의 최소 등장 횟수 계산
    StringBuilder answer = new StringBuilder();
    for (int i = 9; i >= 0; i--) {
      // 공통으로 등장하는 숫자의 최소 횟수 결정
      // 예: X에 5가 3개, Y에 5가 2개 → 2개만 사용 가능
      int commonCount = Math.min(xCount[i], yCount[i]);
      
      // 공통 숫자를 결정된 횟수만큼 결과 문자열에 추가
      for (int j = 0; j < commonCount; j++) {
        answer.append(i);
      }
    }
    
    // 5단계: 특수 케이스 처리
    // 5-1: 공통된 숫자가 없는 경우 "-1" 반환
    if (answer.length() == 0) {
      return "-1";
    }
    
    // 5-2: 결과가 0으로만 구성된 경우 "0" 반환
    if (answer.charAt(0) == '0') {
      return "0";
    }
    
    // 6단계: 최종 결과 반환
    // 생성된 가장 큰 짝꿍 숫자를 문자열로 변환
    return answer.toString();
  }
}
```
