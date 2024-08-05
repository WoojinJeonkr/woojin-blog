---
external : false
title : "The best and worst lottery ranks"
tag : [Programmers, Java]
date : 2024-08-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/77484)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
  public int[] solution(int[] lottos, int[] win_nums) {
    int[] answer = new int[2];
    
    // 당첨 번호를 저장할 Set 생성
    Set<Integer> winSet = new HashSet<>();
    for (int num : win_nums) {
      winSet.add(num);
    }
    
    int matchCount = 0; // 맞춘 번호의 개수
    int zeroCount = 0; // 0의 개수
    
    // 로또 번호와 당첨 번호 비교
    for (int num : lottos) {
      if (num == 0) {
        zeroCount++; // 0의 개수 세기
      } else if (winSet.contains(num)) {
        matchCount++; // 맞춘 번호의 개수 세기
      }
    }
    
    // 최선의 경우, 즉 모든 0이 당첨 번호로 바뀔 경우의 맞춘 번호 개수
    int bestMatchCount = matchCount + zeroCount;
    // 최선의 경우에 대한 등수 계산
    int bestRank = 7 - bestMatchCount;
    
    // 실제 맞춘 번호의 개수로 계산한 최악의 경우의 등수
    int worstRank = 7 - matchCount;
    
    // 등수는 1부터 시작하므로 최대값을 6으로 설정
    bestRank = Math.min(bestRank, 6);
    worstRank = Math.min(worstRank, 6);
    
    answer[0] = bestRank; // 최선의 경우 등수
    answer[1] = worstRank; // 최악의 경우 등수
    
    return answer;
  }
}
```
