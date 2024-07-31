---
external : false
title : "English word chain"
tag : [Programmers, Java]
date : 2024-07-31
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12981)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
  public int[] solution(int n, String[] words) {
    List<String> list = new ArrayList<>();  // 사용된 단어를 저장할 리스트
    Set<String> set = new HashSet<>();  // 중복 체크를 위한 Set (평균 O(1) 시간 복잡도)
    int[] answer = {0, 0};  // 결과를 저장할 배열 [0]은 번호, [1]은 라운드
    
    for (int i = 0; i < words.length; i++) {
      String word = words[i];
      
      // 이미 사용된 단어인지 또는 끝말잇기 규칙에 어긋나는지 확인
      if (set.contains(word) || (i > 0 && words[i - 1].charAt(words[i - 1].length() - 1) != word.charAt(0))) {
        answer[0] = (i % n) + 1;  // 사람 번호 (1부터 시작)
        answer[1] = (i / n) + 1;  // 라운드 번호 (1부터 시작)
        return answer;
      }
      
      set.add(word);
    }
    
    return answer;  // 모든 단어가 유효한 경우 [0, 0] 반환
  }
}
```
