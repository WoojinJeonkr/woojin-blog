---
external : false
title : "Calculate deficit amount"
tag : [Programmers, Java]
date : 2024-07-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/82612?language=java)에서 확인하실 수 있습니다.

## 2. Solve

이 문제를 해결하기 위해서는 놀이기구를 count번 탈 때 필요한 총 비용을 계산해야 합니다.

놀이기구의 요금은 한 번 탈 때마다 점점 더 비싸지는데, 첫 번째 타는 비용은 price이고, 두 번째 타는 비용은 price의 2배, 세 번째는 3배로 증가합니다.

문제에서 요구하는 부족한 금액을 계산하기 위해서는 주어진 money와 총 비용의 차액을 구하면 됩니다.

먼저 1번부터 count번까지 타는 데 필요한 총 비용을 계산합니다. 이는 등차수열의 합 공식을 사용하여 계산할 수 있습니다.

```md
총 비용 = price × (count × (count + 1) / 2)
​```

이제 계산된 총 비용과 현재 가지고 있는 돈(money)을 비교하여 부족한 경우 부족한 금액을 계산합니다. 만약 돈이 충분하다면 부족한 금액은 0입니다.

```md
부족한 금액 = 총 비용 − money
```

## 3. Answer

```java
class Solution {
  public long solution(int price, int money, int count) {
    // 총 비용 계산: 등차수열의 합 공식을 사용하여 필요한 총 비용을 계산합니다.
    long totalCost = (long) price * count * (count + 1) / 2;
    
    // 부족한 금액 계산: 현재 가지고 있는 돈에서 총 비용을 뺀 금액을 계산합니다.
    long deficit = totalCost - money;
    
    // 만약 부족한 금액이 음수라면 0을 반환하고, 그렇지 않으면 계산된 부족한 금액을 반환합니다.
    return Math.max(0, deficit);
  }
}
```
