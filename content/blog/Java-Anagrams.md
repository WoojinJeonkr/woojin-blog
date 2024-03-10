---
external : false
title : "Java Anagrams"
tag : [Hackerrank, Java]
date : 2024-03-10
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-anagrams/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.Scanner;

public class Solution {

  static boolean isAnagram(String a, String b) {
    // 대소문자를 구분하지 않기 위해 두 문자열을 모두 대문자로 변환
    a = a.toUpperCase();
    b = b.toUpperCase();

    // 두 문자열의 길이가 다르면 anagram이 아님
    if (a.length() != b.length())
      return false;

    // 문자열 a의 각 문자가 문자열 b에 존재하는지 확인하여 제거
    for (int i = 0; i < a.length(); i++) {
      int index = b.indexOf(a.charAt(i));
      // 문자가 존재하면 해당 문자를 문자열 b에서 제거
      if (index != -1)
        b = b.substring(0, index) + b.substring(index + 1);
      else
        return false; // 문자가 존재하지 않으면 anagram이 아님
    }

    return true; // 모든 문자가 존재하면 anagram
  }

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    String a = scan.next();
    String b = scan.next();
    scan.close();
    boolean ret = isAnagram(a, b);
    System.out.println((ret) ? "Anagrams" : "Not Anagrams"); // 결과 출력
  }
}
```
