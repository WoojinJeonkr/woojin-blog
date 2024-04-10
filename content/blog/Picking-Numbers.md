---
external : false
title : "Picking Numbers"
tag : [Hackerrank, Java]
date :  2024-04-10
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int pickingNumbers(List<Integer> a) {
  // 리스트를 정렬합니다.
  Collections.sort(a);
  int start = 0;
  int i = 0;
  int max = 0;
  while (i < a.size()) {
    // 현재 요소와 시작 요소 사이의 절대값이 1보다 큰 경우,
    // 시작 요소를 현재 요소로 업데이트합니다.
    if (Math.abs(a.get(start) - a.get(i)) > 1) {
      start = i;
    }
    // 최대 길이를 업데이트합니다.
    max = Math.max(max, i - start + 1);
    i++;
  }
  i--;

  // 최종 최대 길이를 반환합니다.
  return Math.max(max, i - start + 1);
}
```
