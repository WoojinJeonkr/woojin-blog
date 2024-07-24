---
external : false
title : "Compare arrays"
tag : [Programmers, Java]
date : 2024-07-24
---

## 1. Problem

해당 문제는 [여기]()에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
  public int solution(int[] arr1, int[] arr2) {
    int answer = 0;
    int arr1_length = arr1.length; // 배열 arr1의 길이
    int arr2_length = arr2.length; // 배열 arr2의 길이

    if (arr1_length > arr2_length) answer = 1; // arr1의 길이가 arr2의 길이보다 크면 1 반환
    else if (arr1_length < arr2_length) answer = -1; // arr1의 길이가 arr2의 길이보다 작으면 -1 반환
    else {
      int arr1_sum = 0; // arr1의 모든 요소의 합
      int arr2_sum = 0; // arr2의 모든 요소의 합

      for (int i = 0; i < arr1_length; i++) arr1_sum += arr1[i]; // arr1의 모든 요소를 더함
      for (int i = 0; i < arr2_length; i++) arr2_sum += arr2[i]; // arr2의 모든 요소를 더함

      if (arr1_sum == arr2_sum) answer = 0; // 두 배열의 합이 같으면 0 반환
      else if (arr1_sum > arr2_sum) answer = 1; // arr1의 합이 arr2의 합보다 크면 1 반환
      else answer = -1; // arr1의 합이 arr2의 합보다 작으면 -1 반환
    }
    return answer;
  }
}
```
