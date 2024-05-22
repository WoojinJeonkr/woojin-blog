---
external : false
title : "Printing Pattern Using Loops"
tag : [Hackerrank, C]
date : 2024-05-22
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/printing-pattern-2/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>
#include <stdlib.h>

int main() 
{
  // 정수 n을 입력받습니다.
  int n;
  scanf("%d", &n);

  // 출력할 패턴의 한 변의 길이를 계산합니다. 
  int len = 2 * n - 1;

  // 패턴을 출력하기 위한 이중 루프
  for (int i = 0; i < len; i++) {
    for (int j = 0; j < len; j++) {
      // 각 위치에서 출력할 값을 결정하기 위해 최소값을 계산합니다.
      int min = i < j ? i : j;
      min = min < len - i ? min : len - i - 1;
      min = min < len - j - 1 ? min : len - j - 1;

      // 계산된 최소값을 이용해 출력할 값을 결정하고 출력합니다.
      printf("%d ", n - min);
    }
    // 한 줄의 출력이 끝나면 줄 바꿈을 합니다.
    printf("\n");
  }

  return 0;
}
```
