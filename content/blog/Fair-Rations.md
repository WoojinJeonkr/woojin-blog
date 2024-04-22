---
external : false
title : "Fair Rations"
tag : [Hackerrank, Java]
date : 2024-04-22
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/fair-rations/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

  /*
   * 아래의 fairRations 함수는 정수 배열 B를 파라미터로 받아서
   * 문자열을 반환하는 함수입니다.
   * 이 함수는 주어진 배열 B를 조작하여 모든 요소가 짝수가 되도록 만드는 최소한의 조치 횟수를 계산합니다.
   * 만약 조작이 불가능한 경우 "NO"를 반환합니다.
   */
  public static String fairRations(List<Integer> B) {
    int sum = 0;
    // 배열 B의 총 합을 계산합니다.
    for (int i = 0; i < B.size(); i++) {
      sum += B.get(i);
    }

    // 만약 배열 B의 합이 홀수이면 "NO"를 반환합니다.
    if (sum % 2 != 0) {
      return "NO";
    }

    int count = 0;
    // 배열 B의 요소들을 확인하면서 짝수로 만들기 위해 조치를 취합니다.
    for (int i = 0; i < B.size() - 1; i++) {
      // 현재 요소가 홀수인 경우
      if (B.get(i) % 2 != 0) {
        // 현재 요소와 다음 요소를 함께 두 개씩 더하여 짝수로 만듭니다.
        B.set(i, B.get(i) + 1);
        B.set(i + 1, B.get(i + 1) + 1);
        count += 2; // 조치한 횟수를 2씩 증가시킵니다.
      }
    }

    // 모든 요소가 짝수가 되었을 때, 조치한 횟수를 반환합니다.
    return String.valueOf(count);
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int N = Integer.parseInt(bufferedReader.readLine().trim());

    List<Integer> B = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
        .map(Integer::parseInt)
        .collect(Collectors.toList());

    // fairRations 함수를 호출하여 결과를 얻고 출력 파일에 기록합니다.
    String result = Result.fairRations(B);

    bufferedWriter.write(result);
    bufferedWriter.newLine();

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
