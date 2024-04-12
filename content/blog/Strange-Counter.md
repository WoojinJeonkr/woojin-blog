---
external : false
title : "Strange Counter"
tag : [Hackerrank, Java]
date : 2024-04-12
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/strange-code/problem?isFullScreen=true)에서 확인하실 수 있습니다.

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
   * 'strangeCounter' 함수를 완성하세요.
   *
   * 이 함수는 LONG_INTEGER을 반환해야 합니다.
   * 함수는 LONG_INTEGER t를 매개변수로 받습니다.
   */

  public static long strangeCounter(long t) {
    // 여기에 코드를 작성하세요.
    long time_top = 1;  // 초기 시간 시작값 설정
    long value_top = 3; // 초기 값 설정
    
    // 주어진 t 시간이 time_top 보다 크거나 같을 때까지 반복
    while(time_top <= t) {
      time_top += value_top; // 다음 주기의 시작 시간을 계산
      value_top = time_top + 2; // 다음 주기의 값을 계산
    }
    
    // 계산된 시간에서 실제 시간 t를 빼서 남은 시간을 반환
    return (time_top - t);
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    long t = Long.parseLong(bufferedReader.readLine().trim()); // 사용자 입력을 받아 정수로 변환

    long result = Result.strangeCounter(t); // strangeCounter 함수를 호출하여 결과를 계산

    bufferedWriter.write(String.valueOf(result)); // 결과를 문자열로 변환하여 출력
    bufferedWriter.newLine();

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
