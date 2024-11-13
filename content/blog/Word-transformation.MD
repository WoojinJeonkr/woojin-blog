---
external : false
title : "Word transformation"
tag : [Programmers, Java]
date : 2024-11-12
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/43163)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 "begin" 단어에서 "target" 단어로 변환하는 과정을 최단 경로로 찾는 문제로, 변환할 수 있는 단어들이 주어지고, 한 번에 한 글자만 바꿀 수 있다는 조건이 있습니다. 이 문제를 해결하기 위해서는 그래프 탐색 알고리즘을 적용할 수 있습니다. 각 단어를 그래프의 노드로 보고, 한 글자만 다른 단어들 간에 이동하는 간선으로 연결되는 형태로 생각할 수 있기 때문입니다. 따라서 BFS(너비 우선 탐색)를 사용하여 최단 경로를 찾아야 합니다.

먼저, "target" 단어가 "words" 배열에 포함되지 않으면 변환이 불가능하므로 바로 0을 반환해야 합니다. 그 다음, BFS를 이용해 "begin"에서 "target"으로 변환하는 최소 단계를 찾습니다. BFS에서는 큐를 사용하여 탐색을 진행하며, 각 단어에서 변환할 수 있는 단어들을 탐색하고, 이를 큐에 추가하는 방식으로 진행됩니다. 이 과정에서 방문한 단어를 다시 방문하지 않도록 관리하여 중복 탐색을 방지해야 합니다.

한 단어에서 다른 단어로 변환할 수 있는 조건은 두 단어가 하나의 문자만 다른 경우입니다. 따라서 두 단어 간의 차이가 1글자인지 확인하는 과정을 거치고, 이를 바탕으로 큐에 다음 단어를 추가해 나갑니다. BFS가 진행되는 동안, 가장 먼저 "target" 단어에 도달하면 그때까지의 변환 횟수를 반환하게 됩니다. 만약 큐가 비게 되면, "target"에 도달할 수 없다는 의미이므로 0을 반환해야 합니다.

문제에 제시된 첫번째 입출력 예시를 보면 begin = "hit", target = "cog", 그리고 words = ["hot", "dot", "dog", "lot", "log", "cog"]입니다. 이 경우, "hit"에서 "cog"로 변환하는 가장 짧은 경로는 hit → hot → dot → dog → cog로 4단계가 걸립니다. BFS는 큐에서 하나의 단어를 꺼내고, 그 단어에서 변환할 수 있는 단어들을 큐에 넣습니다. 이 과정을 반복하면서 "cog"에 도달하게 되면, 그때까지의 변환 횟수인 4를 반환합니다.

여기서 중요한 점은 hot → lot → log → cog 경로를 사용하지 않는 이유입니다. BFS는 최단 경로를 찾기 때문에, hot → dot → dog → cog 경로가 먼저 발견되면 더 이상 hot → lot → log → cog 경로를 탐색할 필요가 없습니다. BFS는 처음 발견한 목표에 도달하는 경로가 바로 최단 경로이기 때문입니다. 즉, BFS가 진행되면서 hot → dot → dog → cog 경로를 먼저 찾고 종료하게 되므로, 더 긴 경로인 hot → lot → log → cog는 고려되지 않게 됩니다.

두 번째 예시에서는 begin = "hit", target = "cog", 그리고 words = ["hot", "dot", "dog", "lot", "log"]입니다. 이 경우 "cog"가 "words" 배열에 포함되어 있지 않기 때문에, 변환할 수 없으므로 바로 0을 반환합니다. BFS 탐색 중에 "cog"를 찾을 수 없고, 큐가 비게 되면 변환이 불가능하다는 의미로 0을 반환합니다.

이렇게 BFS는 한 번에 가능한 모든 변환을 동시에 탐색하여, "begin"에서 "target"으로 가는 최단 경로를 찾습니다. 이 과정에서 중복 탐색을 방지하고, 첫 번째로 목표 단어에 도달하면 그 경로를 바로 반환하는 방식으로 해결할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(String begin, String target, String[] words) {
    int answer = 0;
    boolean found = false;

    // target이 words에 있는지 확인하여, 없다면 변환 불가능하므로 0 반환
    for (String word : words) {
      if (word.equals(target)) {
        found = true;
        break;
      }
    }
    if (!found) return answer;

    // BFS 큐처럼 사용할 배열 선언 (변환 과정의 각 단어를 저장)
    String[] queue = new String[words.length + 1];
    int[] steps = new int[words.length + 1]; // 각 단어에 도달하는 데 걸린 변환 횟수 저장
    int front = 0, rear = 0;
    queue[rear] = begin;
    steps[rear++] = 0;

    // 각 단어 방문 여부를 기록할 배열
    boolean[] visited = new boolean[words.length];

    // BFS 탐색
    while (front < rear) {
      String currentWord = queue[front];
      int currentStep = steps[front++];

      // 현재 단어가 target이면 변환 횟수를 반환
      if (currentWord.equals(target)) {
        answer = currentStep;
        return answer;
      }

      // words 배열을 순회하며 한 글자 차이인 단어를 큐에 추가
      for (int i = 0; i < words.length; i++) {
        if (!visited[i]) {
          int diffCount = 0;
          
          // 현재 단어와 비교하여 한 글자 차이인지 확인
          for (int j = 0; j < currentWord.length(); j++) {
            if (currentWord.charAt(j) != words[i].charAt(j)) {
              diffCount++;
            }
            if (diffCount > 1) break; // 두 글자 이상 다르면 변환 불가능
          }

          // 한 글자 차이인 경우 큐에 단어 추가하고 방문 처리
          if (diffCount == 1) {
            visited[i] = true;
            queue[rear] = words[i];
            steps[rear++] = currentStep + 1;
          }
        }
      }
    }

    // 변환할 수 없는 경우 0 반환
    return answer;
  }
}
```
