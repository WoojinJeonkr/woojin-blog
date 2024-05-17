---
external : false
title : "Playing With Characters"
tag : [Hackerrank, C]
date : 2024-05-17
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/playing-with-characters/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```cpp
#include <stdio.h> // 표준 입출력 라이브러리

int main() 
{
  char ch, s[24], t[100]; // 문자형 변수 ch와 문자열 저장용 배열 s와 t 선언
    
  // 하나의 문자를 입력받음
  scanf("%c", &ch);
    
  // 공백이 없는 문자열을 입력받음
  scanf("%s", s);
    
  // 버퍼에서 남아있는 개행 문자를 제거하기 위해 getchar() 사용
  getchar();
    
  // 개행 문자를 포함한 문자열을 입력받음
  scanf("%[^\n]%*c", t);
    
  // 입력받은 문자를 출력
  printf("%c\n", ch);
    
  // 입력받은 문자열 (공백 없는)을 출력
  printf("%s\n", s);
    
  // 입력받은 문자열 (공백 포함)을 출력
  printf("%s\n", t);
        
  return 0; // 프로그램 종료
}
```
