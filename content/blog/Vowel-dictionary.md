---
external : false
title : "Vowel dictionary"
tag : [Programmers, Java]
date : 2024-07-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/84512)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int solution(String word) {
    // 각 자리의 가중치, 사전에서의 순서를 나타내는 값
    int[] weights = {781, 156, 31, 6, 1};
    // 모음 리스트
    char[] vowels = {'A', 'E', 'I', 'O', 'U'};
    
    int answer = 0;
    
    // 단어의 각 문자를 확인
    for (int i = 0; i < word.length(); i++) {
      // 현재 문자가 모음 리스트에서 몇 번째인지 찾기
      int index = 0;
      for (int j = 0; j < vowels.length; j++) {
        if (vowels[j] == word.charAt(i)) {
          index = j;
          break;
        }
      }
      // 각 자리의 순서 가중치를 더해줌
      answer += weights[i] * index + 1;
    }
    
    return answer;
  }
}
```
