---
external : false
title : "Parking fee calculation"
tag : [Programmers, Java]
date : 2024-12-02
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/92341)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제는 주차 요금 계산을 위해 주어진 차량의 입차 및 출차 기록과 요금표를 분석해야 합니다. 각 차량의 누적 주차 시간을 계산하고, 주어진 요금표를 기반으로 요금을 산출하여 차량 번호 순으로 정렬된 결과를 반환하는 방식으로 접근할 수 있습니다.

우선, 차량 입출차 데이터를 순회하며 입차와 출차 정보를 처리합니다. 입차된 차량은 차량 번호를 키로, 입차 시간을 값으로 저장하고, 출차가 이루어진 경우 입차 시간과 출차 시간을 이용해 주차 시간을 계산한 뒤 누적합니다. 출차 기록이 없는 차량은 최종 시간(23:59)을 출차 시각으로 간주하여 누적 시간을 추가로 계산합니다.

그다음, 차량 번호를 정렬하여 요금을 계산합니다. 주어진 기본 시간과 기본 요금을 초과한 경우, 초과 시간을 단위 시간으로 나누어 올림하여 단위 요금을 계산하고 이를 기본 요금에 더해 최종 요금을 산출합니다.

## 3. Answer

```java
import java.util.*;
import java.text.*;

class Solution {
  public int[] solution(int[] fees, String[] records) {
    // 차량별 누적 주차 시간을 저장할 맵
    Map<String, Integer> parkingTime = new HashMap<>();
    // 입차 시간을 저장할 맵
    Map<String, String> inTime = new HashMap<>();
    
    // 주어진 기록을 순회
    for (String record : records) {
      String[] parts = record.split(" "); // 기록을 시각, 차량 번호, 상태로 분리
      String time = parts[0];
      String carNumber = parts[1];
      String status = parts[2];
      
      if (status.equals("IN")) {
        // 차량이 입차한 경우, 차량 번호와 시간을 기록
        inTime.put(carNumber, time);
      } else {
        // 차량이 출차한 경우, 입차 시간을 가져와 누적 주차 시간을 계산
        String in = inTime.remove(carNumber);
        int parkedMinutes = calculateMinutes(in, time); // 주차 시간 계산
        parkingTime.put(carNumber, parkingTime.getOrDefault(carNumber, 0) + parkedMinutes);
      }
    }
    
    // 출차 기록이 없는 차량에 대해 23:59에 출차된 것으로 간주
    for (String carNumber : inTime.keySet()) {
      String in = inTime.get(carNumber);
      int parkedMinutes = calculateMinutes(in, "23:59");
      parkingTime.put(carNumber, parkingTime.getOrDefault(carNumber, 0) + parkedMinutes);
    }
    
    // 차량 번호를 오름차순으로 정렬
    List<String> sortedCarNumbers = new ArrayList<>(parkingTime.keySet());
    Collections.sort(sortedCarNumbers);
    
    // 차량별로 요금 계산
    int[] answer = new int[sortedCarNumbers.size()];
    for (int i = 0; i < sortedCarNumbers.size(); i++) {
      String carNumber = sortedCarNumbers.get(i);
      int totalTime = parkingTime.get(carNumber); // 총 주차 시간 가져오기
      answer[i] = calculateFee(totalTime, fees); // 주차 요금 계산
    }
    
    return answer;
  }
  
  // 두 시각 간의 분 차이를 계산하는 메서드
  private int calculateMinutes(String inTime, String outTime) {
    try {
      SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
      Date inDate = sdf.parse(inTime);
      Date outDate = sdf.parse(outTime);
      long diff = outDate.getTime() - inDate.getTime(); // 밀리초 단위로 차이 계산
      return (int) (diff / (60 * 1000)); // 분 단위로 변환
    } catch (ParseException e) {
      throw new RuntimeException("시간 형식 오류");
    }
  }
  
  // 주차 요금을 계산하는 메서드
  private int calculateFee(int totalTime, int[] fees) {
    int basicTime = fees[0]; // 기본 시간
    int basicFee = fees[1]; // 기본 요금
    int unitTime = fees[2]; // 단위 시간
    int unitFee = fees[3]; // 단위 요금
    
    if (totalTime <= basicTime) {
      // 기본 시간 이하인 경우 기본 요금만 부과
      return basicFee;
    }
    
    // 초과 시간에 대해 단위 시간 기준으로 요금 계산
    int extraTime = totalTime - basicTime;
    int extraUnits = (int) Math.ceil((double) extraTime / unitTime); // 올림 처리
    return basicFee + extraUnits * unitFee; // 최종 요금 계산
  }
}
```
