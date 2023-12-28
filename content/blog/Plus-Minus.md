---
external: false
title: "Plus Minus"
date: 2023-12-18
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true)

## 2. 정답 코드 (java)

```java
import java.io.*;
import java.math.*;
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
     * 주어진 배열에서 양수, 음수, 0의 비율을 계산하고 출력하는 함수입니다.
     * 함수는 INTEGER_ARRAY arr을 매개변수로 받습니다.
     */

    public static void plusMinus(List<Integer> arr) {
        // Write your code here

        // 배열의 크기를 저장합니다.
        int n = arr.size();

        // 양수, 음수, 0의 개수를 저장할 변수를 초기화합니다.
        int positiveCount = 0;
        int negativeCount = 0;
        int zeroCount = 0;

        // 배열을 순회하면서 양수, 음수, 0의 개수를 계산합니다.
        for (int num : arr) {
            if (num > 0) {
                positiveCount++;
            } else if (num < 0) {
                negativeCount++;
            } else {
                zeroCount++;
            }
        }

        // 각 비율을 계산합니다.
        double positiveRatio = (double) positiveCount / n;
        double negativeRatio = (double) negativeCount / n;
        double zeroRatio = (double) zeroCount / n;

        // 6자리 이하의 소수점으로 비율을 출력합니다.
        System.out.printf("%.6f%n", positiveRatio);
        System.out.printf("%.6f%n", negativeRatio);
        System.out.printf("%.6f%n", zeroRatio);
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        // BufferedReader 객체를 생성하여, 표준 입력(System.in)에서 데이터를 읽어오기 위한 준비를 합니다.
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        // 배열의 크기를 입력으로 받습니다.
        int n = Integer.parseInt(bufferedReader.readLine().trim());

        // 공백으로 구분된 숫자들을 입력으로 받아 List로 저장합니다.
        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        // plusMinus 함수를 호출하여 결과를 출력합니다.
        Result.plusMinus(arr);

        // 입력 스트림을 닫습니다.
        bufferedReader.close();
    }
}
```
