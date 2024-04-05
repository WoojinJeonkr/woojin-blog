---
external : false
title : "Electronics Shop"
tag : [Hackerrank, Java]
date : 2024-04-05
---

## 1. Problem

해당 문제는 [여기](https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true)에서 확인하실 수 있습니다.

## 2. Solve

```java
static int getMoneySpent(int[] keyboards, int[] drives, int b) {
  /*
  * 여기에 코드를 작성하세요.
  */
  int maximum = 0; // 최대값 초기화
  int sum = 0; // 합계 초기화
  for(int i = 0; i < keyboards.length; i ++){ // 키보드 배열 반복
    for(int j = 0; j < drives.length; j++){ // 드라이브 배열 반복
      sum = keyboards[i] + drives[j]; // 키보드와 드라이브의 가격 합산
      if(sum >= maximum && sum <= b){ // 합계가 최대값 이상이고 예산 이내인 경우
        maximum = sum; // 최대값 업데이트
      }
    }    
  }
  if(maximum == 0) return -1; // 구매할 수 있는 물품이 없는 경우
  return maximum; // 최대 구매 가능 금액 반환
}
```
