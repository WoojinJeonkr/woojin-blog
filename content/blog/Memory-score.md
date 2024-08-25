---
external : false
title : "Memory score"
tag : [Programmers, Java]
date : 2024-08-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/176963)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제를 해결하기 위해 먼저 각 인물의 이름과 그에 대응하는 그리움 점수를 효율적으로 관리할 방법이 필요합니다. 이를 위해, 이름을 키로 하고 그리움 점수를 값으로 하는 HashMap을 사용하여 이름과 점수를 매핑합니다. 이 HashMap을 통해 각 인물의 이름에 대해 빠르게 그리움 점수를 조회할 수 있습니다.

그 다음으로, 각 사진에 등장하는 인물들의 이름을 순회하면서 해당 인물이 HashMap에 있는지 확인하고, 존재할 경우 그리움 점수를 합산합니다. 이렇게 계산된 합산 점수가 바로 그 사진의 추억 점수가 됩니다. 모든 사진에 대해 이러한 작업을 반복하여, 각 사진의 추억 점수를 배열에 저장합니다. 마지막으로, 이 배열을 반환하여 각 사진의 추억 점수를 출력합니다.

이 과정에서 주의할 점은, 사진 속 인물들이 HashMap에 존재하지 않을 경우 그리움 점수를 0으로 처리해야 한다는 점입니다. 또한, 이 방법은 주어진 문제를 효율적으로 해결할 수 있으며, 각 사진의 추억 점수를 빠르게 계산할 수 있습니다.

## 3. Answer

```java
import java.util.HashMap;

class Solution {
  public int[] solution(String[] name, int[] yearning, String[][] photo) {
    // 이름과 그리움 점수를 매핑하기 위한 HashMap을 생성합니다.
    HashMap<String, Integer> yearningMap = new HashMap<>();
    
    // name과 yearning 배열을 이용해 HashMap을 채웁니다.
    for (int i = 0; i < name.length; i++) {
      yearningMap.put(name[i], yearning[i]);
    }
    
    // 결과를 저장할 배열을 생성합니다.
    int[] answer = new int[photo.length];
    
    // 각 사진별로 추억 점수를 계산합니다.
    for (int i = 0; i < photo.length; i++) {
      int sum = 0;  // 각 사진의 추억 점수를 저장할 변수
      for (String person : photo[i]) {
        // 해당 인물이 그리움 점수에 존재하는지 확인하고, 있으면 그 점수를 합산합니다.
        if (yearningMap.containsKey(person)) {
          sum += yearningMap.get(person);
        }
      }
      // 계산한 추억 점수를 결과 배열에 저장합니다.
      answer[i] = sum;
    }
    
    // 결과 배열을 반환합니다.
    return answer;
  }
}
```
