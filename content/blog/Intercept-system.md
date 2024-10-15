---
external : false
title : "Intercept system"
tag : [Programmers, Java]
date : 2024-10-15
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/181188)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 최소한의 요격 미사일로 폭격 미사일들을 모두 요격해야 하는 상황을 다룹니다. A 나라의 폭격 미사일들이 주어진 개구간으로 표현될 때, 이들을 최소한의 요격 미사일로 처리하기 위해 그리디 알고리즘을 사용합니다. 그리디 알고리즘을 사용하면 각 폭격 미사일을 끝나는 시점을 기준으로 정렬한 후, 요격 미사일이 최대한 많은 폭격 미사일을 한 번에 처리할 수 있도록 배치할 수 있습니다.

우선 폭격 미사일들의 범위를 끝점을 기준으로 정렬합니다. 이렇게 하면 현재 미사일의 끝점에 맞춰 요격 미사일을 발사함으로써 다음 폭격 미사일이 그 요격 미사일의 범위 내에 포함되는지를 쉽게 확인할 수 있습니다. 만약 다음 폭격 미사일이 기존의 요격 미사일로 요격 가능한 범위 밖에 있다면, 새로운 요격 미사일이 필요하므로 요격 미사일을 추가합니다. 이를 통해 모든 폭격 미사일을 최소한의 요격 미사일로 처리할 수 있습니다.

이 방법은 폭격 미사일들을 끝점을 기준으로 정렬한 후 순차적으로 탐색하면서 요격 미사일을 배치하고, 새로운 미사일이 필요할 때마다 그 위치를 갱신하는 방식으로 문제를 해결합니다.

## 3. Answer

```java
import java.util.Arrays;

class Solution {
  public int solution(int[][] targets) {
    // 폭격 미사일의 끝점을 기준으로 정렬
    Arrays.sort(targets, (a, b) -> Integer.compare(a[1], b[1]));
    
    int answer = 0;
    int lastInterceptPoint = -1;
    
    for (int[] target : targets) {
      int start = target[0];
      int end = target[1];
      
      // 현재 미사일의 시작점이 마지막 요격 지점보다 크면 새로운 요격 미사일이 필요
      if (start >= lastInterceptPoint) {
        answer++;
        lastInterceptPoint = end;  // 새로운 요격 미사일의 위치는 현재 폭격 미사일의 끝점
      }
    }
    
    return answer;
  }
}
```
