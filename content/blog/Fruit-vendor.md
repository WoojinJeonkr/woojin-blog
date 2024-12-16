---
external : false
title : "Fruit vendor"
tag : [Programmers, Java]
date : 2024-12-16
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/135808)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제에 접근하기 위해서는 사과의 점수와 상자 구성 간의 관계를 명확히 파악해야 합니다. 상자의 가치는 그 상자에 포함된 사과들 중 가장 낮은 점수에 의해 결정되므로, 과일 장수가 얻을 수 있는 최대 이익을 구하기 위해서는 최대한 균일하고 높은 품질의 사과들로 상자를 구성해야 합니다.

이를 위해 사과 점수 배열을 오름차순으로 정렬한 후, 배열의 끝에서부터 최고 품질의 사과들을 일정 개수씩 그룹핑하여 상자를 구성하고, 각 상자의 가치는 그룹 내 최소 점수를 기준으로 계산하여 전체 이익을 합산합니다.

## 3. Answer

```java
import java.util.Arrays;

class Solution {
  public int solution(int k, int m, int[] score) {
    // 사과 점수를 내림차순으로 정렬
    Arrays.sort(score);
    
    int totalProfit = 0;
    // 오름차순 정렬 후 뒤에서부터 m개씩 묶음
    for (int i = score.length - m; i >= 0; i -= m) {
      // 현재 상자의 최저 점수 × 상자당 사과 개수
      totalProfit += score[i] * m;
    }
    
    return totalProfit;
  }
}
```
