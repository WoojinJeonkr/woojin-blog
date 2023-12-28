---
external: false
title: "Java Strings Introduction"
date: 2023-11-02
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-strings-introduction/problem?isFullScreen=true)

## 2. 정답

```java
int totalLength = A.length() + B.length(); // 두 문자열의 길이의 합을 계산합니다.
System.out.println(totalLength); // 길이의 합을 출력합니다.

if (A.compareTo(B) > 0) {
  System.out.println("Yes"); // 첫 번째 문자열이 두 번째 문자열보다 사전적으로 크다면 "Yes"를 출력합니다.
} else {
  System.out.println("No"); // 그렇지 않으면 "No"를 출력합니다.
}

// 각 문자열의 첫 글자를 대문자로 변환하여 출력합니다.
String capitalizedA = A.substring(0, 1).toUpperCase() + A.substring(1);
String capitalizedB = B.substring(0, 1).toUpperCase() + B.substring(1);

System.out.println(capitalizedA + " " + capitalizedB); // 두 문자열을 대문자로 변환한 뒤 공백을 두고 출력합니다.
```

## 3. 전체 코드

```java
import java.io.*;
import java.util.*;

public class Solution {
  public static void main(String[] args) {
      
    Scanner sc = new Scanner(System.in);
    String A = sc.next(); // 첫 번째 문자열을 입력 받습니다.
    String B = sc.next(); // 두 번째 문자열을 입력 받습니다.
    
    int totalLength = A.length() + B.length(); // 두 문자열의 길이의 합을 계산합니다.
    System.out.println(totalLength); // 길이의 합을 출력합니다.
    
    if (A.compareTo(B) > 0) {
        System.out.println("Yes"); // 첫 번째 문자열이 두 번째 문자열보다 사전적으로 크다면 "Yes"를 출력합니다.
    } else {
        System.out.println("No"); // 그렇지 않으면 "No"를 출력합니다.
    }
    
    // 각 문자열의 첫 글자를 대문자로 변환하여 출력합니다.
    String capitalizedA = A.substring(0, 1).toUpperCase() + A.substring(1);
    String capitalizedB = B.substring(0, 1).toUpperCase() + B.substring(1);
    
    System.out.println(capitalizedA + " " + capitalizedB); // 두 문자열을 대문자로 변환한 뒤 공백을 두고 출력합니다.
  }
}
```
