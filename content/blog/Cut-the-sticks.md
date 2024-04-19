---
external : false
title : "Cut the sticks"
tag : [Hackerrank, Java]
date : 2024-04-19
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true)에서 확인하실 수 있습니다.

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

  // 주어진 배열에 대해 스틱을 자르는 함수를 구현합니다.
  public static List<Integer> cutTheSticks(List<Integer> arr) {
    Collections.sort(arr); // 배열을 오름차순으로 정렬합니다.
    List<Integer> results = new ArrayList<>();
    
    int sticksLeft = arr.size(); // 남은 스틱의 수
    results.add(sticksLeft); // 초기 스틱의 수를 결과 목록에 추가
    
    int curr = arr.get(0); // 현재 스틱의 길이
    int currCount = 0; // 현재 스틱 길이의 수
    
    for (int i = 0; i < arr.size(); i++) {
      if (curr == arr.get(i)) {
        currCount++; // 현재 스틱 길이와 같으면 카운트 증가
      } else {
        sticksLeft -= currCount; // 현재 스틱 길이의 수만큼 남은 스틱 수에서 빼기
        currCount = 1; // 새로운 스틱 길이의 카운트 시작
        curr = arr.get(i); // 새로운 스틱 길이로 업데이트
        results.add(sticksLeft); // 업데이트된 남은 스틱 수를 결과 목록에 추가
      }
    }
    
    return results; // 결과 목록 반환
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int n = Integer.parseInt(bufferedReader.readLine().trim()); // 스틱의 개수 입력받기

    List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
      .map(Integer::parseInt)
      .collect(toList()); // 스페이스로 분리된 스틱 길이들을 배열로 변환

    List<Integer> result = Result.cutTheSticks(arr); // 스틱 자르기 작업 수행

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
