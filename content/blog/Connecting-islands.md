---
external : false
title : "Connecting islands"
tag : [Programmer, Java]
date : 2024-11-25
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/42861)에서 확인하실 수 있습니다.

## 2. Problem solving process

문제를 해결하기 위해 최소 비용으로 모든 섬을 연결해야 하므로, **최소 스패닝 트리**를 구하는 것이 핵심입니다. 이를 위해 탐욕법을 기반으로 비용이 적은 다리부터 연결하는 Kruskal 알고리즘을 활용하며, 이 과정에서 Union-Find 자료구조를 사용해 효율적으로 집합을 관리하고 사이클 생성을 방지합니다.

### Union-Find 자료구조와 경로 압축

Union-Find는 각 섬이 어느 집합에 속해 있는지를 관리하며, 두 섬이 같은 집합에 속하는지 확인하거나 두 집합을 병합하는 데 사용됩니다. 이 자료구조는 크게 두 가지 연산으로 구성됩니다.

1. Find: 특정 섬이 속한 집합의 대표를 찾는 연산입니다.
2. Union: 두 섬이 속한 집합을 하나로 병합하는 연산입니다.

특히, **경로 압축**이라는 최적화 기법을 사용해 Find 연산의 성능을 크게 향상시킬 수 있습니다. 경로 압축은 특정 섬의 대표를 찾는 과정에서 만나는 모든 노드를 직접 대표 노드에 연결하여 트리의 깊이를 최소화합니다. 이를 통해 이후 Find와 Union 연산이 더욱 빠르게 수행되며, 전체 알고리즘의 효율성이 증가합니다.

### 문제 해결 과정

- 다리 비용 정렬: 먼저, 모든 다리를 비용 기준으로 오름차순 정렬합니다. 이렇게 하면 비용이 가장 적은 다리부터 연결을 시도할 수 있습니다.
- Union-Find 초기화: 각 섬은 초기에는 독립된 집합으로 시작합니다. 이를 위해 각 섬을 자기 자신을 부모로 가지는 형태로 설정합니다
- 다리 연결: 정렬된 다리를 순차적으로 처리하며 두 섬이 같은 집합에 속해 있는지 확인합니다. 두 섬이 서로 다른 집합에 속한다면, 다리를 연결하고 Union 연산을 통해 두 섬을 같은 집합으로 병합합니다. 이때 연결된 다리의 비용을 누적합니다.

  - Find 연산에서는 경로 압축을 적용하여 트리의 깊이를 줄이고 이후 연산의 효율성을 높입니다.
  - 다리 연결 시, 연결된 간선의 수가 n-1개가 되면 모든 섬이 연결된 상태이므로 반복을 종료합니다.

- 최소 비용 반환: 최종적으로 누적된 비용이 모든 섬을 연결하는 데 필요한 최소 비용이 됩니다.

이 접근법은 비용이 적은 다리를 우선적으로 연결하며, Union-Find와 경로 압축을 활용하여 효율적으로 사이클을 방지하고 집합 관리를 수행합니다. 이를 통해 모든 섬을 연결하는 최적의 비용을 계산할 수 있습니다.

## 3. Answer

```java
class Solution {
  public int solution(int n, int[][] costs) {
    // 비용 기준으로 간선 정렬
    sortCosts(costs);

    // Union-Find용 부모 배열 초기화
    int[] parent = new int[n];
    for (int i = 0; i < n; i++) {
      parent[i] = i; // 처음에는 각 섬이 자신의 부모
    }

    int answer = 0; // 최소 비용 합산
    int edgesUsed = 0; // 사용한 간선 수

    // 비용이 낮은 간선부터 하나씩 처리
    for (int[] cost : costs) {
      int islandA = cost[0]; // 연결하려는 첫 번째 섬
      int islandB = cost[1]; // 연결하려는 두 번째 섬
      int bridgeCost = cost[2]; // 두 섬을 연결하는 데 드는 비용

      // 두 섬이 이미 같은 집합에 속하지 않으면 연결
      if (find(parent, islandA) != find(parent, islandB)) {
        union(parent, islandA, islandB); // 두 섬을 같은 집합으로 병합
        answer += bridgeCost; // 총 비용에 현재 간선 비용 추가
        edgesUsed++; // 간선 사용 수 증가

        // n-1개의 간선을 사용하면 모든 섬 연결 완료
        if (edgesUsed == n - 1) {
          break;
        }
      }
    }

    return answer; // 최소 비용 반환
  }

  // Union-Find: 부모 찾기 (경로 압축 적용)
  private int find(int[] parent, int x) {
    if (parent[x] != x) {
      parent[x] = find(parent, parent[x]); // 경로 압축
    }
    return parent[x];
  }

  // Union-Find: 두 집합 병합
  private void union(int[] parent, int x, int y) {
    int rootX = find(parent, x); // x의 최상위 부모
    int rootY = find(parent, y); // y의 최상위 부모
    if (rootX != rootY) {
      parent[rootY] = rootX; // y 집합을 x 집합에 병합
    }
  }

  // 간선 배열을 비용 기준으로 정렬 (버블 정렬 사용)
  private void sortCosts(int[][] costs) {
    for (int i = 0; i < costs.length - 1; i++) {
      for (int j = 0; j < costs.length - i - 1; j++) {
        if (costs[j][2] > costs[j + 1][2]) {
          int[] temp = costs[j];
          costs[j] = costs[j + 1];
          costs[j + 1] = temp;
        }
      }
    }
  }
}
```
