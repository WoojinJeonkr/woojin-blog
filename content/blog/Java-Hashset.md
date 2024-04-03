---
external : false
title : "Java Hashset"
tag : [Hackerrank, Java]
date : 2024-04-03
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-hashset/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Problem

```java
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int t = s.nextInt(); // 테스트 케이스 수 입력
    
    String[] pair_left = new String[t]; // 왼쪽 문자열 배열 선언
    String[] pair_right = new String[t]; // 오른쪽 문자열 배열 선언
    
    for (int i = 0; i < t; i++) {
      pair_left[i] = s.next(); // 왼쪽 문자열 입력
      pair_right[i] = s.next(); // 오른쪽 문자열 입력
    }

    //Write your code here
    s.close();
    
    HashSet<String> set = new HashSet(t); // 중복을 허용하지 않는 Set 생성
    for (int i = 0; i < t; i++) {
      set.add(pair_left[i] + " " + pair_right[i]); // 왼쪽과 오른쪽 문자열을 합쳐서 Set에 추가
      System.out.println(set.size()); // Set의 크기 출력
    }
  }
}
```
