---
external : false
title : "Java Map"
tag : [Hackerrank, Java]
date : 2024-03-11
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/phone-book/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
// 이 코드를 완성하거나 처음부터 작성하십시오
import java.util.*;
import java.io.*;

/**
 * 해시맵을 사용하여 전화번호부를 관리하고 검색하는 클래스입니다.
 */
class Solution {
  public static void main(String[] argh) {
    Scanner scan = new Scanner(System.in);
    int n = scan.nextInt(); // 입력 받을 라인의 수를 정수로 저장합니다.
    scan.nextLine();
    HashMap<String, Integer> phoneBook = new HashMap<>(); // 전화번호부를 저장할 해시맵을 생성합니다.

    // 전화번호부를 입력 받아 해시맵에 저장합니다.
    for (int i = 0; i < n; i++) {
      String name = scan.nextLine(); // 이름을 입력 받습니다.
      int phone = scan.nextInt(); // 전화번호를 입력 받습니다.
      phoneBook.put(name, phone); // 이름과 전화번호를 해시맵에 저장합니다.
      scan.nextLine();
    }
    // 검색할 이름을 입력 받고 해당 이름의 전화번호를 출력합니다.
    while (scan.hasNext()) {
      String s = scan.nextLine(); // 검색할 이름을 입력 받습니다.
      if (!phoneBook.containsKey(s)) { // 이름이 전화번호부에 없는 경우 "Not found"를 출력합니다.
        System.out.println("Not found");
        continue;
      }
      System.out.println(s + "=" + phoneBook.get(s)); // 이름과 전화번호를 출력합니다.
    }

    scan.close(); // 스캐너를 닫습니다.
  }
}
```
