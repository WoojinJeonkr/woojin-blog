---
external : false
title : "Counting Sort 1"
tag : [Hackerrank, Java]
date : 2024-04-29
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/countingsort1/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static List<Integer> countingSort(List<Integer> arr) {
  // 카운팅 정렬을 수행하는 메소드입니다.
  int[] map = new int[100]; // 숫자의 출현 횟수를 저장하는 배열을 생성합니다.
  for(int i: arr){
    map[i]++; // 배열의 인덱스에 해당하는 숫자가 나타날 때마다 해당 인덱스의 값을 증가시킵니다.
  }
  return Arrays.stream(map).boxed().collect(Collectors.toList()); // 배열을 리스트로 변환하여 반환합니다.
}
```
