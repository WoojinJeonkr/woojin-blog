---
external : false
title : "Visit length"
tag : [Programmers, Java]
date : 2024-09-19
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/49994)에서 확인하실 수 있습니다.

## 2. Problem solving process

게임 캐릭터가 주어진 명령어에 따라 좌표 평면에서 이동하며, 처음 지나간 길의 길이를 계산하는 문제입니다. 캐릭터는 (0, 0)에서 시작하며, 각 명령어(U, D, R, L)에 따라 위, 아래, 오른쪽, 왼쪽으로 이동합니다. 이동할 때마다 캐릭터가 새로운 경로를 지났는지 여부를 확인해야 하고, 이미 지나간 경로는 다시 계산하지 않습니다.

좌표 평면의 경계를 넘는 경우 해당 명령은 무시되므로, 이동하기 전에 경계 체크가 필요합니다. 경로는 양방향으로 이동할 수 있기 때문에, (x1, y1)에서 (x2, y2)로 이동한 경로와 (x2, y2)에서 (x1, y1)으로 이동한 경로를 동일한 경로로 처리해야 합니다.

이때 중복된 경로는 계산에서 제외하기 위해 경로를 문자열로 표현하고, Set 자료구조를 사용하여 저장합니다. 캐릭터가 지나간 경로는 처음 걸어본 경우에만 Set에 추가되고, 최종적으로 Set에 저장된 고유 경로의 길이를 반환합니다.

## 3. Answer

```java
import java.util.HashSet;
import java.util.Set;

class Solution {
  public int solution(String dirs) {
    int x = 0, y = 0;
    Set<String> visited = new HashSet<>();
    
    // 명령어에 따른 이동 좌표 변화량
    int[] dx = {0, 0, 1, -1}; // U, D, R, L에 대한 x 변화량
    int[] dy = {1, -1, 0, 0}; // U, D, R, L에 대한 y 변화량
    String dirsMap = "UDRL"; // 명령어에 해당하는 인덱스
    
    int answer = 0;
    
    // 명령어 처리
    for (char dir : dirs.toCharArray()) {
      int index = dirsMap.indexOf(dir); // 현재 명령어의 인덱스
      int nx = x + dx[index]; // 이동할 x 좌표
      int ny = y + dy[index]; // 이동할 y 좌표
      
      // 경계를 벗어나는지 확인
      if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
        continue; // 경계를 넘으면 무시
      }
      
      // 이동 경로를 문자열로 만들어서 저장
      String path1 = x + "" + y + "" + nx + "" + ny; // (x, y) -> (nx, ny)
      String path2 = nx + "" + ny + "" + x + "" + y; // (nx, ny) -> (x, y) (역방향 경로)
      
      // 경로가 처음 지나가는 길이면 answer 증가
      if (!visited.contains(path1) && !visited.contains(path2)) {
        visited.add(path1);
        visited.add(path2);
        answer++;
      }
      
      // 현재 위치 갱신
      x = nx;
      y = ny;
    }
    
    return answer;
  }
}
```
