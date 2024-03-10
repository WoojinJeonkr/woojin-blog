---
external: false
title: "Equalize the Array"
tag: [Hackerrank, Java]
date : 2024-01-20
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true)에서 확인 가능합니다.

## 2. Solve

```java
import java.io.*;
import java.util.*;
import java.util.stream.*;

class Result {

  /*
   * 'equalizeArray' 메서드는 정수 리스트를 입력으로 받아서
   * 가장 많이 나타나는 원소를 제외한 나머지 원소들의 개수를 반환합니다.
   *
   * @param arr 정수 리스트
   * @return 가장 많이 나타나는 원소를 제외한 나머지 원소들의 개수
   */
  public static int equalizeArray(List<Integer> arr) {
    // 1. 정수 리스트(arr)를 스트림으로 변환하고, 각 정수를 그룹화합니다. 
    //    이때, 그룹화 기준은 정수의 값(i -> i)입니다.
    // 2. 그룹화된 맵에서 값들만을 가져와서 스트림으로 변환합니다.
    // 3. 그렇게 얻은 값들의 리스트를 스트림으로 변환합니다.
    // 4. 리스트의 각 요소(그룹의 크기)를 매핑하여
    //  그 크기로 이루어진 새로운 리스트를 생성합니다.
    // 5. 최종적으로 모든 그룹의 크기 리스트를 반환합니다.
    List<Integer> frequencyList = arr.stream()
            .collect(Collectors.groupingBy(i -> i)) // 1
            .values().stream()                      // 2
            .map(List::size)                        // 3
            .collect(Collectors.toList());          // 4, 5

    // 빈도 리스트에서 가장 큰 값을 찾습니다.
    int maxFrequency = Collections.max(frequencyList, Integer::compare);

    // 전체 원소의 개수에서 가장 많이 나타나는 원소의 개수를 뺀 값을 반환합니다.
    return arr.size() - maxFrequency;
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    // 입력을 받기 위한 BufferedReader 객체를 생성합니다.
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    // 출력을 작성하기 위한 BufferedWriter 객체를 생성하고, 파일로 출력합니다.
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 배열의 크기를 입력으로 받습니다.
    int n = Integer.parseInt(bufferedReader.readLine().trim());

    // 정수 배열을 입력으로 받아 리스트로 변환합니다.
    List<Integer> arr = Arrays.stream(bufferedReader.readLine().trim().split(" "))
        .map(Integer::parseInt)
        .collect(Collectors.toList());

    // equalizeArray 메서드를 호출하여 결과를 계산합니다.
    int result = Result.equalizeArray(arr);

    // 결과를 파일에 작성합니다.
    bufferedWriter.write(String.valueOf(result));
    bufferedWriter.newLine();

    // 사용한 리소스를 정리합니다.
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
