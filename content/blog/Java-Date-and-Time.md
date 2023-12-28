---
external: false
title: "Java Date and Time"
date: 2023-09-30
---

## 1. 문제

[문제 확인하기](https://www.hackerrank.com/challenges/java-date-and-time/problem?isFullScreen=true)

## 2. 정답 코드 1 (Java)

```java
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {
     
    public static String findDay(int month, int day, int year) {
        // Calendar 인스턴스를 생성하여 주어진 연, 월, 일을 설정합니다.
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.MONTH, month - 1); // 월은 0부터 시작하므로 1을 빼줍니다.
        cal.set(Calendar.DAY_OF_MONTH, day);
        cal.set(Calendar.YEAR, year);
        
        // 요일을 저장한 문자열 배열을 만들고, Calendar에서 얻은 요일에 해당하는 문자열을 반환합니다.
        String[] DAY_OF_WEEK = {"일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"};
        return DAY_OF_WEEK[cal.get(Calendar.DAY_OF_WEEK) - 1];
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int month = Integer.parseInt(firstMultipleInput[0]);
        int day = Integer.parseInt(firstMultipleInput[1]);
        int year = Integer.parseInt(firstMultipleInput[2]);

        String res = Result.findDay(month, day, year);

        // 결과를 출력 파일에 작성합니다.
        bufferedWriter.write(res);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
```

## 3. 정답 코드 2 (Java)

```java
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;
import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.Locale;

class Result {

    public static String findDay(int month, int day, int year) {
        // 주어진 연, 월, 일로 LocalDate 객체를 생성합니다.
        LocalDate date = LocalDate.of(year, month, day);
        
        // LocalDate 객체에서 날짜의 요일을 얻어옵니다.
        // getDayOfWeek() 메서드는 DayOfWeek 열거형 상수를 반환하고, 이를 이용하여 요일을 얻습니다.
        // getDisplayName() 메서드를 사용하여 요일의 풀네임을 얻어오며, 이때 로케일은 영어로 설정합니다.
        // 마지막으로 얻어온 문자열을 대문자로 변환하여 반환합니다.
        return date.getDayOfWeek()
                   .getDisplayName(TextStyle.FULL, Locale.ENGLISH)
                   .toUpperCase();
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int month = Integer.parseInt(firstMultipleInput[0]);
        int day = Integer.parseInt(firstMultipleInput[1]);
        int year = Integer.parseInt(firstMultipleInput[2]);

        String res = Result.findDay(month, day, year);

        // 결과를 출력 파일에 작성합니다.
        bufferedWriter.write(res);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
```
