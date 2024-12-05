---
external : false
title : "Emoticon discount event"
tag : [Programmers, Java]
date : 2024-12-05
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/150368)에서 확인하실 수 있습니다.

## 2. Problem solving process

해당 문제를 해결하기 위해 먼저 카카오톡 사용자들의 구매 기준과 이모티콘의 가격 정보를 분석해야 합니다. 각 사용자는 특정 할인율 이상의 이모티콘을 구매하며, 총 구매 비용이 설정된 임계값 이상이 되는 경우 이모티콘 플러스 서비스에 가입하는 선택지를 택합니다. 따라서 목표는 이모티콘 플러스 서비스 가입자 수를 최대화하고, 가입자 수가 동일한 경우 매출액을 최대화하는 할인율 조합을 찾는 것입니다.

이를 위해 모든 가능한 할인율 조합을 탐색하며 각 조합에 대해 사용자들의 행동을 시뮬레이션합니다. 이때 할인율은 10%, 20%, 30%, 40%로 제한되므로, 이모티콘 개수에 따라 모든 조합을 생성해 탐색할 수 있습니다. 각 할인율 조합마다 사용자가 구매할 이모티콘과 총 비용을 계산한 후, 서비스 가입 여부를 결정합니다. 이 과정을 반복하면서 최대 가입자 수와 매출액을 기록해 나갑니다.

이 문제는 완전 탐색을 통해 최적의 결과를 찾아야 하므로, 재귀를 사용해 각 이모티콘에 대해 가능한 할인율을 적용한 모든 경우를 탐색합니다. 탐색 중 각 사용자에 대해 할인율 조건을 평가하고, 구매 총액이 임계값 이상인지 확인하여 가입 여부와 매출액을 계산합니다. 마지막으로, 탐색한 모든 경우 중 목표를 가장 잘 충족하는 결과를 반환합니다.

## 3. Answer

```java
class Solution {
  private int maxSubscribers = 0; // 최대 이모티콘 플러스 서비스 가입자 수
  private int maxSales = 0; // 최대 이모티콘 매출액

  public int[] solution(int[][] users, int[] emoticons) {
    int[] discounts = {10, 20, 30, 40}; // 적용 가능한 할인율
    int[] discountRates = new int[emoticons.length]; // 각 이모티콘의 할인율

    // 할인율 설정 및 결과 계산
    exploreDiscounts(0, emoticons, users, discountRates, discounts);

    // 최대 가입자 수와 매출액 반환
    return new int[]{maxSubscribers, maxSales};
  }

  private void exploreDiscounts(int depth, int[] emoticons, int[][] users, int[] discountRates, int[] discounts) {
    // 모든 이모티콘에 대한 할인율을 설정 완료한 경우
    if (depth == emoticons.length) {
      calculateResults(emoticons, users, discountRates);
      return;
    }

    // 각 할인율을 순차적으로 적용
    for (int discount : discounts) {
      discountRates[depth] = discount; // 현재 이모티콘에 할인율 설정
      exploreDiscounts(depth + 1, emoticons, users, discountRates, discounts); // 다음 이모티콘으로 진행
    }
  }

  private void calculateResults(int[] emoticons, int[][] users, int[] discountRates) {
    int subscribers = 0; // 현재 할인율에서의 가입자 수
    int sales = 0; // 현재 할인율에서의 매출액

    // 각 사용자의 구매 행동 분석
    for (int[] user : users) {
      int minDiscount = user[0]; // 사용자가 요구하는 최소 할인율
      int threshold = user[1]; // 이모티콘 구매 총액이 가입 기준 이상일 때

      int totalCost = 0; // 사용자의 이모티콘 구매 총액

      // 이모티콘마다 할인율을 적용하여 구매 비용 계산
      for (int i = 0; i < emoticons.length; i++) {
        if (discountRates[i] >= minDiscount) { // 사용자의 최소 할인율 조건 충족
          totalCost += emoticons[i] * (100 - discountRates[i]) / 100; // 할인 적용된 가격 추가
        }
      }

      // 구매 총액이 가입 기준 이상이면 서비스 가입
      if (totalCost >= threshold) {
        subscribers++;
      } else { // 기준 미만이면 구매로 매출액 증가
        sales += totalCost;
      }
    }

    // 가입자 수 및 매출액 최적화
    if (subscribers > maxSubscribers || (subscribers == maxSubscribers && sales > maxSales)) {
      maxSubscribers = subscribers;
      maxSales = sales;
    }
  }
}
```
