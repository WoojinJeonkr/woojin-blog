---
external: false
title: "Repeated String"
tag: [Hackerrank, Java]
date: 2024-03-07
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

  /*
   * 'repeatedString' 함수는 문자열 s와 정수 n을 받아서 처리합니다.
   * 이 함수는 s 문자열이 n번 반복될 때 문자열에서 'a'의 출현 횟수를 반환합니다.
   *
   * Parameters:
   *  1. STRING s: 'a'를 포함한 문자열
   *  2. LONG_INTEGER n: 문자열을 반복할 횟수
   *
   * Returns:
   *  LONG_INTEGER: 문자열에서 'a'의 출현 횟수
   */

  public static long repeatedString(String s, long n) {
    // 코드를 작성합니다.
    // 'a'가 없는 경우 0을 반환합니다.
    if (!s.contains("a")) return 0;
    
    // 'a'의 출현 횟수를 저장할 변수를 초기화합니다.
    long count = 0;
    
    // 문자열 s의 길이를 저장합니다.
    long len = s.length();
    
    // 문자열이 반복되는 횟수를 계산합니다.
    long repetition = n / len;
    
    // 반복이 완료된 후 남는 문자열의 길이를 계산합니다.
    long remainder = n % len;

    // 문자열 s에서 'a'의 출현 횟수를 세기 위해 반복문을 사용합니다.
    for (int i = 0; i < len; i++) {
      if (s.charAt(i) == 'a') count++;
    }

    // 반복 횟수만큼 'a'의 출현 횟수를 곱합니다.
    count *= repetition;

    // 남은 부분에서 'a'의 출현 횟수를 세기 위해 반복문을 사용합니다.
    for (int i = 0; i < remainder; i++) {
      if (s.charAt(i) == 'a') count++;
    }

    return count;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 문자열 s를 입력받습니다.
    String s = bufferedReader.readLine();

    // 정수 n을 입력받고 앞뒤 공백을 제거합니다.
    long n = Long.parseLong(bufferedReader.readLine().trim());

    // 'repeatedString' 함수를 호출하고 결과를 저장합니다.
    long result = Result.repeatedString(s, n);

    // 결과를 출력 파일에 씁니다.
    bufferedWriter.write(String.valueOf(result));
    bufferedWriter.newLine();

    // 입력 버퍼와 출력 버퍼를 닫습니다.
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
