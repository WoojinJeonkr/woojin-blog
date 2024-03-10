---
external: false
title: "Divisible Sum Pairs"
tag: [Hackerrank, Java]
date : 2024-01-05
---

## 1. Problem

해당 글에서 다룬 문제는 [Divisible Sum Pairs](https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true)에서 확인할 수 있습니다.

## 2. Interpretation of Problem

`Divisible Sum Pairs`는 주어진 배열에서 특정 조건을 만족하는 요소 쌍을 찾는 간단한 문제입니다.  
첫 줄에는 배열 ar 요소의 수인 n과 나눌 수 k를 입력 받고 그 다음 줄에는 배열의 요소를 입력받습니다.
이제 작성하는 부분에는 배열 안의 두 요소의 합이 k로 나누어 떨어지는 쌍의 개수를 구하면 됩니다.

## 3. Solve

```java
import java.io.*;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Result {
  
  /*
   * 두 요소의 합이 k로 나누어 떨어지는 경우를 찾는 함수입니다.
   * 
   * @param n: 배열 ar의 요소 수
   * @param k: 나눌 수
   * @param ar: 정수 배열
   * @return 두 요소의 합이 k로 나누어 떨어지는 경우의 수
   */
  public static int divisibleSumPairs(int n, int k, List<Integer> ar) {
    int count = 0;

    // 배열을 순회하며 모든 요소 쌍을 비교
    for (int i = 0; i < n - 1; i++) {
      for (int j = i + 1; j < n; j++) {
        // 두 요소의 합이 k로 나누어 떨어지는 경우 count 증가
        if ((ar.get(i) + ar.get(j)) % k == 0) {
          count++;
        }
      }
    }

    return count;
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 첫 번째 줄에서 입력 받은 값들을 배열로 분리
    String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

    // n과 k 값을 추출
    int n = Integer.parseInt(firstMultipleInput[0]);
    int k = Integer.parseInt(firstMultipleInput[1]);

    // 두 번째 줄에서 입력 받은 배열을 리스트로 변환
    List<Integer> ar = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
      .map(Integer::parseInt)
      .collect(Collectors.toList());

    // 'divisibleSumPairs' 함수 호출 및 결과 출력
    int result = Result.divisibleSumPairs(n, k, ar);
    bufferedWriter.write(String.valueOf(result));
    bufferedWriter.newLine();

    // 리더 및 라이터 닫기
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
