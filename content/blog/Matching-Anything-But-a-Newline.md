---
external : false
title : "Matching Anything But a Newline"
tag : [Hackerrank, Java]
date : 2024-03-06
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/matching-anything-but-new-line/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Solution {  

  public static void main(String[] args) {
        
    // Tester 객체 생성
    Tester tester = new Tester();
    
    // 주어진 정규표현식 패턴 설명:
    // - 세 개의 임의의 문자, 하나의 역슬래시, 세 개의 임의의 문자, 하나의 역슬래시,
    //   세 개의 임의의 문자, 하나의 역슬래시, 세 개의 임의의 문자, 하나의 역슬래시,
    //   세 개의 임의의 문자로 이루어짐.
    // 패턴에 일치하는 문자열 형태: "12개의 임의의 문자 + 3개의 점 + 3개의 점 + 3개의 점 + 3개의 점"
    // 정규표현식 패턴 설정 및 확인 메서드 호출
    tester.check("...\\....\\....\\...."); 
    
  }
}

class Tester {

  // 주어진 정규표현식 패턴과 사용자 입력 문자열을 비교하여 일치 여부를 확인하는 메서드
  public void check(String pattern){
    
    // 사용자 입력을 받기 위한 Scanner 객체 생성
    Scanner scanner = new Scanner(System.in);
    String testString = scanner.nextLine();
    
    // 주어진 패턴을 이용하여 정규표현식 객체 생성
    Pattern p = Pattern.compile(pattern);
    
    // 입력된 문자열과 패턴을 이용하여 일치 여부를 확인하는 Matcher 객체 생성
    Matcher m = p.matcher(testString);
    
    // 일치 여부를 boolean 값으로 저장
    boolean match = m.matches();
    
    // 결과 출력
    System.out.format("%s", match);
  }   
}
```
