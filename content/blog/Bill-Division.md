---
external: false
title: "Bill Division"
tag: [Hackerrank, Java]
date: 2024-01-23
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true)에서 확인 가능합니다.

## 2. Solve

```java
import java.io.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Result {

  /*
   * 아래는 'bonAppetit' 메서드입니다.
   *
   * 메서드는 다음 매개변수를 받습니다:
   *  1. List<Integer> bill
   *  2. int k
   *  3. int b
   */

  public static void bonAppetit(List<Integer> bill, int k, int b) {
    int sum = 0;

    // 음식 가격의 합을 계산합니다.
    for (int i = 0; i < bill.size(); i++) {
      if (i != k) {
        sum += bill.get(i);
      }
    }

    // 공동 지불한 비용 계산
    int sharedCost = sum / 2;
    // 안나가 내야 하는 금액 계산
    int annaShare = b - sharedCost;

    // 안나가 내야 하는 금액이 0이면 "Bon Appetit" 출력, 아니면 안나의 비용 출력
    if (annaShare == 0) {
      System.out.println("Bon Appetit");
    } else {
      System.out.println(annaShare);
    }
  }
}

public class Solution {
  public static void main(String[] args) throws IOException {
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

    String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

    int n = Integer.parseInt(firstMultipleInput[0]);
    int k = Integer.parseInt(firstMultipleInput[1]);

    List<Integer> bill = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
      .map(Integer::parseInt)
      .collect(Collectors.toList());

    int b = Integer.parseInt(bufferedReader.readLine().trim());

    // bonAppetit 메서드 호출
    Result.bonAppetit(bill, k, b);

    bufferedReader.close();
  }
}
```
