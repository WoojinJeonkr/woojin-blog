---
external : false
title : "How many"
tag : [Baekjoon, Java]
date : 2025-03-12
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/27294)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    // 입력을 받기 위한 스캐너 생성
    Scanner s = new Scanner(System.in);
    
    // 밥알 개수 결과를 저장할 변수
    int answer = 0;
    
    // 시간 입력
    int T = s.nextInt();
    // 상태 입력
    int S = s.nextInt();

    // 시간이 11시 이전이면 밥알 개수 280개
    if (T <= 11) {
      answer = 280;
    } 
    // 시간이 11시 이후 16시 이전이면 상태에 따라 밥알 개수 결정
    else if (T <= 16) {
      // 상태가 0이면 320개, 상태가 1이면 280개
      if (S == 0) {
        answer = 320;
      } else {
        answer = 280;
      }
    } 
    // 시간이 16시 이후이면 밥알 개수 280개
    else {
      answer = 280;
    }

    // 스캐너 종료
    s.close();
    
    // 결과 출력
    System.out.print(answer);
  }
}
```
