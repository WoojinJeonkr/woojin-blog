---
external: false
title: "Java Currency Formatter"
date: 2023-11-01
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-currency-formatter/problem?isFullScreen=true)

## 2. 정답

```java
NumberFormat usFormat = NumberFormat.getCurrencyInstance(Locale.US);
String us = usFormat.format(payment); // 미국 통화 형식으로 변환

NumberFormat indiaFormat = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
String india = indiaFormat.format(payment); // 인도 통화 형식으로 변환

NumberFormat chinaFormat = NumberFormat.getCurrencyInstance(Locale.CHINA);
String china = chinaFormat.format(payment); // 중국 통화 형식으로 변환

NumberFormat franceFormat = NumberFormat.getCurrencyInstance(Locale.FRANCE);
String france = franceFormat.format(payment); // 프랑스 통화 형식으로 변환
```

## 3. 전체 코드

```java
import java.util.*;
import java.text.*;

public class Solution {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble(); // 사용자로부터 금액 입력받기
        scanner.close();
        
        // 여기에 코드 작성 시작
        NumberFormat usFormat = NumberFormat.getCurrencyInstance(Locale.US);
        String us = usFormat.format(payment); // 미국 통화 형식으로 변환
        
        NumberFormat indiaFormat = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        String india = indiaFormat.format(payment); // 인도 통화 형식으로 변환
        
        NumberFormat chinaFormat = NumberFormat.getCurrencyInstance(Locale.CHINA);
        String china = chinaFormat.format(payment); // 중국 통화 형식으로 변환
        
        NumberFormat franceFormat = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        String france = franceFormat.format(payment); // 프랑스 통화 형식으로 변환
        
        System.out.println("US: " + us); // 미국 통화 형식으로 출력
        System.out.println("India: " + india); // 인도 통화 형식으로 출력
        System.out.println("China: " + china); // 중국 통화 형식으로 출력
        System.out.println("France: " + france); // 프랑스 통화 형식으로 출력
        // 코드 작성 종료
    }
}
```
