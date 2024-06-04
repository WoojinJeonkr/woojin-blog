---
external : false
title : "Validate suffix"
tag : [Programmers, Java]
date : 2024-06-04
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181908)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
  // 문자열 my_string의 접미사가 is_suffix인지 확인하는 메소드
  public int solution(String my_string, String is_suffix) {
    // 접미사가 일치하는지 확인하기 위한 변수
    int answer = 0;
    // 주어진 문자열의 길이
    int str_len = my_string.length();
    // 모든 가능한 접미사를 저장할 배열
    String[] suffix = new String[str_len];

    // 모든 접미사를 배열에 저장
    for (int i = 0; i < str_len; i++) {
        suffix[i] = my_string.substring(i);
    }

    // 접미사 배열을 알파벳 순으로 정렬
    Arrays.sort(suffix);
    
    // 배열을 리스트로 변환하여 contains 메소드 사용 가능하게 함
    List<String> suffixList = new ArrayList<>(Arrays.asList(suffix));
    
    // 접미사 리스트에 is_suffix가 포함되어 있는지 확인
    // 포함되어 있다면 1을, 그렇지 않다면 0을 반환
    return suffixList.contains(is_suffix) ? 1 : 0;
  }
}
```
