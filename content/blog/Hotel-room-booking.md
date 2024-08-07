---
external : false
title : "Hotel room booking"
tag : [Programmers, Java]
date : 2024-08-07
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/155651)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {

  public int solution(String[][] book_time) {
    // 예약 시작 및 종료 시간을 분으로 변환한 배열 생성
    int[][] times = new int[book_time.length][2];
    for (int i = 0; i < book_time.length; i++) {
      times[i][0] = timeToMinutes(book_time[i][0]);
      times[i][1] = timeToMinutes(book_time[i][1]) + 10; // 청소 시간 10분 추가
    }

    // 시작 시간을 기준으로 배열 정렬
    Arrays.sort(times, (a, b) -> Integer.compare(a[0], b[0]));

    // 현재 사용 중인 객실의 종료 시간을 관리하는 우선순위 큐
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    int maxRooms = 0; // 필요한 객실의 최대 수

    for (int[] time : times) {
      // 현재 예약 시작 시간 이전에 종료된 객실은 우선순위 큐에서 제거
      while (!pq.isEmpty() && pq.peek() <= time[0]) {
        pq.poll();
      }

      // 현재 예약의 종료 시간을 우선순위 큐에 추가
      pq.offer(time[1]);
      // 현재 필요한 객실 수 업데이트
      maxRooms = Math.max(maxRooms, pq.size());
    }

    return maxRooms;
  }

  // "HH:MM" 형식을 분으로 변환하는 메소드
  private int timeToMinutes(String time) {
    String[] parts = time.split(":");
    int hours = Integer.parseInt(parts[0]);
    int minutes = Integer.parseInt(parts[1]);
    return hours * 60 + minutes;
  }
}
```
