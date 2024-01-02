---
external: false
title : "Sequence Equation"
tag: [Hackerrank, Java]
date: 2024-01-02
---

## 1. Problem

[문제 확인하기](https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=true)

## 2. Solution

```java
import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

  // 순열 함수 정의
  public static List<Integer> permutationEquation(List<Integer> p) {
    List<Integer> indices = new ArrayList<>();

    // 각 원소에 대한 인덱스 찾아서 리스트에 추가
    for (int i = 1; i <= p.size(); i++) {
      indices.add(p.indexOf(i) + 1);
    }

    List<Integer> ans = new ArrayList<>();
    // 찾은 인덱스를 다시 이용하여 결과 리스트 구성
    for (int ele : indices) {
      ans.add(p.indexOf(ele) + 1);
    }

    return ans;
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 배열 크기 입력 받기
    int n = Integer.parseInt(bufferedReader.readLine().trim());

    // 배열 원소 입력 받아 리스트로 변환
    List<Integer> p = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
      .map(Integer::parseInt)
      .collect(Collectors.toList());

    // 순열 함수 호출
    List<Integer> result = Result.permutationEquation(p);

    // 결과를 파일에 쓰기
    bufferedWriter.write(
      result.stream()
        .map(Object::toString)
        .collect(Collectors.joining("\n"))
      + "\n"
    );

    // 입출력 스트림 닫기
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
