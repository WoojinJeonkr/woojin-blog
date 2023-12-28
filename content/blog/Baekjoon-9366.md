---
external: false
title: "Baekjoon 9366"
date: 2023-08-16
---

## 1. 문제

[문제 확인하기](https://www.acmicpc.net/problem/9366)

## 2. 정답 코드 (Java, memory: 18300KB, time: 236ms)

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();  // 테스트케이스 개수

        for (int i = 1; i <= T; i++) {
            int A = scanner.nextInt();
            int B = scanner.nextInt();
            int C = scanner.nextInt();

            System.out.print("Case #" + i + ": ");
            classifyTriangle(A, B, C);
        }

        scanner.close();
    }

    // 삼각형을 분류하고 출력하는 함수
    private static void classifyTriangle(int A, int B, int C) {
        if (A + B > C && A + C > B && B + C > A) {  // 삼각형 조건을 만족하는지 확인
            if (A == B && B == C) {
                System.out.println("equilateral");
            } else if (A == B || B == C || A == C) {
                System.out.println("isosceles");
            } else {
                System.out.println("scalene");
            }
        } else {
            System.out.println("invalid!");
        }
    }
}
```
