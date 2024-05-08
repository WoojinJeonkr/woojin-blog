---
external : false
title : "Conditional Statements in C"
tag : [Hackerrank, C]
date : 2024-05-08
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/conditional-statements-in-c/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```cpp
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* readline(); // 한 줄을 읽어옵니다.

int main()
{
  char* n_endptr;
  char* n_str = readline(); // 한 줄을 읽어들여서 n_str에 저장합니다.
  int n = strtol(n_str, &n_endptr, 10); // 문자열을 정수로 변환합니다.

  if (n_endptr == n_str || *n_endptr != '\0') { exit(EXIT_FAILURE); }

  if(n>=1 && n<=9)
  { if(n==1)
      printf("one"); // n이 1인 경우 "one"을 출력합니다.
    if(n==2)
      printf("two"); // n이 2인 경우 "two"를 출력합니다.
    if(n==3)
      printf("three"); // n이 3인 경우 "three"를 출력합니다.
    if(n==4)
      printf("four"); // n이 4인 경우 "four"를 출력합니다.
    if(n==5)
      printf("five"); // n이 5인 경우 "five"를 출력합니다.
    if(n==6)
      printf("six"); // n이 6인 경우 "six"를 출력합니다.
    if(n==7)
      printf("seven"); // n이 7인 경우 "seven"을 출력합니다.
    if(n==8)
      printf("eight"); // n이 8인 경우 "eight"를 출력합니다.
    if(n==9)
      printf("nine"); // n이 9인 경우 "nine"를 출력합니다.
  }
  else
    printf("Greater than 9"); // n이 1부터 9까지가 아닌 경우 "Greater than 9"를 출력합니다.
  return 0;
}

char* readline() {
  size_t alloc_length = 1024; // 할당된 길이를 1024로 초기화합니다.
  size_t data_length = 0; // 데이터 길이를 0으로 초기화합니다.
  char* data = malloc(alloc_length); // 메모리를 할당합니다.

  while (1) {
    char* cursor = data + data_length; // 커서를 데이터 위치로 이동시킵니다.
    char* line = fgets(cursor, alloc_length - data_length, stdin); // 한 줄을 읽어들입니다.

    if (!line) { break; } // 더 이상 읽을 줄이 없으면 반복문을 종료합니다.

    data_length += strlen(cursor); // 데이터 길이를 업데이트합니다.

    if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') { break; } // 데이터 길이가 할당 길이보다 작거나 마지막 문자가 개행 문자인 경우 반복문을 종료합니다.

    size_t new_length = alloc_length << 1; // 새로운 길이를 기존 길이의 두 배로 설정합니다.
    data = realloc(data, new_length); // 데이터의 크기를 조정합니다.

    if (!data) { break; } // 메모리 할당에 실패하면 반복문을 종료합니다.

    alloc_length = new_length; // 할당된 길이를 새로운 길이로 업데이트합니다.
  }

  if (data[data_length - 1] == '\n') {
    data[data_length - 1] = '\0'; // 개행 문자를 널 문자로 대체합니다.
  }

  data = realloc(data, data_length); // 데이터의 크기를 조정합니다.

  return data; // 데이터를 반환합니다.
}
```
