---
external: false
title: "Pattern Syntax Checker"
tag: [Hackerrank, Java]
date: 2024-03-05
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/pattern-syntax-checker/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.Scanner;
import java.util.regex.*;

public class Solution {
  public static void main(String[] args){
    Scanner in = new Scanner(System.in);

    // 테스트 케이스의 개수를 입력 받습니다.
    int testCases = Integer.parseInt(in.nextLine());

    // 각 테스트 케이스에 대해 반복합니다.
    while(testCases>0){

      // 정규 표현식 패턴을 입력 받습니다.
      String pattern = in.nextLine();

      //Write your code
      // 입력 받은 패턴을 컴파일하여 유효성을 검사합니다.
      try {
        // 입력된 패턴을 컴파일합니다.
        Pattern.compile(pattern);

        // 만약 컴파일이 성공하면 유효한 정규 표현식이므로 "Valid"를 출력합니다.
        System.out.println("Valid");
      } catch (PatternSyntaxException e){

        // 만약 컴파일 도중에 문제가 발생하면, 즉 입력된 패턴이 유효하지 않은 경우에는 PatternSyntaxException이 발생하게 됩니다.
        // 이를 잡아서 "Invalid"를 출력합니다.
        System.out.println("Invalid");
      }
      
      testCases--;
    }

    // Scanner를 종료합니다.
    in.close();
  }
}
```
