---
external : false
title : "Their secret code"
tag : [Programmers, Java]
date : 2024-10-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/155652)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제는 특정 문자열을 다른 문자로 변환하는 문제입니다. 문자열 s의 각 문자를 index만큼 뒤의 알파벳으로 이동시켜야 하며, 이동 시 skip에 포함된 문자들은 건너뛰어야 합니다. 또한 알파벳의 순환을 고려해 z를 넘어가면 다시 a부터 시작하도록 설정해야 합니다.

이 문제를 해결하기 위해 먼저 skip에 포함된 문자들을 Set에 저장하여, 문자 이동 시 각 문자가 skip에 포함되어 있는지를 빠르게 확인할 수 있도록 합니다. 이후 문자열 s를 한 글자씩 탐색하며, 각 문자에 대해 index만큼 이동합니다. 이동할 때마다 skip에 포함된 문자는 제외하고, 필요한 이동 횟수를 충족할 때까지 반복적으로 다음 문자로 이동합니다. 만약 z를 넘어가는 경우 알파벳 순환을 위해 a로 돌아오도록 합니다. 이렇게 변환된 각 문자는 StringBuilder에 추가하며, 모든 문자 변환이 완료되면 최종 결과 문자열을 반환합니다.

이 접근법을 통해 문제의 조건을 충족하며 skip 문자들을 건너뛰고, index만큼 뒤의 알파벳으로 정확하게 변환할 수 있습니다.

## 3. Answer

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
  public String solution(String s, String skip, int index) {
    // skip에 포함된 문자를 Set에 저장하여 검색을 빠르게 수행
    Set<Character> skipSet = new HashSet<>();
    for (char ch : skip.toCharArray()) {
      skipSet.add(ch);
    }

    StringBuilder answer = new StringBuilder();

    // 문자열 s의 각 문자를 변환
    for (char ch : s.toCharArray()) {
      int count = 0;
      char newChar = ch;

      // index만큼 문자를 이동하며 skip 문자는 건너뜀
      while (count < index) {
        newChar++; // 다음 문자로 이동
        if (newChar > 'z') { // z를 넘어가면 다시 a로 순환
          newChar = 'a';
        }
        if (!skipSet.contains(newChar)) { // skip 문자가 아닌 경우에만 카운트 증가
          count++;
        }
      }
      answer.append(newChar); // 변환된 문자 추가
    }

    return answer.toString(); // 최종 변환된 문자열 반환
  }
}
```
