---
external : false
title : "Picking two and plus"
tag : [Programmers, Java]
date : 2024-12-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/68644)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해서는 주어진 배열에서 두 숫자의 합으로 만들 수 있는 모든 경우를 구하고, 중복된 값은 제거한 뒤 오름차순으로 정렬해 반환해야 합니다.

결과를 얻기 위해 이중 반복문을 사용하여 배열 내 모든 숫자 쌍을 탐색하고, 첫 번째 숫자와 두 번째 숫자의 합을 구합니다.

그 결과를 저장하되, 이미 저장된 값은 중복을 방지하고, 마지막으로 결과를 오름차순으로 정렬하여 반환합니다.

## 3. Answer

```java
class Solution {
  public int[] solution(int[] numbers) {
    // 최대 가능한 결과의 개수를 계산
    int maxSize = (numbers.length * (numbers.length - 1)) / 2;
    int[] temp = new int[maxSize];
    int count = 0;

    // 두 수를 더한 결과를 temp 배열에 추가
    for (int i = 0; i < numbers.length; i++) {
      for (int j = i + 1; j < numbers.length; j++) {
        int sum = numbers[i] + numbers[j];
        boolean isDuplicate = false;
        // 중복 여부를 확인
        for (int k = 0; k < count; k++) {
          if (temp[k] == sum) {
            isDuplicate = true;
            break;
          }
        }
        // 중복이 아니라면 temp 배열에 추가
        if (!isDuplicate) {
          temp[count++] = sum;
        }
      }
    }

    // 결과를 정렬하기 위해 새로운 배열로 복사
    int[] answer = new int[count];
    System.arraycopy(temp, 0, answer, 0, count);
    // 오름차순 정렬
    for (int i = 0; i < answer.length - 1; i++) {
      for (int j = i + 1; j < answer.length; j++) {
        if (answer[i] > answer[j]) {
          int tempVal = answer[i];
          answer[i] = answer[j];
          answer[j] = tempVal;
        }
      }
    }

    return answer;
  }
}
```
