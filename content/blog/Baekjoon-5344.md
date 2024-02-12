---
external: false
title: "Baekjoon 5344"
tag: [Baekjoon, Java]
date: 2024-02-12
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5344)에서 확인하실 수 있습니다.

## 2. Solve (memory: 17548KB, time: 212ms)

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // 문제 세트의 개수를 입력 받음
    int n = scanner.nextInt();
    scanner.nextLine(); // 개행 문자 소비

    for (int i = 0; i < n; i++) {
      // 두 개의 정수를 입력 받음
      String[] inputs = scanner.nextLine().split("\\s+");
      int num1 = Integer.parseInt(inputs[0]);
      int num2 = Integer.parseInt(inputs[1]);

      // 최대 공약수 계산
      int gcd = findGCD(num1, num2);

      // 결과 출력
      System.out.println(gcd);
    }

    scanner.close();
  }

  // 최대 공약수 계산 메소드 (유클리드 호제법 활용)
  public static int findGCD(int a, int b) {
    if (b == 0) {
      return a;
    } else {
      return findGCD(b, a % b);
    }
  }
}
```
