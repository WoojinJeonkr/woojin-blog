---
external : false
title : "Digit Frequency"
tag : [Hackerrank, C]
date : 2024-05-23
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/frequency-of-digits-1/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>
#include <string.h>

int main() {
  char s[1000]; // 최대 1000자의 문자열을 저장할 배열 선언
  int freq[10] = {0}; // 0부터 9까지 숫자의 빈도를 저장할 배열 초기화

  // 문자열 입력 받기 (개행 문자가 나올 때까지)
  scanf("%[^\n]", s); 
  // 입력받은 문자열을 순회하면서 숫자의 빈도를 계산
  for (int i = 0; i < strlen(s); i++) {
    // 현재 문자가 숫자('0'에서 '9')인지 확인
    if (s[i] >= '0' && s[i] <= '9') freq[s[i] - '0']++;
  }

  // 각 숫자의 빈도를 출력
  for (int i = 0; i < 10; i++) {
    printf("%d ", freq[i]);
  }
  return 0;
}
```
