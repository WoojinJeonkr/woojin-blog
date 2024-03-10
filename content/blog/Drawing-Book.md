---
external: false
title: "Drawing Book"
tag: [Hackerrank, java]
date : 2024-02-15
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
public static int pageCount(int n, int p) {
  // Write your code here
  int lastPage = n / 2;
  int wantPage = p / 2;
  return Math.min(wantPage, lastPage - wantPage);
}
```

## 3. Total Code

```java
import java.io.*;

class Result {

  /*
   * 아래의 'pageCount' 함수는 주어진 페이지 수와 페이지 번호에 따라 책을 넘기는 최소 횟수를 계산합니다.
   * 이 함수는 정수를 반환합니다.
   * 함수는 다음 매개변수를 받습니다:
   *  1. 책의 총 페이지 수를 나타내는 정수 n
   *  2. 원하는 페이지 번호를 나타내는 정수 p
   */

  public static int pageCount(int n, int p) {
    // 마지막 페이지 번호
    int lastPage = n / 2;
    // 원하는 페이지로 넘기는데 필요한 횟수
    int flipsToTarget = p / 2;
    // 책을 왼쪽으로 뒤집는 횟수와 오른쪽으로 넘기는 횟수 중 최소값을 반환합니다.
    return Math.min(flipsToTarget, lastPage - flipsToTarget);
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    // 입력을 받기 위한 BufferedReader 객체를 생성합니다.
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    // 결과를 출력하기 위한 BufferedWriter 객체를 생성하고, 파일에 출력합니다.
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 첫 번째 줄에서 책의 총 페이지 수를 읽어옵니다.
    int n = Integer.parseInt(bufferedReader.readLine().trim());
    // 두 번째 줄에서 원하는 페이지 번호를 읽어옵니다.
    int p = Integer.parseInt(bufferedReader.readLine().trim());

    // pageCount 함수를 호출하여 결과를 계산합니다.
    int result = Result.pageCount(n, p);

    // 결과를 파일에 씁니다.
    bufferedWriter.write(String.valueOf(result));
    // 결과와 다음 출력 줄을 구분하기 위해 개행합니다.
    bufferedWriter.newLine();

    // BufferedReader를 닫습니다.
    bufferedReader.close();
    // BufferedWriter를 닫습니다.
    bufferedWriter.close();
  }
}
```
