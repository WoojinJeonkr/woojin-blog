---
external : false
title : "Java BigInteger"
tag : [Hackerrank, Java]
date : 2024-03-20
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-biginteger/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.*;
import java.math.*;

public class Solution {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in); // 스캐너 객체를 생성합니다
    BigInteger a;
    BigInteger b;
    BigInteger sum = BigInteger.valueOf(0); // 합을 저장할 BigInteger 변수를 초기화합니다
    BigInteger product = BigInteger.valueOf(0); // 곱을 저장할 BigInteger 변수를 초기화합니다

    a = new BigInteger(scan.nextLine()); // 첫 번째 BigInteger를 입력으로 받습니다
    b = new BigInteger(scan.nextLine()); // 두 번째 BigInteger를 입력으로 받습니다

    sum = sum.add(a); // 첫 번째 숫자를 합 변수에 더합니다
    sum = sum.add(b); // 두 번째 숫자를 합 변수에 더합니다
    product = a.multiply(b); // 두 숫자의 곱을 구합니다

    System.out.println(sum); // 합을 출력합니다
    System.out.println(product); // 곱을 출력합니다

    scan.close(); // 스캐너를 닫습니다
  }
}
```
