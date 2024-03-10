---
external: false
title: "Sales by Match"
tag: [Hackerrank, Java]
date : 2024-02-11
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

  /*
   * 아래의 sockMerchant 함수는
   * 매개변수로 다음을 받아들입니다:
   *  1. 정수 n
   *  2. 정수 배열 ar
   * 함수는 정수를 반환합니다.
   */
  public static int sockMerchant(int n, List<Integer> ar) {
    // 여기에 코드를 작성하세요
    int[] arr = new int[101]; // 색깔 별 양말 개수를 저장할 배열 생성
    int answer = 0; // 짝을 이룬 양말의 개수를 저장할 변수 초기화
    for(int i = 0; i < ar.size(); i++){
      arr[ar.get(i)]++; // 배열에 양말 색깔 별 개수를 기록
    }
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        answer += (arr[i] / 2); // 양말 색깔 별 개수를 이용하여 짝을 이룬 양말의 개수 계산
      }
    }
    return answer; // 짝을 이룬 양말의 총 개수 반환
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int n = Integer.parseInt(bufferedReader.readLine().trim()); // 첫 번째 줄에서 양말의 총 개수를 입력받음

    List<Integer> ar = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")) // 두 번째 줄에서 양말의 색깔을 입력받아 리스트에 저장
        .map(Integer::parseInt)
        .collect(toList());

    int result = Result.sockMerchant(n, ar); // sockMerchant 함수를 호출하여 짝을 이룬 양말의 총 개수 계산

    bufferedWriter.write(String.valueOf(result)); // 결과를 출력
    bufferedWriter.newLine();

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
