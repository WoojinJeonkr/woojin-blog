---
external : false
title : "Smaller substrings"
tag : [Programmers, Java]
date : 2024-12-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/147355)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 해결하기 위해 먼저 입력 문자열 p와 동일한 길이를 갖는 부분 문자열을 입력 문자열 t에서 추출해야 합니다. 이를 위해 p의 길이를 계산합니다. 그런 다음, t를 순회하며 시작 인덱스에서 끝 인덱스까지의 문자열을 부분 문자열로 가져옵니다.

각 부분 문자열은 숫자 형태로 변환되어 p와 비교됩니다. 이 비교에서 부분 문자열이 p보다 작거나 같은 경우 카운트를 증가시킵니다.

이러한 과정을 반복하여 t의 모든 가능한 부분 문자열을 검사하고, 결과적으로 조건을 만족하는 부분 문자열의 총 개수를 반환합니다.

## 3. Answer

```java
class Solution {
  public int solution(String t, String p) {
    int answer = 0;  // 답을 저장할 변수 (조건을 만족하는 부분 문자열의 개수)
    int pLength = p.length();  // 문자열 p의 길이
    long pValue = Long.parseLong(p);  // 문자열 p를 숫자(long 타입)로 변환

    // t 문자열에서 p와 같은 길이를 가진 부분 문자열을 하나씩 확인
    for (int i = 0; i <= t.length() - pLength; i++) {
      String subStr = t.substring(i, i + pLength);  // t에서 부분 문자열 추출
      long subValue = Long.parseLong(subStr);  // 추출한 부분 문자열을 숫자(long 타입)로 변환

      // 부분 문자열의 값이 p의 값보다 작거나 같으면 답을 1 증가시킴
      if (subValue <= pValue) {
        answer++;
      }
    }

    return answer;  // 조건을 만족하는 부분 문자열의 개수 반환
  }
}
```
