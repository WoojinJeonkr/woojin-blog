---
external : false
title : "Breaking the Records"
tag : [Hackerrank, Java]
date : 2024-04-04
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> breakingRecords(List<Integer> scores) {
  int minR = 0; // 최소 기록을 갱신한 횟수를 저장하는 변수
  int maxR = 0; // 최대 기록을 갱신한 횟수를 저장하는 변수
  int min = scores.get(0); // 초기 최소 점수를 설정
  int max = scores.get(0); // 초기 최대 점수를 설정
  
  for (int i = 1; i < scores.size(); i++) { // 점수 배열을 반복하면서 최소와 최대 점수를 갱신하고 갱신 횟수를 증가시킴
    if (scores.get(i) < min) { // 현재 점수가 최소 점수보다 작으면 최소 점수를 갱신하고 갱신 횟수를 증가
      min = scores.get(i);
      minR++;
    }
    if (scores.get(i) > max) { // 현재 점수가 최대 점수보다 크면 최대 점수를 갱신하고 갱신 횟수를 증가
      max = scores.get(i);
      maxR++;
    }
  }
  
  List<Integer> result = new ArrayList<>(); // 결과를 저장할 리스트 생성
  result.add(maxR); // 최대 기록 갱신 횟수를 결과 리스트에 추가
  result.add(minR); // 최소 기록 갱신 횟수를 결과 리스트에 추가
  
  return result; // 결과 리스트 반환
}
```
