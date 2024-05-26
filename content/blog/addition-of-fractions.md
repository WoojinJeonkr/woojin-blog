---
external : false
title : "addition of fractions"
tag : [Programmers, Java]
date : 2024-05-26
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/120808)에서 확인하실 수 있습니다.

## 2. Solve

각각의 분수를 더한 뒤 분자와 분모를 배열에 넣겠다는 접근 방식이 아닌 분자를 계산하고 분모를 계산한 뒤 배열에 넣도록 코드를 작성해야 한다.

```java
class Solution {
  // 주어진 분수 numer1/denom1과 numer2/denom2를 더하는 메소드
  public int[] solution(int numer1, int denom1, int numer2, int denom2) {
    // 분자를 구함: (분자1 * 분모2) + (분자2 * 분모1)
    int num1 = (numer1 * denom2) + (numer2 * denom1); 
    // 분모는 두 분모의 곱으로 설정
    int num2 = denom1 * denom2;
    
    // 최대공약수를 구하는 반복문
    for(int i = num1-1; i > 1; i--) {
      if(num1 % i == 0 && num2 % i == 0) { 
        num1 /= i;
        num2 /= i;
      }
    }
    
    // 최종 결과를 배열에 저장하여 반환
    int[] answer = {num1, num2};
    return answer;
  }
}
```
