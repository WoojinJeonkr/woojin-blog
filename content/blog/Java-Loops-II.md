---
external: false
title: "Java Loops II"
tag: [Hackerrank, java]
date: 2024-02-28
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-loops/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;

public class Solution {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    // 테스트 케이스 수를 입력 받음
    int t = scan.nextInt();

    // 각 테스트 케이스에 대해 반복
    for (int i = 0; i < t; i++) {
      // 변수 a, b, n을 입력 받음
      int a = scan.nextInt();
      int b = scan.nextInt();
      int n = scan.nextInt();
      int result = a;

      // 등비수열 합을 구하고 출력
      for (int j = 0; j < n; j++) {
        result += Math.pow(2, j) * b;
        System.out.printf("%d ", result);
      }
      System.out.println();
    }
    scan.close();
  }
}
```
