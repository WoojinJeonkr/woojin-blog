---
external : false
title : "Printing Tokens"
tag : [Hackerrank, C]
date : 2024-05-21
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/printing-tokens-/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {

  char *s;
  s = malloc(1024 * sizeof(char)); // 1024 바이트 크기의 메모리를 할당합니다.
  scanf("%[^\n]", s); // 사용자로부터 줄바꿈 문자를 포함하지 않는 문자열을 입력받습니다.
  s = realloc(s, strlen(s) + 1); // 입력받은 문자열의 길이에 맞춰 메모리를 다시 할당합니다.
  for (char *c = s; *c != '\0'; c++) { // 문자열의 끝까지 반복합니다.
    if (*c == ' ') { // 공백 문자를 찾으면
      *c = '\n'; // 공백을 줄바꿈 문자로 변경합니다.
    }
  }
  printf("%s", s); // 결과 문자열을 출력합니다.
  return 0;
}
```
