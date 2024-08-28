---
external : false
title : "Above the bottom five"
tag : [Programmers, Java]
date : 2024-08-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181852)에서 확인하실 수 있습니다.

## 2. Problem solving process

주어진 문제를 해결하기 위해서는 먼저 입력된 정수 리스트를 오름차순으로 정렬해야 합니다. 정렬된 리스트에서 가장 작은 다섯 개의 숫자를 제외한 나머지 숫자들을 추출해야 하므로, 정렬이 완료된 후 앞의 다섯 개 원소를 제거하고 남은 숫자들을 새로운 리스트에 담아 반환하면 됩니다.

이를 구현하기 위해, 버블 정렬과 같은 간단한 정렬 알고리즘을 사용할 수 있습니다. 정렬 후 리스트의 6번째 요소부터 끝까지를 선택하여 새로운 배열에 복사하는 방식으로 문제를 해결할 수 있습니다.

이렇게 하면 리스트에서 가장 작은 다섯 개의 숫자를 제거하고 나머지 숫자들만을 오름차순으로 정렬하여 반환하는 결과를 얻을 수 있습니다.

## 3. Answer

```java
class Solution {
  public int[] solution(int[] num_list) {
    // 버블 정렬을 사용하여 배열을 오름차순으로 정렬
    for (int i = 0; i < num_list.length - 1; i++) {
      for (int j = 0; j < num_list.length - 1 - i; j++) {
        if (num_list[j] > num_list[j + 1]) {
          // 두 요소의 위치를 교환
          int temp = num_list[j];
          num_list[j] = num_list[j + 1];
          num_list[j + 1] = temp;
        }
      }
    }

    // 작은 5개의 수를 제외한 나머지 수들을 담을 배열 생성
    int[] answer = new int[num_list.length - 5];

    // 앞의 5개의 수를 제외한 나머지 수들을 새 배열에 복사
    for (int i = 5; i < num_list.length; i++) {
      answer[i - 5] = num_list[i];
    }

    // 결과 반환
    return answer;
  }
}
```
