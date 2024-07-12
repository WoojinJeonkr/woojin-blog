---
external : false
title : "PCCE sample question 3 age calculation"
tag : [Programmers, Java]
date : 2024-07-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/250131)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Scanner;

public class Solution {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // 사용자로부터 출생 연도 입력 받기
    int year = sc.nextInt();

    // 사용자로부터 나이 유형 입력 받기
    String age_type = sc.next();

    int answer = 0;

    // 나이 계산
    if (age_type.equals("Korea")) {
      // 만 나이 계산 (2030년 - 출생연도 + 1)
      answer = 2030 - year + 1;
    }
    else if (age_type.equals("Year")) {
      // 만 나이 계산 (2030년 - 출생연도)
      answer = 2030 - year;
    }

    System.out.println(answer);
  }
}
```
