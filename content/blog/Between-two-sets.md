---
external: false
title: "Between two sets"
date: 2023-12-24
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true)

## 2. 정답 코드 (java)

```java
import java.io.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Result {

    /*
     * 'getTotalX' 함수는 두 개의 정수 리스트를 받아서 특정 조건을 만족하는 정수의 개수를 반환합니다.
     *
     * 함수는 INTEGER를 반환해야 합니다.
     * 함수는 다음 매개변수를 받습니다:
     *  1. INTEGER_ARRAY a
     *  2. INTEGER_ARRAY b
     */
    public static int getTotalX(List<Integer> a, List<Integer> b) {
        // 현재 값(current)을 a 리스트의 마지막 값으로 초기화
        int cnt = 0;  // 조건을 만족하는 정수의 개수
        int current = a.get(a.size() - 1);  // 현재 값을 a 리스트의 마지막 값으로 초기화
        int flag;

        // 현재 값이 b 리스트의 첫 번째 값보다 작거나 같을 때까지 반복
        while (current <= b.get(0)) {
            flag = 0;

            // a 리스트의 각 원소로 현재 값을 나누어 떨어지지 않으면 flag를 1로 설정
            for (int i : a) {
                if (current % i != 0) {
                    flag = 1;
                    break;
                }
            }

            // a 리스트의 모든 원소로 나누어 떨어지면
            if (flag == 0) {
                // b 리스트의 각 원소가 현재 값으로 나누어 떨어지지 않으면 flag를 1로 설정
                for (int i : b) {
                    if (i % current != 0) {
                        flag = 1;
                        break;
                    }
                }
            }

            // a와 b 리스트의 모든 원소로 나누어 떨어지면 cnt를 증가
            if (flag == 0) {
                cnt++;
            }

            // 다음 값을 확인하기 위해 현재 값을 1 증가
            current++;
        }

        // 조건을 만족하는 정수의 개수 반환
        return cnt;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        // 입력 받기
        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");
        int n = Integer.parseInt(firstMultipleInput[0]);
        int m = Integer.parseInt(firstMultipleInput[1]);

        // 정수 리스트로 변환
        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        List<Integer> brr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        // getTotalX 함수 호출
        int total = Result.getTotalX(arr, brr);

        // 결과 출력
        bufferedWriter.write(String.valueOf(total));
        bufferedWriter.newLine();

        // 자원 해제
        bufferedReader.close();
        bufferedWriter.close();
    }
}
```
