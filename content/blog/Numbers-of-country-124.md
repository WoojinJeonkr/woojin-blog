---
external : false
title : "Numbers of country 124"
tag : [Programmers, Java]
date : 2024-09-27
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/12899)에서 확인하실 수 있습니다.

## 2. Problem soving process

이 문제는 3진법과 유사한 변환 방식으로 1, 2, 4만을 사용하여 수를 표현하는 규칙을 가지고 있습니다. 124 나라의 수 체계는 3진법을 바탕으로 하지만, 0 대신 4를 사용한다는 점에서 차이가 있습니다. 이를 해결하기 위해서는 주어진 수를 3으로 나누어 나머지를 구한 뒤, 나머지에 따라 숫자를 1, 2, 4로 치환해야 합니다. 중요한 점은 나머지가 0일 때, 이 나머지는 124 나라에서 '4'로 표현되며, 그 경우 몫에서 1을 빼서 자릿수를 조정해야 한다는 점입니다.

예를 들어, 10진수에서 3진법 변환과 유사한 방식으로 n을 3으로 나눈 나머지를 구하면서 그 나머지를 124 나라의 규칙에 맞게 변환합니다. 나머지가 0인 경우에는 '4'를 추가하고, 그렇지 않으면 '1' 또는 '2'를 추가합니다. 변환이 끝나면, 역순으로 뒤집어 최종 결과를 반환하게 됩니다. 이 과정을 반복함으로써 주어진 10진수 n을 124 나라의 규칙에 맞춰 변환할 수 있습니다.

## 3. Answer

```java
class Solution {
  public String solution(int n) {
    StringBuilder answer = new StringBuilder(); // 결과를 저장할 StringBuilder 생성
    
    while (n > 0) {
      int remainder = n % 3; // n을 3으로 나눈 나머지를 계산
      
      if (remainder == 0) { // 나머지가 0일 때
        answer.append("4"); // 124 나라에서 0 대신 4를 사용
        n = n / 3 - 1; // 몫에서 1을 빼서 자릿수 조정
      } else { // 나머지가 1 또는 2일 때
        answer.append(remainder); // 나머지를 그대로 추가
        n /= 3; // n을 3으로 나눈 몫으로 갱신
      }
    }
    
    return answer.reverse().toString(); // 계산한 값을 역순으로 반환
  }
}
```
