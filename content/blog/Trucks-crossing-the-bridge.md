---
external : false
title : "Trucks crossing the bridge"
tag : [Programmers, Java]
date : 2024-10-01
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42583)에서 확인하실 수 있습니다.

## 2. Problem solving process

이 문제는 트럭들이 제한된 길이와 무게를 가진 다리를 건너는 과정을 시뮬레이션하여, 모든 트럭이 다리를 건너는 데 걸리는 최소 시간을 구하는 문제입니다. 다리에 동시에 올라갈 수 있는 트럭의 수는 다리의 길이로 제한되고, 트럭들의 총 무게는 다리가 견딜 수 있는 최대 무게를 초과할 수 없습니다. 이를 해결하기 위해, 트럭들이 다리를 건너는 과정에서 각 트럭이 다리 위에서 이동하는 시간을 관리하며, 매초마다 현재 다리 위에 있는 트럭들의 총 무게와 대기 중인 트럭의 무게를 비교하여 트럭을 다리 위에 올리거나 내리는 시뮬레이션을 구현해야 합니다.

먼저, 각 트럭이 다리 위에서 얼마나 이동했는지를 추적하기 위해 Truck 객체를 생성하고, 트럭의 무게와 다리 위에서 이동한 거리를 저장합니다. 매초가 지나갈 때마다 다리 위에 있는 트럭들이 한 칸씩 전진하며, 다리 끝에 도착한 트럭은 다리에서 내려오게 됩니다. 또한, 대기 중인 트럭이 다리 위로 올라갈 수 있는지 판단하기 위해 현재 다리 위에 있는 트럭들의 총 무게를 추적하며, 새로 올라갈 트럭의 무게가 다리가 견딜 수 있는 무게를 초과하지 않으면 다리 위에 트럭을 올립니다.

이 과정은 트럭들이 모두 다리를 건너고, 다리 위에 더 이상 트럭이 없을 때까지 반복됩니다. 매초마다 경과 시간을 증가시키고, 다리 위의 트럭들이 한 칸씩 전진하며, 새로운 트럭이 다리 위로 올라갈 수 있으면 올리는 방식으로 문제를 해결할 수 있습니다.

## 3. Answer

```java
import java.util.LinkedList;
import java.util.Queue;

class Solution {
  class Truck {
    int weight;
    int distance;
    
    // 트럭 생성자: 트럭의 무게를 받아 초기화하고, 이동 거리는 0으로 설정
    Truck(int weight) {
      this.weight = weight;
      this.distance = 0;
    }
    
    // 트럭을 한 칸 전진시키는 메서드
    void move() {
      this.distance++;
    }
  }
  
  public int solution(int bridge_length, int weight, int[] truck_weights) {
    int time = 0; // 경과 시간
    int totalWeightOnBridge = 0; // 다리 위의 총 무게
    Queue<Truck> bridge = new LinkedList<>(); // 다리 위의 트럭들을 관리할 큐
    int idx = 0; // 대기 중인 트럭의 인덱스
    
    while (idx < truck_weights.length || !bridge.isEmpty()) {
      time++; // 1초 경과
      
      // 다리에서 트럭을 내림 (다리 끝에 도착한 트럭 제거)
      if (!bridge.isEmpty() && bridge.peek().distance == bridge_length) {
        Truck truck = bridge.poll();
        totalWeightOnBridge -= truck.weight;
      }
      
      // 새로운 트럭을 다리에 올림 (무게가 허용 범위 내일 때)
      if (idx < truck_weights.length && totalWeightOnBridge + truck_weights[idx] <= weight) {
        Truck truck = new Truck(truck_weights[idx]);
        bridge.add(truck);
        totalWeightOnBridge += truck_weights[idx];
        idx++;
      }
      
      // 다리 위의 모든 트럭을 한 칸씩 이동시킴
      for (Truck truck : bridge) {
        truck.move();
      }
    }
    
    return time; // 모든 트럭이 다리를 건너는 데 걸린 시간 반환
  }
}
```
