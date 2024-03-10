---
external: false
title: "Baekjoon 16561"
tag: [Baekjoon, Java]
date : 2024-01-26
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/16561)에서 확인하실 수 있습니다.

## 2. Solve (memory: 17680KB, time: 204ms)

```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    // 사용자로부터 정수 입력 받기
    int n = scan.nextInt();

    // 초기값 설정
    int sum = 1;  // 합계를 저장할 변수
    int count = 2;  // 더해질 값의 초기값 설정

    // 주어진 조건에 따라 더해질 값 계산
    for (int i = 9; i < n; i += 3) {
      sum += count;
      count++;
    }

    // 결과 출력
    System.out.println(sum);
  }
}
```
