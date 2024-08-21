---
external : false
title : "Fatigue"
tag : [Programmers, Java]
date : 2024-08-21
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/87946)에서 확인하실 수 있습니다.

## 2. Problem solving process

위 문제의 핵심은 주어진 피로도와 던전 정보를 바탕으로 최대한 많은 던전을 탐험하는 방법을 찾는 것입니다. 유저의 피로도가 주어지고, 각 던전은 특정한 "최소 필요 피로도"와 "소모 피로도"를 가지고 있습니다. 유저는 탐험 가능한 던전의 수를 최대화해야 합니다.

우선, 문제의 핵심은 유저가 가능한 모든 던전 탐험 순서를 시도하여 가장 많은 던전을 탐험할 수 있는 경우를 찾는 것입니다. 던전의 개수가 최대 8개로 제한되어 있기 때문에, 가능한 모든 던전 순서를 시도하는 완전 탐색(브루트 포스) 방식이 적합합니다.

완전 탐색을 통해 문제를 해결하기 위해서는 먼저 모든 가능한 던전 순열을 생성해야 합니다. 순열 생성은 자바의 경우 Collections.swap을 사용하여 구현할 수 있으며, 이를 통해 던전의 모든 가능한 탐험 순서를 생성할 수 있습니다. 생성된 각 순열에 대해, 유저의 현재 피로도로 던전을 탐험할 수 있는지를 시뮬레이션하여 피로도를 업데이트하고 탐험할 수 있는 던전 수를 계산합니다.

탐험 가능한 던전 수를 계산한 후, 이 수를 최대값으로 업데이트하여 유저가 탐험할 수 있는 최대 던전 수를 도출합니다. 이 과정은 던전의 개수가 적기 때문에 시간 복잡도가 상대적으로 낮아 효율적으로 수행할 수 있습니다.

결론적으로, 문제를 해결하기 위한 접근 방법은 가능한 모든 던전 순서를 시도하여 각 순서에 대해 탐험 가능한 던전 수를 계산하고, 이 중 최대값을 찾는 것입니다. 이 방법을 자바 코드로 구현하면, 모든 순열을 시도하고 각 순열에 대해 탐험 가능한 던전 수를 계산하여 최적의 결과를 얻을 수 있습니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int k, int[][] dungeons) {
    int answer = 0;  // 최대 던전 수를 저장할 변수
    int n = dungeons.length;  // 던전의 개수
    List<Integer> list = new ArrayList<>();
    
    // 던전 인덱스를 리스트에 추가
    for (int i = 0; i < n; i++) {
      list.add(i);
    }
    
    List<List<Integer>> permutations = new ArrayList<>();
    
    // 모든 던전 순열을 생성
    permute(list, 0, permutations);
    
    // 생성된 모든 순열에 대해 탐험 가능한 던전 수 계산
    for (List<Integer> perm : permutations) {
      int currentFatigue = k;  // 현재 피로도
      int count = 0;  // 탐험한 던전 수
      
      // 순열에 따라 던전 탐험 시뮬레이션
      for (int index : perm) {
        int minFatigue = dungeons[index][0];  // 던전을 탐험하기 위한 최소 필요 피로도
        int usedFatigue = dungeons[index][1];  // 던전 탐험 후 소모되는 피로도
        
        if (currentFatigue >= minFatigue) {
          currentFatigue -= usedFatigue;  // 피로도 업데이트
          count++;  // 탐험한 던전 수 증가
        } else {
          break;  // 탐험 불가능하면 루프 종료
        }
      }
      // 최대 탐험 던전 수 업데이트
      answer = Math.max(answer, count);
    }
    
    return answer;  // 최대 탐험 던전 수 반환
  }
  
  private void permute(List<Integer> list, int start, List<List<Integer>> result) {
    if (start == list.size() - 1) {
      result.add(new ArrayList<>(list));  // 현재 순열을 결과 리스트에 추가
    } else {
      for (int i = start; i < list.size(); i++) {
        Collections.swap(list, start, i);  // 원소 위치 교환
        permute(list, start + 1, result);  // 재귀 호출
        Collections.swap(list, start, i);  // 원래 위치로 복원
      }
    }
  }
}
```
