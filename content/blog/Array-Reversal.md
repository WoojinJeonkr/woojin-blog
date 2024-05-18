---
external : false
title : "Array Reversal"
tag : [Hackerrank, C]
date : 2024-05-18
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/reverse-array-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
#include <stdio.h>
#include <stdlib.h>

int main()
{
  int num, *arr, i;
  // 사용자로부터 정수 num을 입력받음
  scanf("%d", &num);
  // num 크기의 정수 배열을 동적 할당
  arr = (int*) malloc(num * sizeof(int));
  // 배열에 num개의 정수를 입력받음
  for(i = 0; i < num; i++) {
    scanf("%d", arr + i);
  }

  int temp;
  // 배열을 반전시키는 로직
  // 배열의 첫 번째 요소와 마지막 요소를 교환하고, 두 번째 요소와 끝에서 두 번째 요소를 교환하는 식으로 진행
  for(i = 0; i < num/2; i++) {
    // temp에 현재 배열의 i번째 값을 저장
    temp = arr[i];
    // i번째 값에 num-1-i번째 값을 대입
    arr[i] = arr[num-1-i];
    // num-1-i번째 값에 temp에 저장해둔 i번째 값을 대입
    arr[num-1-i] = temp;
  }
  
  // 배열의 내용을 출력
  for(i = 0; i < num; i++)
    printf("%d ", *(arr + i));
  return 0;
}
```
