---
external : false
title : "Preliminary scoring"
tag : [Programmers, Java]
date : 2024-07-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250128)에서 확인하실 수 있습니다.

## 2. Answer

```java
line 7 : if (our_score[i] == score_list[numbers[i] - 1]) {
```

## 3. Total Code

```java
class Solution {
  // 학생 수를 나타내는 변수
  public String[] solution(int[] numbers, int[] our_score, int[] score_list) {
    int num_student = numbers.length;
    String[] answer = new String[num_student];  // 결과를 저장할 문자열 배열

    // 학생 수만큼 반복문 수행
    for (int i = 0; i < num_student; i++) {
      // 우리 팀 점수와, 선택한 학생의 점수 순위 (numbers[i] - 1) 비교
      if (our_score[i] == score_list[numbers[i] - 1]) {
        answer[i] = "Same";  // 같으면 "Same" 저장
      } else {
        answer[i] = "Different";  // 다르면 "Different" 저장
      }
    }

    return answer;
  }
}
```
