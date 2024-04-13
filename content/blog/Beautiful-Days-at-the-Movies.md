---
external : false
title : "Beautiful Days at the Movies"
tag : [Hackerrank, Java]
date : 2024-04-13
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=true)에서 확인하실 수 있습니다.

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

  /**
   * 아름다운 날의 개수를 계산하는 함수
   *
   * @param i 시작 날짜
   * @param j 종료 날짜
   * @param k 나누어 떨어지는 값의 기준
   * @return 아름다운 날의 총 개수를 반환
   */
  public static int beautifulDays(int i, int j, int k) {
    // 결과 값을 저장할 변수 초기화
    int beautifulDays = 0;
    
    // 주어진 범위 내에서 각 날짜에 대하여 반복
    for(int x = i; x <= j; x++) {
      // 숫자를 문자열로 변환한 후, StringBuilder를 사용하여 뒤집기
      StringBuilder day = new StringBuilder(String.valueOf(x));
      int xReverse = Integer.parseInt(day.reverse().toString());
          
      // 원래 숫자와 뒤집힌 숫자의 차이가 k로 나누어 떨어지는 경우 카운트 증가
      if(Math.abs(x-xReverse) % k == 0) {
        beautifulDays++;
      }
    }
    // 계산된 아름다운 날의 총 개수 반환
    return beautifulDays;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    // 입력을 위한 객체 생성
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    // 출력을 위한 객체 생성
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 입력받은 값들을 공백으로 분리
    String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

    // 각 변수에 입력값 할당
    int i = Integer.parseInt(firstMultipleInput[0]);
    int j = Integer.parseInt(firstMultipleInput[1]);
    int k = Integer.parseInt(firstMultipleInput[2]);

    // 함수 호출 및 결과 저장
    int result = Result.beautifulDays(i, j, k);

    // 결과 출력
    bufferedWriter.write(String.valueOf(result));
    bufferedWriter.newLine();

    // 객체 닫기
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
