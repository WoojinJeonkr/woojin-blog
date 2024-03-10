---
external: false
title: "Append and Delete"
tag: [Hackerrank, Java]
date : 2024-03-02
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/append-and-delete/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;

class Result {

  /*
   * 아래의 'appendAndDelete' 함수를 완성하세요.
   *
   * 해당 함수는 다음의 매개변수를 받습니다:
   *  1. 문자열 s
   *  2. 문자열 t
   *  3. 정수 k
   *
   * 함수는 문자열을 반환해야 합니다.
   */

  public static String appendAndDelete(String s, String t, int k) {
    // 여기에 코드를 작성하세요
    if (s.equals(t))
      return (k >= s.length() * 2 || k % 2 == 0) ? "Yes" : "No";

    int commonLength = getCommonLength(s, t); // 공통 부분의 길이를 구함
    int cs = s.length() - commonLength;
    int ct = t.length() - commonLength;
    int total = cs + ct;

    return ((total == k) || (total < k && (total - k) % 2 == 0) || (total + (2 * commonLength) <= k)) ? "Yes" : "No";
  }
    
  public static int getCommonLength(String s, String t) {
    int commonLength = 0;
    for (int i = 0; i < Math.min(s.length(), t.length()); i++) {
      if (t.charAt(i) != s.charAt(i))
        break;
      commonLength++;
    }
    return commonLength; // 공통 부분의 길이 반환
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    String s = bufferedReader.readLine();

    String t = bufferedReader.readLine();

    int k = Integer.parseInt(bufferedReader.readLine().trim());

    String result = Result.appendAndDelete(s, t, k);

    bufferedWriter.write(result);
    bufferedWriter.newLine();

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
