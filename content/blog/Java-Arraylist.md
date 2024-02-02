---
external: false
title: "Java Arraylist"
tag: [Hackerrank, Java]
date: 2024-02-02
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-arraylist/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;

public class Solution {

  public static void main(String[] args) {
    // 코드를 입력하세요. 
    // STDIN에서 입력을 읽고 STDOUT으로 출력해야 합니다. 
    // 클래스 이름은 Solution이어야 합니다.
    Scanner scan = new Scanner(System.in);

    int n = scan.nextInt();
    // 2차원 ArrayList를 선언 및 초기화합니다.
    ArrayList<ArrayList<Integer>> arr = new ArrayList<>();

    // 각 행의 열 수를 입력 받고, 해당 행의 값을 ArrayList에 저장합니다.
    for (int i = 0; i < n; i++) {

      int d = scan.nextInt();
      ArrayList<Integer> a = new ArrayList<>();

      for (int j = 0; j < d; j++) {
        a.add(scan.nextInt());
      }

      // 2차원 ArrayList에 현재 행을 추가합니다.
      arr.add(a);
    }

    // 쿼리의 수를 입력 받습니다.
    int q = scan.nextInt();
    // 각 쿼리에 대해 해당 위치의 값을 출력합니다.
    for (int i = 0; i < q; i++) {

      int x = scan.nextInt();
      int y = scan.nextInt();

      try {
        // 주어진 위치의 값을 출력합니다.
        System.out.println(arr.get(x - 1).get(y - 1));
      } catch (IndexOutOfBoundsException e) {
        // 예외가 발생하면 "ERROR!"를 출력합니다.
        System.out.println("ERROR!");
      }
    }
  }
}
```
