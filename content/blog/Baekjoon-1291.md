---
external: false
title: "Baekjoon 1291"
tag: [Baekjoon, Java]
date: 2024-02-13
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1291)에서 확인하실 수 있습니다.

## 2. Solve (memory: 17668KB, time: 212ms)

```java
import java.util.Scanner;
import java.util.ArrayList;

public class Main {

  // 숫자의 자릿수를 계산하는 함수
  public static int digit(int n) {
    int a = 0;
    while (true) {
      int b = n / (int)Math.pow(10, a);
      if (b < 10) {
        break;
      }
      a++;
    }
    return a + 1;
  }

  // 소수를 확인하는 함수
  public static boolean checkPrime(int n) {
    int a = 2;
    if (n == 1) {
      return false;
    } else {
      while (true) {
        int b = n % a;
        if (b == 0) {
          break;
        }
        a++;
      }
      return n == a;
    }
  }

  // 이면수인지 확인하는 함수
  public static boolean checkIfNum(int n) {
    int temp = n;
    int a = digit(n);
    ArrayList<Integer> v = new ArrayList<>();
    while (a > 1) {
      int i = n / (int)Math.pow(10, a - 1);
      v.add(i);
      n = n - (i * (int)Math.pow(10, a - 1));
      a--;
    }
    v.add(n);
    int b = 0;
    for (int i = 0; i < v.size(); i++) {
      b += v.get(i);
    }
    return temp >= 4 && temp != 5 && b % 2 == 1;
  }

  // 임현수인지 확인하는 함수
  public static boolean checkSpecialNum(int n) {
    ArrayList<Integer> v = new ArrayList<>();
    if (n == 2 || n == 4) {
      return true;
    } else if (checkPrime(n) || n == 1) {
      return false;
    } else {
      for (int i = 2; i < n; i++) {
        int a = n % i;
        if (a == 0 && checkPrime(i)) {
          v.add(i);
        }
      }
      return v.size() % 2 == 0;
    }
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt();
    if (checkSpecialNum(n) && checkIfNum(n)) {
      System.out.println(4); // 4 출력
    } else {
      if (checkIfNum(n)) {
        System.out.println(1); // 1 출력
      } else if (checkSpecialNum(n)) {
        System.out.println(2); // 2 출력
      } else {
        System.out.println(3); // 3 출력
      }
    }
  }
}
```
