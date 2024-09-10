---
external : false
title : "Sales event"
tag : [Programmers, Java]
date : 2024-09-10
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/131127)에서 확인하실 수 있습니다.

## 2. Problem solving process

## 문제 접근 방식

문제를 해결하기 위해 총 할인 일수에 대해 슬라이딩 윈도우를 적용하여 각 구간을 검사하는 방법을 사용합니다.

먼저, 원하는 제품과 그 수량을 `HashMap`에 저장합니다. 이 `HashMap`은 `wantMap`이라는 변수로, 각 제품의 이름을 키로 하고 요구하는 수량을 값으로 하여 빠르게 조회할 수 있도록 합니다. `want` 배열에서 각 제품의 이름과 원하는 수량을 기반으로 `wantMap`을 구성합니다.

그 다음, 할인 제품 리스트 `discount`를 분석하여 10일 동안의 할인 상황을 파악합니다. 슬라이딩 윈도우 기법을 사용하여 할인 기간을 10일 단위로 나누어 확인합니다. 각 10일 구간에 대해 `HashMap`을 사용하여 해당 구간의 할인 제품과 수량을 기록합니다. 이 `discountMap`은 현재 10일 동안의 할인 제품을 저장합니다.

각 10일 구간의 할인 상황을 `wantMap`에서 요구하는 수량과 비교합니다. 만약 10일 구간 내의 할인 제품 수량이 `wantMap`의 요구 사항을 모두 만족하면, 카운트를 증가시킵니다.

이를 통해 정현이가 원하는 제품을 모두 만족할 수 있는 10일 연속 구간의 개수를 구할 수 있습니다.

## 3. Answer

```java
import java.util.HashMap;

class Solution {
  public int solution(String[] want, int[] number, String[] discount) {
    int answer = 0;

    // 원하는 상품과 수량을 매핑할 HashMap 생성
    HashMap<String, Integer> wantMap = new HashMap<>();
    for (int i = 0; i < want.length; i++) {
      wantMap.put(want[i], number[i]);
    }

    // 할인 기간을 10일 단위로 확인
    for (int i = 0; i <= discount.length - 10; i++) {
      // 현재 10일 동안의 상품을 매핑할 HashMap 생성
      HashMap<String, Integer> discountMap = new HashMap<>();
      for (int j = i; j < i + 10; j++) {
        discountMap.put(discount[j], discountMap.getOrDefault(discount[j], 0) + 1);
      }

      // 현재 10일 동안의 할인 목록이 원하는 목록을 만족하는지 확인
      boolean isValid = true;
      for (String product : wantMap.keySet()) {
        if (discountMap.getOrDefault(product, 0) < wantMap.get(product)) {
          isValid = false;
          break;
        }
      }

      // 조건을 만족하면 정답 카운트 증가
      if (isValid) {
        answer++;
      }
    }

    return answer;
  }
}
```
