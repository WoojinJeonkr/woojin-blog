---
external : false
title : "The Hurdle Race"
tag : [Hackerrank, Java]
date : 2024-04-25
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static int hurdleRace(int k, List<Integer> height) {
  int max = 0;
  for (int h : height) {
    max = Math.max(max, h);
  }
  if (k - max < 0)
    return Math.abs(k - max);
  else
    return 0;
}
```

## 3. Total Code

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
   * 완주대회 클래스입니다.
   * 이 클래스는 완주대회에 참가한 선수들의 뛰기 높이를 계산합니다.
   */

  /*
   * 완주대회 함수를 완성하세요.
   *
   * 이 함수는 다음의 매개변수를 받습니다:
   *  1. 정수 k: 선수가 뛰어야 하는 최대 높이
   *  2. 정수 배열 height: 각 선수의 뛰기 높이를 나타내는 배열
   */

  public static int hurdleRace(int k, List<Integer> height) {
    // 가장 높은 장애물 높이를 저장할 변수 선언 및 초기화
    int max = 0;
    // 각 선수의 뛰기 높이를 순회하면서 가장 높은 장애물 높이를 구함
    for (int h : height) {
      max = Math.max(max, h);
    }
    // 만약 선수가 뛰어야 하는 최대 높이보다 가장 높은 장애물의 높이가 높다면
    if (k - max < 0)
      // 추가적으로 뛰어야 할 높이를 반환
      return Math.abs(k - max);
    // 그렇지 않으면
    else
      // 추가적인 뛰어야 할 높이가 없으므로 0을 반환
      return 0;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    // 입력을 받기 위한 BufferedReader 객체 생성
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    // 출력을 위한 BufferedWriter 객체 생성
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 첫 줄에서 공백을 기준으로 정수 두 개를 입력받아 배열에 저장
    String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

    // 첫 번째 정수를 변수에 저장
    int n = Integer.parseInt(firstMultipleInput[0]);
    // 두 번째 정수를 변수에 저장
    int k = Integer.parseInt(firstMultipleInput[1]);

    // 공백을 기준으로 나눈 후 각 높이를 정수로 변환하여 리스트에 저장
    List<Integer> height = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
      .map(Integer::parseInt)
      .collect(toList());

    // 완주대회 함수를 호출하여 결과를 계산
    int result = Result.hurdleRace(k, height);

    // 결과를 출력
    bufferedWriter.write(String.valueOf(result));
    // 새로운 줄로 이동
    bufferedWriter.newLine();

    // BufferedReader와 BufferedWriter를 닫음
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
