---
external : false
title : "Progressing with assignments"
tag : [Programmers, Java]
date : 2024-10-20
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/176962)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제를 해결하기 위해서는 주어진 과제들의 시작 시간과 과제 진행 중단, 재개를 효율적으로 처리해야 합니다. 먼저, 과제의 시작 시간을 모두 분 단위로 변환하여 비교할 수 있도록 만들어야 합니다. 이를 통해 각 과제의 순서를 시간 순으로 쉽게 정렬할 수 있습니다. 시작 시간이 서로 겹치지 않는다고 했으므로, 새로운 과제를 시작할 때 중단된 과제가 있으면 이를 스택에 저장해 두고, 이후 과제가 끝났을 때 가장 최근에 멈춘 과제부터 다시 진행하는 방식으로 문제를 해결할 수 있습니다.

구체적으로, 새로운 과제가 시작될 시각이 되면 기존에 진행 중이던 과제가 남아 있을 수 있는데, 이러한 과제는 일시 중단된 상태로 스택에 저장됩니다. 그리고 과제를 끝낸 후, 스택에서 가장 최근에 중단된 과제를 꺼내어 다시 시작합니다. 이러한 방식으로 모든 과제가 완료될 때까지 순차적으로 작업을 이어나갈 수 있습니다.

또한, 과제의 시작 시간에 맞추어 현재 시간을 조정하고, 진행 중인 과제를 끝낼 수 있는지 확인한 후, 남아있는 과제의 시간이 얼마나 남았는지도 계속해서 추적합니다. 과제가 끝난 후에는 남아있는 과제들을 순차적으로 처리해나가고, 이를 다시 배열에 담아 반환하게 됩니다.

## 3. Answer

```java
import java.util.*;

class Solution {
  public String[] solution(String[][] plans) {
    // 1. plans 배열을 시작 시간을 기준으로 정렬
    Arrays.sort(plans, (a, b) -> convertToMinutes(a[1]) - convertToMinutes(b[1]));
    
    // 2. 과제를 끝낸 순서를 담을 리스트
    List<String> completedTasks = new ArrayList<>();
    
    // 3. 멈춘 과제를 저장할 스택
    Stack<String[]> pausedTasks = new Stack<>();
    
    // 4. 현재 시각을 저장할 변수
    int currentTime = 0;

    // 5. 계획을 하나씩 처리
    for (int i = 0; i < plans.length; i++) {
      String name = plans[i][0]; // 과제 이름
      int startTime = convertToMinutes(plans[i][1]); // 시작 시간(분으로 변환)
      int playtime = Integer.parseInt(plans[i][2]); // 과제 수행 시간

      // 6. 새로운 과제가 시작하기 전에, 기존 과제를 끝낼 수 있는지 확인
      while (!pausedTasks.isEmpty() && currentTime + Integer.parseInt(pausedTasks.peek()[2]) <= startTime) {
        String[] pausedTask = pausedTasks.pop(); // 중단된 과제 꺼내기
        currentTime += Integer.parseInt(pausedTask[2]); // 끝낸 과제 시간 더하기
        completedTasks.add(pausedTask[0]); // 끝낸 과제 목록에 추가
      }

      // 7. 새로운 과제를 시작할 시간에 맞추기
      if (!pausedTasks.isEmpty()) {
        pausedTasks.peek()[2] = String.valueOf(Integer.parseInt(pausedTasks.peek()[2]) - (startTime - currentTime));
      }

      currentTime = startTime; // 현재 시간을 새 과제 시작 시간으로 갱신
      pausedTasks.push(new String[]{name, plans[i][1], String.valueOf(playtime)}); // 새 과제를 스택에 추가
    }

    // 8. 남아있는 멈춘 과제를 순차적으로 처리
    while (!pausedTasks.isEmpty()) {
      String[] pausedTask = pausedTasks.pop(); // 스택에서 과제 꺼내기
      completedTasks.add(pausedTask[0]); // 완료된 과제 목록에 추가
    }

    // 9. 완료된 과제를 배열로 반환
    return completedTasks.toArray(new String[completedTasks.size()]);
  }

  // 시간을 "hh:mm" 형식에서 분(minute)으로 변환하는 함수
  private int convertToMinutes(String time) {
    String[] parts = time.split(":"); // 시간을 ":"로 분리
    int hours = Integer.parseInt(parts[0]); // 시간 부분
    int minutes = Integer.parseInt(parts[1]); // 분 부분
    return hours * 60 + minutes; // 시간과 분을 분 단위로 변환하여 반환
  }
}
```
