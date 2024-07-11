---
external : false
title : "Count string occurrence"
tag : [Programmers, Java]
date : 2024-07-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181871)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  // 문자열 `myString`에서 패턴 문자열 `pat`이 등장하는 횟수를 세는 함수
  public int solution(String myString, String pat) {
    // 등장 횟수를 누적할 변수
    int answer = 0;
    // 시작 인덱스 변수
    int index = 0;
    
    // indexOf 메소드를 이용하여 패턴 문자열이 등장하는 위치 찾기
    while ((index = myString.indexOf(pat, index)) != -1) {
      // 패턴이 발견되면 카운트 증가
      answer++;
      // 다음 검색을 위해 시작 인덱스 이동 (겹치는 경우 방지)
      index += pat.length();
    }
    
    // 세 결과 반환
    return answer;
  }
}
```
