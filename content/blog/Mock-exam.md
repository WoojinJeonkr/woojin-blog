---
external : false
title : "Mock exam"
tag : [Programmers, Java]
date : 2024-08-03
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42840)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
  public int[] solution(int[] answers) {
    // 각 학생의 패턴 정의
    int[] pattern1 = {1, 2, 3, 4, 5};
    int[] pattern2 = {2, 1, 2, 3, 2, 4, 2, 5};
    int[] pattern3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    
    // 각 학생의 점수를 저장할 배열 초기화
    int[] scores = new int[3];
    
    // 각 학생의 답안과 정답 비교하여 점수 계산
    for (int i = 0; i < answers.length; i++) {
      if (answers[i] == pattern1[i % pattern1.length]) scores[0]++;
      if (answers[i] == pattern2[i % pattern2.length]) scores[1]++;
      if (answers[i] == pattern3[i % pattern3.length]) scores[2]++;
    }
    
    // 최대 점수 찾기
    int maxScore = Math.max(Math.max(scores[0], scores[1]), scores[2]);
    
    // 최대 점수를 받은 학생을 결과 리스트에 추가
    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < scores.length; i++) {
      if (scores[i] == maxScore) {
        result.add(i + 1); // 학생 번호는 1부터 시작하므로 i + 1
      }
    }
    
    // 리스트를 배열로 변환하고 정렬
    int[] answer = result.stream().mapToInt(i -> i).toArray();
    Arrays.sort(answer);
    
    return answer;
  }
}
```
