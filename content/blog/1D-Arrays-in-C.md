---
external : false
title : "1D Arrays in C"
tag : [Hackerrank, C]
date : 2024-05-20
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/1d-arrays-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
#include <stdio.h>

int main() {
  int n; 
  // 사용자로부터 배열의 크기를 입력받음
  scanf("%d", &n);

  // 입력된 크기 n을 가진 정수 배열을 선언하고, 합을 저장할 변수 sum을 0으로 초기화
  int arr[n], sum = 0;
  
  // 배열의 각 요소를 사용자로부터 입력받음
  for (int i = 0; i < n; i++) 
    scanf("%d", &arr[i]);
  
  // 배열의 모든 요소를 순회하며 합을 계산
  for (int i = 0; i < n; i++) 
    sum += arr[i];
  
  // 계산된 합을 출력
  printf("%d", sum);

  // 프로그램 종료
  return 0;
}
```
