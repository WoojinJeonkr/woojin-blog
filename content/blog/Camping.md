---
external : false
title : "Camping"
tag  : [Programmers, Java]
date : 2025-10-09
---

## 1. Problem

해당 문제는 [여기](https://school.programmers.co.kr/learn/courses/30/lessons/1833?language=java)에서 확인하실 수 있습니다.

## 2. Answer

```java
import java.util.*;

class Solution {
    public int solution(int n, int[][] data) {
        // x, y 좌표 배열 생성
        int[] xs = new int[n];
        int[] ys = new int[n];
        for (int i = 0; i < n; i++) {
            xs[i] = data[i][0];
            ys[i] = data[i][1];
        }

        // 좌표 압축
        int[] compX = compress(xs);
        int[] compY = compress(ys);
        
        // 압축된 좌표로 변환
        int[][] points = new int[n][2];
        for (int i = 0; i < n; i++) {
            points[i][0] = compX[i];
            points[i][1] = compY[i];
        }
        
        // 압축된 x, y 최대값 계산
        int maxX = Arrays.stream(points).mapToInt(p -> p[0]).max().getAsInt() + 1;
        int maxY = Arrays.stream(points).mapToInt(p -> p[1]).max().getAsInt() + 1;
        
        // 2차원 누적합 배열 초기화
        int[][] psum = new int[maxX+1][maxY+1];
        for (int[] p : points) {
            psum[p[0]+1][p[1]+1] += 1;
        }
        
        // 2차원 누적합 계산
        for (int i = 1; i <= maxX; i++) {
            for (int j = 1; j <= maxY; j++) {
                psum[i][j] += psum[i-1][j] + psum[i][j-1] - psum[i-1][j-1];
            }
        }
        
        int answer = 0;

        // 모든 쐐기 쌍 검사
        for (int i = 0; i < n; i++) {
            for (int j = i+1; j < n; j++) {
                int x1 = points[i][0];
                int y1 = points[i][1];
                int x2 = points[j][0];
                int y2 = points[j][1];
                
                // 넓이가 0인 경우 제외
                if (x1 == x2 || y1 == y2) continue;
                
                // 내부 직사각형 좌표 계산
                int sx = Math.min(x1, x2) + 1;
                int ex = Math.max(x1, x2) - 1;
                int sy = Math.min(y1, y2) + 1;
                int ey = Math.max(y1, y2) - 1;
                
                // 내부에 점이 없는 경우 카운트
                if (sx > ex || sy > ey) {
                    answer++;
                } else {
                    int cnt = query(psum, sx, sy, ex, ey);
                    if (cnt == 0) answer++;
                }
            }
        }
        return answer;
    }
    
    // 좌표 압축 함수
    private int[] compress(int[] arr) {
        int n = arr.length;
        int[] sorted = arr.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> map = new HashMap<>();
        int idx = 0;
        for (int x : sorted) {
            if (!map.containsKey(x)) map.put(x, idx++);
        }
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            res[i] = map.get(arr[i]);
        }
        return res;
    }
    
    // 2차원 누적합으로 내부 점 개수 조회
    private int query(int[][] psum, int sx, int sy, int ex, int ey) {
        return psum[ex+1][ey+1] - psum[sx][ey+1] - psum[ex+1][sy] + psum[sx][sy];
    }
}
```
