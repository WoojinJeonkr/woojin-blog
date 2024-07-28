---
external : false
title : "Find the nearest 1"
tag : [Programmers, Java]
date : 2024-07-28
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181898)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int solution(int[] arr, int idx) {
    // 주어진 배열 arr에서 idx부터 시작하여 1을 찾습니다.
    // 1을 찾으면 그 인덱스를 반환하고, 찾지 못하면 -1을 반환합니다.

    for (int i = idx; i < arr.length; i++) {
      // idx부터 배열의 끝까지 반복하며 각 요소를 확인합니다.
      if (arr[i] == 1) {
        // 현재 요소가 1이면 해당 인덱스를 반환하고 함수를 종료합니다.
        return i;
      }
    }

    // 배열 전체를 검색했는데 1을 찾지 못하면 -1을 반환합니다.
    return -1;
  }
}
```
