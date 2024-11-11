---
external : false
title : "Sportswear"
tag : [Programmers, Java]
date : 2024-11-11
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42862)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해 우선 모든 학생이 기본적으로 체육복을 한 벌씩 가지고 있다고 가정합니다. 여벌 체육복을 가진 학생과 체육복을 도난당한 학생 정보를 바탕으로 학생들의 체육복 상태를 나타내는 배열을 초기화합니다. 이 배열에서 각 학생이 체육복을 가지지 않은 상태(0), 체육복을 한 벌 가진 상태(1), 또는 여벌 체육복이 있는 상태(2)로 표현됩니다.

먼저, 도난당한 학생의 번호가 포함된 lost 배열을 순회하며 해당 학생들의 체육복 개수를 1씩 줄여 체육복이 없는 상태를 반영합니다. 그다음, 여벌 체육복을 가진 학생의 번호가 포함된 reserve 배열을 순회하면서 여벌 체육복을 가진 학생의 체육복 개수를 1씩 증가시킵니다. 이렇게 함으로써, 체육복 상태가 정리된 학생 배열이 완성됩니다.

이후, 여벌 체육복이 있는 학생들이 도난당한 인접한 학생들에게 체육복을 빌려줄 수 있는지를 확인합니다. 이때, 각 학생이 여벌 체육복을 가진 경우 그들의 앞이나 뒤에 체육복이 없는 학생이 있다면, 그들에게 체육복을 빌려줍니다. 이를 통해 가능한 최대한의 학생이 체육복을 갖추게 됩니다.

마지막으로, 모든 학생의 배열을 순회하면서 체육복을 갖춘 학생 수를 세어 반환합니다. 이 수가 최대한 많은 학생이 체육 수업에 참여할 수 있는 최종 결과입니다.

## 3. Answer

```java
class Solution {
  public int solution(int n, int[] lost, int[] reserve) {
    int[] students = new int[n];
    
    // 모든 학생들이 체육복을 가지고 있는 상태로 초기화
    for (int i = 0; i < n; i++) {
      students[i] = 1;
    }
    
    // 도난당한 학생의 체육복 개수를 1 감소
    for (int i = 0; i < lost.length; i++) {
      int lostStudent = lost[i] - 1;
      students[lostStudent]--;
    }
    
    // 여벌 체육복이 있는 학생의 체육복 개수를 1 증가
    for (int i = 0; i < reserve.length; i++) {
      int reserveStudent = reserve[i] - 1;
      students[reserveStudent]++;
    }
    
    // 체육복을 빌려줄 수 있는 경우를 확인하여 조정
    for (int i = 0; i < n; i++) {
      if (students[i] == 2) {  // 여벌 체육복이 있는 학생
        if (i > 0 && students[i - 1] == 0) {  // 앞의 학생에게 빌려줌
          students[i]--;
          students[i - 1]++;
        } else if (i < n - 1 && students[i + 1] == 0) {  // 뒤의 학생에게 빌려줌
          students[i]--;
          students[i + 1]++;
        }
      }
    }
    
    // 체육수업에 참여할 수 있는 학생 수 계산
    int answer = 0;
    for (int i = 0; i < n; i++) {
      if (students[i] > 0) {  // 체육복을 가진 학생 수 세기
        answer++;
      }
    }
    
    return answer;
  }
}
```
