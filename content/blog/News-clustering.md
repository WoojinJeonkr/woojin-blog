---
external : false
title : "News clustering"
tag : [Programmers, Java]
date : 2024-09-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/17677)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 두 문자열을 비교해 자카드 유사도를 계산하는 문제입니다. 자카드 유사도는 두 집합의 교집합 크기를 합집합 크기로 나눈 값으로 정의되며, 이를 바탕으로 문자열 간의 유사도를 측정할 수 있습니다. 주어진 문자열을 처리하기 위해 먼저 각 문자열을 두 글자씩 끊어서 다중집합을 생성합니다. 이때, 영문자로 된 두 글자 조합만 유효하므로, 공백, 숫자, 특수 문자가 포함된 쌍은 무시합니다. 대소문자는 구분하지 않기 때문에 모든 문자는 소문자로 변환하여 처리합니다.

다중집합을 생성한 후에는 두 다중집합의 교집합과 합집합을 구하는 것이 핵심입니다. 교집합은 두 집합에서 동일하게 존재하는 원소의 최소 등장 횟수로 구하고, 합집합은 동일한 원소에 대해 최대 등장 횟수를 고려해 계산합니다. 두 집합의 모든 원소를 확인하며 교집합과 합집합을 계산한 후, 자카드 유사도를 구합니다. 이때, 두 집합이 모두 공집합인 경우 자카드 유사도는 1로 정의됩니다. 마지막으로, 자카드 유사도에 65536을 곱한 값을 소수점 아래를 버리고 정수로 반환하는 방식으로 문제를 해결합니다.

이 과정에서 Map을 이용해 각 다중집합의 원소와 등장 횟수를 기록하고, 교집합과 합집합의 크기를 쉽게 계산할 수 있도록 구현했습니다.

## 3. Answer

```java
import java.util.*;

class Solution {

  // 문자열을 두 글자씩 끊어 다중집합으로 만드는 함수
  private List<String> makeMultiSet(String str) {
    List<String> multiSet = new ArrayList<>();
    str = str.toLowerCase(); // 대소문자 구분을 없애기 위해 소문자로 변환
    
    for (int i = 0; i < str.length() - 1; i++) {
      char first = str.charAt(i);
      char second = str.charAt(i + 1);
      
      // 두 문자가 모두 알파벳이면 다중집합에 추가
      if (Character.isLetter(first) && Character.isLetter(second)) {
        multiSet.add(first + "" + second);
      }
    }
    
    return multiSet;
  }

  public int solution(String str1, String str2) {
    // 두 문자열을 다중집합으로 변환
    List<String> multiSet1 = makeMultiSet(str1);
    List<String> multiSet2 = makeMultiSet(str2);
    
    // 각 다중집합에서 원소의 등장 횟수를 세기 위한 Map
    Map<String, Integer> map1 = new HashMap<>();
    Map<String, Integer> map2 = new HashMap<>();
    
    // 첫 번째 다중집합의 각 원소의 등장 횟수를 기록
    for (String s : multiSet1) {
      map1.put(s, map1.getOrDefault(s, 0) + 1);
    }
    
    // 두 번째 다중집합의 각 원소의 등장 횟수를 기록
    for (String s : multiSet2) {
      map2.put(s, map2.getOrDefault(s, 0) + 1);
    }
    
    int intersectionSize = 0; // 교집합 크기
    int unionSize = 0;        // 합집합 크기
    
    // 두 다중집합의 모든 원소를 합친 Set 생성
    Set<String> allKeys = new HashSet<>(map1.keySet());
    allKeys.addAll(map2.keySet());
    
    // 각 원소에 대해 교집합과 합집합의 크기를 계산
    for (String key : allKeys) {
      int count1 = map1.getOrDefault(key, 0);
      int count2 = map2.getOrDefault(key, 0);
      
      // 교집합: 두 집합에서 최소 등장 횟수
      intersectionSize += Math.min(count1, count2);
      
      // 합집합: 두 집합에서 최대 등장 횟수
      unionSize += Math.max(count1, count2);
    }
    
    double jaccardSimilarity;
    // 합집합이 0일 경우 (두 집합이 모두 공집합일 경우) 자카드 유사도는 1로 정의
    if (unionSize == 0) {
      jaccardSimilarity = 1;
    } else {
      // 교집합 크기를 합집합 크기로 나누어 자카드 유사도 계산
      jaccardSimilarity = (double) intersectionSize / unionSize;
    }
    
    // 자카드 유사도에 65536을 곱하고 정수로 변환하여 반환
    return (int) (jaccardSimilarity * 65536);
  }
}
```
