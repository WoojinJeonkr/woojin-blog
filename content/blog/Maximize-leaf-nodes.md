---
external : false
title : "Maximize leaf nodes"
tag : [Programmers, Java]
date : 2026-04-18
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/468372?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```java
class Solution {
    // 최종 리프 노드의 최대 개수를 저장하는 변수
    int result = 1;

    public int solution(int dist_limit, int split_limit) {
        // 초기값 설정
        result = 1;

        // DFS 탐색 시작
        // currentNodes: 현재 depth에서 확장 가능한 노드 수
        // usedNodes: 지금까지 사용한 분배 노드 수
        // splitValue: 현재까지의 분배도 (곱)
        // leafCount: 현재까지 확정된 리프 노드 수
        explore(1, 1, 1, 0, dist_limit, split_limit);

        return result;
    }

    void explore(long currentNodes, long usedNodes, long splitValue, long leafCount, int distLimit, int splitLimit) {

        // 사용한 분배 노드 수가 제한을 초과하면 종료
        if (usedNodes > distLimit) return;

        // 현재 상태에서 더 확장하지 않고 멈추면
        // 남아있는 currentNodes는 모두 리프가 되므로 최대값 갱신
        result = (int) Math.max(result, leafCount + currentNodes);

        // 자식 노드 개수는 2 또는 3 중 선택
        for (int branch = 2; branch <= 3; branch++) {

            // 다음 depth까지의 분배도 계산
            long nextSplitValue = splitValue * branch;

            // 분배도 제한을 초과하면 해당 경우는 불가능
            if (nextSplitValue > splitLimit) continue;

            // 이번 depth에서 생성되는 전체 자식 노드 수
            long totalChildren = currentNodes * branch;

            // 앞으로 사용할 수 있는 분배 노드 수
            long remainingNodes = distLimit - usedNodes;

            // 다음 depth로 넘길 분배 노드 수 (최대 remain 만큼만 가능)
            long nextCurrentNodes = Math.min(totalChildren, remainingNodes);

            // 넘기지 못한 노드는 리프로 확정
            long nextLeafCount = leafCount + (totalChildren - nextCurrentNodes);

            // 다음 depth로 DFS 진행
            explore(
                nextCurrentNodes,
                usedNodes + nextCurrentNodes,
                nextSplitValue,
                nextLeafCount,
                distLimit,
                splitLimit
            );
        }
    }
}
```
