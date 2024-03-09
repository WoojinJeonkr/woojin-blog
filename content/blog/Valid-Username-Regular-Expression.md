---
external : false
title : "Valid Username Regular Expression"
tag : [Hackerrank, Java]
date : 2024-03-09
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/valid-username-checker/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;

public class Solution {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    // 입력 스트림에서 정수를 읽어들임
    int n = Integer.parseInt(scan.nextLine());
    // 유효한 사용자 이름을 검증하는 정규 표현식
    // ^[a-zA-Z] : 첫 글자는 알파벳 (대문자 또는 소문자)이어야 합니다
    // \\w  : 그 뒤에는 알파벳(대문자 또는 소문자), 숫자 또는 밑줄 (_)이 올 수 있습니다
    // {7,29} : 사용자 이름의 길이는 최소 8글자에서 최대 30글자여야 합니다
    String regularExpression = "^[a-zA-Z]\\w{7,29}$";
    // 입력된 횟수만큼 반복
    while (n-- != 0) {
      // 사용자 이름 입력
      String userName = scan.nextLine();

      // 정규 표현식과 일치하는지 확인하고 결과 출력
      if (userName.matches(regularExpression)) {
        System.out.println("Valid"); // 유효한 경우
      } else {
        System.out.println("Invalid"); // 유효하지 않은 경우
      }           
    }
    scan.close(); // 스캐너 닫기
  }
}
```
