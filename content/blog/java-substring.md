---
external: false
title: "java substring"
date: 2023-09-24
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-substring/problem?isFullScreen=true)

## 2. 정답 코드 (Java)

```java
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in); // Scanner 객체를 생성하여 표준 입력을 읽을 준비를 합니다.
        String S = in.next(); // 문자열을 입력받아 변수 S에 저장합니다.
        int start = in.nextInt(); // 시작 인덱스를 입력받아 변수 start에 저장합니다.
        int end = in.nextInt(); // 종료 인덱스를 입력받아 변수 end에 저장합니다.
        System.out.print(S.substring(start, end)); // 문자열 S에서 시작 인덱스부터 종료 인덱스 전까지의 부분 문자열을 출력합니다.
    }
}
```
