---
external: false
title: "Subarray Division"
description: "Hackerrank > Problem Solving"
tag: [Hackerrank, Java]
date: 2023-12-29
---

## 1. Problem

[Subarray Division](https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true)에서 확인하기

## 2. Solve

```java
import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

  /*
   * 'birthday' 함수는 초콜릿을 자르고, 조각의 합이 주어진 값과 일치하는 경우의 수를 계산합니다.
   *
   * 함수는 정수를 반환하며, 다음과 같은 매개변수를 받습니다:
   *  1. 정수 배열 s: 초콜릿의 각 조각에 대한 정수 배열
   *  2. 정수 d: 원하는 조각의 합
   *  3. 정수 m: 원하는 조각의 길이
   */

  public static int birthday(List<Integer> s, int d, int m) {
    int result = 0;  // 조각의 합이 일치하는 경우의 수를 저장하는 변수
    int sum = 0;     // 현재 검사 중인 조각의 합을 저장하는 변수

    // 초콜릿을 순회하면서 조각의 합이 일치하는 경우를 계산
    for (int i = 0; i < s.size(); i++) {
      sum += s.get(i);  // 현재 조각을 더함

      // 조각의 길이(m)를 초과하는 경우, 가장 왼쪽 조각을 제외
      if (i >= m) sum -= s.get(i - m);

      // 조각의 합이 원하는 값(d)과 일치하면 결과 변수 증가
      if (i >= m-1 && sum == d) result++;
    }

    return result;  // 최종적으로 조각의 합이 일치하는 경우의 수 반환
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int n = Integer.parseInt(bufferedReader.readLine().trim());

    // 초콜릿 조각에 대한 정보를 입력받아 리스트에 저장
    List<Integer> s = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
      .map(Integer::parseInt)
      .collect(Collectors.toList());

    // 사용자로부터 조각의 합과 길이에 대한 정보를 입력받음
    String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
    int d = Integer.parseInt(firstMultipleInput[0]);
    int m = Integer.parseInt(firstMultipleInput[1]);

    // 'birthday' 함수 호출하여 결과 계산
    int result = Result.birthday(s, d, m);

    // 결과를 출력 파일에 쓰기
    bufferedWriter.write(String.valueOf(result));
    bufferedWriter.newLine();

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
