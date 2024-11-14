---
external : false
title : "Performance appraisal"
tag : [Programmers, Java]
date : 2024-11-14
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/152995)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위한 접근 방법은 먼저 인센티브를 받을 수 없는 사원을 찾아내는 것부터 시작합니다. 만약 한 사원이 다른 사원보다 근무 태도 점수와 동료 평가 점수가 모두 낮으면, 그 사원은 인센티브를 받을 수 없게 됩니다. 이를 처리하기 위해서는 점수를 먼저 정렬하고, 점수 합이 낮은 사원들을 제외하는 방식으로 접근할 수 있습니다. 만약 완호가 이러한 사원들 중 하나에 해당한다면, 그의 순위는 -1로 반환해야 합니다.

다음으로, 사원들의 점수를 정렬해야 합니다. 정렬 기준은 근무 태도 점수로 내림차순으로 먼저 정렬하고, 그 점수가 같을 경우에는 동료 평가 점수로 오름차순 정렬하여, 두 번째 점수인 동료 평가 점수를 기준으로 비교할 수 있도록 합니다. 이렇게 정렬된 리스트를 통해 인센티브를 받을 수 없는 사원을 제외하고, 순위를 계산할 준비를 할 수 있습니다.

마지막으로, 석차를 계산하는 단계입니다. 각 사원의 점수 합을 기준으로 내림차순으로 정렬하고, 동점자의 경우에는 같은 순위를 부여합니다. 예를 들어, 동일한 점수 합을 가진 두 명의 사원이 있다면, 그들은 같은 순위를 차지하고, 그다음 순위는 두 명을 넘겨서 계산됩니다. 완호의 석차는 점수 합을 기준으로 다른 사원들과 비교하여 계산하며, 이를 통해 최종적으로 완호의 순위를 구할 수 있습니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public int solution(int[][] scores) {
    // 완호의 점수와 총합 계산
    int[] wanhoScore = scores[0];
    int wanhoTotal = wanhoScore[0] + wanhoScore[1];
    
    // scores 배열을 ArrayList로 변환
    List<int[]> scoresList = new ArrayList<>(Arrays.asList(scores));
    
    // 근무 태도 점수를 기준으로 내림차순 정렬, 동료 평가 점수가 같으면 동료 평가 점수를 기준으로 오름차순 정렬
    scoresList.sort((a, b) -> {
      if (a[0] == b[0]) {
        return a[1] - b[1];
      }
      return b[0] - a[0];
    });
    
    // 첫 번째 사람의 동료 평가 점수
    int maxPeerScore = scoresList.get(0)[1];
    
    // 점수가 낮은 사원은 인센티브를 받을 수 없으므로 제거
    Iterator<int[]> iterator = scoresList.iterator();
    while (iterator.hasNext()) {
      int[] score = iterator.next();
      if (score[1] < maxPeerScore) { // 동료 평가 점수가 이전 사람보다 낮으면
        // 완호의 점수라면 인센티브를 받을 수 없으므로 -1 반환
        if (Arrays.equals(score, wanhoScore)) {
          return -1;
        }
        // 인센티브를 받지 못하는 사원은 리스트에서 제거
        iterator.remove();
      } else {
        // 동료 평가 점수 갱신
        maxPeerScore = Math.max(maxPeerScore, score[1]);
      }
    }
    
    // 점수 합을 기준으로 내림차순 정렬
    scoresList.sort((a, b) -> (b[0] + b[1]) - (a[0] + a[1]));
    
    // 완호의 순위를 계산
    int rank = 1;
    
    // 각 사원의 점수 합을 비교하여 완호의 순위 계산
    for (int[] score : scoresList) {
      int total = score[0] + score[1];
      if (total > wanhoTotal) {
        rank++; // 점수가 더 크면 순위 증가
      } else if (total == wanhoTotal && Arrays.equals(score, wanhoScore)) {
        // 동일 점수일 경우, 완호의 순위를 계산한 후 종료
        break;
      }
    }
    
    // 최종 순위 반환
    return rank;
  }
}
```
