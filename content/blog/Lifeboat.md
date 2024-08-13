---
external : false
title : "Lifeboat"
tag : [Programmers, Java]
date : 2024-08-13
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42885)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Arrays;

class Solution {
  public int solution(int[] people, int limit) {
    // 사람들의 몸무게 배열을 오름차순으로 정렬
    Arrays.sort(people);
    
    int i = 0; // 가장 가벼운 사람의 인덱스
    int j = people.length - 1; // 가장 무거운 사람의 인덱스
    int boats = 0; // 필요한 구명보트의 수
    
    while (i <= j) {
      // 가장 가벼운 사람과 가장 무거운 사람을 함께 태울 수 있는 경우
      if (people[i] + people[j] <= limit) {
        i++; // 가벼운 사람을 다음 사람으로 이동
      }
      // 무거운 사람은 반드시 구명보트가 필요하므로 인덱스 이동
      j--;
      // 구명보트 1대를 사용
      boats++;
    }
    
    return boats; // 필요한 구명보트의 수를 반환
  }
}
```
