---
external : false
title : "Java Subarray"
tag : [Hackerrank, Java]
date : 2024-02-20
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/java-negative-subarray/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.Scanner;

public class Solution {

  public static void main(String[] args) {
    /* 여기에 코드를 입력하세요. 표준 입력에서 입력을 읽으세요. 표준 출력으로 출력하세요. 클래스 이름은 Solution이어야 합니다. */
    Scanner scan = new Scanner(System.in); // 표준 입력으로부터 Scanner 객체 생성
    int n = scan.nextInt(); // 정수 n 입력
    int[] arr = new int[n]; // 크기가 n인 배열 생성
    for (int i = 0; i < n; i++) {
      arr[i] = scan.nextInt(); // 배열에 요소 입력
    }
    int count = 0; // 음수 부분 배열의 개수를 저장할 변수 초기화
    for (int j = 0; j < n; j++) {
      int sum = 0; // 부분 배열의 합을 저장할 변수 초기화
      for (int k = j; k < n; k++) {
        sum = arr[k] + sum; // 부분 배열의 합 계산
        if (sum < 0) {
          count++; // 부분 배열의 합이 음수인 경우 count 증가
        }
      }
    }
    System.out.println(count); // 음수 부분 배열의 개수 출력
    scan.close(); // Scanner 닫기
  }
}
```
