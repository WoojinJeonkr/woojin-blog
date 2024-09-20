---
external : false
title : "Compression"
tag : [Programmers, Java]
date : 2024-09-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17684)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 LZW 압축 알고리즘을 구현하는 과제입니다. 먼저 영문 대문자로만 이루어진 문자열을 입력받아 이를 압축하는 과정을 수행해야 합니다. 압축 과정에서 사용할 사전은 초기화 단계에서 A부터 Z까지의 모든 알파벳을 1부터 26까지의 색인 번호로 저장합니다.

그 후, 주어진 문자열을 앞에서부터 순차적으로 탐색하면서, 사전에서 가장 긴 일치하는 문자열을 찾습니다. 해당 문자열의 색인 번호를 출력 리스트에 추가하고, 그 다음으로 처리할 문자가 남아있다면 현재 찾은 문자열에 다음 문자를 덧붙여 새로운 단어로 사전에 추가합니다.

이 과정은 입력 문자열을 끝까지 처리할 때까지 반복되며, 매번 사전에서 일치하는 가장 긴 문자열을 찾아 처리합니다. 마지막으로 출력 리스트에 담긴 색인 번호를 배열로 변환하여 반환합니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int[] solution(String msg) {
    // 사전 초기화: A부터 Z까지 색인 번호 할당
    Map<String, Integer> dictionary = new HashMap<>();
    int dictIndex = 1;
    for (char c = 'A'; c <= 'Z'; c++) {
      dictionary.put(String.valueOf(c), dictIndex++);
    }

    // 결과를 저장할 리스트
    List<Integer> result = new ArrayList<>();
    int i = 0;
    
    // 입력 문자열 처리
    while (i < msg.length()) {
      String w = "";
      int index = i;
      
      // 사전에서 가장 긴 문자열 w 찾기
      while (index < msg.length() && dictionary.containsKey(msg.substring(i, index + 1))) {
        w = msg.substring(i, index + 1);
        index++;
      }

      // w에 해당하는 색인 번호를 결과에 추가
      result.add(dictionary.get(w));

      // 새로운 단어를 사전에 추가
      if (index < msg.length()) {
        String newEntry = w + msg.charAt(index);
        dictionary.put(newEntry, dictIndex++);
      }

      // 입력에서 w를 처리한 후 다음으로 이동
      i += w.length();
    }

    // 결과를 배열로 변환하여 반환
    return result.stream().mapToInt(Integer::intValue).toArray();
  }
}
```
