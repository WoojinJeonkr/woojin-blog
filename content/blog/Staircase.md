---
external: false
title: "Staircase"
date: 2023-12-19
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true)

## 2. 정답 코드 (java)

```java
// 필요한 Java 표준 라이브러리를 가져옵니다.
import java.io.BufferedReader; // 입력 스트림에서 문자 단위로 데이터를 읽기 위한 클래스를 제공합니다.
import java.io.IOException; // 입출력 예외를 처리하기 위한 예외 클래스를 제공합니다.
import java.io.InputStreamReader; // 입력 스트림에서 바이트를 문자로 변환하는 역할을 하는 클래스를 제공합니다.

// Result 클래스 선언
class Result {

    /*
     * 'staircase' 함수는 정수 n을 매개변수로 받아, 계단 모양의 문자열을 출력합니다.
     * 계단의 높이는 n이며, 각 계단은 공백과 '#' 문자로 구성됩니다.
     */
    
    public static void staircase(int n) {
    // 계단 모양을 출력하는 코드를 작성합니다.
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" "); // 현재 계단의 왼쪽에 필요한 공백을 출력합니다.
            }
            
            for (int k = 1; k <= i; k++) {
                System.out.print("#"); // 현재 계단의 '#' 문자를 출력합니다.
            }
            
            System.out.print("\n"); // 한 계단이 끝나면 개행하여 다음 계단으로 이동합니다.
        }
    }
}

// 메인 클래스 선언
public class Solution {
    public static void main(String[] args) throws IOException {
        // 입력을 받기 위해 BufferedReader를 생성합니다.
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        // 사용자로부터 계단의 높이를 입력받습니다.
        int n = Integer.parseInt(bufferedReader.readLine().trim());

        // Result 클래스의 staircase 함수를 호출하여 계단 모양을 출력합니다.
        Result.staircase(n);

        // 입력을 위해 열었던 BufferedReader를 닫습니다.
        bufferedReader.close();
    }
}
```
