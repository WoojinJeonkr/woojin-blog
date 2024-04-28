---
external : false
title : "Jumping on the Clouds"
tag : [Hackerrank, Java]
date : 2024-04-28
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Answer

```java
public static int jumpingOnClouds(List<Integer> c) {
  int jumps = 0; // 점프 횟수를 저장할 변수
  int i = 0; // 배열 인덱스를 나타내는 변수
  while(i < c.size() - 3) { // 배열의 끝에서 3번째 인덱스 전까지 반복
    i += (c.get(i + 2) == 0) ? 2 : 1; // 현재 위치에서 2칸 앞에 있는 구름이 0이면 2칸 전진, 아니면 1칸 전진
    jumps++; // 점프 횟수 증가
  }
  jumps++; // 마지막 점프를 반영하여 점프 횟수 증가
  return jumps; // 총 점프 횟수 반환
}
```
