---
external : false
title : "Ryan the fitness trainer dilemma"
tag : [Programmers, Java]
date : 2025-10-24
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1838)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

public class Solution {
    public int solution(int n, int m, int[][] timetable) {
        // 입실 시간 기준으로 정렬
        Arrays.sort(timetable, (a, b) -> Integer.compare(a[0], b[0]));

        PriorityQueue<Integer> pq = new PriorityQueue<>(); // 퇴실 시간 저장용 우선순위 큐
        int maxPeople = 0; // 동시에 겹치는 최대 인원 수

        // 시간대별 최대 겹치는 인원 계산
        for (int i = 0; i < m; i++) {
            int start = timetable[i][0];
            int end = timetable[i][1];

            // 이미 퇴실한 손님 제거
            while (!pq.isEmpty() && pq.peek() < start) {
                pq.poll();
            }

            // 현재 손님 퇴실 시간 추가
            pq.offer(end);
            maxPeople = Math.max(maxPeople, pq.size());
        }

        // 겹치는 손님이 1명 이하라면 거리 0
        if (maxPeople <= 1) {
            return 0;
        }

        // 가능한 최대 거리(2*(n-1))부터 1까지 줄여가며 탐색
        for (int dist = 2 * (n - 1); dist >= 1; dist--) {
            // 첫 번째 손님의 위치를 (i, j)로 고정
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    List<int[]> placed = new ArrayList<>();
                    placed.add(new int[] { i, j });

                    // 나머지 손님 배치 시도
                    for (int y = i; y < n; y++) {
                        for (int x = 0; x < n; x++) {
                            // 첫 손님 이전 위치는 스킵
                            if (y == i && x <= j) continue;

                            // 현재 거리 기준으로 배치 가능한 경우
                            if (canPlace(placed, y, x, dist)) {
                                placed.add(new int[] { y, x });

                                // 필요한 인원 모두 배치 완료 시 정답 반환
                                if (placed.size() == maxPeople) {
                                    return dist;
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }

    // 이미 배치된 손님들과 거리(dist) 이상 유지 가능한지 검사
    private boolean canPlace(List<int[]> placed, int y, int x, int dist) {
        for (int[] p : placed) {
            int dy = Math.abs(p[0] - y);
            int dx = Math.abs(p[1] - x);
            int d = dy + dx; // 맨해튼 거리 계산
            if (d < dist) {
                return false; // 거리 조건 미충족 시 배치 불가
            }
        }
        return true;
    }
}
```
