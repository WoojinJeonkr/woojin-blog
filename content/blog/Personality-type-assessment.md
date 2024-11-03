---
external : false
title : "Personality type assessment"
tag : [Programmers, Java]
date : 2024-11-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/118666)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 먼저 설문 조사를 기반으로 성격 유형 점수를 계산하고, 그에 따라 최종 성격 유형을 판별하는 방식으로 접근했습니다.

우선, 주어진 설문조사와 선택지를 바탕으로 두 가지 성격 유형 중 하나에 점수를 할당하는 규칙을 정립했습니다. survey 배열의 각 요소는 특정 지표에 대한 두 성격 유형을 포함하고 있으며, 사용자가 choices 배열을 통해 선택한 값에 따라 비동의나 동의 방향으로 점수를 얻게 됩니다. 여기에서 choices 배열의 선택지를 4를 기준으로 분리하여, 4보다 작은 값은 비동의 성격 유형에, 4보다 큰 값은 동의 성격 유형에 점수를 추가하는 방식으로 설정했습니다.

다음으로, 각 지표에 해당하는 성격 유형의 점수를 저장할 수 있도록 Map을 사용해 R, T, C, F 등 모든 성격 유형을 초기화했습니다. 이를 통해 각 질문에서 해당 유형에 점수를 누적할 수 있었으며, 반복문을 통해 choices 배열을 순회하며 점수를 계산했습니다.

이렇게 누적된 점수를 바탕으로 각 지표에서 더 높은 점수를 가진 성격 유형을 선택할 수 있었습니다. 예를 들어, R과 T의 점수를 비교하여 더 높은 점수를 가진 성격 유형을 선택하는 식입니다. 만약 두 점수가 동일할 경우 사전순으로 빠른 성격 유형을 선택하도록 설정했습니다.

## 3. Answer

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
  public String solution(String[] survey, int[] choices) {
    // 성격 유형 점수를 저장하기 위한 맵 초기화
    Map<Character, Integer> scores = new HashMap<>();
    scores.put('R', 0); scores.put('T', 0);
    scores.put('C', 0); scores.put('F', 0);
    scores.put('J', 0); scores.put('M', 0);
    scores.put('A', 0); scores.put('N', 0);

    // 설문조사 응답을 바탕으로 점수 계산
    for (int i = 0; i < survey.length; i++) {
      String type = survey[i];
      int choice = choices[i];

      // 비동의 타입과 동의 타입 설정
      char disagreeType = type.charAt(0);
      char agreeType = type.charAt(1);

      // 선택지가 4보다 작으면 비동의 타입에 점수 추가
      if (choice < 4) {
        scores.put(disagreeType, scores.get(disagreeType) + (4 - choice));
      } 
      // 선택지가 4보다 크면 동의 타입에 점수 추가
      else if (choice > 4) {
        scores.put(agreeType, scores.get(agreeType) + (choice - 4));
      }
    }

    // 각 지표별로 높은 점수를 가진 성격 유형 선택
    StringBuilder result = new StringBuilder();
    result.append(scores.get('R') >= scores.get('T') ? 'R' : 'T');
    result.append(scores.get('C') >= scores.get('F') ? 'C' : 'F');
    result.append(scores.get('J') >= scores.get('M') ? 'J' : 'M');
    result.append(scores.get('A') >= scores.get('N') ? 'A' : 'N');

    return result.toString();
  }
}
```
