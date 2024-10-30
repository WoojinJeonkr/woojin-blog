---
external : false
title : "Finding Mr Kim in Seoul"
tag : [Programmers, Java]
date : 2024-10-30
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12919)에서 확인하실 수 있습니다.

## 2. Problem solving process

배열에서 특정 값 "Kim"의 위치를 찾아 해당 위치를 포함한 문자열을 반환하는 문제입니다. 이를 해결하려면 우선 배열을 순회하며 "Kim"이 위치한 인덱스를 찾습니다. "Kim"이 배열에서 유일하게 한 번만 등장한다는 조건이 주어졌기 때문에, 값을 찾는 즉시 인덱스를 기록하고 반복을 종료할 수 있습니다.

이후, 기록된 인덱스를 이용하여 "김서방은 x에 있다" 형식의 결과 문자열을 반환합니다. 이때, 문제의 특성상 오류 처리는 필요하지 않으므로 인덱스를 찾고 문자열을 반환하는 구조로 간단히 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  public String solution(String[] seoul) {
    int index = -1; // "Kim"의 위치를 저장할 변수 초기화
    for (int i = 0; i < seoul.length; i++) { // 배열을 순회하며
      if (seoul[i].equals("Kim")) { // "Kim"을 찾으면
        index = i; // 해당 인덱스를 저장하고
        break; // 반복문 종료
      }
    }
    return "김서방은 " + index + "에 있다"; // 결과 문자열 반환
  }
}
```
