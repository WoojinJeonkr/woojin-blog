---
external : false
title : "Repeated binary transformation"
tag : [Programmers, Java]
date : 2024-08-06
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/70129)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int[] solution(String s) {
    int[] answer = new int[2]; // 변환 횟수와 제거된 0의 총 개수를 저장할 배열
    int transformationCount = 0; // 변환 횟수를 카운트할 변수
    int totalRemovedZeroes = 0; // 제거된 0의 총 개수를 카운트할 변수

    while (!s.equals("1")) { // 문자열이 "1"이 아닐 때까지 반복
      int lengthBeforeTransformation = s.length(); // 변환 전 문자열의 길이
      s = s.replace("0", ""); // 문자열에서 모든 0 제거
      int lengthAfterTransformation = s.length(); // 변환 후 문자열의 길이
      int removedZeroes = lengthBeforeTransformation - lengthAfterTransformation; // 제거된 0의 개수
      totalRemovedZeroes += removedZeroes; // 총 제거된 0의 개수에 추가
      s = Integer.toBinaryString(lengthAfterTransformation); // 남은 문자열의 길이를 2진수 문자열로 변환
      transformationCount++; // 변환 횟수 증가
    }

    answer[0] = transformationCount; // 변환 횟수 설정
    answer[1] = totalRemovedZeroes; // 제거된 0의 총 개수 설정

    return answer; // 결과 배열 반환
  }
}
```
