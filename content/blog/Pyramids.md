---
external : false
title : "Pyramids"
tag : [Baekjoon, Java]
date : 2025-03-18
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/5341)에서 확인하실 수 있습니다.

## 2. Problem solving process

피라미드 구조에서 각 층의 블록 수를 계산하여 총 블록 개수를 구하는 문제입니다.

피라미드는 밑면 크기 n에서 시작하여, 그 위층에는 n-1개의 블록을 쌓고, 이를 반복하여 맨 위층에 1개의 블록만 남을 때까지 쌓는 구조로 이루어져 있습니다.

따라서 총 블록 수는 n + (n-1) + (n-2) + ... + 1로 표현할 수 있으며, 이는 등차수열의 합 공식 S = n * (n+1) / 2를 사용하여 효율적으로 계산할 수 있습니다.

## 3. Answer

```java
import java.util.Scanner;

public class PyramidBlocks {
  public static void main(String[] args) {
    // Scanner 객체를 생성하여 사용자 입력을 처리
    Scanner sc = new Scanner(System.in);

    while (true) {
      // 피라미드 밑면 크기 입력 받기
      int baseSize = sc.nextInt();

      // 입력값이 0이면 반복 종료
      if (baseSize == 0) {
        break;
      }

      // 피라미드에 필요한 총 블록 수 계산
      // 등차수열의 합 공식: n * (n + 1) / 2 사용
      int totalBlocks = baseSize * (baseSize + 1) / 2;

      // 결과 출력
      System.out.println(totalBlocks);
    }

    // Scanner 객체 닫기
    sc.close();
  }
}
```
