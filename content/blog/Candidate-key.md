---
external : false
title : "Candidate key"
tag : [Programmers, Java]
date : 2024-10-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42890)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 주어진 릴레이션에서 후보 키를 찾아내는 것이 목표입니다. 후보 키는 릴레이션의 각 튜플을 유일하게 식별할 수 있는 속성(또는 속성의 조합)으로, 유일성과 최소성을 만족해야 합니다. 이를 해결하기 위해서는 먼저 속성들의 가능한 모든 조합을 탐색한 뒤, 그 조합이 릴레이션에서 유일성을 만족하는지 확인해야 합니다. 유일성을 만족한다면, 해당 조합이 최소성을 만족하는지 추가로 확인해야 합니다. 최소성은 후보 키가 기존 후보 키의 부분 집합이 아닐 때 성립합니다.

우선, 주어진 릴레이션의 속성들이 있을 때, 모든 속성 조합을 구하는 방법으로는 비트마스크를 사용하여 각 속성의 조합을 만들 수 있습니다. 예를 들어, 속성이 3개일 경우 000부터 111까지의 모든 비트 패턴을 이용하여 각 속성의 포함 여부를 결정합니다. 이렇게 생성된 속성 조합이 릴레이션의 튜플을 유일하게 식별할 수 있는지 확인하기 위해서는, 각 튜플에 대해 해당 속성 조합으로 유일한 키를 만들고, 이를 Set 자료구조에 저장하여 중복이 발생하는지 체크합니다. 중복이 없으면 유일성을 만족하는 것으로 간주합니다.

다음으로, 유일성을 만족하는 속성 조합이 후보 키가 되기 위해서는 최소성 조건을 만족해야 합니다. 최소성은 현재 후보 키로 고려하고 있는 속성 조합이 이미 구한 후보 키들의 부분 집합이 아닌지 확인하는 과정입니다. 만약 해당 조합이 기존 후보 키의 부분 집합이면 최소성이 깨지므로, 이 경우 후보 키로 채택되지 않습니다.

이 과정을 거쳐 모든 속성 조합을 탐색하면서 유일성과 최소성을 모두 만족하는 후보 키를 찾아내고, 그 후보 키의 개수를 반환하는 방식으로 문제를 해결할 수 있습니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  // 유일성 검증 함수: 속성들의 조합으로 튜플을 유일하게 식별할 수 있는지 확인
  private boolean isUnique(List<Integer> cols, String[][] relation) {
    Set<String> seen = new HashSet<>();
    for (String[] tuple : relation) {
      StringBuilder key = new StringBuilder();
      // 주어진 속성들(cols)을 사용해 키 생성
      for (int col : cols) {
        key.append(tuple[col]).append(" ");
      }
      // 생성된 키가 이미 존재하면 유일성이 깨짐
      if (!seen.add(key.toString())) {
        return false;
      }
    }
    return true;
  }

  // 최소성 검증 함수: 후보 키가 이미 존재하는 후보 키들의 부분 집합인지 확인
  private boolean isMinimal(List<Integer> cols, List<List<Integer>> candidateKeys) {
    for (List<Integer> candidateKey : candidateKeys) {
      // 현재 속성 조합이 기존 후보 키의 부분 집합이면 최소성 위배
      if (cols.containsAll(candidateKey)) {
        return false;
      }
    }
    return true;
  }

  public int solution(String[][] relation) {
    int numCols = relation[0].length;  // 릴레이션의 컬럼 수
    List<List<Integer>> candidateKeys = new ArrayList<>();
    
    // 모든 속성 조합을 비트마스크로 탐색 (1부터 2^numCols-1까지)
    for (int subset = 1; subset < (1 << numCols); subset++) {
      List<Integer> cols = new ArrayList<>();
      // 현재 부분 집합에 포함된 속성 인덱스 찾기
      for (int i = 0; i < numCols; i++) {
        if ((subset & (1 << i)) != 0) {
          cols.add(i);
        }
      }
      
      // 유일성과 최소성을 모두 만족하면 후보 키로 추가
      if (isUnique(cols, relation) && isMinimal(cols, candidateKeys)) {
        candidateKeys.add(cols);
      }
    }
    
    return candidateKeys.size();  // 최종 후보 키의 개수 반환
  }
}
```
