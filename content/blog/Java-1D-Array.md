---
external: false
title: "Java 1D Array"
tag: [Hackerrank, Java]
date: 2024-01-31
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-1d-array-introduction/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.*;

public class Solution {

  public static void main(String[] args) {

    Scanner scan = new Scanner(System.in);
    int n = scan.nextInt();  // 입력받을 정수의 개수를 사용자에게 받음
    int[] a = new int[n];    // 크기가 n인 정수 배열 생성

    // 사용자로부터 n개의 정수를 입력받아 배열 a에 저장
    for (int i = 0; i < a.length; i++) {
      a[i] = scan.nextInt();
    }

    scan.close();  // Scanner 객체 닫기

    // 배열 a에 저장된 각 원소를 순차적으로 출력
    for (int i = 0; i < a.length; i++) {
      System.out.println(a[i]);
    }
  }
}
```
