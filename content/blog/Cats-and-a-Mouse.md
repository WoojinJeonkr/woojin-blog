---
external: false
title: "Cats and a Mouse"
tag: [Hackerrank, Java]
date : 2024-01-27
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true)에서 확인 가능합니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;

public class Solution {

  // 쥐와 고양이의 위치에 대한 거리를 비교하여 결과를 반환하는 함수
  static String catAndMouse(int x, int y, int z) {
    // 쥐와 고양이 A의 거리 계산
    int distanceCatA = Math.abs(z - x);
    // 쥐와 고양이 B의 거리 계산
    int distanceCatB = Math.abs(z - y);

    // 거리 비교하여 결과 반환
    if (distanceCatA < distanceCatB) {
      return "고양이 A"; // 쥐와 고양이 A 사이의 거리가 더 가까운 경우
    } else if (distanceCatA > distanceCatB) {
      return "고양이 B"; // 쥐와 고양이 B 사이의 거리가 더 가까운 경우
    } else {
      return "쥐 C"; // 쥐와 고양이 A, B 사이의 거리가 같은 경우
    }
  }

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) throws IOException {
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int q = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    // 테스트 케이스 수 만큼 반복
    for (int qItr = 0; qItr < q; qItr++) {
      String[] xyz = scanner.nextLine().split(" ");

      int x = Integer.parseInt(xyz[0]);
      int y = Integer.parseInt(xyz[1]);
      int z = Integer.parseInt(xyz[2]);

      // catAndMouse 함수 호출하여 결과 얻기
      String result = catAndMouse(x, y, z);

      // 결과를 파일에 쓰기
      bufferedWriter.write(result);
      bufferedWriter.newLine();
    }

    // 파일 닫기
    bufferedWriter.close();

    // 스캐너 닫기
    scanner.close();
  }
}
```
