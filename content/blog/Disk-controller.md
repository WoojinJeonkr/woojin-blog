---
external : false
title : "Disk controller"
tag : [Programmers, Java]
date : 2024-11-22
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42627)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제에서 주어진 작업들은 요청 시각과 소요 시간이 다르고, 요청 시각에 따라 작업이 큐에 들어오게 됩니다. 작업을 처리하는 순서를 결정하기 위해 요청 시각과 소요 시간을 기준으로 우선순위를 정해야 합니다. 이를 위해 먼저 작업들을 요청 시각 기준으로 정렬하여, 시간 흐름에 따라 작업을 큐에 넣는 작업을 쉽게 구현할 수 있습니다.

현재 시각(time)을 유지하면서 각 작업을 처리하는데, 매 시점마다 요청된 작업 중 소요 시간이 가장 짧은 작업을 선택해 처리해야 합니다. 이를 위해 요청된 작업들을 대기 큐에 넣고, 대기 큐에서 조건에 따라 가장 적합한 작업을 선택합니다. 작업이 완료되면 현재 시각을 갱신하고, 해당 작업의 반환 시간을 계산하여 누적합니다. 반환 시간은 작업 요청 시각부터 종료 시각까지의 시간 차이를 의미합니다.

모든 작업이 완료될 때까지 위 과정을 반복하며, 큐가 비어 있으면 요청 시각을 기준으로 시간을 이동하여 다음 작업을 처리합니다. 마지막으로 모든 작업의 반환 시간의 합을 작업 개수로 나누어 평균 반환 시간을 구하면 됩니다.

## 3. Answer

```java
class Solution {
  public int solution(int[][] jobs) {
    int n = jobs.length; // 작업의 개수
    int time = 0; // 현재 시각
    int totalTurnaroundTime = 0; // 모든 작업의 반환 시간 합
    int completedJobs = 0; // 완료된 작업 수
    int jobIndex = 0; // 요청된 작업을 처리하기 위한 인덱스
    int[] queue = new int[n]; // 대기 큐
    int queueSize = 0; // 대기 큐 크기

    sortByRequestTime(jobs); // 작업들을 요청 시각 기준으로 정렬

    while (completedJobs < n) { // 모든 작업이 완료될 때까지 반복
      // 현재 시각에 요청된 작업을 대기 큐에 추가
      while (jobIndex < n && jobs[jobIndex][0] <= time) {
        queue[queueSize++] = jobIndex++;
      }

      if (queueSize > 0) { // 대기 큐에 작업이 있을 경우
        int shortestIndex = getShortestJob(jobs, queue, queueSize); // 소요 시간이 가장 짧은 작업 선택
        int[] currentJob = jobs[queue[shortestIndex]]; // 선택된 작업
        time += currentJob[1]; // 작업 소요 시간을 더해 현재 시각 갱신
        totalTurnaroundTime += (time - currentJob[0]); // 해당 작업의 반환 시간 계산
        completedJobs++; // 완료된 작업 수 증가
        queueSize--; // 대기 큐에서 작업 제거
        for (int i = shortestIndex; i < queueSize; i++) { // 큐를 업데이트
          queue[i] = queue[i + 1];
        }
      } else { // 대기 큐에 작업이 없을 경우
        time = jobs[jobIndex][0]; // 다음 작업의 요청 시각으로 시간 이동
      }
    }

    return totalTurnaroundTime / n; // 반환 시간의 평균값 계산 후 반환
  }

  private void sortByRequestTime(int[][] jobs) { 
    // 작업들을 요청 시각 기준으로 오름차순 정렬
    for (int i = 0; i < jobs.length - 1; i++) {
      for (int j = i + 1; j < jobs.length; j++) {
        if (jobs[i][0] > jobs[j][0]) {
          int[] temp = jobs[i];
          jobs[i] = jobs[j];
          jobs[j] = temp;
        }
      }
    }
  }

  private int getShortestJob(int[][] jobs, int[] queue, int queueSize) {
    // 대기 큐에서 소요 시간이 가장 짧은 작업의 인덱스를 반환
    int shortestIndex = 0;
    int minLength = jobs[queue[0]][1];
    for (int i = 1; i < queueSize; i++) {
      int jobIndex = queue[i];
      if (jobs[jobIndex][1] < minLength || 
          (jobs[jobIndex][1] == minLength && jobs[jobIndex][0] < jobs[queue[shortestIndex]][0])) {
        shortestIndex = i;
        minLength = jobs[jobIndex][1];
      }
    }
    return shortestIndex;
  }
}
```
