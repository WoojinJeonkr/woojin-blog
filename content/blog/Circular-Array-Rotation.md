---
external : false
title : "Circular Array Rotation"
tag : [Hackerrank, Java]
date : 2024-04-18
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true)에서 확인하실 수 있습니다.

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
   * 'circularArrayRotation' 함수를 완성하세요.
   *
   * 이 함수는 INTEGER_ARRAY를 반환합니다.
   * 이 함수는 다음과 같은 파라미터를 받습니다:
   *  1. INTEGER_ARRAY a - 원래의 배열
   *  2. INTEGER k - 오른쪽으로 회전할 횟수
   *  3. INTEGER_ARRAY queries - 회전된 배열에서 접근할 인덱스들
   */

  public static List<Integer> circularArrayRotation(List<Integer> a, int k, List<Integer> queries) {
    // 배열의 길이로 나눈 나머지만큼 실제로 회전해야 할 횟수를 계산
    k = k % a.size();
    List<Integer> result = new ArrayList<>();
    for (int i = 0; i < queries.size(); i++) {
      // 회전한 후 배열에서 해당 인덱스 위치를 계산
      int index = (queries.get(i) - k + a.size()) % a.size();
      result.add(a.get(index));
    }
    return result;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 입력을 받고, 공백으로 나누어 각 값을 정수로 변환
    String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

    int n = Integer.parseInt(firstMultipleInput[0]); // 배열의 크기
    int k = Integer.parseInt(firstMultipleInput[1]); // 회전 횟수
    int q = Integer.parseInt(firstMultipleInput[2]); // 쿼리의 수

    // 배열 a에 대한 입력을 받음
    List<Integer> a = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
        .map(Integer::parseInt)
        .collect(toList());

    // 쿼리에 대한 입력을 받음
    List<Integer> queries = IntStream.range(0, q).mapToObj(i -> {
      try {
        return bufferedReader.readLine().replaceAll("\\s+$", "");
      } catch (IOException ex) {
        throw new RuntimeException(ex);
      }
    })
        .map(String::trim)
        .map(Integer::parseInt)
        .collect(toList());

    // 결과를 계산
    List<Integer> result = Result.circularArrayRotation(a, k, queries);

    // 결과를 파일에 쓰기
    bufferedWriter.write(
      result.stream()
          .map(Object::toString)
          .collect(joining("\n"))
      + "\n"
    );

    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
