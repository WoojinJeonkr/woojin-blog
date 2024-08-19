---
external : false
title : "Feature development"
tag : [Programmers, Java]
date : 2024-08-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42586)에서 확인하실 수 있습니다.

## 2. Problem solving process

위 문제를 해결하기 위해 아래의 과정을 진행하였습니다.

우선, 각 기능이 100% 완료되기까지 남은 일수를 계산해야 합니다. 이를 위해 각 기능의 현재 진도와 개발 속도를 사용합니다. 남은 일수를 계산하는 공식은 다음과 같습니다.

```md
남은 일수 = ⌈ (100 - 현재 진도) / 개발 속도 ⌉
```

여기서 올림 함수를 사용하여 소수점이 있는 경우에도 전체 일수로 간주합니다. 소수점 연산을 피하기 위해 정수 연산을 사용할 수 있습니다.

```md
남은 일수 = (100 - 현재 진도 + 개발 속도 - 1) / 개발 속도
```

남은 일수를 계산한 후, 기능들을 배포 날에 따라 그룹화해야 합니다. 같은 날 배포되는 기능들은 함께 배포됩니다.

이를 위해 남은 일수 리스트를 순회하면서 현재 그룹의 최대 일수를 추적합니다. 각 기능의 남은 일수를 현재 최대 일수와 비교하고, 새로운 배포 날이 시작되면 이전 그룹의 기능 수를 기록합니다.

기능이 배포되는 날을 기준으로 카운터를 유지하여, 각 배포 날에 몇 개의 기능이 배포되는지를 계산합니다. 새로운 배포 날이 나타나면, 이전 그룹의 기능 수를 기록하고 카운터를 초기화합니다.

마지막으로, 마지막 그룹의 기능 수를 추가하여 최종 결과를 완성합니다.

## 3. Answer

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
  public int[] solution(int[] progresses, int[] speeds) {
    int n = progresses.length;
    List<Integer> deploymentDays = new ArrayList<>();
    
    // 각 기능의 배포 완료까지 남은 일수 계산
    for (int i = 0; i < n; i++) {
      int daysRequired = (int) Math.ceil((100.0 - progresses[i]) / speeds[i]);
      deploymentDays.add(daysRequired);
    }
    
    // 각 배포 날에 몇 개의 기능이 배포되는지 계산
    List<Integer> result = new ArrayList<>();
    int currentMaxDays = deploymentDays.get(0);
    int count = 1;
    
    for (int i = 1; i < n; i++) {
      if (deploymentDays.get(i) <= currentMaxDays) {
        count++;
      } else {
        result.add(count);
        currentMaxDays = deploymentDays.get(i);
        count = 1;
      }
    }
    
    // 마지막 그룹의 기능 수 추가
    result.add(count);
    
    // 리스트를 배열로 변환
    int[] answer = new int[result.size()];
    for (int i = 0; i < result.size(); i++) {
      answer[i] = result.get(i);
    }
    
    return answer;
  }
}
```
