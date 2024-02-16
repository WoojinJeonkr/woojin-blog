---
external : false
title : "Viral Advertising"
tag : [Hackerrank, Java]
date : 2024-02-16
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
/*
  * 'viralAdvertising' 함수는 광고가 전파되는 과정에서의 좋아요(like) 수를 계산합니다.
  *
  * 함수는 정수를 반환합니다.
  * 함수는 매개변수로 정수 n을 받으며, n은 광고를 진행하는 날 수입니다.
  * 광고가 전파되는 과정은 다음과 같습니다:
  *   1. 첫 날에는 광고를 본 사람 5명 중에서 2명이 좋아요를 클릭합니다.
  *   2. 좋아요를 클릭한 각 사람은 그 다음 날에 광고를 3명에게 전달합니다.
  *   3. 이 과정이 n일 동안 반복됩니다.
  * 이 함수는 전체 좋아요 수를 반환합니다.
  *
  * @param n: 광고를 진행하는 날 수
  * @return 광고 전파 과정에서의 총 좋아요 수
  */

public static int viralAdvertising(int n) {
  // 초기 사람 수를 5명으로 설정
  int people = 5;
  // 누적 좋아요 수 초기화
  int cumulativeLikes = 0;
  
  // 광고를 n일 동안 진행
  for (int i = 0; i < n; i++) {
    // 현재 날짜에 좋아요를 클릭한 사람 수 계산 (현재 사람 수의 절반)
    int liked = people / 2;
    // 누적 좋아요 수에 추가
    cumulativeLikes += liked;
    // 다음 날에 광고를 볼 사람 수를 갱신 (좋아요를 클릭한 사람은 광고를 3명에게 전달)
    people = liked * 3;
  }
  // 전체 좋아요 수 반환
  return cumulativeLikes;
}
```

## 3. Total Code

```java
import java.io.*;
import java.util.*;

class Result {

  /*
   * 'viralAdvertising' 함수는 광고가 전파되는 과정에서의 좋아요(like) 수를 계산합니다.
   *
   * 함수는 정수를 반환합니다.
   * 함수는 매개변수로 정수 n을 받으며, n은 광고를 진행하는 날 수입니다.
   * 광고가 전파되는 과정은 다음과 같습니다:
   *   1. 첫 날에는 광고를 본 사람 5명 중에서 2명이 좋아요를 클릭합니다.
   *   2. 좋아요를 클릭한 각 사람은 그 다음 날에 광고를 3명에게 전달합니다.
   *   3. 이 과정이 n일 동안 반복됩니다.
   * 이 함수는 전체 좋아요 수를 반환합니다.
   *
   * @param n: 광고를 진행하는 날 수
   * @return 광고 전파 과정에서의 총 좋아요 수
   */

  public static int viralAdvertising(int n) {
    // 초기 사람 수를 5명으로 설정
    int people = 5;
    // 누적 좋아요 수 초기화
    int cumulativeLikes = 0;
    
    // 광고를 n일 동안 진행
    for (int i = 0; i < n; i++) {
      // 현재 날짜에 좋아요를 클릭한 사람 수 계산 (현재 사람 수의 절반)
      int liked = people / 2;
      // 누적 좋아요 수에 추가
      cumulativeLikes += liked;
      // 다음 날에 광고를 볼 사람 수를 갱신 (좋아요를 클릭한 사람은 광고를 3명에게 전달)
      people = liked * 3;
    }
    // 전체 좋아요 수 반환
    return cumulativeLikes;
  }

}

public class Solution {
  public static void main(String[] args) throws IOException {
    // 입력 스트림 생성
    BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
    // 출력 스트림 생성
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    // 광고 진행하는 날 수를 입력 받음
    int n = Integer.parseInt(bufferedReader.readLine().trim());

    // viralAdvertising 함수 호출하여 결과값 저장
    int result = Result.viralAdvertising(n);

    // 결과값을 출력 스트림에 씀
    bufferedWriter.write(String.valueOf(result));
    // 개행
    bufferedWriter.newLine();

    // 스트림 닫기
    bufferedReader.close();
    bufferedWriter.close();
  }
}
```
