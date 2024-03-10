---
external: false
title: "Utopian Tree"
tag: [Hackerrank, Java]
date : 2024-01-28
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;

class Result {

  /*
   * 'utopianTree' 함수는 주어진 정수 n에 대한 나무의 최종 높이를 반환합니다.
   * 함수는 정수 n을 매개변수로 받습니다.
   */
  public static int utopianTree(int n) {
    // 'height' 변수는 나무의 높이를 기록합니다. 초기값은 1입니다.
    int height = 1;

    // 0부터 n-1까지의 각 사이클에 대해 반복합니다.
    for (int i = 0; i < n; i++) {
      // 현재 사이클 번호가 짝수인 경우, 나무의 높이를 두 배로 증가시킵니다.
      // 그렇지 않은 경우, 나무의 높이를 1만큼 증가시킵니다.
      if (i % 2 == 0) {
        height *= 2;
      } else {
        height++;
      }
    }
    // 최종 나무의 높이를 반환합니다.
    return height;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    // 입력 및 출력 스트림 설정
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 테스트 케이스의 개수(t)를 읽어옵니다.
    int t = Integer.parseInt(bufferedReader.readLine().trim());

    // 각 테스트 케이스를 처리합니다.
    IntStream.range(0, t).forEach(tItr -> {
      try {
        // 현재 테스트 케이스의 입력값(n)을 읽어옵니다.
        int n = Integer.parseInt(bufferedReader.readLine().trim());

        // 'utopianTree' 함수를 호출하여 현재 테스트 케이스의 결과값을 계산합니다.
        int result = Result.utopianTree(n);

        // 결과값을 출력 파일에 기록합니다.
        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();
      } catch (IOException ex) {
        throw new RuntimeException(ex);
      }
    });

    // 입력 및 출력 스트림을 닫습니다.
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
