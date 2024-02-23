---
external : false
title : "Baekjoon 1431"
tag : [Baekjoon, Java]
date : 2024-02-23
---

## 1. Problem

해당 문제는 [여기](https://www.acmicpc.net/problem/1431)에서 확인하실 수 있습니다.

## 2. Solve (memory: 17852KB, time: 224ms)

```java
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int N = scanner.nextInt();
    scanner.nextLine();  // 개행문자 제거

    // 입력된 시리얼 번호를 저장할 배열 생성
    String[] serials = new String[N];
    for (int i = 0; i < N; i++) {
      serials[i] = scanner.nextLine();
    }

    // Comparator를 사용하여 시리얼 번호 정렬
    Arrays.sort(serials, new Comparator<String>() {
      @Override
      public int compare(String s1, String s2) {
        if (s1.length() != s2.length()) {
          return s1.length() - s2.length();  // 길이가 다르면 짧은 것이 우선
        } else {
          // 각 시리얼 번호의 숫자 합 구하기
          int sum1 = 0, sum2 = 0;
          for (char c : s1.toCharArray()) {
            if (Character.isDigit(c)) {
              sum1 += Character.getNumericValue(c);
            }
          }
          for (char c : s2.toCharArray()) {
            if (Character.isDigit(c)) {
              sum2 += Character.getNumericValue(c);
            }
          }
          if (sum1 != sum2) {
            return sum1 - sum2;  // 숫자 합이 다르면 작은 합이 우선
          } else {
            return s1.compareTo(s2);  // 사전순으로 비교
          }
        }
      }
    });

    // 정렬된 시리얼 번호 출력
    for (String serial : serials) {
      System.out.println(serial);
    }
  }
}
```
