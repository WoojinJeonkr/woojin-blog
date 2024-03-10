---
external: false
title: "Day of the Programmer"
tag: [Hackerrank, Java]
date : 2024-02-08
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;

class Result {

  /*
   * 아래의 'dayOfProgrammer' 함수는 주어진 연도에 따라 프로그래머의 날짜를 반환합니다.
   *
   * 함수는 STRING을 반환하도록 예상됩니다.
   * 함수는 INTEGER year를 매개변수로 사용합니다.
   */

  public static String dayOfProgrammer(int year) {
    // 여기에 코드를 작성하세요
    if (year == 1918) {
      return "26.09." + year;
    } else if (year >= 1919) {
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return "12.09." + year;
      } else {
        return "13.09." + year;
      }
    } else { // 1917년 이하의 경우
      if (year % 4 == 0) {
        return "12.09." + year;
      } else {
        return "13.09." + year;
      }
    }
  }

}

public class Solution {

  /*
   * 아래의 'main' 메소드는 프로그램의 진입점입니다.
   * 
   * 'main' 메소드는 입력을 받아들이고 'dayOfProgrammer' 함수를 호출하여 결과를 출력합니다.
   * 'main' 메소드는 예외를 처리합니다.
   */

  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

    int year = Integer.parseInt(bufferedReader.readLine().trim());

    String result = Result.dayOfProgrammer(year);

    bufferedWriter.write(result);
    bufferedWriter.newLine();

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
