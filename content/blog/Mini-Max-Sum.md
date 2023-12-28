---
external: false
title: "Mini Max Sum"
date: 2023-12-20
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true)

## 2. 정답 코드 (java)

```java
import java.io.BufferedReader; // 콘솔 입력 스트림에서 문자열을 읽어오기 위한 클래스
import java.io.IOException; // 입출력 동작 중 발생할 수 있는 예외를 처리하기 위한 예외 클래스
import java.io.InputStreamReader; // 바이트 스트림에서 문자 스트림으로 변환하는 역할을 하는 클래스
import java.util.Collections; // 자바에서 컬렉션 유틸리티 기능을 제공하는 클래스
import java.util.List; // 자바에서 리스트를 나타내는 인터페이스
import java.util.stream.Collectors; // 스트림 API를 사용하여 데이터를 수집하는 데 사용되는 정적 유틸리티 클래스
import java.util.stream.Stream; // 자바 스트림 API를 사용하여 컬렉션 데이터를 처리하는 데 사용되는 인터페이스

class Result {

    /*
     * 아래 'miniMaxSum' 함수는 정수 배열 'arr'을 매개변수로 받습니다.
     */

    public static void miniMaxSum(List<Integer> arr) {
    // 여기에 코드를 작성하세요
        Collections.sort(arr); // 배열을 오름차순으로 정렬합니다.

        long totalSum = 0;
        
        for (int i : arr) {
            totalSum += i; // 배열의 합을 계산합니다.
        }
        
        long minimumSum = totalSum - arr.get(arr.size() - 1); // 최소값을 구합니다.
        long maximumSum = totalSum - arr.get(0); // 최대값을 구합니다.
        
        System.out.printf("%d %d", minimumSum, maximumSum); // 최소값과 최대값을 출력합니다.
    }
}

// 프로그램의 실행 시작점인 Solution 클래스입니다.
public class Solution {
    // 예외 처리를 위한 throws IOException을 선언합니다.
    public static void main(String[] args) throws IOException {
        // 입력을 받기 위한 BufferedReader 객체를 생성합니다.
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        // 한 줄을 읽어와 공백으로 분리된 정수를 리스트로 변환합니다.
        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(Collectors.toList());

        // Result 클래스의 miniMaxSum 함수를 호출하여 결과를 출력합니다.
        Result.miniMaxSum(arr);

        // 입력 스트림을 닫습니다.
        bufferedReader.close();
    }
}
```
